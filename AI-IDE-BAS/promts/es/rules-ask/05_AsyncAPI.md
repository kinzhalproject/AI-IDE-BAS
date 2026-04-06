### 4.7. Especificación para Kafka Message Broker en formato AsyncAPI

**Instrucciones para describir el broker de mensajes Kafka**

**Idioma de la actuación:** Español
**Formato del resultado:** Especificación AsyncAPI en formato YAML
**Ubicación de guardado:** Carpeta del proyecto con nombre `{feature-name}_asyncapi.yaml`
**Estándar:** AsyncAPI 2.6.0 o superior

#### 4.7.1. Contenido
1. [Formato de archivo de salida](#formato-de-archivo-de-salida)
2. [Plantilla de descripción de arquitectura Kafka](#plantilla-de-descripción-de-arquitectura-kafka)
3. [Métricas de calidad](#métricas-de-calidad)
4. [Reglas de validación](#reglas-de-validación)
5. [Metodología de diseño](#metodología-de-diseño)
6. [Ejemplos de descripción Kafka](#ejemplos-de-descripción-kafka)
7. [Criterios de calidad](#criterios-de-calidad)
8. [Lista de verificación para agente IA](#lista-de-verificación-para-agente-ia)

---

#### 4.7.2. Formato de archivo de salida

##### 4.7.2.1. Estructura obligatoria de archivo YAML AsyncAPI:

yaml
# {feature-name}_asyncapi.yaml
asyncapi: '2.6.0'
info:
  title: '{Feature Name} Kafka Events API'
  version: '1.0.0'
  description: |
    Descripción de eventos asincrónicos para {feature-name} mediante Apache Kafka
    
    ## Propósito
    {Descripción del propósito del sistema de eventos}
    
    ## Rol arquitectónico
    {Rol en la arquitectura general del sistema}
    
  contact:
    name: 'Equipo de Desarrollo'
    email: 'dev-team@company.com'
  license:
    name: 'MIT'

servers:
  kafka-cluster:
    url: '{kafka-broker-urls}'
    protocol: kafka
    description: 'Clúster Kafka de producción'
    bindings:
      kafka:
        schemaRegistryUrl: 'http://schema-registry:8081'
        schemaRegistryVendor: 'confluent'
    security:
      - saslScram: []

defaultContentType: application/json

channels:
  'domain.entity.events':
    description: 'Eventos del ciclo de vida de {entity}'
    bindings:
      kafka:
        topic: 'domain.entity.events'
        partitions: 12
        replicas: 3
        configs:
          retention.ms: 2592000000  # 30 días
          cleanup.policy: 'delete'
          compression.type: 'snappy'
    publish:
      summary: 'Publicación de eventos de {entity}'
      operationId: 'publishEntityEvent'
      bindings:
        kafka:
          groupId: 'entity-producers'
          clientId: 'entity-service'
          acks: 'all'
          key:
            type: string
            description: 'ID de entidad para particionamiento'
      message:
        $ref: '#/components/messages/EntityEvent'
    subscribe:
      summary: 'Suscripción a eventos de {entity}'
      operationId: 'subscribeEntityEvent'
      bindings:
        kafka:
          groupId: 'entity-consumers'
          clientId: 'consumer-service'
      message:
        $ref: '#/components/messages/EntityEvent'

components:
  messages:
    EntityEvent:
      name: 'EntityEvent'
      title: 'Evento de Entidad'
      summary: 'Evento de cambio de estado de entidad'
      contentType: application/json
      headers:
        type: object
        properties:
          eventType:
            type: string
            enum: ['CREATED', 'UPDATED', 'DELETED']
          source:
            type: string
            description: 'Fuente del evento'
          timestamp:
            type: string
            format: date-time
      payload:
        $ref: '#/components/schemas/EntityEventPayload'
      examples:
        - name: 'entityCreated'
          summary: 'Creación de entidad'
          headers:
            eventType: 'CREATED'
            source: 'entity-service'
            timestamp: '2024-01-15T10:30:00Z'
          payload:
            entityId: 'uuid-here'
            status: 'ACTIVE'
            createdAt: '2024-01-15T10:30:00Z'

  schemas:
    EntityEventPayload:
      type: object
      required:
        - entityId
        - status
        - createdAt
      properties:
        entityId:
          type: string
          format: uuid
          description: 'Identificador único de entidad'
        status:
          type: string
          enum: ['ACTIVE', 'INACTIVE', 'PENDING']
          description: 'Estado de la entidad'
        createdAt:
          type: string
          format: date-time
          description: 'Tiempo de creación del evento'
        metadata:
          type: object
          description: 'Datos adicionales'
          additionalProperties: true
      example:
        entityId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
        status: 'ACTIVE'
        createdAt: '2024-01-15T10:30:00Z'
        metadata:
          source: 'web-app'
          userId: 'user-123'

  securitySchemes:
    saslScram:
      type: scramSha512
      description: 'Autenticación SASL/SCRAM'

  parameters:
    EntityId:
      description: 'Identificador de entidad'
      schema:
        type: string
        format: uuid

# Configuración adicional de Kafka (en sección x-kafka-config)
x-kafka-config:
  cluster:
    brokers: 3
    replication:
      default: 2
      critical_topics: 3
    resources:
      broker_memory: '4Gi'
      broker_cpu: '2'
      broker_storage: '100Gi'
  
  producers:
    default_config:
      acks: 'all'
      retries: 10
      batch.size: 100000
      linger.ms: 5
      enable.idempotence: true
      compression.type: 'snappy'
    
  consumers:
    default_config:
      auto.commit.enable: false
      max.poll.records: 500
      session.timeout.ms: 30000
      fetch.min.bytes: 1
      
  monitoring:
    metrics:
      - 'kafka.server:type=BrokerTopicMetrics,name=MessagesInPerSec'
      - 'kafka.consumer:type=consumer-fetch-manager-metrics'
      - 'kafka.producer:type=producer-metrics'
    alerts:
      - name: 'high_consumer_lag'
        condition: 'consumer_lag > 10000'
        severity: 'critical'
      - name: 'broker_down'
        condition: 'broker_availability < 100%'
        severity: 'critical'
        
  security:
    authentication:
      protocol: 'SASL_SSL'
      mechanism: 'SCRAM-SHA-512'
    acls:
      - principal: 'User:entity-service'
        operations: ['Write', 'Describe']
        resources: ['Topic:domain.entity.events']
      - principal: 'User:consumer-service'
        operations: ['Read', 'Describe']
        resources: ['Topic:domain.entity.events', 'Group:entity-consumers']


##### 4.7.2.2. Reglas de nomenclatura de archivos:
- `{feature-name}_asyncapi.yaml` - para características principales
- `{domain}_events_asyncapi.yaml` - para soluciones de dominio
- `{system-name}_kafka_asyncapi.yaml` - para integraciones de sistemas

**Ejemplos:**
- `banking_transfer_asyncapi.yaml`
- `ecommerce_orders_asyncapi.yaml`
- `notification_events_asyncapi.yaml`

##### 4.7.2.3. Secciones obligatorias de AsyncAPI:
1. **asyncapi**: versión de especificación (2.6.0+)
2. **info**: metadatos de API
3. **servers**: configuración de clúster Kafka
4. **channels**: tópicos y su configuración
5. **components**: esquemas de mensajes, esquemas de seguridad
6. **x-kafka-config**: configuración extendida de Kafka (opcional)

---

#### 4.7.3. Plantilla de descripción de arquitectura Kafka

##### 4.7.3.1. Estructura obligatoria (9 bloques principales):

| № | Bloque | Descripción | Obligatoriedad |
|---|------|----------|----------------|
| 1 | **Descripción general** | Propósito de Kafka en el sistema, rol en arquitectura | ✅ Obligatorio |
| 2 | **Tópicos y esquemas** | Estructura de tópicos, esquemas de mensajes, particionamiento | ✅ Obligatorio |
| 3 | **Productores** | Servicios emisores, estrategias de envío | ✅ Obligatorio |
| 4 | **Consumidores** | Servicios receptores, grupos de consumidores | ✅ Obligatorio |
| 5 | **Configuración de clúster** | Configuraciones de brokers, replicación, tolerancia a fallos | ✅ Obligatorio |
| 6 | **Esquemas de datos** | Esquemas Avro/JSON, Schema Registry, versionado | ✅ Obligatorio |
| 7 | **Seguridad** | Autenticación, autorización, encriptación | 🔶 Recomendado |
| 8 | **Monitoreo y alertas** | Métricas, logging, SLA | 🔶 Recomendado |
| 9 | **Rendimiento** | Throughput, latencia, optimizaciones | 🔶 Recomendado |

---

#### 4.7.4. Métricas de calidad

##### 4.7.4.1. Indicadores objetivo:
- **Completitud estructural**: 6/6 bloques obligatorios = 100%
- **Cobertura de tópicos**: Descripción de todos los tópicos principales del sistema
- **Esquemas de datos**: 100% tópicos tienen descripción de esquema
- **Grupos de consumidores**: Separación clara de responsabilidades
- **Tolerancia a fallos**: Mínimo 2x replicación para tópicos críticos

##### 4.7.4.2. Sistema de evaluación:
- **Listo para producción**: 95-100% cumplimiento + seguridad + monitoreo
- **Calidad excelente**: 85-94% cumplimiento de métricas
- **Buena calidad**: 70-84% cumplimiento de métricas  
- **Requiere mejora**: <70% cumplimiento de métricas

---

#### 4.7.5. Reglas de validación

##### 4.7.5.1. Comprobaciones automáticas:

###### 4.7.5.1.1. Validación estructural

✓ Los 6 bloques obligatorios presentes
✓ Cada tópico tiene descripción de esquema
✓ Productores y consumidores claramente identificados
✓ Estrategia de particionamiento especificada


###### 4.7.5.1.2. Validación arquitectónica

✓ Tópicos conectados lógicamente con dominios del sistema
✓ Esquemas de datos corresponden a especificaciones API
✓ Grupos de consumidores no se superponen en responsabilidad
✓ Replicación configurada para tópicos críticos


###### 4.7.5.1.3. Validación de producción

✓ Políticas de retención especificadas para todos los tópicos
✓ Estrategia de manejo de errores descrita
✓ Monitoreo y alertas configurados
✓ Procedimientos de recuperación ante desastres documentados


---

#### 4.7.6. Metodología de diseño

##### 4.7.6.1. Paso 1: Análisis de eventos de dominio
**Fuentes para análisis:**
- User Stories y Use Cases
- Diagramas de secuencia
- Diagrama de arquitectura del sistema
- Especificaciones API (para operaciones síncronas)

##### 4.7.6.2. Paso 2: Identificación de eventos
**Tipos de eventos:**
- **Eventos de Dominio**: cambios de estado de entidades de negocio
- **Eventos de Integración**: comunicación entre servicios
- **Eventos de Sistema**: eventos técnicos (logs, métricas)
- **Eventos de Comando**: comandos asincrónicos

##### 4.7.6.3. Paso 3: Diseño de tópicos
**Principios de nomenclatura:**

{domain}.{entity}.{event-type}
Ejemplos:
- banking.transfer.created
- banking.transfer.completed
- ecommerce.order.placed
- notification.email.sent


##### 4.7.6.4. Paso 4: Definición de esquemas
**Formatos de esquemas:**
- **Avro**: tipado estricto, evolución de esquemas
- **JSON Schema**: flexibilidad, simplicidad
- **Protobuf**: rendimiento, compatibilidad

##### 4.7.6.5. Paso 5: Planificación de particiones
**Estrategias de particionamiento:**
- Por ID de usuario (basado en usuario)
- Por ID de entidad (basado en entidad)
- Por marcas de tiempo (basado en tiempo)
- Round-robin (distribución uniforme)

##### 4.7.6.6. Paso 6: Configuración de consumidores
**Patrones de consumo:**
- **Consumidor Único**: procesamiento en orden
- **Grupo de Consumidores**: procesamiento paralelo
- **Múltiples Grupos**: lógica de negocio diferente

---

#### 4.7.7. Ejemplos de descripción Kafka

##### 4.7.7.1. Ejemplo 1: Sistema de transferencias bancarias

###### 4.7.7.1.1. Descripción general
**Propósito:** Procesamiento asincrónico de transferencias bancarias con garantías de entrega y auditoría de operaciones.
**Rol en arquitectura:** Bus de eventos central entre microservicios Banking, Notification, Audit, Fraud Detection.

###### 4.7.7.1.2. Tópicos y esquemas

**2.1. Tópico: `banking.transfer.events`**
yaml
Propósito: Eventos del ciclo de vida de transferencias
Particiones: 12 (por account_id % 12)
Factor de Replicación: 3
Retención: 30 días
Política de Limpieza: delete


**Esquema de mensaje (Avro):**
json
{
  "type": "record",
  "name": "TransferEvent",
  "namespace": "com.bank.events",
  "fields": [
    {"name": "transferId", "type": "string"},
    {"name": "fromAccountId", "type": "string"},
    {"name": "toAccountId", "type": "string"},
    {"name": "amount", "type": {"type": "fixed", "name": "Decimal", "size": 16}},
    {"name": "currency", "type": "string"},
    {"name": "status", "type": {"type": "enum", "symbols": ["PENDING", "PROCESSING", "COMPLETED", "FAILED"]}},
    {"name": "timestamp", "type": {"type": "long", "logicalType": "timestamp-millis"}},
    {"name": "userId", "type": "string"},
    {"name": "comment", "type": ["null", "string"], "default": null}
  ]
}


**2.2. Tópico: `banking.notifications.requests`**
yaml
Propósito: Solicitudes de envío de notificaciones
Particiones: 6 (por user_id % 6)
Factor de Replicación: 2
Retención: 7 días


**2.3. Tópico: `banking.audit.log`**
yaml
Propósito: Auditoría de todas las operaciones para cumplimiento
Particiones: 1 (orden estricto)
Factor de Replicación: 3
Retención: 7 años (requisitos de cumplimiento)
Política de Limpieza: compact


###### 4.7.7.1.3. Productores

**3.1. Servicio de Transferencia (Productor principal)**
yaml
Servicio: transfer-service
Tópicos: banking.transfer.events
Estrategia: 
  - Idempotencia: habilitada
  - Acks: all (garantía de escritura en todas las réplicas)
  - Reintentos: 10
  - Tamaño de Lote: 100KB
  - Tiempo de Espera: 5ms
Manejo de errores:
  - Reintento con exponential backoff
  - Cola de Mensajes Muertos: banking.transfer.dlq


**Ejemplo de código:**
java
@Service
public class TransferEventProducer {
    
    @Value("${kafka.topic.transfer-events}")
    private String transferEventsTopic;
    
    public void publishTransferEvent(TransferEvent event) {
        kafkaTemplate.send(transferEventsTopic, event.getFromAccountId(), event)
            .addCallback(
                result -> log.info("Event sent: {}", event.getTransferId()),
                failure -> log.error("Failed to send event", failure)
            );
    }
}


**3.2. Servicio de Notificaciones**
yaml
Servicio: notification-service  
Tópicos: banking.notifications.requests
Estrategia: Fire-and-forget (acks=1)


###### 4.7.7.1.4. Consumidores

**4.1. Servicio de Detección de Fraude**
yaml
Grupo: fraud-detection-group
Tópicos: banking.transfer.events
Estrategia:
  - Auto Commit: false (confirmación manual)
  - Registros Máximos por Poll: 50
  - Tiempo de Espera de Sesión: 30s
  - Asignación de Particiones: cooperative-sticky
Lógica:
  - Análisis de fraude
  - Publicación de resultado en fraud.detection.results


**4.2. Servicio de Auditoría**
yaml
Grupo: audit-group
Tópicos: 
  - banking.transfer.events
  - banking.notifications.requests
Estrategia:
  - Offset más temprano (procesamiento de todos los eventos)
  - Procesamiento por lotes (100 registros a la vez)
  - Procesamiento idempotente


**4.3. Consumidor de Notificaciones**
yaml
Grupo: notification-consumers
Tópicos: banking.notifications.requests
Paralelismo: 3 instancias
Política de Reintento:
  - Reintentos máximos: 5
  - Backoff: exponencial (1s, 2s, 4s, 8s, 16s)
  - DLQ: banking.notifications.dlq


###### 4.7.7.1.5. Configuración de clúster

**5.1. Brokers**
yaml
Número de brokers: 3
Ubicación: 3 AZ diferentes
Configuración:
  - log.retention.hours: 168 (7 días por defecto)
  - log.segment.bytes: 1GB
  - num.network.threads: 8
  - num.io.threads: 8
  - socket.send.buffer.bytes: 102400
  - socket.receive.buffer.bytes: 102400


**5.2. Zookeeper**
yaml
Nodos: 3 (quórum)
Configuración:
  - tickTime: 2000
  - initLimit: 10  
  - syncLimit: 5
  - maxClientCnxns: 60


**5.3. Replicación**
yaml
Tópicos críticos (transfers, audit): RF=3, min.insync.replicas=2
Tópicos regulares (notifications): RF=2, min.insync.replicas=1
Tópicos de prueba: RF=1


###### 4.7.7.1.6. Esquemas de datos

**6.1. Schema Registry**
yaml
URL: http://schema-registry:8081
Compatibilidad: BACKWARD
Versionado: automático
Subjects:
  - banking.transfer.events-value (v1, v2)
  - banking.notifications.requests-value (v1)
  - banking.audit.log-value (v1)


**6.2. Evolución de esquema**
json
// v1 -> v2: agregando campo metadata
{
  "type": "record",
  "name": "TransferEvent",
  "fields": [
    // ... campos existentes ...
    {"name": "metadata", "type": ["null", "string"], "default": null}
  ]
}


###### 4.7.7.1.7. Seguridad

**7.1. Autenticación**
yaml
Protocolo: SASL_SSL
Mecanismo: SCRAM-SHA-512
Usuarios:
  - transfer-service: acceso RW a banking.transfer.*
  - notification-service: acceso RW a banking.notifications.*
  - audit-service: acceso R a todos los tópicos
  - fraud-detection: acceso R a banking.transfer.events


**7.2. Autorización (ACL)**
bash
# Servicio de Transferencia
kafka-acls --add --allow-principal User:transfer-service \
  --operation Write --topic banking.transfer.events

# Detección de Fraude
kafka-acls --add --allow-principal User:fraud-detection \
  --operation Read --topic banking.transfer.events \
  --group fraud-detection-group


**7.3. Encriptación**
yaml
En tránsito: TLS 1.3
En reposo: encriptación de disco LUKS
Schema Registry: mTLS + autenticación básica


###### 4.7.7.1.8. Monitoreo y alertas

**8.1. Métricas clave**
yaml
Métricas de Broker:
  - kafka.server:type=BrokerTopicMetrics,name=MessagesInPerSec
  - kafka.server:type=BrokerTopicMetrics,name=BytesInPerSec
  - kafka.server:type=ReplicaManager,name=LeaderCount

Lag de Consumidor:
  - kafka.consumer:type=consumer-fetch-manager-metrics,client-id=*

Métricas de Productor:
  - kafka.producer:type=producer-metrics,client-id=*


**8.2. Alertas**
yaml
Críticas:
  - Lag de Consumidor > 10000 mensajes
  - Broker no disponible > 1 minuto
  - Uso de disco > 85%

Advertencias:
  - Errores de Productor > 1%
  - Lag de Replicación > 5 segundos
  - Rebalanceo de grupo de consumidores


**8.3. Dashboards**
yaml
Paneles de Grafana:
  - Vista General del Clúster Kafka
  - Rendimiento de Tópicos
  - Estado de Grupos de Consumidores
  - Rendimiento de Productores
  - Tasas de Error


###### 4.7.7.1.9. Rendimiento

**9.1. Características de throughput**
yaml
Indicadores objetivo:
  - Transferencias: 10,000 msg/seg
  - Notificaciones: 5,000 msg/seg
  - Auditoría: 15,000 msg/seg

Latencia (p99):
  - Productor: < 50ms
  - Consumidor: < 100ms
  - Extremo a extremo: < 200ms


**9.2. Optimizaciones**
yaml
Productor:
  - Tamaño de lote: 100KB
  - Tiempo de espera: 5ms
  - Compresión: snappy

Consumidor:
  - Tamaño de fetch: 1MB
  - Registros máximos por poll: 500
  - Procesamiento paralelo

Broker:
  - Segmento de log: 1GB
  - Flush de log: asíncrono
  - Cache de página: 70% RAM


---

##### 4.7.7.2. Ejemplo 2: Plataforma E-commerce

###### 4.7.7.2.1. Descripción general
**Propósito:** Arquitectura dirigida por eventos para e-commerce con procesamiento de pedidos, inventario y notificaciones.
**Rol en arquitectura:** Bus de eventos principal entre Order Service, Inventory Service, Payment Service, Notification Service.

###### 4.7.7.2.2. Tópicos y esquemas

**2.1. Tópico: `ecommerce.orders.events`**
yaml
Propósito: Eventos del ciclo de vida de pedidos
Particiones: 8 (por hash de order_id)
Factor de Replicación: 2
Retención: 14 días


**Esquema (JSON Schema):**
json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "orderId": {"type": "string", "format": "uuid"},
    "customerId": {"type": "string", "format": "uuid"},
    "status": {"enum": ["PLACED", "CONFIRMED", "SHIPPED", "DELIVERED", "CANCELLED"]},
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "productId": {"type": "string"},
          "quantity": {"type": "integer", "minimum": 1},
          "price": {"type": "number", "minimum": 0}
        }
      }
    },
    "totalAmount": {"type": "number", "minimum": 0},
    "timestamp": {"type": "string", "format": "date-time"}
  },
  "required": ["orderId", "customerId", "status", "items", "totalAmount", "timestamp"]
}


**2.2. Tópico: `ecommerce.inventory.updates`**
yaml
Propósito: Actualizaciones de stock de productos
Particiones: 4 (por hash de product_id)
Factor de Replicación: 2
Retención: 7 días
Política de Limpieza: compact (estado más reciente)


**2.3. Tópico: `ecommerce.payments.events`**
yaml
Propósito: Eventos de pagos
Particiones: 6
Factor de Replicación: 3 (datos críticos)
Retención: 365 días (cumplimiento)


###### 4.7.7.2.3. Productores

**3.1. Order Service**
yaml
Tópicos: ecommerce.orders.events
Configuración:
  - acks: all
  - enable.idempotence: true
  - retries: Integer.MAX_VALUE
  - max.in.flight.requests.per.connection: 5

Patrón Outbox:
  - Escritura transaccional en BD + Kafka
  - Garantías de consistencia eventual


**3.2. Inventory Service**
yaml
Tópicos: ecommerce.inventory.updates
Estrategia: Tópico compactado para estado actual


###### 4.7.7.2.4. Consumidores

**4.1. Payment Service**
yaml
Grupo: payment-processors
Tópicos: ecommerce.orders.events
Filtro: status = "PLACED"
Lógica: Iniciación de pago
Resultado: Publicación en ecommerce.payments.events


**4.2. Inventory Service**  
yaml
Grupo: inventory-updaters
Tópicos: ecommerce.orders.events
Lógica: Reserva/liberación de productos
Idempotencia: Por order_id + item_id


**4.3. Notification Service**
yaml
Grupo: notification-senders
Tópicos: 
  - ecommerce.orders.events
  - ecommerce.payments.events
Paralelismo: 5 consumidores
Reintento: 3 intentos con backoff


###### 4.7.7.2.5. Configuración de clúster

**5.1. Despliegue**
yaml
Entorno: Kubernetes
Brokers: 3 pods
Recursos:
  - CPU: 2 núcleos
  - Memoria: 4GB
  - Almacenamiento: 100GB SSD por broker


**5.2. Configuraciones de rendimiento**
yaml
log.retention.bytes: 10GB por partición
log.segment.bytes: 512MB
compression.type: snappy
num.replica.fetchers: 4


###### 4.7.7.2.6. Monitoreo

**6.1. Métricas de negocio**
yaml
- Pedidos procesados por minuto
- Tasa de éxito de pagos
- Retraso de sincronización de inventario
- Tasa de entrega de notificaciones a clientes


**6.2. Métricas técnicas**
yaml
- Lag de consumidor por tópico
- Throughput de productor
- Tasas de error por servicio
- Distribución de particiones


---

#### 4.7.8. Criterios de calidad para IA

##### 4.7.8.1. Madurez arquitectónica
- **Obligatorio**: Todos los 6 bloques principales completados
- **Producción**: Bloques de seguridad, monitoreo, rendimiento agregados
- **Empresa**: Recuperación ante desastres, cumplimiento, gobierno agregados

##### 4.7.8.2. Detallado técnico
- **Tópicos**: Esquema de particionamiento claro y políticas de retención
- **Esquemas**: Esquemas Avro/JSON válidos con ejemplos
- **Configuración**: Configuraciones realistas para carga objetivo
- **Seguridad**: ACL, autenticación, encriptación

##### 4.7.8.3. Preparación operacional
- **Monitoreo**: Métricas clave y alertas definidas
- **Manejo de errores**: DLQ, políticas de reintento, circuit breakers
- **Rendimiento**: SLA, requisitos de throughput y latencia
- **Recuperación ante Desastres**: Procedimientos de backup, restore, failover

##### 4.7.8.4. Integración con sistema
- **Eventos de Dominio**: Corresponden con lógica de negocio de Use Cases
- **Integración API**: Complementan arquitectura REST API
- **Flujo de Datos**: Consistentes con diagramas de secuencia
- **Servicios**: Corresponden con arquitectura de componentes

---

#### 4.7.9. Lista de verificación para agente IA

##### 4.7.9.1. Verificación obligatoria:
- [ ] ✅ Archivo YAML AsyncAPI creado con nombre correcto
- [ ] ✅ Versión AsyncAPI especificada (2.6.0+)
- [ ] ✅ Sección info completamente completada
- [ ] ✅ Servers contiene configuración Kafka
- [ ] ✅ Channels describe todos los tópicos
- [ ] ✅ Cada channel tiene operaciones publish/subscribe
- [ ] ✅ Components contiene esquemas de mensajes
- [ ] ✅ Estrategia de particionamiento definida en bindings
- [ ] ✅ Replicación configurada en kafka bindings
- [ ] ✅ Políticas de retención descritas en configs
- [ ] ✅ Esquemas de datos válidos (JSON Schema)
- [ ] ✅ Grupos de consumidores especificados en bindings
- [ ] ✅ Sintaxis YAML AsyncAPI correcta

##### 4.7.9.2. Verificación de calidad:
- [ ] 🎯 Tópicos conectados lógicamente con dominios
- [ ] 🎯 Esquemas soportan evolución (compatibilidad hacia atrás)
- [ ] 🎯 Manejo de errores mediante DLQ descrito
- [ ] 🎯 Procesamiento idempotente asegurado
- [ ] 🎯 Acuses de recibo de productor configurados correctamente
- [ ] 🎯 Gestión de offset de consumidor definida

##### 4.7.9.3. Verificación listo para producción:
- [ ] 🚀 Seguridad: SASL/SSL, ACL configurados
- [ ] 🚀 Monitoreo: métricas y alertas definidas
- [ ] 🚀 Rendimiento: SLA y optimizaciones descritas
- [ ] 🚀 Procedimientos de backup y recuperación ante desastres
- [ ] 🚀 Schema Registry configurado
- [ ] 🚀 Monitoreo de lag de consumidor
- [ ] 🚀 Procesamiento de Dead Letter Queue
- [ ] 🚀 Planificación de capacidad (particiones, brokers)

##### 4.7.9.4. Verificación de integración:
- [ ] 🔗 Eventos corresponden con Use Cases
- [ ] 🔗 Esquemas compatibles con especificaciones API
- [ ] 🔗 Servicios productores existen en diagrama de arquitectura
- [ ] 🔗 Grupos de consumidores no conflictivos en responsabilidad
- [ ] 🔗 Características de tiempo realistas
- [ ] 🔗 Volúmenes de datos corresponden con escala del sistema

**Objetivo**: Crear archivos YAML con descripción de arquitectura Kafka, listos para despliegue en producción con cobertura completa de requisitos funcionales y no funcionales.

##### 4.7.9.5. Verificación final YAML AsyncAPI:
- [ ] 📄 Archivo guardado con extensión .yaml
- [ ] 📄 Nombre de archivo sigue convención de nomenclatura
- [ ] 📄 Estructura AsyncAPI corresponde a especificación
- [ ] 📄 Todos los valores de cadena entre comillas
- [ ] 📄 Indentación realizada con espacios (no tabs)
- [ ] 📄 JSON Schema correctamente definidos en components
- [ ] 📄 Kafka bindings configurados para channels
- [ ] 📄 Esquemas de seguridad definidos cuando sea necesario
- [ ] 📄 Ejemplos incluidos para cada tipo de mensaje

---

#### 4.7.10. Recomendaciones adicionales

##### 4.7.10.1. Estilo de documentación:
- **Estructura**: Use YAML para configuraciones
- **Especificidad**: Especifique números exactos de particiones, retención, throughput
- **Ejemplos**: Incluya ejemplos reales de esquemas Avro/JSON Schema
- **Visualización**: Diagramas ASCII para topología

##### 4.7.10.2. Aspectos de producción:
- **Nomenclatura**: Siga convenciones {domain}.{entity}.{event}
- **Particionamiento**: Justifique elección de clave de particionamiento
- **Retención**: Considere cumplimiento y costos de almacenamiento
- **Versionado**: Planifique evolución de esquemas por adelantado

##### 4.7.10.3. Integración con DevOps:
- **Infraestructura como Código**: Configuraciones Terraform/Helm
- **CI/CD**: Validación de esquemas en pipeline
- **Monitoreo**: Métricas Prometheus/Grafana
- **Alertas**: Integraciones PagerDuty/Slack

##### 4.7.10.4. Recuperación ante Desastres:
- **Backup**: MirrorMaker 2.0 para replicación
- **Recuperación**: Requisitos RTO/RPO
- **Pruebas**: Prácticas de ingeniería del caos
- **Documentación**: Runbooks para equipo de operaciones


