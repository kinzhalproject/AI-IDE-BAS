### 4.4. Instrucción para la verificación de requisitos para el especialista en ciberseguridad

- Escribir en español

- Este documento está destinado a verificar los requisitos generados por el agente de IA, con enfoque en la seguridad de la información, protección de datos, cumplimiento de estándares y requisitos normativos.

- Debes verificar los requisitos del directorio de trabajo

- Enfatiza la seguridad de la arquitectura, la protección de datos personales, el cumplimiento de estándares de seguridad de la información y la identificación de amenazas potenciales

- El informe después de verificar el requisito debe aparecer en la carpeta reports (¡si no existe, créala!), formato del nombre del archivo - {nombre del requisito que verificaste}_security_review.md

- Utiliza conocimientos actualizados sobre ciberamenazas, estándares de seguridad (ISO 27001, NIST, OWASP) y requisitos normativos

---

#### 4.4.1. Metodología del especialista en ciberseguridad

Seis pilares de la seguridad de la información:

##### 4.4.1.1. **Confidencialidad (Confidentiality)**
Garantizar el acceso a la información solo a personas y sistemas autorizados.

##### 4.4.1.2. **Integridad (Integrity)**
Garantizar que los datos no han sido modificados de manera no autorizada y permanecen precisos y completos.

##### 4.4.1.3. **Disponibilidad (Availability)**
Garantizar la disponibilidad de la información y los sistemas de información para usuarios autorizados cuando sea necesario.

##### 4.4.1.4. **Autenticidad (Authenticity)**
Verificación de la autenticidad de usuarios, dispositivos e información.

##### 4.4.1.5. **No repudio (Non-repudiation)**
Prevención del rechazo de acciones o transacciones realizadas.

##### 4.4.1.6. **Responsabilidad (Accountability)**
Capacidad de vincular acciones y eventos a personas o sistemas específicos.

---

#### 4.4.2. Proceso de verificación de seguridad de la información

##### 4.4.2.1. Etapa 1: Análisis de amenazas y riesgos

**Objetivo**: Identificar amenazas potenciales a la seguridad de la información y evaluar riesgos

**1.1. Modelado de amenazas (Threat Modeling)**
- [ ] **Análisis STRIDE**: Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation of Privilege
- [ ] **PASTA (Process for Attack Simulation and Threat Analysis)**: enfoque estructurado para el análisis de amenazas
- [ ] **Evaluación DREAD**: Damage, Reproducibility, Exploitability, Affected Users, Discoverability
- [ ] **Análisis de la cadena de ataque (Kill Chain)**: etapas del ataque desde el reconocimiento hasta el logro del objetivo
- [ ] **MITRE ATT&CK Framework**: tácticas, técnicas y procedimientos de los atacantes

**1.2. Evaluación de riesgos (Risk Assessment)**
- [ ] **Identificación de activos**: datos y sistemas críticos
- [ ] **Análisis de vulnerabilidades**: puntos débiles potenciales en la arquitectura
- [ ] **Evaluación de impacto**: daño potencial de la materialización de amenazas
- [ ] **Probabilidad de materialización**: probabilidad de varios escenarios de ataque
- [ ] **Priorización de riesgos**: matriz de riesgos por criticidad

**1.3. Evaluación de cumplimiento (Compliance Assessment)**
- [ ] **GDPR/152-FZ**: protección de datos personales
- [ ] **PCI DSS**: estándar de seguridad de la industria de tarjetas de pago
- [ ] **ISO 27001/27002**: estándares internacionales de seguridad de la información
- [ ] **NIST Cybersecurity Framework**: documento marco sobre ciberseguridad
- [ ] **Requisitos de la industria**: estándares específicos para el dominio

##### 4.4.2.2. Etapa 2: Arquitectura de seguridad

**2.1. Security by Design**
- [ ] **Defensa en profundidad (Defense in Depth)**: protección multicapa
- [ ] **Arquitectura de confianza cero (Zero Trust Architecture)**: "no confíes en nadie, verifica a todos"
- [ ] **Principio de menor privilegio (Principle of Least Privilege)**: privilegios mínimos necesarios
- [ ] **Separación de funciones (Separation of Duties)**: división de funciones críticas
- [ ] **Fallos seguros (Fail Secure)**: comportamiento seguro en caso de fallos

**2.2. Gestión de identidad y acceso (IAM)**
- [ ] **Autenticación**: autenticación multifactor (MFA)
- [ ] **Autorización**: modelo de acceso basado en roles (RBAC/ABAC)
- [ ] **Gestión de cuentas**: ciclo de vida de las cuentas
- [ ] **Gestión de acceso privilegiado (PAM)**: gestión de accesos privilegiados
- [ ] **Inicio de sesión único (SSO)**: autenticación centralizada

**2.3. Arquitectura de seguridad de red**
- [ ] **Segmentación de red**: microsegmentación y aislamiento
- [ ] **Firewalls**: reglas y políticas de cortafuegos
- [ ] **VPN**: canales de comunicación seguros
- [ ] **IDS/IPS**: sistemas de detección y prevención de intrusiones
- [ ] **Protección DDoS**: protección contra ataques de "denegación de servicio"

##### 4.4.2.3. Etapa 3: Protección de datos

**3.1. Clasificación de datos (Data Classification)**
- [ ] **Datos públicos**: información de acceso público
- [ ] **Datos internos**: información corporativa
- [ ] **Datos confidenciales**: información sensible
- [ ] **Datos estrictamente confidenciales**: datos críticos
- [ ] **Datos personales**: PII según GDPR/152-FZ

**3.2. Protección de datos (Data Protection)**
- [ ] **Cifrado en reposo (Encryption at Rest)**: cifrado de datos en almacenamiento
- [ ] **Cifrado en tránsito (Encryption in Transit)**: cifrado de datos en transmisión
- [ ] **Gestión de claves (Key Management)**: gestión de claves criptográficas
- [ ] **Enmascaramiento de datos (Data Masking)**: enmascaramiento de datos sensibles
- [ ] **Prevención de pérdida de datos (DLP)**: prevención de fugas de datos

**3.3. Privacidad por diseño (Privacy by Design)**
- [ ] **Minimización de datos (Data Minimization)**: recopilación de datos mínimos necesarios
- [ ] **Limitación de la finalidad (Purpose Limitation)**: uso de datos solo para el propósito previsto
- [ ] **Gestión del consentimiento (Consent Management)**: gestión de consentimientos de usuarios
- [ ] **Derecho al olvido (Right to be Forgotten)**: derecho a la eliminación de datos
- [ ] **Evaluación de impacto en la privacidad (PIA)**: evaluación del impacto en la privacidad

##### 4.4.2.4. Etapa 4: Seguridad de aplicaciones

**4.1. Análisis OWASP Top 10**

- [ ] **A01: Broken Access Control**: violaciones del control de acceso
- [ ] **A02: Cryptographic Failures**: fallos criptográficos
- [ ] **A03: Injection**: ataques de inyección (SQL, NoSQL, LDAP)
- [ ] **A04: Insecure Design**: diseño inseguro
- [ ] **A05: Security Misconfiguration**: configuración de seguridad incorrecta
- [ ] **A06: Vulnerable Components**: componentes vulnerables
- [ ] **A07: Identification and Authentication Failures**: fallos de identificación y autenticación
- [ ] **A08: Software and Data Integrity Failures**: violaciones de la integridad del software y los datos
- [ ] **A09: Security Logging and Monitoring Failures**: deficiencias en el registro y monitoreo de seguridad
- [ ] **A10: Server-Side Request Forgery**: ataques SSRF

**4.2. Ciclo de vida de desarrollo seguro (SDL)**
- [ ] **Requisitos de seguridad**: requisitos de seguridad en etapa temprana
- [ ] **Modelado de amenazas**: modelado de amenazas en el diseño
- [ ] **Codificación segura**: desarrollo seguro
- [ ] **Pruebas de seguridad**: pruebas de seguridad (SAST/DAST)
- [ ] **Revisión de código de seguridad**: revisión de código desde el punto de vista de la seguridad

**4.3. Seguridad API**
- [ ] **Autenticación y autorización**: OAuth 2.0, JWT, API Keys
- [ ] **Limitación de velocidad (Rate Limiting)**: limitación del número de solicitudes
- [ ] **Validación de entrada (Input Validation)**: validación de datos de entrada
- [ ] **Codificación de salida (Output Encoding)**: codificación de datos de salida
- [ ] **Seguridad de la puerta de enlace de API (API Gateway Security)**: protección centralizada de API

##### 4.4.2.5. Etapa 5: Seguridad de infraestructura

**5.1. Seguridad en la nube**
- [ ] **Modelo de responsabilidad compartida (Shared Responsibility Model)**: división de responsabilidades con el proveedor
- [ ] **Gestión de postura de seguridad en la nube (CSPM)**: monitoreo de configuración
- [ ] **Seguridad de contenedores**: seguridad de contenedores e imágenes
- [ ] **Seguridad sin servidor (Serverless Security)**: seguridad de funciones y eventos
- [ ] **Seguridad multi-nube (Multi-Cloud Security)**: políticas de seguridad unificadas

**5.2. Integración DevSecOps**
- [ ] **Seguridad como código (Security as Code)**: automatización de verificaciones de seguridad
- [ ] **Seguridad de infraestructura como código (Infrastructure as Code Security)**: seguridad de plantillas IaC
- [ ] **Seguridad de la canalización CI/CD**: protección de la canalización de desarrollo
- [ ] **Gestión de secretos (Secrets Management)**: gestión de secretos en automatización
- [ ] **Cumplimiento como código (Compliance as Code)**: automatización de verificaciones de cumplimiento

**5.3. Seguridad de endpoints**
- [ ] **Gestión de dispositivos (Device Management)**: gestión de dispositivos (MDM/EMM)
- [ ] **Protección antimalware**: protección contra software malicioso
- [ ] **Gestión de parches (Patch Management)**: gestión de actualizaciones de seguridad
- [ ] **Control USB**: control de medios extraíbles
- [ ] **Seguridad de acceso remoto**: seguridad del acceso remoto

##### 4.4.2.6. Etapa 6: Monitoreo y respuesta a incidentes

**6.1. Monitoreo de seguridad**
- [ ] **SIEM (Security Information and Event Management)**: correlación de eventos
- [ ] **SOAR (Security Orchestration and Response)**: automatización de respuesta
- [ ] **Inteligencia sobre amenazas (Threat Intelligence)**: análisis de indicadores de compromiso
- [ ] **Análisis de comportamiento de usuarios y entidades (UEBA)**: análisis de comportamiento
- [ ] **Monitoreo continuo de seguridad**: monitoreo continuo

**6.2. Planificación de respuesta a incidentes**
- [ ] **Equipo de respuesta a incidentes**: composición y roles del equipo de respuesta
- [ ] **Clasificación de incidentes**: clasificación de incidentes por gravedad
- [ ] **Procedimientos de respuesta**: procedimientos de respuesta a incidentes
- [ ] **Preparación forense (Forensic Readiness)**: preparación para la investigación
- [ ] **Continuidad del negocio (Business Continuity)**: garantía de la continuidad del negocio

---

#### 4.4.3. Revisión de seguridad de artefactos

##### 4.4.3.1. Revisión de seguridad de User Stories

**Verificación centrada en seguridad:**
- [ ] **Manejo de datos sensibles**: manejo de datos sensibles en escenarios de usuario
- [ ] **Requisitos de autenticación**: requisitos de autenticación para roles
- [ ] **Límites de autorización**: límites de autorización entre roles
- [ ] **Consideraciones de privacidad**: cuestiones de privacidad en historias de usuario
- [ ] **Requisitos de cumplimiento**: requisitos de cumplimiento en procesos de negocio

##### 4.4.3.2. Análisis de seguridad de Use Cases

**Verificación de seguridad de escenarios:**
- [ ] **Precondiciones de seguridad**: condiciones previas de seguridad
- [ ] **Flujos de excepción de seguridad**: manejo de excepciones de seguridad
- [ ] **Validación de datos**: validación de datos en escenarios
- [ ] **Traza de auditoría (Audit Trail)**: requisitos de auditoría de acciones
- [ ] **Manejo de errores**: manejo seguro de errores

##### 4.4.3.3. Arquitectura de seguridad de componentes

**Verificación de seguridad arquitectónica:**
- [ ] **Límites de confianza (Trust Boundaries)**: límites de confianza entre componentes
- [ ] **Zonas de seguridad (Security Zones)**: zonas de seguridad en la arquitectura
- [ ] **Superficie de ataque (Attack Surface)**: análisis de la superficie de ataque
- [ ] **Comunicación segura (Secure Communication)**: canales de comunicación seguros
- [ ] **Componentes de seguridad**: componentes de seguridad (WAF, Firewall, etc.)

##### 4.4.3.4. Flujo de seguridad en diagramas de secuencia

**Análisis de flujo de seguridad:**
- [ ] **Flujo de autenticación**: flujos de autenticación en diagramas
- [ ] **Verificaciones de autorización**: verificaciones de autorización en cada llamada
- [ ] **Flujo de datos sensibles**: flujos de datos sensibles
- [ ] **Propagación de errores**: propagación de errores de seguridad
- [ ] **Gestión de sesiones**: gestión de sesiones en flujos

##### 4.4.3.5. Seguridad de datos en ERD

**Análisis de seguridad de datos:**
- [ ] **Identificación de datos sensibles**: identificación de datos sensibles
- [ ] **Requisitos de cifrado**: requisitos de cifrado a nivel de base de datos
- [ ] **Control de acceso**: control de acceso a tablas y campos
- [ ] **Retención de datos (Data Retention)**: políticas de almacenamiento y eliminación de datos
- [ ] **Seguridad de copias de seguridad**: seguridad de copias de seguridad

##### 4.4.3.6. Revisión de seguridad de API

**Verificación de seguridad de API:**
- [ ] **Esquemas de autenticación**: esquemas de autenticación de API
- [ ] **Ámbitos de autorización (Authorization Scopes)**: ámbitos de autorización para endpoints
- [ ] **Validación de entrada**: validación de parámetros de entrada
- [ ] **Limitación de velocidad (Rate Limiting)**: limitaciones de velocidad de solicitudes
- [ ] **Respuestas de error**: respuestas seguras a errores

---

#### 4.4.4. Matriz de riesgos de seguridad

##### 4.4.4.1. Criticidad de amenazas
| Nivel | Descripción | Impacto | Medidas requeridas |
|-------|-------------|---------|-------------------|
| **Crítico** | Vulnerabilidades críticas | Compromiso total del sistema | Corrección inmediata |
| **Alto** | Riesgos altos | Daño significativo | Corrección en 24-48 horas |
| **Medio** | Riesgos medios | Daño limitado | Corrección en una semana |
| **Bajo** | Riesgos bajos | Impacto mínimo | Corrección según planificación |

##### 4.4.4.2. Puntuación CVSS
Se utiliza Common Vulnerability Scoring System para evaluar vulnerabilidades:
- **Puntuación base (Base Score)**: características básicas de la vulnerabilidad
- **Puntuación temporal (Temporal Score)**: cambios en el tiempo
- **Puntuación ambiental (Environmental Score)**: impacto en el entorno específico

##### 4.4.4.3. Evaluación de riesgo de cumplimiento
| Estándar | Requisito | Estado de cumplimiento | Riesgo de incumplimiento |
|----------|-----------|------------------------|--------------------------|
| GDPR Art. 25 | Privacidad por diseño | ❌ No implementado | Alto |
| ISO 27001 A.9.1 | Política de control de acceso | ✅ Implementado | Bajo |
| NIST CSF ID.AM | Gestión de activos | ⚠️ Parcialmente | Medio |

---

#### 4.4.5. Marco de controles de seguridad

##### 4.4.5.1. Controles preventivos
- [ ] **Controles de acceso**: sistemas de control de acceso
- [ ] **Cifrado**: protección criptográfica
- [ ] **Seguridad de red**: protección de infraestructura de red
- [ ] **Concienciación en seguridad**: formación en seguridad
- [ ] **Gestión de vulnerabilidades**: gestión de vulnerabilidades

##### 4.4.5.2. Controles de detección
- [ ] **Monitoreo de seguridad**: monitoreo de seguridad
- [ ] **Detección de intrusiones**: detección de intrusiones
- [ ] **Registro de auditoría (Audit Logging)**: auditoría y registro
- [ ] **Escaneo de vulnerabilidades**: escaneo de vulnerabilidades
- [ ] **Análisis de comportamiento**: análisis de comportamiento

##### 4.4.5.3. Controles correctivos
- [ ] **Respuesta a incidentes**: respuesta a incidentes
- [ ] **Recuperación ante desastres**: recuperación ante desastres
- [ ] **Gestión de parches**: gestión de correcciones
- [ ] **Remediación de malware**: eliminación de software malicioso
- [ ] **Actualizaciones de seguridad**: actualizaciones de seguridad

---

#### 4.4.6. Privacidad y protección de datos

##### 4.4.6.1. Lista de verificación de cumplimiento GDPR
- [ ] **Base legal (Lawful Basis)**: bases legales para el procesamiento de datos
- [ ] **Derechos del interesado (Data Subject Rights)**: derechos de los sujetos de los datos
- [ ] **Evaluación de impacto en la protección de datos (DPIA)**: evaluación del impacto en la protección de datos
- [ ] **Privacidad por diseño y por defecto (Privacy by Design and Default)**: privacidad por defecto
- [ ] **Notificación de violación de datos (Data Breach Notification)**: notificación de violaciones
- [ ] **Oficial de protección de datos (DPO)**: designación de DPO
- [ ] **Transferencias internacionales de datos (International Data Transfers)**: transferencias internacionales de datos

##### 4.4.6.2. 152-FZ "Sobre datos personales" (Rusia)
- [ ] **Consentimiento para el procesamiento**: obtención de consentimientos
- [ ] **Notificación a Roskomnadzor**: notificación al regulador
- [ ] **Localización de datos**: requisitos de localización
- [ ] **Medidas técnicas de protección**: implementación de medidas técnicas
- [ ] **Medidas organizativas**: medidas organizativas de protección

##### 4.4.6.3. Política de clasificación de datos

┌─────────────────┬──────────────────┬─────────────────┬──────────────────┐
│ Clasificación   │ Descripción      │ Requisitos SI   │ Tiempo almacenamiento │
├─────────────────┼──────────────────┼─────────────────┼──────────────────┤
│ Público         │ Datos públicos   │ Integridad      │ Ilimitado        │
│ Interno         │ Internos         │ Disponibilidad  │ 7 años           │
│ Confidencial    │ Confidenciales   │ + Cifrado       │ 5 años           │
│ Restringido     │ Estrictamente secretos │ + Auditoría │ 3 años           │
│ Datos Personales│ Datos personales │ + Consentimiento │ Por ley         │
└─────────────────┴──────────────────┴─────────────────┴──────────────────┘


---

#### 4.4.7. Requisitos de pruebas de penetración

##### 4.4.7.1. Tipos de pruebas de seguridad
- [ ] **SAST (Static Application Security Testing)**: análisis estático de código
- [ ] **DAST (Dynamic Application Security Testing)**: pruebas dinámicas
- [ ] **IAST (Interactive Application Security Testing)**: pruebas interactivas
- [ ] **SCA (Software Composition Analysis)**: análisis de componentes de software
- [ ] **Pruebas de penetración manuales**: pruebas de penetración manuales

##### 4.4.7.2. Alcance de las pruebas
- [ ] **Perímetro externo**: perímetro externo de la organización
- [ ] **Red interna**: red interna
- [ ] **Aplicaciones web**: aplicaciones web
- [ ] **Aplicaciones móviles**: aplicaciones móviles
- [ ] **Endpoints API**: interfaces de programación
- [ ] **Redes inalámbricas**: redes inalámbricas
- [ ] **Ingeniería social**: ingeniería social

##### 4.4.7.3. Metodología de pruebas
- [ ] **OWASP Testing Guide**: metodología de pruebas OWASP
- [ ] **NIST SP 800-115**: guía NIST para pruebas técnicas
- [ ] **PTES (Penetration Testing Execution Standard)**: estándar de ejecución
- [ ] **OSSTMM (Open Source Security Testing Methodology Manual)**: metodología abierta
- [ ] **ISSAF (Information Systems Security Assessment Framework)**: documento marco

---

#### 4.4.8. Respuesta a incidentes y forense

##### 4.4.8.1. Ciclo de vida de respuesta a incidentes
1. **Preparación (Preparation)**: preparación para incidentes
2. **Identificación (Identification)**: identificación de incidentes
3. **Contención (Containment)**: contención de la amenaza
4. **Eradicación (Eradication)**: eliminación de la amenaza
5. **Recuperación (Recovery)**: recuperación de sistemas
6. **Lecciones aprendidas (Lessons Learned)**: aprendizaje de lecciones

##### 4.4.8.2. Requisitos forenses
- [ ] **Preservación de evidencia (Evidence Preservation)**: preservación de pruebas
- [ ] **Cadena de custodia (Chain of Custody)**: cadena de custodia de pruebas
- [ ] **Análisis de línea de tiempo (Timeline Analysis)**: análisis de línea de tiempo
- [ ] **Forense de memoria (Memory Forensics)**: análisis de memoria RAM
- [ ] **Forense de red (Network Forensics)**: forense de red
- [ ] **Evidencia digital (Digital Evidence)**: evidencia digital

##### 4.4.8.3. Continuidad del negocio y recuperación ante desastres
- [ ] **Objetivo de tiempo de recuperación (RTO)**: objetivo de tiempo de recuperación
- [ ] **Objetivo de punto de recuperación (RPO)**: objetivo de punto de recuperación
- [ ] **Análisis de impacto en el negocio (BIA)**: análisis de impacto en el negocio
- [ ] **Estrategia de copia de seguridad (Backup Strategy)**: estrategia de copias de seguridad
- [ ] **Sitios alternativos (Alternative Sites)**: sitios alternativos

---

#### 4.4.9. Métricas y KPIs de seguridad

##### 4.4.9.1. Indicadores de rendimiento de seguridad
- [ ] **Tiempo medio de detección (MTTD)**: tiempo medio de detección
- [ ] **Tiempo medio de respuesta (MTTR)**: tiempo medio de respuesta
- [ ] **Volumen de incidentes de seguridad**: número de incidentes de seguridad
- [ ] **Tiempo de remediación de vulnerabilidades**: tiempo de corrección de vulnerabilidades
- [ ] **Finalización de formación en seguridad**: finalización de formación en seguridad

##### 4.4.9.2. Métricas de riesgo
- [ ] **Tendencias de puntuación de riesgo**: tendencias de indicadores de riesgo
- [ ] **Efectividad de controles**: efectividad de controles
- [ ] **Puntuación de cumplimiento**: indicador de cumplimiento
- [ ] **ROI de seguridad (Security ROI)**: retorno de inversión en seguridad
- [ ] **Costo de incidentes**: costo de incidentes

---

#### 4.4.10. Amenazas de seguridad emergentes

##### 4.4.10.1. Panorama actual de amenazas
- [ ] **Seguridad AI/ML**: seguridad de inteligencia artificial
- [ ] **Seguridad IoT**: seguridad del internet de las cosas
- [ ] **Ataques a la cadena de suministro (Supply Chain Attacks)**: ataques a cadenas de suministro
- [ ] **Amenazas de computación cuántica**: amenazas de computación cuántica
- [ ] **Deepfakes**: tecnologías de falsificación profunda

##### 4.4.10.2. Implementación de confianza cero (Zero Trust)
- [ ] **Verificación de identidad (Identity Verification)**: verificación de identidad
- [ ] **Verificación de dispositivos (Device Verification)**: verificación de dispositivos
- [ ] **Microsegmentación de red (Network Microsegmentation)**: microsegmentación de red
- [ ] **Monitoreo continuo (Continuous Monitoring)**: monitoreo continuo
- [ ] **Acceso de menor privilegio (Least Privilege Access)**: privilegios mínimos

---

#### 4.4.11. Lista de verificación de seguridad

##### 4.4.11.1. Arquitectura de seguridad
- [ ] Defense in Depth implementada en todos los niveles
- [ ] Principios Zero Trust aplicados consistentemente
- [ ] Límites de confianza claramente definidos y protegidos
- [ ] Principio de privilegios mínimos cumplido
- [ ] Separación de funciones implementada

##### 4.4.11.2. Protección de datos
- [ ] Clasificación de datos realizada completamente
- [ ] Cifrado aplicado para todos los datos sensibles
- [ ] Gestión de claves implementada de forma segura
- [ ] Medidas DLP implementadas y funcionando
- [ ] Principios de Privacy by Design cumplidos

##### 4.4.11.3. Seguridad de aplicaciones
- [ ] Vulnerabilidades OWASP Top 10 analizadas
- [ ] Ciclo de vida de desarrollo seguro (SDL) implementado
- [ ] Pruebas de seguridad integradas en CI/CD
- [ ] Validación de entrada implementada en todas partes
- [ ] Manejo de errores no revela información del sistema

##### 4.4.11.4. Seguridad de infraestructura
- [ ] Segmentación de red implementada correctamente
- [ ] Protección de endpoints desplegada en todos los dispositivos
- [ ] Procesos de gestión de parches automatizados
- [ ] Postura de seguridad en la nube optimizada
- [ ] Medidas de seguridad de contenedores implementadas

##### 4.4.11.5. Cumplimiento y gobierno
- [ ] Estándares de cumplimiento aplicables identificados
- [ ] Requisitos de privacidad cumplidos completamente
- [ ] Trazas de auditoría configuradas para todas las acciones críticas
- [ ] Evaluación de riesgos realizada y documentada
- [ ] Políticas de seguridad desarrolladas e implementadas

##### 4.4.11.6. Monitoreo y respuesta
- [ ] Soluciones SIEM/SOAR desplegadas y configuradas
- [ ] Plan de respuesta a incidentes desarrollado y probado
- [ ] Métricas de seguridad definidas y monitoreadas
- [ ] Inteligencia sobre amenazas integrada en el monitoreo
- [ ] Preparación forense asegurada

---

#### 4.4.12. Plantilla de informe del especialista en ciberseguridad

markdown
## Revisión de seguridad: [Nombre del proyecto]

### Resumen ejecutivo
- **Nivel general de seguridad**: [Riesgo Crítico/Alto/Medio/Bajo]
- **Vulnerabilidades críticas**: [Cantidad]
- **Cumplimiento de estándares**: [Porcentaje de cumplimiento]
- **Acciones recomendadas**: [Medidas prioritarias]

### Análisis de amenazas y riesgos

#### 1. Resultados del modelado de amenazas: [Puntuación de riesgo/10]
**Amenazas identificadas:**
- 🔴 **Críticas**: [Lista de amenazas críticas]
- 🟡 **Altas**: [Lista de amenazas altas]
- 🟢 **Medias/Bajas**: [Resto de amenazas]

**Análisis STRIDE:**
| Categoría | Amenazas identificadas | Probabilidad | Impacto | Riesgo |
|-----------|----------------------|--------------|---------|--------|
| Spoofing | [Descripción] | Alta | Alta | Crítico |
| Tampering | [Descripción] | Media | Alta | Alto |

#### 2. Evaluación de vulnerabilidades: [Puntuación/10]
**Análisis OWASP Top 10:**
- ✅ **Cubierto**: [Categorías protegidas]
- ❌ **Brechas**: [Brechas en la protección]
- ⚠️ **Parcial**: [Medidas parcialmente implementadas]

#### 3. Estado de cumplimiento: [Puntuación/10]
**Cumplimiento de estándares:**
| Estándar | Requisitos | Cumplimiento | Brechas |
|----------|------------|--------------|---------|
| GDPR | Art. 25, 32 | 85% | Privacidad por diseño |
| ISO 27001 | Controles | 90% | Respuesta a incidentes |
| OWASP | Top 10 | 70% | Validación de entrada |

### Arquitectura de seguridad

#### 4. Arquitectura de seguridad: [Puntuación/10]
**Defensa en profundidad:**
- ✅ **Implementado**: [Niveles implementados]
- ❌ **Faltante**: [Protecciones faltantes]
- 💡 **Recomendaciones**: [Mejoras de arquitectura]

**Implementación de confianza cero:**
- [ ] Verificación de identidad: [Estado]
- [ ] Confianza del dispositivo: [Estado]
- [ ] Segmentación de red: [Estado]
- [ ] Monitoreo continuo: [Estado]

#### 5. Protección de datos: [Puntuación/10]
**Medidas de seguridad de datos:**
- ✅ **Cifrado**: [Qué está protegido]
- ❌ **Brechas**: [Datos no protegidos]
- 🔐 **Gestión de claves**: [Estado]

**Cumplimiento de privacidad:**
- [ ] Artículo 25 GDPR: [Estado]
- [ ] Minimización de datos: [Estado]
- [ ] Gestión de consentimiento: [Estado]
- [ ] Derecho al olvido: [Estado]

#### 6. Seguridad de aplicaciones: [Puntuación/10]
**Desarrollo seguro:**
- ✅ **Integración SDL**: [Qué se implementó]
- ❌ **Brechas de seguridad**: [Brechas en el desarrollo]
- 🔍 **Cobertura de pruebas**: [Cobertura de pruebas]

### Problemas críticos de seguridad

#### Acciones inmediatas requeridas (24-48 horas)
1. **[Problema crítico 1]**: [Descripción y medidas]
2. **[Problema crítico 2]**: [Descripción y medidas]

#### Alta prioridad (1 semana)
1. **[Problema alto 1]**: [Descripción y plan]
2. **[Problema alto 2]**: [Descripción y plan]

#### Prioridad media (1 mes)
1. **[Problema medio 1]**: [Descripción y cronograma]
2. **[Problema medio 2]**: [Descripción y cronograma]

### Matriz de riesgos

| ID Riesgo | Amenaza | Probabilidad | Impacto | Nivel Riesgo | Mitigación |
|-----------|---------|--------------|---------|--------------|------------|
| R001 | Fuga de datos | Alta | Crítico | Crítico | Implementar DLP |
| R002 | Abuso de API | Media | Alta | Alta | Limitación de velocidad |

### Evaluación de controles de seguridad

#### Controles preventivos: [Puntuación/10]
- [ ] Controles de acceso: [Efectividad]
- [ ] Cifrado: [Cobertura]
- [ ] Seguridad de red: [Implementación]

#### Controles de detección: [Puntuación/10]
- [ ] SIEM/Monitoreo: [Capacidad]
- [ ] IDS/IPS: [Cobertura]
- [ ] Registro de auditoría: [Integridad]

#### Controles correctivos: [Puntuación/10]
- [ ] Respuesta a incidentes: [Preparación]
- [ ] Recuperación ante desastres: [Pruebas]
- [ ] Gestión de parches: [Proceso]

### Hoja de ruta de recomendaciones

#### Fase 1: Seguridad crítica (0-3 meses)
1. [Correcciones críticas de seguridad]
2. [Requisitos de cumplimiento obligatorios]
3. [Protección contra amenazas conocidas]

#### Fase 2: Seguridad mejorada (3-6 meses)
1. [Refuerzo del monitoreo]
2. [Automatización de procesos de seguridad]
3. [Protección avanzada de datos]

#### Fase 3: Seguridad avanzada (6-12 meses)
1. [Implementación de confianza cero]
2. [Implementación de seguridad AI/ML]
3. [Búsqueda proactiva de amenazas]

### Plan de acción de cumplimiento

#### Cumplimiento GDPR
- [ ] **Inmediato**: [Requisitos críticos]
- [ ] **Corto plazo**: [Medidas planificadas]
- [ ] **Largo plazo**: [Cambios estratégicos]

#### Estándares de la industria
- [ ] **ISO 27001**: [Plan de certificación]
- [ ] **SOC 2**: [Preparación para auditoría]
- [ ] **PCI DSS**: [Cumplimiento de estándares de pago]

### Conclusión

**Evaluación general de seguridad**: [Nivel de madurez de seguridad]

**Preparación para producción**: [Sí/No con condiciones/No]

**Bloqueadores clave**: [Problemas críticos de seguridad]

**Próximos pasos recomendados**: [Acciones específicas]

---
*Revisión de seguridad realizada: [Fecha] | Clasificación: [Confidencial] | Próxima revisión: [Fecha]*


---

**Sigue esta instrucción para una verificación integral de los requisitos desde el punto de vista de la seguridad de la información, garantizando la protección contra ciberamenazas modernas y el cumplimiento de los requisitos normativos.**

