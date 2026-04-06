### 4.8. Información de los Interesados del Proyecto
**Instrucciones para Recopilar la Lista de Interesados del Proyecto**

#### 4.8.1. Propósito
Proporcionar al agente de IA un proceso paso a paso para identificar y documentar a todos los interesados (stakeholders) de una iniciativa del proyecto.

#### 4.8.2. Entradas Requeridas
1.  **Visión / Acta de Constitución del Proyecto** – objetivos, alcance, criterios de éxito.
2.  **Estructura Organizacional** – organigrama, lista de departamentos o información pública de la empresa.
3.  **Artefactos de Requisitos Existentes** – BRD, User Story, RFP, etc.
4.  **Contexto Regulatorio y de Cumplimiento** (si aplica).

> **Consejo:** Si falta algún dato, solicítelo al usuario o aclare los supuestos.

#### 4.8.3. Categorías de Interesados

| Categoría     | Roles Típicos                                   | Ejemplos                          |
|---------------|-------------------------------------------------|-----------------------------------|
| **Patrocinadores** | Patrocinador Ejecutivo, miembro del Comité Directivo (Steering Committee) | CFO, CTO                         |
| **Gestión**   | Propietario del Producto, Gerente de Programa, Jefe de Departamento | Head of Operations               |
| **Usuarios**  | Usuario Final, Usuario Avanzado (Power-user), Servicio de Soporte | Cajero, Usuario de App Móvil     |
| **Técnicos**  | Arquitectos, Desarrolladores, QA, DevOps        | Desarrollador Backend Principal  |
| **Cumplimiento** | Jurídico, Seguridad, Gestión de Riesgos, Auditoría | DPO, CISO                        |
| **Externos**  | Proveedores, Socios, Reguladores               | Proveedor de Pagos, Banco Central|
| **Otros**     | Formación, Marketing, Customer Success          | Gerente de L&D                   |

#### 4.8.4. Pasos para la Recopilación de Información

1.  **Exploración Inicial**
    -   Analice los documentos proporcionados en busca de nombres, departamentos y puestos de trabajo.
    -   Forme una lista preliminar de candidatos.

2.  **Clasificación de Roles**
    -   Asigne cada candidato a una de las categorías anteriores.
    -   Marque duplicados o alias (por ejemplo, "TI" vs "Tecnologías de la Información").

3.  **Análisis de Brechas**
    -   Verifique la lista con la lista de comprobación de categorías; encuentre las faltantes.
    -   Solicite aclaraciones si una categoría crítica está vacía.

4.  **Enriquecimiento de Atributos**
    -   Para cada interesado, registre:
        -   `Nombre`
        -   `Puesto de Trabajo`
        -   `Departamento`
        -   `Nivel de Influencia (H/M/L)`
        -   `Nivel de Interés (H/M/L)`
        -   `Contactos (si están disponibles)`

5.  **Validación**
    -   Cree una tabla final y muéstresela al usuario para su confirmación.
    -   Aclare las ediciones y actualice la lista hasta su aprobación.

#### 4.8.5. 📄 Formato de Salida (Tabla Markdown)

| Nombre        | Puesto de Trabajo | Categoría | Influencia | Interés | Notas             |
|---------------|-------------------|-----------|------------|---------|-------------------|
| Iván Ivánov   | Propietario del Producto | Gestión | H       | H       | Tomador de Decisión Clave |

#### 4.8.6. Criterios de Aceptación
- [ ] Se han evaluado las siete categorías de interesados.
- [ ] Se completan seis atributos para cada interesado.
- [ ] No hay duplicados en nombres o roles.
- [ ] El usuario confirma la integridad.
- [ ] La lista final se exporta en formato de tabla Markdown.

#### 4.8.7. Recomendaciones y Estándares
- BABOK v3 – Análisis de Interesados (Stakeholder Analysis)
- PMBOK – Proceso Identificar a los Interesados (Identify Stakeholders Process)
- ISO 21500 – Guía sobre Dirección de Proyectos (Guidance on Project Management)

*Última actualización: {{DATE}}*