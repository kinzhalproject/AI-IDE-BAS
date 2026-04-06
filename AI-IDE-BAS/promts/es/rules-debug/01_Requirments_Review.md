### 4.3. Verificación del proyecto para la calidad de los requisitos y artefactos del analista de negocio y de sistemas

#### 4.3.1. Instrucción para la verificación de requisitos para Analista Senior

- Escribir en español

- Este documento está destinado a verificar los requisitos generados por el agente de IA, para el cumplimiento de las mejores prácticas de análisis de negocio y de sistemas. Utiliza las listas de verificación y recomendaciones a continuación para evaluar la integridad, corrección y calidad de los requisitos.

- Debes verificar los requisitos del directorio de trabajo

- Enfatiza la lógica de los requisitos funcionales y no funcionales

- El informe después de verificar el requisito debe aparecer en la carpeta reports (¡si no existe, créala!), formato del nombre del archivo - {nombre del requisito que verificaste}_report.md

- Si no hay un mockup o BPMN, no es crítico, ya que usamos formato .md, pero infórmalo de todos modos

---

#### 4.3.2. Metodología del Analista Senior

Cuatro pilares de los requisitos de calidad:

1. **Integridad lógica**
Los requisitos deben formar un sistema coherente donde cada elemento se derive lógicamente de los anteriores y respalde la arquitectura general de la solución.

2. **Integridad**
Todos los aspectos de la solución deben estar cubiertos por los requisitos: funcionales, no funcionales, de integración, seguridad, rendimiento.

3. **Consistencia**
Los requisitos no deben entrar en conflicto entre sí en ningún nivel: lógica de negocio, implementación técnica, experiencia de usuario.

4. **No ambigüedad**
Cada requisito debe tener una única interpretación y ser comprensible para todas las partes interesadas.

---

#### 4.3.3. Proceso de verificación del Analista Senior

##### 4.3.3.1. Etapa 1: Análisis estructural del paquete de requisitos

**Objetivo**: Asegurar la presencia de todos los artefactos necesarios y su estructura correcta

**Artefactos para verificación**:
Artefactos en el directorio de trabajo y subcarpetas

##### 4.3.3.2. Etapa 2: Verificación de la integridad lógica

**2.1. Trazabilidad vertical**
- [ ] User Story → Use Case: cada historia cubierta por escenarios detallados
- [ ] Use Case → Diagramas de secuencia: cada escenario tiene una implementación técnica
- [ ] Use Case → Diagramas de actividad: los procesos de negocio se corresponden con la funcionalidad
- [ ] Sequence → Diagramas de componentes: las interacciones se corresponden con la arquitectura
- [ ] Component → ERD: la arquitectura soporta el modelo de datos
- [ ] ERD → OpenAPI: la API se corresponde con la estructura de datos

**2.2. Consistencia horizontal**
- [ ] Los mismos roles en todas las User Stories y Use Cases
- [ ] Terminología unificada en diagramas y especificaciones
- [ ] Compatibilidad de características temporales entre artefactos
- [ ] Consistencia en los niveles de detalle

**2.3. Lógica de los procesos de negocio**
- [ ] Relaciones de causa y efecto en los diagramas de actividad
- [ ] Corrección de las condiciones de ramificación y bucles
- [ ] Manejo de situaciones excepcionales en todos los niveles
- [ ] Conformidad con las reglas de negocio en las soluciones técnicas

##### 4.3.3.3. Etapa 3: Verificación de la integridad (Análisis de integridad)

**3.1. Integridad funcional**
- [ ] **Operaciones CRUD**: Create, Read, Update, Delete para todas las entidades
- [ ] **Ciclo de vida**: todos los estados y transiciones de los objetos de negocio
- [ ] **Integraciones**: todos los sistemas externos y puntos de integración
- [ ] **Roles de usuario**: todos los roles y sus derechos de acceso
- [ ] **Procesos de negocio**: escenarios principales, alternativos, excepcionales

**3.2. Integridad técnica**
- [ ] **Capas arquitectónicas**: presentación, lógica, datos, integraciones
- [ ] **Componentes de seguridad**: autenticación, autorización, auditoría
- [ ] **Manejo de errores**: en todos los niveles de la arquitectura
- [ ] **Monitoreo y registro**: para todas las operaciones críticas
- [ ] **Copia de seguridad**: estrategias y procedimientos

**3.3. Experiencia de usuario**
- [ ] **UI/UX**: todas las interfaces de usuario
- [ ] **Validación de datos**: en el cliente y el servidor
- [ ] **Notificaciones**: todos los tipos de mensajes al usuario
- [ ] **Sistema de ayuda**: ayuda y documentación
- [ ] **Accesibilidad**: requisitos para personas con discapacidades

##### 4.3.3.4. Etapa 4: Verificación de la consistencia (Análisis de consistencia)

**4.1. Inconsistencias en los datos**
- [ ] **Tipos de datos**: correspondencia entre ERD y API
- [ ] **Restricciones**: consistencia entre las reglas de negocio y la base de datos
- [ ] **Formatos**: uniformidad en formatos de fechas, números, cadenas
- [ ] **Datos de referencia**: consistencia de los datos de referencia

**4.2. Inconsistencias en los procesos**
- [ ] **Secuencia**: Diagramas de Actividad vs Diagramas de Secuencia
- [ ] **Roles y permisos**: User Stories vs Use Cases vs Diagramas de Componentes
- [ ] **Limitaciones de tiempo**: timeouts y SLA en diferentes artefactos
- [ ] **Condiciones de ejecución**: precondiciones y poscondiciones

**4.3. Inconsistencias en la arquitectura**
- [ ] **Dirección de las llamadas**: Diagramas de Secuencia vs Diagramas de Componentes
- [ ] **Protocolos**: correspondencia entre arquitectura y API
- [ ] **Seguridad**: mecanismos unificados en todos los componentes
- [ ] **Rendimiento**: requisitos coherentes en todo el sistema

##### 4.3.3.5. Etapa 5: Verificación de la no ambigüedad (Análisis de no ambigüedad)

**5.1. No ambigüedad terminológica**
- [ ] **Glosario**: comprensión unificada de los términos
- [ ] **Abreviaturas**: decodificación de todas las abreviaturas
- [ ] **Sinónimos**: eliminación de términos duplicados
- [ ] **Contextualidad**: mismos términos en diferentes contextos

**5.2. No ambigüedad funcional**
- [ ] **Criterios de aceptación**: específicos y medibles
- [ ] **Acciones del usuario**: formulaciones claras en los Use Cases
- [ ] **Comportamiento del sistema**: algoritmos deterministas
- [ ] **Manejo de excepciones**: acciones específicas del sistema

**5.3. No ambigüedad técnica**
- [ ] **Especificaciones de la API**: tipos de datos y formatos precisos
- [ ] **Diagramas**: notaciones estándar de PlantUML
- [ ] **Configuración**: parámetros de ajuste claros
- [ ] **Integraciones**: protocolos y formatos de intercambio precisos

---

#### 4.3.4. Verificación de requisitos de negocio (detallada)

##### 4.3.4.1. User Story (AS IS y TO BE)

**Verificación de la integridad lógica:**
- [ ] AS IS precede lógicamente a TO BE
- [ ] Los roles se corresponden con los participantes reales del proceso
- [ ] Las acciones son realizables en el ámbito del dominio
- [ ] Los resultados son alcanzables y medibles

**Verificación de la integridad:**
- [ ] Cubiertos todos los tipos de usuarios
- [ ] Descritas todas las funciones principales de negocio
- [ ] Considerados los escenarios de integración
- [ ] Incluidas las funciones administrativas

**Verificación de la consistencia:**
- [ ] Los roles no entran en conflicto entre historias
- [ ] Las acciones no contradicen las reglas de negocio
- [ ] Los resultados están coordinados entre historias

**Verificación de la no ambigüedad:**
- [ ] Los roles están claramente definidos
- [ ] Las acciones descritas con verbos concretos
- [ ] Los resultados son cuantitativamente medibles
- [ ] Se utilizan formulaciones estándar

##### 4.3.4.2. Use Case

**Verificación estructural:**
- [ ] El título refleja el objetivo de negocio
- [ ] Los actores se corresponden con las User Stories
- [ ] Las condiciones previas son realistas
- [ ] Las restricciones son técnicamente realizables
- [ ] El desencadenante es concreto y observable
- [ ] El escenario principal es lógicamente secuencial
- [ ] Los escenarios alternativos cubren casos extremos
- [ ] Los escenarios excepcionales incluyen manejo de errores
- [ ] Los criterios de éxito son medibles

**Verificación de la integridad lógica:**
- [ ] Los pasos del escenario están lógicamente conectados
- [ ] Los flujos alternativos regresan correctamente al principal
- [ ] Las excepciones se manejan en el nivel adecuado
- [ ] Las poscondiciones son alcanzables desde las precondiciones

**Verificación de la trazabilidad:**
- [ ] Cada Use Case se corresponde con una User Story
- [ ] Los actores están coordinados con los roles en las User Stories
- [ ] La funcionalidad cubre las necesidades del TO BE

##### 4.3.4.3. Diagramas de actividad

**Verificación de la integridad lógica:**
- [ ] Los carriles se corresponden con los roles del Use Case
- [ ] La secuencia de acciones es lógica
- [ ] Las condiciones de ramificación son correctas
- [ ] Los procesos paralelos son independientes
- [ ] Todos los caminos conducen a la finalización

**Verificación de la integridad del proceso de negocio:**
- [ ] Cubiertos todos los pasos del Use Case
- [ ] Incluidos los procesos de validación
- [ ] Procesadas las situaciones de error
- [ ] Considerados los procesos de notificación
- [ ] Incluidos los procesos de auditoría

---

#### 4.3.5. Verificación de requisitos del sistema (detallada)

##### 4.3.5.1. Arquitectura y diagramas de componentes

**Verificación de la integridad lógica:**
- [ ] Las capas arquitectónicas están claramente separadas
- [ ] Las dependencias están dirigidas en una dirección
- [ ] Las interfaces están coordinadas entre componentes
- [ ] No hay dependencias cíclicas

**Verificación de la integridad de la arquitectura:**
- [ ] Todos los requisitos funcionales cubiertos por componentes
- [ ] Incluidos los componentes de seguridad
- [ ] Presentes los componentes de monitoreo
- [ ] Considerados los componentes de integración
- [ ] Incluidos los componentes de configuración

##### 4.3.5.2. Modelo de datos y ERD

**Verificación de la integridad lógica:**
- [ ] Las entidades se corresponden con los objetos de negocio
- [ ] Las relaciones reflejan las relaciones reales
- [ ] La cardinalidad de las relaciones es correcta
- [ ] Las claves primarias identifican registros de forma única
- [ ] Las claves externas mantienen la integridad

**Verificación de la normalización:**
- [ ] Primera forma normal (1NF): atomicidad de los valores
- [ ] Segunda forma normal (2NF): dependencia de la clave completa
- [ ] Tercera forma normal (3NF): ausencia de dependencias transitivas
- [ ] Justificación de la desnormalización (si la hay)

##### 4.3.5.3. Diagramas de secuencia

**Verificación de la integridad lógica:**
- [ ] Los participantes se corresponden con los componentes de la arquitectura
- [ ] La secuencia de llamadas es lógica
- [ ] Las llamadas síncronas/asíncronas son correctas
- [ ] Se respetan los ciclos de vida de los objetos
- [ ] Existe manejo de errores

**Verificación de la trazabilidad:**
- [ ] Cada diagrama se corresponde con un escenario de Use Case
- [ ] Los participantes se corresponden con los roles en los diagramas de actividad
- [ ] Las interacciones implementan los procesos de negocio

##### 4.3.5.4. REST API y OpenAPI

**Verificación de la integridad lógica:**
- [ ] Los recursos se corresponden con las entidades del ERD
- [ ] Los métodos HTTP son semánticamente correctos
- [ ] La estructura de URL es jerárquicamente lógica
- [ ] Los códigos de respuesta se corresponden con las situaciones
- [ ] Los esquemas de datos están coordinados con el modelo

**Verificación de la integridad de la API:**
- [ ] Operaciones CRUD para todas las entidades
- [ ] Operaciones de búsqueda y filtrado
- [ ] Operaciones por lotes para acciones masivas
- [ ] Endpoints de comprobación de estado y monitoreo
- [ ] Operaciones administrativas

---

#### 4.3.6. Criterios de aceptación y requisitos no funcionales (ampliados)

##### 4.3.6.1. Criterios de aceptación
**Verificación de la integridad lógica:**
- [ ] Relación con User Stories específicas
- [ ] Medibilidad de los criterios
- [ ] Capacidad de prueba de los criterios
- [ ] Independencia de los criterios entre sí

**Verificación de la integridad:**
- [ ] Criterios funcionales para todos los escenarios principales
- [ ] Criterios de rendimiento
- [ ] Criterios de seguridad
- [ ] Criterios de usabilidad
- [ ] Criterios de compatibilidad

##### 4.3.6.2. Requisitos no funcionales

**1. Rendimiento**
- [ ] Tiempo de respuesta para cada tipo de operación
- [ ] Capacidad de procesamiento del sistema
- [ ] Consumo de recursos (CPU, memoria, disco)
- [ ] Escalabilidad (vertical/horizontal)

**2. Seguridad**
- [ ] Autenticación y autorización
- [ ] Cifrado de datos (en reposo y en tránsito)
- [ ] Auditoría y registro
- [ ] Protección contra vulnerabilidades (OWASP Top 10)

**3. Fiabilidad**
- [ ] Disponibilidad del sistema (SLA)
- [ ] Tolerancia a fallos
- [ ] Tiempo de recuperación (RTO/RPO)
- [ ] Monitoreo y alertas

---

#### 4.3.7. Matriz de trazabilidad de requisitos

##### 4.3.7.1. Trazabilidad vertical
| User Story | Use Case | Activity | Sequence | Component | ERD | API |
|------------|----------|----------|----------|-----------|-----|-----|
| US-001 | UC-001 | ACT-001 | SEQ-001 | COMP-001 | ENT-001 | API-001 |

**Verificación:**
- [ ] Cada fila está completamente llena
- [ ] No hay interrupciones en la cadena de trazabilidad
- [ ] Los cambios en un artefacto se reflejan en los relacionados

##### 4.3.7.2. Consistencia horizontal
**Roles y actores:**
- [ ] User Stories ↔ Use Cases ↔ Activity ↔ Sequence
- [ ] Terminología unificada de roles
- [ ] Derechos de acceso coordinados

**Objetos de datos:**
- [ ] Use Cases ↔ ERD ↔ API ↔ Component
- [ ] Nombres unificados de entidades
- [ ] Atributos coordinados

---

#### 4.3.8. Métodos avanzados de análisis

##### 4.3.8.1. Gap Analysis (Análisis de brechas)
**Metodología:**
1. Elaborar una lista de todos los procesos de negocio de alto nivel
2. Verificar la cobertura de cada proceso en los requisitos
3. Identificar elementos faltantes
4. Evaluar la criticidad de las brechas

**Plantilla de informe:**

Proceso: [Nombre]
Cobertura: [Completa/Parcial/Ausente]
Brechas: [Lista de elementos faltantes]
Criticidad: [Alta/Media/Baja]
Recomendaciones: [Qué agregar]


##### 4.3.8.2. Impact Analysis (Análisis de impacto)
**Metodología:**
1. Para cada requisito, determinar los elementos dependientes
2. Evaluar el impacto de los cambios
3. Identificar conflictos potenciales
4. Priorizar dependencias críticas

##### 4.3.8.3. Risk Analysis (Análisis de riesgos)
**Tipos de riesgos en los requisitos:**
- [ ] **Incertidumbre**: formulaciones imprecisas
- [ ] **Complejidad**: excesiva complejidad técnica
- [ ] **Dependencias**: dependencias externas críticas
- [ ] **Rendimiento**: SLA inalcanzables
- [ ] **Integración**: escenarios de integración complejos

---

#### 4.3.9. Lista de verificación final del Analista Senior

##### 4.3.9.1. Integridad estructural
- [ ] Todos los artefactos presentes según los estándares
- [ ] Los artefactos cumplen con las instrucciones de .clinerules
- [ ] Versionado e identificación de artefactos
- [ ] Las relaciones entre artefactos son trazables

##### 4.3.9.2. Integridad lógica
- [ ] Trazabilidad vertical sin interrupciones
- [ ] Consistencia horizontal de la terminología
- [ ] Las relaciones de causa y efecto son correctas
- [ ] La secuencia temporal es lógica

##### 4.3.9.3. Integridad de la cobertura
- [ ] Todos los procesos de negocio cubiertos por requisitos
- [ ] Todos los roles de usuario considerados
- [ ] Todos los componentes técnicos descritos
- [ ] Todas las integraciones especificadas
- [ ] Todas las situaciones excepcionales procesadas

##### 4.3.9.4. Consistencia
- [ ] Ausencia de conflictos en la lógica de negocio
- [ ] Compatibilidad técnica de los componentes
- [ ] Consistencia de los requisitos de rendimiento
- [ ] Unidad de los principios de seguridad

##### 4.3.9.5. No ambigüedad
- [ ] Terminología definida en el glosario
- [ ] Criterios de aceptación concretos y medibles
- [ ] Especificaciones técnicas detalladas
- [ ] Reglas de negocio formalizadas

##### 4.3.9.6. Calidad de la documentación
- [ ] Estructura y navegación
- [ ] Actualidad de las versiones
- [ ] Integridad de ejemplos y diagramas
- [ ] Conformidad con los estándares corporativos

---

#### 4.3.10. Plantilla de informe del Analista Senior

markdown
## Informe de verificación de requisitos: [Nombre del proyecto]

### Resumen ejecutivo
- **Evaluación general**: [Aceptado/Aceptado con observaciones/Rechazado]
- **Problemas críticos**: [Cantidad]
- **Recomendaciones**: [Acciones principales]

### Análisis detallado

#### 1. Integridad lógica: [Evaluación/10]
- ✅ Aprobado: [Lista]
- ❌ Problemas: [Lista con detalles]
- 💡 Recomendaciones: [Acciones específicas]

#### 2. Integridad: [Evaluación/10]
- ✅ Aprobado: [Lista]
- ❌ Brechas: [Lista con criticidad]
- 💡 Recomendaciones: [Qué agregar]

#### 3. Consistencia: [Evaluación/10]
- ✅ Aprobado: [Lista]
- ❌ Conflictos: [Lista con impacto]
- 💡 Recomendaciones: [Cómo resolver]

#### 4. No ambigüedad: [Evaluación/10]
- ✅ Aprobado: [Lista]
- ❌ Incertidumbres: [Lista con riesgos]
- 💡 Recomendaciones: [Cómo aclarar]

### Matriz de trazabilidad
[Tabla de relaciones entre artefactos]

### Análisis de riesgos
| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|

### Próximos pasos
1. [Acciones prioritarias]
2. [Mejoras secundarias]
3. [Recomendaciones a largo plazo]

### Anexos
- Observaciones detalladas por artefactos
- Correcciones propuestas
- Enlaces a estándares y mejores prácticas


---

**Sigue esta instrucción ampliada para una revisión sistemática y de alta calidad de los requisitos a nivel de Analista Senior, garantizando la más alta calidad de las soluciones arquitectónicas.**

