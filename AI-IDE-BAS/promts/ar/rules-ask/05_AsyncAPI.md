### 4.7. مواصفات Kafka Message Broker بتنسيق AsyncAPI

**تعليمات لوصف وسيط رسائل Kafka**

**لغة التنفيذ:** العربية
**تنسيق النتيجة:** مواصفات AsyncAPI بتنسيق YAML
**مكان الحفظ:** مجلد المشروع باسم `{feature-name}_asyncapi.yaml`
**المعيار:** AsyncAPI 2.6.0 أو أعلى

#### 4.7.1. المحتوى
1. [تنسيق ملف الإخراج](#تنسيق-ملف-الإخراج)
2. [قالب وصف بنية Kafka](#قالب-وصف-بنية-Kafka)
3. [مقاييس الجودة](#مقاييس-الجودة)
4. [قواعد التحقق](#قواعد-التحقق)
5. [منهجية التصميم](#منهجية-التصميم)
6. [أمثلة وصف Kafka](#أمثلة-وصف-Kafka)
7. [معايير الجودة](#معايير-الجودة)
8. [قائمة المراجعة لوكيل الذكاء الاصطناعي](#قائمة-المراجعة-لوكيل-الذكاء-الاصطناعي)

---

#### 4.7.2. تنسيق ملف الإخراج

##### 4.7.2.1. بنية ملف YAML الإلزامية لـ AsyncAPI:

yaml
# {feature-name}_asyncapi.yaml
asyncapi: '2.6.0'
info:
  title: '{Feature Name} Kafka Events API'
  version: '1.0.0'
  description: |
    وصف الأحداث غير المتزامنة لـ {feature-name} عبر Apache Kafka
    
    ## الغرض
    {وصف غرض نظام الأحداث}
    
    ## الدور المعماري
    {الدور في البنية العامة للنظام}
    
  contact:
    name: 'فريق التطوير'
    email: 'dev-team@company.com'
  license:
    name: 'MIT'

servers:
  kafka-cluster:
    url: '{kafka-broker-urls}'
    protocol: kafka
    description: 'عنقود Kafka للإنتاج'
    bindings:
      kafka:
        schemaRegistryUrl: 'http://schema-registry:8081'
        schemaRegistryVendor: 'confluent'
    security:
      - saslScram: []

defaultContentType: application/json

channels:
  'domain.entity.events':
    description: 'أحداث دورة حياة {entity}'
    bindings:
      kafka:
        topic: 'domain.entity.events'
        partitions: 12
        replicas: 3
        configs:
          retention.ms: 2592000000  # 30 يوم
          cleanup.policy: 'delete'
          compression.type: 'snappy'
    publish:
      summary: 'نشر أحداث {entity}'
      operationId: 'publishEntityEvent'
      bindings:
        kafka:
          groupId: 'entity-producers'
          clientId: 'entity-service'
          acks: 'all'
          key:
            type: string
            description: 'معرف الكيان للتقسيم'
      message:
        $ref: '#/components/messages/EntityEvent'
    subscribe:
      summary: 'الاشتراك في أحداث {entity}'
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
      title: 'حدث الكيان'
      summary: 'حدث تغيير حالة الكيان'
      contentType: application/json
      headers:
        type: object
        properties:
          eventType:
            type: string
            enum: ['CREATED', 'UPDATED', 'DELETED']
          source:
            type: string
            description: 'مصدر الحدث'
          timestamp:
            type: string
            format: date-time
      payload:
        $ref: '#/components/schemas/EntityEventPayload'
      examples:
        - name: 'entityCreated'
          summary: 'إنشاء الكيان'
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
          description: 'المعرف الفريد للكيان'
        status:
          type: string
          enum: ['ACTIVE', 'INACTIVE', 'PENDING']
          description: 'حالة الكيان'
        createdAt:
          type: string
          format: date-time
          description: 'وقت إنشاء الحدث'
        metadata:
          type: object
          description: 'بيانات إضافية'
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
      description: 'مصادقة SASL/SCRAM'

  parameters:
    EntityId:
      description: 'معرف الكيان'
      schema:
        type: string
        format: uuid

# التكوين الإضافي لـ Kafka (في قسم x-kafka-config)
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


##### 4.7.2.2. قواعد تسمية الملفات:
- `{feature-name}_asyncapi.yaml` - للميزات الرئيسية
- `{domain}_events_asyncapi.yaml` - للحلول المجالية
- `{system-name}_kafka_asyncapi.yaml` - لعمليات التكامل النظامية

**أمثلة:**
- `banking_transfer_asyncapi.yaml`
- `ecommerce_orders_asyncapi.yaml`
- `notification_events_asyncapi.yaml`

##### 4.7.2.3. الأقسام الإلزامية لـ AsyncAPI:
1. **asyncapi**: إصدار المواصفات (2.6.0+)
2. **info**: البيانات الوصفية لـ API
3. **servers**: تكوين عنقود Kafka
4. **channels**: المواضيع وتكوينها
5. **components**: مخططات الرسائل، مخططات الأمان
6. **x-kafka-config**: تكوين Kafka الموسع (اختياري)

---

#### 4.7.3. قالب وصف بنية Kafka

##### 4.7.3.1. البنية الإلزامية (9 كتل رئيسية):

| № | الكتلة | الوصف | الإلزامية |
|---|------|----------|----------------|
| 1 | **نظرة عامة** | غرض Kafka في النظام، الدور في البنية | ✅ إلزامي |
| 2 | **المواضيع والمخططات** | بنية المواضيع، مخططات الرسائل، التقسيم | ✅ إلزامي |
| 3 | **المنتجون** | خدمات المرسل، استراتيجيات الإرسال | ✅ إلزامي |
| 4 | **المستهلكون** | خدمات المستقبل، مجموعات المستهلكين | ✅ إلزامي |
| 5 | **تكوين العنقود** | إعدادات الوسطاء، الاستنساخ، تحمل الأعطال | ✅ إلزامي |
| 6 | **مخططات البيانات** | مخططات Avro/JSON، Schema Registry، إدارة الإصدارات | ✅ إلزامي |
| 7 | **الأمان** | المصادقة، التفويض، التشفير | 🔶 موصى به |
| 8 | **المراقبة والتنبيهات** | المقاييس، التسجيل، SLA | 🔶 موصى به |
| 9 | **الأداء** | الإنتاجية، زمن الوصول، التحسينات | 🔶 موصى به |

---

#### 4.7.4. مقاييس الجودة

##### 4.7.4.1. المؤشرات المستهدفة:
- **اكتمال البنية**: 6/6 كتل إلزامية = 100%
- **تغطية المواضيع**: وصف جميع المواضيع الرئيسية للنظام
- **مخططات البيانات**: 100% من المواضيع تحتوي على وصف مخطط
- **مجموعات المستهلكين**: فصل واضح للمسؤوليات
- **تحمل الأعطال**: الحد الأدنى 2x استنساخ للمواضيع الحرجة

##### 4.7.4.2. نظام التقييم:
- **جاهز للإنتاج**: 95-100% امتثال + أمان + مراقبة
- **جودة ممتازة**: 85-94% امتثال للمقاييس
- **جودة جيدة**: 70-84% امتثال للمقاييس  
- **يحتاج تحسين**: <70% امتثال للمقاييس

---

#### 4.7.5. قواعد التحقق

##### 4.7.5.1. فحوصات تلقائية:

###### 4.7.5.1.1. التحقق الهيكلي

✓ جميع الكتل الإلزامية الـ 6 موجودة
✓ كل موضوع يحتوي على وصف مخطط
✓ المنتجون والمستهلكون محددون بوضوح
✓ استراتيجية التقسيم محددة


###### 4.7.5.1.2. التحقق المعماري

✓ المواضيع مرتبطة منطقياً بمجالات النظام
✓ مخططات البيانات تتوافق مع مواصفات API
✓ مجموعات المستهلكين لا تتداخل في المسؤولية
✓ الاستنساخ مُهيأ للمواضيع الحرجة


###### 4.7.5.1.3. التحقق الإنتاجي

✓ سياسات الاحتفاظ محددة لجميع المواضيع
✓ استراتيجية معالجة الأخطاء موضحة
✓ المراقبة والتنبيهات مهيأة
✓ إجراءات التعافي من الكوارث موثقة


---

#### 4.7.6. منهجية التصميم

##### 4.7.6.1. الخطوة 1: تحليل الأحداث المجالية
**مصادر التحليل:**
- User Stories و Use Cases
- مخططات التسلسل
- مخطط بنية النظام
- مواصفات API (للعمليات المتزامنة)

##### 4.7.6.2. الخطوة 2: تحديد الأحداث
**أنواع الأحداث:**
- **الأحداث المجالية**: تغييرات حالة كيانات الأعمال
- **أحداث التكامل**: التواصل بين الخدمات
- **أحداث النظام**: الأحداث التقنية (السجلات، المقاييس)
- **أحداث الأوامر**: أوامر غير متزامنة

##### 4.7.6.3. الخطوة 3: تصميم المواضيع
**مبادئ التسمية:**

{domain}.{entity}.{event-type}
أمثلة:
- banking.transfer.created
- banking.transfer.completed
- ecommerce.order.placed
- notification.email.sent


##### 4.7.6.4. الخطوة 4: تعريف المخططات
**تنسيقات المخططات:**
- **Avro**: كتابة صارمة، تطور المخطط
- **JSON Schema**: مرونة، بساطة
- **Protobuf**: أداء، توافق

##### 4.7.6.5. الخطوة 5: تخطيط الأقسام
**استراتيجيات التقسيم:**
- حسب معرف المستخدم (قائم على المستخدم)
- حسب معرف الكيان (قائم على الكيان)
- حسب الطوابع الزمنية (قائم على الوقت)
- Round-robin (توزيع متساو)

##### 4.7.6.6. الخطوة 6: تهيئة المستهلكين
**أنماط الاستهلاك:**
- **مستهلك واحد**: معالجة بالترتيب
- **مجموعة مستهلكين**: معالجة متوازية
- **مجموعات متعددة**: منطق أعمال مختلف

---

#### 4.7.7. أمثلة وصف Kafka

##### 4.7.7.1. المثال 1: نظام التحويلات البنكية

###### 4.7.7.1.1. نظرة عامة
**الغرض:** معالجة غير متزامنة للتحويلات البنكية مع ضمانات التسليم ومراجعة العمليات.
**الدور في البنية:** ناقل الأحداث المركزي بين خدمات Banking، Notification، Audit، Fraud Detection الميكروية.

###### 4.7.7.1.2. المواضيع والمخططات

**2.1. الموضوع: `banking.transfer.events`**
yaml
الغرض: أحداث دورة حياة التحويلات
الأقسام: 12 (حسب account_id % 12)
عامل الاستنساخ: 3
الاحتفاظ: 30 يوم
سياسة التنظيف: delete


**مخطط الرسالة (Avro):**
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


**2.2. الموضوع: `banking.notifications.requests`**
yaml
الغرض: طلبات إرسال الإشعارات
الأقسام: 6 (حسب user_id % 6)
عامل الاستنساخ: 2
الاحتفاظ: 7 أيام


**2.3. الموضوع: `banking.audit.log`**
yaml
الغرض: مراجعة جميع العمليات للامتثال
الأقسام: 1 (ترتيب صارم)
عامل الاستنساخ: 3
الاحتفاظ: 7 سنوات (متطلبات الامتثال)
سياسة التنظيف: compact


###### 4.7.7.1.3. المنتجون

**3.1. خدمة التحويل (المنتج الرئيسي)**
yaml
الخدمة: transfer-service
المواضيع: banking.transfer.events
الاستراتيجية: 
  - عدم التكرار: مفعل
  - Acks: all (ضمان الكتابة على جميع النسخ)
  - إعادة المحاولة: 10
  - حجم الدفعة: 100KB
  - الانتظار: 5ms
معالجة الأخطاء:
  - إعادة المحاولة مع exponential backoff
  - صف الرسائل الميتة: banking.transfer.dlq


**مثال الكود:**
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


**3.2. خدمة الإشعارات**
yaml
الخدمة: notification-service  
المواضيع: banking.notifications.requests
الاستراتيجية: Fire-and-forget (acks=1)


###### 4.7.7.1.4. المستهلكون

**4.1. خدمة كشف الاحتيال**
yaml
المجموعة: fraud-detection-group
المواضيع: banking.transfer.events
الاستراتيجية:
  - الالتزام التلقائي: false (إقرار يدوي)
  - الحد الأقصى للسجلات المسحوبة: 50
  - مهلة الجلسة: 30s
  - تخصيص الأقسام: cooperative-sticky
المنطق:
  - تحليل الاحتيال
  - نشر النتيجة في fraud.detection.results


**4.2. خدمة المراجعة**
yaml
المجموعة: audit-group
المواضيع: 
  - banking.transfer.events
  - banking.notifications.requests
الاستراتيجية:
  - الإزاحة الأولية (معالجة جميع الأحداث)
  - المعالجة الدفعية (100 سجل في المرة)
  - معالجة غير مكررة


**4.3. مستهلك الإشعارات**
yaml
المجموعة: notification-consumers
المواضيع: banking.notifications.requests
التوازي: 3 نسخ
سياسة إعادة المحاولة:
  - الحد الأقصى لإعادة المحاولة: 5
  - التراجع: exponential (1s, 2s, 4s, 8s, 16s)
  - صف الرسائل الميتة: banking.notifications.dlq


###### 4.7.7.1.5. تكوين العنقود

**5.1. الوسطاء**
yaml
عدد الوسطاء: 3
المكان: 3 مناطق توفر مختلفة
التكوين:
  - log.retention.hours: 168 (7 أيام افتراضياً)
  - log.segment.bytes: 1GB
  - num.network.threads: 8
  - num.io.threads: 8
  - socket.send.buffer.bytes: 102400
  - socket.receive.buffer.bytes: 102400


**5.2. Zookeeper**
yaml
العقد: 3 (أغلبية)
التكوين:
  - tickTime: 2000
  - initLimit: 10  
  - syncLimit: 5
  - maxClientCnxns: 60


**5.3. الاستنساخ**
yaml
المواضيع الحرجة (transfers, audit): RF=3, min.insync.replicas=2
المواضيع العادية (notifications): RF=2, min.insync.replicas=1
المواضيع الاختبارية: RF=1


###### 4.7.7.1.6. مخططات البيانات

**6.1. Schema Registry**
yaml
URL: http://schema-registry:8081
التوافق: BACKWARD
إدارة الإصدارات: تلقائية
المواضيع:
  - banking.transfer.events-value (v1, v2)
  - banking.notifications.requests-value (v1)
  - banking.audit.log-value (v1)


**6.2. تطور المخطط**
json
// v1 -> v2: إضافة حقل metadata
{
  "type": "record",
  "name": "TransferEvent",
  "fields": [
    // ... الحقول الموجودة ...
    {"name": "metadata", "type": ["null", "string"], "default": null}
  ]
}


###### 4.7.7.1.7. الأمان

**7.1. المصادقة**
yaml
البروتوكول: SASL_SSL
الآلية: SCRAM-SHA-512
المستخدمون:
  - transfer-service: صلاحية RW لـ banking.transfer.*
  - notification-service: صلاحية RW لـ banking.notifications.*
  - audit-service: صلاحية R لجميع المواضيع
  - fraud-detection: صلاحية R لـ banking.transfer.events


**7.2. التفويض (ACL)**
bash
# خدمة التحويل
kafka-acls --add --allow-principal User:transfer-service \
  --operation Write --topic banking.transfer.events

# كشف الاحتيال
kafka-acls --add --allow-principal User:fraud-detection \
  --operation Read --topic banking.transfer.events \
  --group fraud-detection-group


**7.3. التشفير**
yaml
أثناء النقل: TLS 1.3
في التخزين: تشفير القرص LUKS
Schema Registry: mTLS + مصادقة أساسية


###### 4.7.7.1.8. المراقبة والتنبيهات

**8.1. المقاييس الرئيسية**
yaml
مقاييس الوسطاء:
  - kafka.server:type=BrokerTopicMetrics,name=MessagesInPerSec
  - kafka.server:type=BrokerTopicMetrics,name=BytesInPerSec
  - kafka.server:type=ReplicaManager,name=LeaderCount

تأخر المستهلك:
  - kafka.consumer:type=consumer-fetch-manager-metrics,client-id=*

مقاييس المنتج:
  - kafka.producer:type=producer-metrics,client-id=*


**8.2. التنبيهات**
yaml
الحرجة:
  - تأخر المستهلك > 10000 رسالة
  - الوسيط غير متوفر > 1 دقيقة
  - استخدام القرص > 85%

التحذيرات:
  - أخطاء المنتج > 1%
  - تأخر الاستنساخ > 5 ثوان
  - إعادة موازنة مجموعة المستهلكين


**8.3. لوحات التحكم**
yaml
لوحات Grafana:
  - نظرة عامة على عنقود Kafka
  - أداء المواضيع
  - حالة مجموعات المستهلكين
  - أداء المنتج
  - معدلات الخطأ


###### 4.7.7.1.9. الأداء

**9.1. خصائص الإنتاجية**
yaml
المؤشرات المستهدفة:
  - التحويلات: 10,000 رسالة/ثانية
  - الإشعارات: 5,000 رسالة/ثانية
  - المراجعة: 15,000 رسالة/ثانية

زمن الوصول (p99):
  - المنتج: < 50ms
  - المستهلك: < 100ms
  - من البداية للنهاية: < 200ms


**9.2. التحسينات**
yaml
المنتج:
  - حجم الدفعة: 100KB
  - الانتظار: 5ms
  - الضغط: snappy

المستهلك:
  - حجم الجلب: 1MB
  - الحد الأقصى للسجلات المسحوبة: 500
  - المعالجة المتوازية

الوسيط:
  - مقطع السجل: 1GB
  - تفريغ السجل: غير متزامن
  - ذاكرة التخزين المؤقت للصفحة: 70% من الذاكرة العشوائية


---

##### 4.7.7.2. المثال 2: منصة التجارة الإلكترونية

###### 4.7.7.2.1. نظرة عامة
**الغرض:** بنية قائمة على الأحداث للتجارة الإلكترونية مع معالجة الطلبات، المخزون، والإشعارات.
**الدور في البنية:** ناقل الأحداث الرئيسي بين خدمات Order Service، Inventory Service، Payment Service، Notification Service.

###### 4.7.7.2.2. المواضيع والمخططات

**2.1. الموضوع: `ecommerce.orders.events`**
yaml
الغرض: أحداث دورة حياة الطلبات
الأقسام: 8 (حسب تجزئة order_id)
عامل الاستنساخ: 2
الاحتفاظ: 14 يوم


**المخطط (JSON Schema):**
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


**2.2. الموضوع: `ecommerce.inventory.updates`**
yaml
الغرض: تحديثات مخزون المنتجات
الأقسام: 4 (حسب تجزئة product_id)
عامل الاستنساخ: 2
الاحتفاظ: 7 أيام
سياسة التنظيف: compact (أحدث حالة)


**2.3. الموضوع: `ecommerce.payments.events`**
yaml
الغرض: أحداث المدفوعات
الأقسام: 6
عامل الاستنساخ: 3 (بيانات حرجة)
الاحتفاظ: 365 يوم (امتثال)


###### 4.7.7.2.3. المنتجون

**3.1. خدمة الطلبات**
yaml
المواضيع: ecommerce.orders.events
التكوين:
  - acks: all
  - enable.idempotence: true
  - retries: Integer.MAX_VALUE
  - max.in.flight.requests.per.connection: 5

نمط Outbox:
  - الكتابة المعاملية في قاعدة البيانات + Kafka
  - ضمانات الاتساق النهائي


**3.2. خدمة المخزون**
yaml
المواضيع: ecommerce.inventory.updates
الاستراتيجية: موضوع مضغوط للحالة الحالية


###### 4.7.7.2.4. المستهلكون

**4.1. خدمة الدفع**
yaml
المجموعة: payment-processors
المواضيع: ecommerce.orders.events
المرشح: status = "PLACED"
المنطق: بدء الدفع
النتيجة: النشر في ecommerce.payments.events


**4.2. خدمة المخزون**  
yaml
المجموعة: inventory-updaters
المواضيع: ecommerce.orders.events
المنطق: حجز/تحرير المنتجات
عدم التكرار: حسب order_id + item_id


**4.3. خدمة الإشعارات**
yaml
المجموعة: notification-senders
المواضيع: 
  - ecommerce.orders.events
  - ecommerce.payments.events
التوازي: 5 مستهلكين
إعادة المحاولة: 3 محاولات مع التراجع


###### 4.7.7.2.5. تكوين العنقود

**5.1. النشر**
yaml
البيئة: Kubernetes
الوسطاء: 3 pods
الموارد:
  - وحدة المعالجة المركزية: 2 نواة
  - الذاكرة: 4GB
  - التخزين: 100GB SSD لكل وسيط


**5.2. إعدادات الأداء**
yaml
log.retention.bytes: 10GB لكل قسم
log.segment.bytes: 512MB
compression.type: snappy
num.replica.fetchers: 4


###### 4.7.7.2.6. المراقبة

**6.1. مقاييس الأعمال**
yaml
- الطلبات المعالجة في الدقيقة
- معدل نجاح الدفع
- تأخر مزامنة المخزون
- معدل تسليم إشعارات العملاء


**6.2. المقاييس التقنية**
yaml
- تأخر المستهلك لكل موضوع
- إنتاجية المنتج
- معدلات الخطأ حسب الخدمة
- توزيع الأقسام


---

#### 4.7.8. معايير الجودة للذكاء الاصطناعي

##### 4.7.8.1. النضج المعماري
- **إلزامي**: جميع الكتل الرئيسية الـ 6 مملوءة
- **الإنتاج**: تمت إضافة كتل الأمان، المراقبة، الأداء
- **المؤسسة**: تمت إضافة التعافي من الكوارث، الامتثال، الحوكمة

##### 4.7.8.2. التفصيل التقني
- **المواضيع**: مخطط تقسيم واضح وسياسات احتفاظ
- **المخططات**: مخططات Avro/JSON Schema صالحة مع أمثلة
- **التكوين**: إعدادات واقعية للحمل المستهدف
- **الأمان**: ACL، المصادقة، التشفير

##### 4.7.8.3. الجاهزية التشغيلية
- **المراقبة**: المقاييس الرئيسية والتنبيهات محددة
- **معالجة الأخطاء**: DLQ، سياسات إعادة المحاولة، قواطع الدائرة
- **الأداء**: SLA، متطلبات الإنتاجية وزمن الوصول
- **التعافي من الكوارث**: إجراءات النسخ الاحتياطي، الاستعادة، تبديل الخوادم

##### 4.7.8.4. التكامل مع النظام
- **الأحداث المجالية**: تتوافق مع منطق الأعمال من Use Cases
- **تكامل API**: تكمل بنية REST API
- **تدفق البيانات**: متسقة مع مخططات التسلسل
- **الخدمات**: تتوافق مع بنية المكونات

---

#### 4.7.9. قائمة المراجعة لوكيل الذكاء الاصطناعي

##### 4.7.9.1. التحقق الإلزامي:
- [ ] ✅ تم إنشاء ملف YAML لـ AsyncAPI بالاسم الصحيح
- [ ] ✅ تم تحديد إصدار AsyncAPI (2.6.0+)
- [ ] ✅ قسم info مملوء بالكامل
- [ ] ✅ Servers يحتوي على تكوين Kafka
- [ ] ✅ Channels تصف جميع المواضيع
- [ ] ✅ كل channel يحتوي على عمليات publish/subscribe
- [ ] ✅ Components تحتوي على مخططات الرسائل
- [ ] ✅ تم تعريف استراتيجية التقسيم في bindings
- [ ] ✅ تم تهيئة الاستنساخ في kafka bindings
- [ ] ✅ تم وصف سياسات الاحتفاظ في configs
- [ ] ✅ مخططات البيانات صالحة (JSON Schema)
- [ ] ✅ تم تحديد مجموعات المستهلكين في bindings
- [ ] ✅ بناء جملة YAML لـ AsyncAPI صحيح

##### 4.7.9.2. التحقق النوعي:
- [ ] 🎯 المواضيع مرتبطة منطقياً بالمجالات
- [ ] 🎯 المخططات تدعم التطور (التوافق الخلفي)
- [ ] 🎯 تم وصف معالجة الأخطاء عبر DLQ
- [ ] 🎯 تم ضمان المعالجة غير المكررة
- [ ] 🎯 تم تكوين إقرارات المنتج بشكل صحيح
- [ ] 🎯 تم تعريف إدارة إزاحة المستهلك

##### 4.7.9.3. التحقق من الجاهزية للإنتاج:
- [ ] 🚀 الأمان: تم تكوين SASL/SSL، ACL
- [ ] 🚀 المراقبة: تم تعريف المقاييس والتنبيهات
- [ ] 🚀 الأداء: تم وصف SLA والتحسينات
- [ ] 🚀 إجراءات النسخ الاحتياطي والتعافي من الكوارث
- [ ] 🚀 تم تكوين Schema Registry
- [ ] 🚀 مراقبة تأخر المستهلك
- [ ] 🚀 معالجة صف الرسائل الميتة
- [ ] 🚀 تخطيط السعة (الأقسام، الوسطاء)

##### 4.7.9.4. التحقق التكاملي:
- [ ] 🔗 الأحداث تتوافق مع Use Cases
- [ ] 🔗 المخططات متوافقة مع مواصفات API
- [ ] 🔗 خدمات المنتج موجودة في مخطط البنية
- [ ] 🔗 مجموعات المستهلكين لا تتعارض في المسؤولية
- [ ] 🔗 الخصائص الزمنية واقعية
- [ ] 🔗 أحجام البيانات تتوافق مع نطاق النظام

**الهدف**: إنشاء ملفات YAML مع وصف بنية Kafka، جاهزة للنشر في الإنتاج مع تغطية كاملة للمتطلبات الوظيفية وغير الوظيفية.

##### 4.7.9.5. التحقق النهائي لـ YAML لـ AsyncAPI:
- [ ] 📄 تم حفظ الملف بامتداد .yaml
- [ ] 📄 اسم الملف يتبع اصطلاح التسمية
- [ ] 📄 بنية AsyncAPI تتوافق مع المواصفات
- [ ] 📄 جميع القيم النصية محاطة بعلامات اقتباس
- [ ] 📄 تم تنفيذ المسافات البادئة بمسافات (ليس علامات تبويب)
- [ ] 📄 تم تعريف JSON Schema بشكل صحيح في components
- [ ] 📄 تم تكوين Kafka bindings لـ channels
- [ ] 📄 تم تعريف مخططات الأمان عند الضرورة
- [ ] 📄 تم تضمين أمثلة لكل نوع رسالة

---

#### 4.7.10. توصيات إضافية

##### 4.7.10.1. أسلوب التوثيق:
- **البنية**: استخدم YAML للتكوينات
- **التحديد**: حدد أعداد الأقسام، الاحتفاظ، الإنتاجية بدقة
- **الأمثلة**: أدرج أمثلة حقيقية لـ Avro/JSON Schema
- **التصور**: مخططات ASCII للطوبولوجيا

##### 4.7.10.2. الجوانب الإنتاجية:
- **التسمية**: اتبع اصطلاحات {domain}.{entity}.{event}
- **التقسيم**: برر اختيار مفتاح التقسيم
- **الاحتفاظ**: ضع في الاعتبار الامتثال وتكاليف التخزين
- **إدارة الإصدارات**: خطط لتطور المخطط مسبقاً

##### 4.7.10.3. التكامل مع DevOps:
- **البنية التحتية ككود**: تكوينات Terraform/Helm
- **CI/CD**: التحقق من صحة المخطط في خط الأنابيب
- **المراقبة**: مقاييس Prometheus/Grafana
- **الإنذار**: تكاملات PagerDuty/Slack

##### 4.7.10.4. التعافي من الكوارث:
- **النسخ الاحتياطي**: MirrorMaker 2.0 للاستنساخ
- **الاستعادة**: متطلبات RTO/RPO
- **الاختبار**: ممارسات هندسة الفوضى
- **التوثيق**: كتيبات التشغيل لفريق العمليات


