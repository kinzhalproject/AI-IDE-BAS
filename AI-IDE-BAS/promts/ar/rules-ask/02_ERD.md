### 4.4. مخطط كيانات العلاقات (ERD)
**تعليمات إنشاء مخططات كيانات العلاقات باستخدام PlantUML للوكيل الذكي**

#### 4.4.1. المحتوى
1. [أساسيات الصياغة](#أساسيات-الصياغة)
2. [مقاييس الجودة](#مقاييس-الجودة)
3. [قواعد التحقق](#قواعد-التحقق)
4. [العناصر الأساسية](#العناصر-الأساسية)
5. [أنواع العلاقات](#أنواع-العلاقات)
6. [إنشاء نص SQL](#إنشاء-نص-sql)
7. [أفضل الممارسات](#أفضل-الممارسات)
8. [أمثلة سيناريوهات](#أمثلة-سيناريوهات)
9. [قائمة فحص الجودة](#قائمة-فحص-الجودة)

---

#### 4.4.2. أساسيات الصياغة

##### 4.4.2.1. هيكل الملف الأساسي:
plantuml
@startuml
!define ENTITY_STYLE fill:#E1F5FE,stroke:#01579B,stroke-width:2px

entity "اسم_الكيان" as alias {
  * حقل1 : نوع [PK]
  --
  * حقل2 : نوع [NOT NULL]
  حقل3 : نوع [NULL]
  --
  حقل4 : نوع [FK]
}

@enduml


##### 4.4.2.2. الرموز:
- `*` - حقل إلزامي (NOT NULL)
- `--` - فاصل أقسام  
- `[PK]` - المفتاح الأساسي
- `[FK]` - المفتاح الخارجي
- `[UK]` - المفتاح الفريد

---

#### 4.4.3. مقاييس الجودة

##### 4.4.3.1. المؤشرات المستهدفة:
- **التطبيع**: الامتثال لـ 3NF (الصيغة العادية الثالثة)
- **تغطية العلاقات**: 100% من المفاتيح الخارجية يجب أن تكون متصلة بالمفاتيح الأساسية
- **التسمية**: توحيد أسماء الكيانات والحقول
- **تجميع الحقول**: الفصل المنطقي إلى أقسام
- **الامتثال لـ SQL**: 100% توافق بين ERD ونص SQL

##### 4.4.3.2. نظام التقييم:
- **جودة ممتازة**: 3NF + جميع العلاقات + التوحيد + SQL = ≥90%
- **جودة جيدة**: 2NF + معظم العلاقات + SQL = 70-89%
- **يحتاج تحسين**: مشاكل في التطبيع أو SQL = <70%

---

#### 4.4.4. قواعد التحقق

##### 4.4.4.1. الفحوصات التلقائية:

✓ جميع الكيانات لديها مفتاح أساسي [PK]
✓ المفاتيح الخارجية [FK] متصلة بالـ [PK] المقابلة
✓ العلاقات مصنفة بشكل صحيح (1:1, 1:N, N:M)
✓ الأسماء بنمط موحد (snake_case أو camelCase)
✓ الحقول الإلزامية محددة بالرمز *
✓ تم الحفاظ على تجميع الحقول (فوارق --)
✓ نص SQL يتوافق تمامًا مع مخطط ERD
✓ جميع الجداول في SQL لديها كيانات مقابلة في ERD


---

#### 4.4.5. العناصر الأساسية

##### 4.4.5.1. إنشاء كيان مع التجميع:
plantuml
entity User {
  ' المفتاح الأساسي
  * id : int [PK]
  --
  ' المعلومات الرئيسية
  * email : varchar(255) [UK]
  * password_hash : varchar(255)
  first_name : varchar(100)
  last_name : varchar(100)
  --
  ' الحقول النظامية
  * created_at : timestamp
  * updated_at : timestamp
  deleted_at : timestamp
}


##### 4.4.5.2. الأقسام الموصى بها:
1. **المفتاح الأساسي** - دائمًا أولاً
2. **المعلومات الرئيسية** - الحقول التجارية
3. **العلاقات** - المفاتيح الخارجية
4. **الحقول النظامية** - created_at, updated_at, deleted_at

---

#### 4.4.6. أنواع العلاقات

##### 4.4.6.1. صياغة العلاقات:
| نوع العلاقة | الصياغة | مثال الاستخدام |
|-----------|-----------|---------------------|
| **1:1** | `\|\|--\|\|` | User ↔ UserProfile |
| **1:N** | `\|\|--o{` | Category → Products |
| **N:M** | `}o--o{` | Products ↔ Tags (عبر جدول وصلة) |
| **1:0..1** | `\|\|--o\|` | User → PasswordReset |

##### 4.4.6.2. أمثلة العلاقات:

###### 4.4.6.2.1. واحد لواحد (1:1)
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

User ||--|| UserProfile : "يمتلك ملفًا"


###### 4.4.6.2.2. واحد لكثير (1:N)
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

Category ||--o{ Product : "يحتوي"


###### 4.4.6.2.3. كثير لكثير (N:M) عبر جدول وصلة
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

#### 4.4.7. إنشاء نص SQL

##### 4.4.7.1. المتطلب الإلزامي:
**مع كل مخطط ERD، من الإلزامي إنشاء نص SQL مقابلة لقاعدة بيانات حقيقية (يفضل SQLite).**

##### 4.4.7.2. مبادئ التوافق ERD → SQL:
- **كل كيان** = جدول في SQL
- **كل حقل ERD** = عمود في الجدول
- **علاقات ERD** = FOREIGN KEY في SQL
- **أنواع البيانات** = أنواع SQL المقابلة

##### 4.4.7.3. مثال التوافق:

###### 4.4.7.3.1. مخطط ERD:
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

User ||--o{ Order : "يضع"


###### 4.4.7.3.2. نص SQL المقابل (SQLite):
sql
-- إنشاء قاعدة بيانات SQLite
-- الملف: database.sql

-- جدول المستخدمين
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- جدول الطلبات
CREATE TABLE orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    status VARCHAR(50) NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- فهارس للتحسين
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);

-- إدراج بيانات الاختبار
INSERT INTO users (email, password_hash, first_name, last_name) VALUES
('user1@example.com', 'hash1', 'إيفان', 'إيفانوف'),
('user2@example.com', 'hash2', 'بيتر', 'بيتروف');

INSERT INTO orders (user_id, status, total_amount) VALUES
(1, 'completed', 1500.00),
(1, 'pending', 750.50),
(2, 'completed', 2200.00);


##### 4.4.7.4. توافق أنواع البيانات:

| نوع ERD | نوع SQLite | الوصف |
|---------|------------|----------|
| `int` | `INTEGER` | أعداد صحيحة |
| `varchar(n)` | `VARCHAR(n)` | سلاسل بطول ثابت |
| `text` | `TEXT` | نص بطول غير محدود |
| `decimal(m,n)` | `DECIMAL(m,n)` | أعداد عشرية |
| `timestamp` | `TIMESTAMP` | التاريخ والوقت |
| `boolean` | `BOOLEAN` | نوع منطقي |

##### 4.4.7.5. هيكل ملف SQL:
1. **تعليقات** - وصف غرض قاعدة البيانات
2. **DROP TABLE** - لإعادة الإنشاء (اختياري)
3. **CREATE TABLE** - إنشاء جميع الجداول
4. **ALTER TABLE** - إضافة المفاتيح الخارجية (إذا لزم)
5. **CREATE INDEX** - فهارس للأداء
6. **INSERT** - بيانات الاختبار (حد أدنى 2-3 سجلات لكل جدول)

---

#### 4.4.8. أفضل الممارسات

##### 4.4.8.1. التسمية
- **الكيانات**: PascalCase أو snake_case (بشكل موحد)
- **الحقول**: snake_case بأسماء واضحة
- **العلاقات**: أوصاف ذات معنى باللغة العربية

##### 4.4.8.2. هيكلة الحقول
plantuml
entity Product {
  ' المفتاح الأساسي
  * id : int [PK]
  --
  ' المعلومات الرئيسية
  * name : varchar(255)
  * description : text
  * sku : varchar(100) [UK]
  --
  ' معلومات الأسعار  
  * price : decimal(10,2)
  discount_price : decimal(10,2)
  --
  ' العلاقات
  * category_id : int [FK]
  * brand_id : int [FK]
  --
  ' الحقول النظامية
  * is_active : boolean
  * created_at : timestamp
  * updated_at : timestamp
}


##### 4.4.8.3. التنسيق (اختياري)
plantuml
!define MAIN_ENTITY fill:#E3F2FD,stroke:#1976D2,stroke-width:2px
!define LOOKUP_ENTITY fill:#F3E5F5,stroke:#7B1FA2,stroke-width:2px
!define JUNCTION_ENTITY fill:#FFF3E0,stroke:#F57C00,stroke-width:2px

entity User <<MAIN_ENTITY>>
entity Role <<LOOKUP_ENTITY>>  
entity UserRole <<JUNCTION_ENTITY>>


---

#### 4.4.9. أمثلة سيناريوهات

##### 4.4.9.1. نظام تجارة إلكترونية
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

' العلاقات
User ||--o{ Order : "يضع"
Category ||--o{ Product : "يحتوي"
Category ||--o{ Category : "يتضمن"
Order ||--o{ OrderItem : "يحتوي"
Product ||--o{ OrderItem : "مضمن في"
@enduml


---

#### 4.4.10. الأخطاء الشائعة

##### 4.4.9.1. ❌ خطأ:
plantuml
' مفقود مفتاح أساسي
entity User {
  email : varchar(255)
  name : varchar(100)
}

' علاقة كثير لكثير خاطئة
User ||--o{ Role : "يمتلك أدوار"


##### 4.4.9.2. ✅ صحيح:
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

#### 4.4.11. قائمة فحص الجودة

##### 4.4.11.1. الفحص الهيكلي:
- [ ] ✅ جميع الكيانات لديها مفتاح أساسي [PK]
- [ ] ✅ المفاتيح الخارجية [FK] محددة بشكل صحيح
- [ ] ✅ الحقول الإلزامية محددة بالرمز *
- [ ] ✅ الحقول مجمعة منطقيًا (فوارق --)

##### 4.4.11.2. فحص التطبيع:
- [ ] ✅ **1NF**: جميع الحقول ذرية (لا توجد قيم مركبة)
- [ ] ✅ **2NF**: لا توجد تبعيات جزئية للمفتاح المركب
- [ ] ✅ **3NF**: لا توجد تبعيات متعدية

##### 4.4.11.3. فحص العلاقات:
- [ ] ✅ العلاقات 1:1 مبررة وصحيحة
- [ ] ✅ العلاقات 1:N لديها FK في الجدول الفرعي
- [ ] ✅ العلاقات N:M منفذة عبر جدول وصلة
- [ ] ✅ جميع FK تشير إلى PK موجودة

##### 4.4.11.4. فحص نص SQL:
- [ ] ✅ **تم إنشاء ملف SQL** ومرفق مع ERD
- [ ] ✅ **جميع الجداول** من ERD موجودة في SQL
- [ ] ✅ **أنواع البيانات** تتوافق مع مواصفات ERD
- [ ] ✅ **المفاتيح الأساسية** محددة بشكل صحيح
- [ ] ✅ **المفاتيح الخارجية** منشأة بعلاقات صحيحة
- [ ] ✅ **الفهارس** مضافة لـ FK والحقول المستخدمة بكثرة
- [ ] ✅ **بيانات الاختبار** مضمنة (حد أدنى 2-3 سجلات لكل جدول)
- [ ] ✅ **صياغة SQL** صحيحة لـ SQLite

##### 4.4.11.5. الفحص النوعي:
- [ ] 🎯 الأسماء تتوافق مع المصطلحات التجارية
- [ ] 🎯 الهيكل يدعم جميع العمليات التجارية
- [ ] 🎯 لا توجد تكرار بيانات
- [ ] 🎯 النموذج قابل للتوسع

##### 4.4.11.6. الفحص التكاملي:
- [ ] 🔗 الكيانات تتوافق مع الكائنات من Use Case
- [ ] 🔗 العلاقات تعكس القواعد التجارية
- [ ] 🔗 الحقول تغطي جميع السمات من User Stories
- [ ] 🔗 نص SQL يمكن تنفيذه بدون أخطاء

**الهدف**: إنشاء مخططات ERD مع نص SQL جاهز لنشر قاعدة البيانات فورًا.

---

#### 4.4.12. توصيات التحسين

##### 4.4.12.1. الأداء:
- فهارس للحقول المستخدمة بكثرة
- إزالة التطبيع للاستعلامات الحرجة
- تجزئة الجداول الكبيرة

##### 4.4.12.2. الصيانة:
- أسماء جداول وحقول توضيحية
- تعليقات للعلاقات المعقدة
- إصدارات الهيكل

##### 4.4.12.3. أمثلة الفحص النهائي:
✅ "جدول users مطبيع لـ 3NF"  
✅ "علاقة orders → order_items منفذة بشكل صحيح"  
✅ "جميع FK لديها فهارس مقابلة"  
✅ "نص SQL ينفذ بدون أخطاء في SQLite"  

❌ "الجدول يبدو طبيعيًا"  
❌ "العلاقات تعمل"  
❌ "البيانات محفوظة"

