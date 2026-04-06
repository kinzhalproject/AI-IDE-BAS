### 4.4. Diagrama ER (ERD)
**Instrucciones para crear diagramas ER con PlantUML para agente IA**

#### 4.4.1. Contenido
1. [Fundamentos de sintaxis](#fundamentos-de-sintaxis)
2. [Métricas de calidad](#métricas-de-calidad)
3. [Reglas de validación](#reglas-de-validación)
4. [Elementos básicos](#elementos-básicos)
5. [Tipos de relaciones](#tipos-de-relaciones)
6. [Creación de script SQL](#creación-de-script-sql)
7. [Mejores prácticas](#mejores-prácticas)
8. [Ejemplos de escenarios](#ejemplos-de-escenarios)
9. [Lista de verificación de calidad](#lista-de-verificación-de-calidad)

---

#### 4.4.2. Fundamentos de sintaxis

##### 4.4.2.1. Estructura básica de archivo:
plantuml
@startuml
!define ENTITY_STYLE fill:#E1F5FE,stroke:#01579B,stroke-width:2px

entity "Nombre_Entidad" as alias {
  * campo1 : tipo [PK]
  --
  * campo2 : tipo [NOT NULL]
  campo3 : tipo [NULL]
  --
  campo4 : tipo [FK]
}

@enduml


##### 4.4.2.2. Notaciones:
- `*` - campo obligatorio (NOT NULL)
- `--` - separador de secciones  
- `[PK]` - clave primaria
- `[FK]` - clave foránea
- `[UK]` - clave única

---

#### 4.4.3. Métricas de calidad

##### 4.4.3.1. Indicadores objetivo:
- **Normalización**: cumplimiento de 3NF (tercera forma normal)
- **Cobertura de relaciones**: 100% FK deben estar conectadas a PK
- **Nomenclatura**: uniformidad de nombres de entidades y campos
- **Agrupación de campos**: separación lógica en secciones
- **Cumplimiento SQL**: 100% correspondencia entre ERD y script SQL

##### 4.4.3.2. Sistema de puntuación:
- **Calidad excelente**: 3NF + todas las relaciones + uniformidad + SQL = ≥90%
- **Buena calidad**: 2NF + mayoría de relaciones + SQL = 70-89%
- **Requiere mejora**: problemas de normalización o SQL = <70%

---

#### 4.4.4. Reglas de validación

##### 4.4.4.1. Verificaciones automáticas:

✓ Todas las entidades tienen clave primaria [PK]
✓ Claves foráneas [FK] conectadas a [PK] correspondientes
✓ Relaciones correctamente tipadas (1:1, 1:N, N:M)
✓ Nombres en estilo uniforme (snake_case o camelCase)
✓ Campos obligatorios marcados con símbolo *
✓ Agrupación de campos mantenida (separadores --)
✓ Script SQL corresponde completamente al diagrama ERD
✓ Todas las tablas en SQL tienen entidades correspondientes en ERD


---

#### 4.4.5. Elementos básicos

##### 4.4.5.1. Creación de entidad con agrupación:
plantuml
entity User {
  ' Clave primaria
  * id : int [PK]
  --
  ' Información principal
  * email : varchar(255) [UK]
  * password_hash : varchar(255)
  first_name : varchar(100)
  last_name : varchar(100)
  --
  ' Campos del sistema
  * created_at : timestamp
  * updated_at : timestamp
  deleted_at : timestamp
}


##### 4.4.5.2. Secciones recomendadas:
1. **Clave primaria** - siempre primero
2. **Información principal** - campos de negocio
3. **Relaciones** - claves foráneas
4. **Campos del sistema** - created_at, updated_at, deleted_at

---

#### 4.4.6. Tipos de relaciones

##### 4.4.6.1. Sintaxis de relaciones:
| Tipo de relación | Sintaxis | Ejemplo de uso |
|-----------|-----------|---------------------|
| **1:1** | `\|\|--\|\|` | User ↔ UserProfile |
| **1:N** | `\|\|--o{` | Category → Products |
| **N:M** | `}o--o{` | Products ↔ Tags (via junction) |
| **1:0..1** | `\|\|--o\|` | User → PasswordReset |

##### 4.4.6.2. Ejemplos de relaciones:

###### 4.4.6.2.1. Uno a uno (1:1)
plantuml
entity User {
  * id : int [PK]
  * email : varchar(255)
}

entity UserProfile {
  * user_id : int [PK, FK]
  * first_name : varchar(100)
  * last_name : varchar(100)
}

User ||--|| UserProfile : "tiene perfil"


###### 4.4.6.2.2. Uno a muchos (1:N)
plantuml
entity Category {
  * id : int [PK]
  * name : varchar(255)
}

entity Product {
  * id : int [PK]
  * name : varchar(255)
  * category_id : int [FK]
}

Category ||--o{ Product : "contiene"


###### 4.4.6.2.3. Muchos a muchos (N:M) via tabla de unión
plantuml
entity Product {
  * id : int [PK]
  * name : varchar(255)
}

entity Tag {
  * id : int [PK]
  * name : varchar(255)
}

entity ProductTag {
  * product_id : int [PK, FK]
  * tag_id : int [PK, FK]
}

Product ||--o{ ProductTag
Tag ||--o{ ProductTag


---

#### 4.4.7. Creación de script SQL

##### 4.4.7.1. Requisito obligatorio:
**Con cada diagrama ERD es OBLIGATORIO crear el script SQL correspondiente para base de datos real (preferiblemente SQLite).**

##### 4.4.7.2. Principios de correspondencia ERD → SQL:
- **Cada entidad** = tabla en SQL
- **Cada campo ERD** = columna en tabla
- **Relaciones ERD** = FOREIGN KEY en SQL
- **Tipos de datos** = tipos SQL correspondientes

##### 4.4.7.3. Ejemplo de correspondencia:

###### 4.4.7.3.1. Diagrama ERD:
plantuml
entity User {
  * id : int [PK]
  * email : varchar(255) [UK]
  * password_hash : varchar(255)
  first_name : varchar(100)
  last_name : varchar(100)
  * created_at : timestamp
}

entity Order {
  * id : int [PK]
  * user_id : int [FK]
  * status : varchar(50)
  * total_amount : decimal(10,2)
  * created_at : timestamp
}

User ||--o{ Order : "realiza"


###### 4.4.7.3.2. Script SQL correspondiente (SQLite):
sql
-- Creación de base de datos SQLite
-- Archivo: database.sql

-- Tabla de usuarios
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de pedidos
CREATE TABLE orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    status VARCHAR(50) NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Índices para optimización
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);

-- Inserción de datos de prueba
INSERT INTO users (email, password_hash, first_name, last_name) VALUES
('user1@example.com', 'hash1', 'Ivan', 'Ivanov'),
('user2@example.com', 'hash2', 'Petr', 'Petrov');

INSERT INTO orders (user_id, status, total_amount) VALUES
(1, 'completed', 1500.00),
(1, 'pending', 750.50),
(2, 'completed', 2200.00);


##### 4.4.7.4. Correspondencia de tipos de datos:

| Tipo ERD | Tipo SQLite | Descripción |
|---------|------------|----------|
| `int` | `INTEGER` | Números enteros |
| `varchar(n)` | `VARCHAR(n)` | Cadenas de longitud fija |
| `text` | `TEXT` | Texto de longitud ilimitada |
| `decimal(m,n)` | `DECIMAL(m,n)` | Números decimales |
| `timestamp` | `TIMESTAMP` | Fecha y hora |
| `boolean` | `BOOLEAN` | Tipo booleano |

##### 4.4.7.5. Estructura de archivo SQL:
1. **Comentarios** - descripción del propósito de la BD
2. **DROP TABLE** - para recreación (opcional)
3. **CREATE TABLE** - creación de todas las tablas
4. **ALTER TABLE** - adición de claves foráneas (si es necesario)
5. **CREATE INDEX** - índices para rendimiento
6. **INSERT** - datos de prueba (mínimo 2-3 registros por tabla)

---

#### 4.4.8. Mejores prácticas

##### 4.4.8.1. Nomenclatura
- **Entidades**: PascalCase o snake_case (uniformemente)
- **Campos**: snake_case con nombres claros
- **Relaciones**: Descripciones significativas en español

##### 4.4.8.2. Estructuración de campos
plantuml
entity Product {
  ' Clave primaria
  * id : int [PK]
  --
  ' Información principal
  * name : varchar(255)
  * description : text
  * sku : varchar(100) [UK]
  --
  ' Información de precios  
  * price : decimal(10,2)
  discount_price : decimal(10,2)
  --
  ' Relaciones
  * category_id : int [FK]
  * brand_id : int [FK]
  --
  ' Campos del sistema
  * is_active : boolean
  * created_at : timestamp
  * updated_at : timestamp
}


##### 4.4.8.3. Estilización (opcional)
plantuml
!define MAIN_ENTITY fill:#E3F2FD,stroke:#1976D2,stroke-width:2px
!define LOOKUP_ENTITY fill:#F3E5F5,stroke:#7B1FA2,stroke-width:2px
!define JUNCTION_ENTITY fill:#FFF3E0,stroke:#F57C00,stroke-width:2px

entity User <<MAIN_ENTITY>>
entity Role <<LOOKUP_ENTITY>>  
entity UserRole <<JUNCTION_ENTITY>>


---

#### 4.4.9. Ejemplos de escenarios

##### 4.4.9.1. Sistema de comercio electrónico
plantuml
@startuml
entity User {
  * id : int [PK]
  * email : varchar(255) [UK]
  * password_hash : varchar(255)
  * first_name : varchar(100)
  * last_name : varchar(100)
  * phone : varchar(20)
  * is_active : boolean
  * created_at : timestamp
  * updated_at : timestamp
}

entity Category {
  * id : int [PK]
  * name : varchar(255)
  * description : text
  * parent_id : int [FK]
  * is_active : boolean
}

entity Product {
  * id : int [PK]
  * name : varchar(255)
  * description : text
  * sku : varchar(100) [UK]
  * price : decimal(10,2)
  * stock_quantity : int
  * category_id : int [FK]
  * is_active : boolean
  * created_at : timestamp
}

entity Order {
  * id : int [PK]
  * user_id : int [FK]
  * status : varchar(50)
  * total_amount : decimal(10,2)
  * created_at : timestamp
}

entity OrderItem {
  * id : int [PK]
  * order_id : int [FK]
  * product_id : int [FK]
  * quantity : int
  * unit_price : decimal(10,2)
  * total_price : decimal(10,2)
}

' Relaciones
User ||--o{ Order : "realiza"
Category ||--o{ Product : "contiene"
Category ||--o{ Category : "incluye"
Order ||--o{ OrderItem : "contiene"
Product ||--o{ OrderItem : "incluido en"
@enduml


---

#### 4.4.10. Errores comunes

##### 4.4.9.1. ❌ Incorrecto:
plantuml
' Falta clave primaria
entity User {
  email : varchar(255)
  name : varchar(100)
}

' Relación muchos a muchos incorrecta
User ||--o{ Role : "tiene roles"


##### 4.4.9.2. ✅ Correcto:
plantuml
entity User {
  * id : int [PK]
  * email : varchar(255)
  * name : varchar(100)
}

entity UserRole {
  * user_id : int [PK, FK]
  * role_id : int [PK, FK]
}

entity Role {
  * id : int [PK]
  * name : varchar(100)
}

User ||--o{ UserRole
Role ||--o{ UserRole


---

#### 4.4.11. Lista de verificación de calidad

##### 4.4.11.1. Verificación estructural:
- [ ] ✅ Todas las entidades tienen clave primaria [PK]
- [ ] ✅ Claves foráneas [FK] marcadas correctamente
- [ ] ✅ Campos obligatorios marcados con símbolo *
- [ ] ✅ Campos agrupados lógicamente (separadores --)

##### 4.4.11.2. Verificación de normalización:
- [ ] ✅ **1NF**: Todos los campos son atómicos (sin valores compuestos)
- [ ] ✅ **2NF**: Sin dependencias parciales de clave compuesta
- [ ] ✅ **3NF**: Sin dependencias transitivas

##### 4.4.11.3. Verificación de relaciones:
- [ ] ✅ Relaciones 1:1 justificadas y correctas
- [ ] ✅ Relaciones 1:N tienen FK en tabla hija
- [ ] ✅ Relaciones N:M implementadas via tabla de unión
- [ ] ✅ Todos los FK referencian PK existentes

##### 4.4.11.4. Verificación de script SQL:
- [ ] ✅ **Archivo SQL creado** y adjunto a ERD
- [ ] ✅ **Todas las tablas** de ERD presentes en SQL
- [ ] ✅ **Tipos de datos** corresponden a especificación ERD
- [ ] ✅ **Claves primarias** definidas correctamente
- [ ] ✅ **Claves foráneas** creadas con relaciones correctas
- [ ] ✅ **Índices** añadidos para FK y campos frecuentemente usados
- [ ] ✅ **Datos de prueba** incluidos (mínimo 2-3 registros por tabla)
- [ ] ✅ **Sintaxis SQL** correcta para SQLite

##### 4.4.11.5. Verificación cualitativa:
- [ ] 🎯 Nombres corresponden a terminología de negocio
- [ ] 🎯 Estructura soporta todos los procesos de negocio
- [ ] 🎯 Sin redundancia de datos
- [ ] 🎯 Modelo es escalable

##### 4.4.11.6. Verificación de integración:
- [ ] 🔗 Entidades corresponden a objetos de Use Case
- [ ] 🔗 Relaciones reflejan reglas de negocio
- [ ] 🔗 Campos cubren todos los atributos de User Stories
- [ ] 🔗 Script SQL puede ejecutarse sin errores

**Objetivo**: Crear diagramas ERD con script SQL listo para implementación inmediata de BD.

---

#### 4.4.12. Recomendaciones de optimización

##### 4.4.12.1. Rendimiento:
- Índices para campos frecuentemente usados
- Desnormalización para consultas críticas
- Particionamiento de tablas grandes

##### 4.4.12.2. Mantenimiento:
- Nombres descriptivos de tablas y campos
- Comentarios para relaciones complejas
- Versionamiento de estructura

##### 4.4.12.3. Ejemplos de verificación final:
✅ "Tabla users normalizada a 3NF"  
✅ "Relación orders → order_items implementada correctamente"  
✅ "Todos los FK tienen índices correspondientes"  
✅ "Script SQL se ejecuta sin errores en SQLite"  

❌ "La tabla parece normal"  
❌ "Las relaciones funcionan"  
❌ "Los datos se guardan"

