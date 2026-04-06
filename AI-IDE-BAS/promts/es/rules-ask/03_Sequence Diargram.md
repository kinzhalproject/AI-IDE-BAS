### 4.5. Diagrama de Secuencia
**Instrucciones para crear diagramas de secuencia para agente de IA**

#### 4.5.1. Contenido
1. [Bases y requisitos](#bases-y-requisitos)
2. [Estructura del diagrama](#estructura-del-diagrama)
3. [Métricas de calidad](#métricas-de-calidad)
4. [Reglas de validación](#reglas-de-validación)
5. [Plantilla básica](#plantilla-básica)
6. [Tipos de interacciones](#tipos-de-interacciones)
7. [Integración con artefactos](#integración-con-artefactos)
8. [Lista de verificación de calidad](#lista-de-verificación-de-calidad)

---

#### 4.5.2. Bases y requisitos

##### 4.5.2.1. Artefactos de entrada obligatorios:
- **User Story** - para comprender el escenario de negocio
- **Use Case** - para flujo detallado de interacciones
- **Diagrama arquitectónico** - para participantes y conexiones

##### 4.5.2.2. Artefactos adicionales:
- Documentación API, especificación técnica, diagrama de despliegue

---

#### 4.5.3. Estructura del diagrama

##### 4.5.3.1. Encabezado y configuraciones
plantuml
@startuml
autonumber "<b><color:DarkSlateBlue>.</color></b> " 


##### 4.5.3.2. Participantes (tipado estricto)
plantuml
actor User as "Rol de User Story"
participant Browser as "Browser"
participant "Web Server" as WebServer
participant "Application Server" as AppServer
participant "Database Server" as DBServer


##### 4.5.3.3. Agrupación de etapas
plantuml
== Nombre de etapa lógica ==


##### 4.5.3.4. Interacciones con protocolos
plantuml
User -> Browser : Acción de negocio
Browser -> WebServer : HTTP GET/POST /endpoint
WebServer -> AppServer : REST API: método
AppServer -> DBServer : JDBC: SELECT/INSERT


---

#### 4.5.4. Métricas de calidad

##### 4.5.4.1. Indicadores objetivo:
- **Cobertura de participantes**: 100% del diagrama arquitectónico
- **Agrupación lógica**: 3-7 etapas con nombres claros
- **Detalle de protocolos**: 90% interacciones con especificación de tecnología
- **Manejo de errores**: mínimo 2 escenarios alternativos

##### 4.5.4.2. Sistema de puntuación:
- **Calidad excelente**: ≥90% cumplimiento de métricas
- **Buena calidad**: 70-89% cumplimiento de métricas
- **Requiere mejora**: <70% cumplimiento de métricas

---

#### 4.5.5. Reglas de validación

##### 4.5.5.1. Verificaciones automáticas:

✓ Comienza con @startuml, termina con @enduml
✓ Rol de actor corresponde a User Story
✓ Participantes presentes en diagrama arquitectónico
✓ Cada etapa tiene nombre en formato "== Nombre =="
✓ Protocolos especificados para interacciones técnicas
✓ Flechas síncronas/asíncronas usadas correctamente
✓ Tiene mínimo 1 flujo alternativo (alt/opt/loop)


---

#### 4.5.6. Plantilla básica

plantuml
@startuml
autonumber "<b><color:DarkSlateBlue>.</color></b> " 

actor User as "[Rol de User Story]"
participant Browser as "Browser"
participant "Web Server" as WebServer
participant "Application Server" as AppServer
participant "Database Server" as DBServer

== Iniciación de acción ==
User -> Browser : [Acción de negocio]
Browser -> WebServer : HTTP [método] /[endpoint]

== Procesamiento de solicitud ==
WebServer -> AppServer : REST API: [método]

== Operaciones con datos ==
AppServer -> DBServer : JDBC: [operación SQL]
DBServer --> AppServer : [Resultado]

== Retorno de resultado ==
AppServer --> WebServer : JSON: [datos]
WebServer --> Browser : HTTP 200 OK
Browser --> User : [Visualización de resultado]

@enduml


---

#### 4.5.7. Tipos de interacciones

##### 4.5.7.1. Protocolos y sintaxis:
| Tipo | Sintaxis | Ejemplo |
|-----|-----------|--------|
| **HTTP** | `HTTP [método] /endpoint` | `HTTP GET /api/users` |
| **REST API** | `REST API: [operación]` | `REST API: getUserData` |
| **Base de datos** | `JDBC: [SQL]` | `JDBC: SELECT * FROM users` |
| **Message Queue** | `MQ: [operación]` | `MQ: publish userCreated` |
| **gRPC** | `gRPC: [método]` | `gRPC: GetUserProfile` |

##### 4.5.7.2. Tipos de flechas:
- `->` y `-->` - llamadas/respuestas síncronas
- `->>` y `-->>` - llamadas/respuestas asíncronas
- `->` a sí mismo - procesamiento interno

##### 4.5.7.3. Construcciones de control:
plantuml
alt Escenario exitoso
    // flujo principal
else Error
    // manejo de error
end

opt Ejecución condicional
    // acciones opcionales
end

loop Repetición
    // acciones cíclicas
end


---

#### 4.5.8. Integración con artefactos

##### 4.5.8.1. Conexión con User Story:
- **Actor del diagrama** = rol de US
- **Flujo principal** = descripción de acciones de US
- **Resultado** = beneficio esperado de US

##### 4.5.8.2. Conexión con Use Case:
- **Escenario principal UC** = secuencia principal
- **Flujos alternativos UC** = bloques alt/opt en diagrama
- **Excepciones UC** = bloques de manejo de errores

##### 4.5.8.3. Conexión con arquitectura:
- **Participantes de secuencia** = componentes de arquitectura
- **Interacciones** = conexiones entre componentes
- **Protocolos** = tecnologías de integración

---

#### 4.5.9. Etapas y nombres estándar

##### 4.5.9.1. Grupos típicos:
1. **Iniciación**: "Usuario inicia acción"
2. **Autenticación**: "Verificación de derechos de acceso"
3. **Validación**: "Validación de datos de entrada"
4. **Procesamiento**: "Lógica de negocio y cálculos"
5. **Almacenamiento**: "Operaciones con base de datos"
6. **Notificaciones**: "Envío de mensajes"
7. **Respuesta**: "Retorno de resultado al usuario"

##### 4.5.9.2. Ejemplos de nombres específicos:
- "== Carga de lista de pedidos =="
- "== Verificación de corrección de datos de pago =="
- "== Generación de informe de ventas =="

---

#### 4.5.10. Manejo de errores

##### 4.5.10.1. Escenarios de error obligatorios:
plantuml
alt Ejecución exitosa
    AppServer -> DBServer : Consulta SELECT
    DBServer --> AppServer : Datos devueltos
else Error de conexión a BD
    AppServer -> DBServer : Consulta SELECT
    DBServer --> AppServer : Error: Timeout de conexión
    AppServer --> WebServer : HTTP 500 Internal Error
    WebServer --> Browser : Página de error
else Error de validación de datos
    AppServer -> AppServer : Validar entrada
    AppServer --> WebServer : HTTP 400 Bad Request
    WebServer --> Browser : Mensaje de error
end


---

#### 4.5.11. Lista de verificación de calidad

##### 4.5.11.1. Verificación estructural:
- [ ] ✅ Archivo comienza con `@startuml` y termina con `@enduml`
- [ ] ✅ Se usa autonumber para numerar pasos
- [ ] ✅ Actor corresponde al rol de User Story
- [ ] ✅ Todos los participantes están en diagrama arquitectónico

##### 4.5.11.2. Verificación lógica:
- [ ] ✅ 3-7 etapas lógicas con nombres claros
- [ ] ✅ Secuencia de pasos corresponde a Use Case
- [ ] ✅ Tiene flujos alternativos (alt/opt/loop)
- [ ] ✅ Manejo de mínimo 2 tipos de errores

##### 4.5.11.3. Verificación técnica:
- [ ] ✅ Protocolos especificados para todas las llamadas técnicas
- [ ] ✅ Métodos HTTP y endpoints especificados
- [ ] ✅ Operaciones SQL detalladas
- [ ] ✅ Llamadas síncronas/asíncronas correctas

##### 4.5.11.4. Verificación de integración:
- [ ] 🔗 Correspondencia con escenario principal de Use Case
- [ ] 🔗 Cobertura de todos los actores de arquitectura
- [ ] 🔗 Detalles técnicos corresponden a especificación API

**Objetivo**: Crear diagramas de secuencia listos para implementación técnica y testing.

---

#### 4.5.12. Recomendaciones de estilo

##### 4.5.12.1. Nomenclatura:
- **Actores**: roles de negocio específicos
- **Participantes**: componentes arquitectónicos
- **Mensajes**: términos de negocio para usuarios, técnicos para sistemas

##### 4.5.12.2. Detallado:
- **Brevidad**: mensajes hasta 50 caracteres
- **Claridad**: terminología comprensible
- **Secuencia**: orden lógico de llamadas
- **Agrupación**: unión de acciones relacionadas

##### 4.5.12.3. Ejemplos de descripciones de calidad:
✅ "HTTP POST /api/orders - creación de pedido"  
✅ "JDBC: INSERT INTO orders (user_id, total)"  
✅ "Visualización de página de confirmación de pedido"  

❌ "Hace solicitud"  
❌ "Retorna datos"  
❌ "Sistema procesa"

