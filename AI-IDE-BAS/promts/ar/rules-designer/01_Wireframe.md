### 4.3. تعليمات وإرشادات مفصلة لوضع AI IDE BAS mode-designer لإنشاء قطع أثرية متنوعة لهندسة وتصميم تطبيقات البنوك

هذه التعليمات تضمن إنشاء إطارات سلكية عالية الجودة ومتسقة بناءً على متطلبات User Story و Use Case.

الغرض من الامتثال:
- توحيد منهجيات إنشاء الإطارات السلكية
- ضمان جودة واكتمال التخطيطات
- تسريع عملية التطوير

#### 4.3.1. 🔧 عملية إنشاء الإطارات السلكية

##### 4.3.1.1. الخطوة 1: دراسة المتطلبات
- User Story
- Use Case

##### 4.3.1.2. الخطوة 2: تخطيط الشاشات
- تحديد الشاشات الرئيسية
- تخطيط التنقل
- اختيار المكونات

##### 4.3.1.3. الخطوة 3: التنفيذ
- استخدام قالب HTML الأساسي
- تطبيق مكونات CSS الجاهزة
- إضافة منطق JavaScript
- اختبار السيناريوهات

##### 4.3.1.4. الخطوة 4: التحقق
- مراجعة قائمة التحقق من الجودة
- الاختبار على أجهزة مختلفة
- التحقق من صحة منطق الأعمال

#### 4.3.2. ⚙️ المتطلبات الفنية

الخصائص الإلزامية:
- ✅ تصميم للهواتف المحمولة (أقصى عرض: 414px)
- ✅ متجاوب للتابلت وسطح المكتب
- ✅ تنقل تفاعلي
- ✅ التحقق من صحة النماذج
- ✅ محاكاة API
- ✅ معالجة الأخطاء
- ✅ إمكانية الوصول
- ✅ حركات سلسة

#### 4.3.3. 🎨 نظام التصميم

##### 4.3.3.1. لوحة الألوان:
- **التدرج الأساسي**: `#667eea → #764ba2`
- **تدرج الرصيد**: `#ff6b6b → #ffa726`
- **النجاح**: `#28a745`
- **خطأ**: `#dc3545`
- **تحذير**: `#ffc107`
- **الخلفية**: `#f5f7fa`

##### 4.3.3.2. الطباعة:
- **خطوط النظام**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'`
- **الأحجام**: 32px-12px
- **الأوزان**: 700, 600, 500, 400

##### 4.3.3.3. المكونات:
- نصف قطر الحد: 16px-8px
- الحشو: 24px, 20px, 16px, 12px, 8px
- الظلال: `0 4px 12px rgba(102, 126, 234, 0.15)`

#### 4.3.4. 🧪 بيانات الاختبار

##### 4.3.4.1. المستلمون القياسيون:
- **إيفان إيفانوف** - `79123456789` (MARRIED)
- **ماريا بيتروفا** - `79111234567` (SINGLE)
- **آنا سيدوروفا** - `79998887766` (DIVORCED)

##### 4.3.4.2. سيناريوهات الخطأ:
- المستلم غير موجود: `79999999999`
- أموال غير كافية: المبلغ > 125450
- تجاوز الحد: المبلغ > 50000 لـ MARRIED

#### 4.3.5. ✅ قائمة التحقق من الجودة

##### 4.3.5.1. HTML:
- [ ] ترميز HTML5 صالح
- [ ] وسوم دلالية
- [ ] سمات إمكانية الوصول
- [ ] معرفات فريدة

##### 4.3.5.2. CSS:
- [ ] نهج Mobile-first
- [ ] متغيرات CSS
- [ ] حركات سلسة
- [ ] حالات Hover
- [ ] أنماط Focus

##### 4.3.5.3. JavaScript:
- [ ] معالجة جميع السيناريوهات
- [ ] التحقق من صحة النماذج
- [ ] محاكاة API
- [ ] معالجة الأخطاء
- [ ] سجل التنقل

##### 4.3.5.4. UX/UI:
- [ ] تنقل بديهي
- [ ] أخطاء غنية بالمعلومات
- [ ] تأكيدات الإجراءات
- [ ] إجراءات سريعة
- [ ] التنسيق التلقائي

#### 4.3.6. 🚀 أمثلة الاستخدام

##### 4.3.6.1. إنشاء إطار سلكي لـ "تحويل مع تعليق":
1. انسخ الهيكل الأساسي من دليل الإطارات السلكية HTML الأساسي
2. أضف مكون textarea من مكونات الإطار السلكي
3. عدل شاشة التأكيد
4. أضف التحقق من صحة التعليق
5. حدّث بيانات الاختبار

##### 4.3.6.2. إنشاء إطار سلكي لـ "قوالب التحويل":
1. استخدم مكون قائمة المعاملات
2. أضف أزرار "حفظ كقالب"
3. أنشئ شاشة اختيار القالب
4. نفذ تعبئة البيانات المسبقة

#### 4.3.7. 📖 كيفية الاستخدام

##### 4.3.7.1. دليل الإطارات السلكية HTML
الاستخدام: التعليمات الأساسية لإنشاء إطارات سلكية للهواتف المحمولة
يتضمن:
- هياكل HTML
- أنماط CSS
- منطق JavaScript
- تصميم متجاوب
- بيانات الاختبار

###### 4.3.7.1.1. 🏗️ هيكل HTML

**الحاوية الرئيسية**
html
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تطبيق البنك - [اسم الميزة]</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="app-container">
        <header class="header">
            <!-- رأس مع التنقل -->
        </header>
        <main class="main-content">
            <!-- شاشات التطبيق -->
        </main>
    </div>
    <script src="script.js"></script>
</body>
</html>


**رأس التطبيق**
html
<header class="header">
    <div class="header-content">
        <button class="back-btn" onclick="goBack()">←</button>
        <h1 class="header-title">الرئيسية</h1>
        <button class="profile-btn">👤</button>
    </div>
</header>

**هيكل الشاشات**
html
<!-- كل شاشة في div منفصل -->
<div class="screen active" id="screen-name">
    <div class="form-container">
        <h2>عنوان الشاشة</h2>
        <p class="subtitle">عنوان فرعي أو وصف</p>
        
        <!-- محتوى الشاشة -->
        
        <button class="btn-primary" onclick="nextAction()">
            متابعة
        </button>
    </div>
</div>

**العناصر الإلزامية حسب أنواع الشاشات:**

**الشاشة الرئيسية**
html
<div class="balance-card">
    <h2>رصيد الحساب</h2>
    <div class="balance-amount">[المبلغ] ₽</div>
    <p class="account-number">**** [الرقم]</p>
</div>

<div class="actions-grid">
    <button class="action-btn primary" onclick="showScreen('target-screen')">
        <div class="action-icon">[EMOJI]</div>
        <span>[الاسم]</span>
    </button>
    <!-- أزرار إجراءات أخرى -->
</div>


**شاشة إدخال البيانات**
html
<div class="input-group">
    <label for="input-id">[اسم الحقل]</label>
    <input 
        type="[النوع]" 
        id="input-id" 
        placeholder="[تلميح]"
        class="[CLASS]-input"
        oninput="validate[Function](this)"
    >
    <div class="input-error" id="input-error"></div>
</div>

**شاشة التأكيد**
html
<div class="confirmation-details">
    <div class="detail-row">
        <span>[الاسم]:</span>
        <strong id="confirm-value">[القيمة]</strong>
    </div>
    <!-- تفاصيل أخرى -->
    <hr>
    <div class="detail-row total">
        <span>لخصم:</span>
        <strong id="total-amount">[المبلغ]</strong>
    </div>
</div>

<div class="warning-message" id="warning" style="display: none;">
    ⚠️ [نص التحذير]
</div>

**شاشة النتيجة**
html
<div class="result-container">
    <div class="result-icon success" id="result-icon">✅</div>
    <h2 id="result-title">[عنوان النتيجة]</h2>
    <p id="result-message">[وصف النتيجة]</p>
    
    <div class="transaction-details">
        <div class="detail-row">
            <span>رقم العملية:</span>
            <span id="transaction-id">[المعرف]</span>
        </div>
        <div class="detail-row">
            <span>التاريخ والوقت:</span>
            <span id="transaction-time">[الوقت]</span>
        </div>
    </div>
</div>

---
###### 4.3.7.1.2. 🎨 أنماط CSS

**المتغيرات الرئيسية وإعادة التعيين**
css
/* إعادة التعيين والأنماط الأساسية */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --balance-gradient: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
    --success-color: #28a745;
    --error-color: #dc3545;
    --warning-color: #ffc107;
    --background-color: #f5f7fa;
    --text-color: #333;
    --text-secondary: #6c757d;
    --border-color: #e9ecef;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
}


**حاوية التطبيق (للجوال)**
css
.app-container {
    max-width: 414px;
    margin: 0 auto;
    background: white;
    min-height: 100vh;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    position: relative;
}


**الرأس**
css
.header {
    background: var(--primary-gradient);
    color: white;
    padding: 44px 20px 20px; /* ضع في الاعتبار المنطقة الآمنة لنظام iOS */
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.back-btn, .profile-btn {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    transition: background 0.3s;
}

.back-btn:hover, .profile-btn:hover {
    background: rgba(255, 255, 255, 0.3);
}

.header-title {
    font-size: 20px;
    font-weight: 600;
}


**الشاشات والحركات**
css
.main-content {
    padding: 20px;
    min-height: calc(100vh - 104px);
}

.screen {
    display: none;
    animation: slideIn 0.3s ease-out;
}

.screen.active {
    display: block;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}


**البطاقات والحاويات**
css
.balance-card {
    background: var(--balance-gradient);
    color: white;
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 24px;
    text-align: center;
}

.balance-amount {
    font-size: 32px;
    font-weight: 700;
    margin: 8px 0;
}

.form-container {
    max-width: 100%;
}

.form-container h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #2c3e50;
}

.subtitle {
    color: var(--text-secondary);
    margin-bottom: 24px;
    font-size: 16px;
}


**الأزرار**
css
.btn-primary, .btn-secondary {
    width: 100%;
    padding: 16px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    border: none;
}

.btn-primary {
    background: var(--primary-gradient);
    color: white;
}

.btn-primary:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.btn-primary:disabled {
    background: var(--border-color);
    cursor: not-allowed;
}

.btn-secondary {
    background: white;
    border: 2px solid #667eea;
    color: #667eea;
}

.btn-secondary:hover {
    background: #667eea;
    color: white;
}


**حقول الإدخال**
css
.input-group {
    margin-bottom: 24px;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #495057;
}

.phone-input, .amount-input {
    width: 100%;
    padding: 16px;
    border: 2px solid var(--border-color);
    border-radius: 12px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.phone-input:focus, .amount-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}


**الشبكات والتخطيطات**
css
.actions-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 24px;
}

.action-btn {
    background: white;
    border: 2px solid var(--border-color);
    padding: 20px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.3s;
}

.action-btn:hover {
    border-color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.action-btn.primary {
    background: var(--primary-gradient);
    color: white;
    border-color: transparent;
}


**الحالات والحالات**
css
.input-error {
    color: var(--error-color);
    font-size: 14px;
    margin-top: 8px;
    display: none;
}

.input-error.show {
    display: block;
    animation: fadeIn 0.3s ease-out;
}

.warning-message {
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    color: #856404;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 16px;
}

.hidden {
    display: none !important;
}


**التصميم المتجاوب**
css
@media (max-width: 480px) {
    .app-container {
        max-width: 100%;
    }
    
    .main-content {
        padding: 16px;
    }
    
    .balance-amount {
        font-size: 28px;
    }
    
    .amount-input {
        font-size: 20px;
    }
    
    .currency {
        font-size: 20px;
    }
}

@media (min-width: 768px) {
    .app-container {
        max-width: 414px;
        border-radius: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    
    .header {
        border-radius: 20px 20px 0 0;
    }
}


---

###### 4.3.7.1.3. ⚙️ وظائف JavaScript

**الهيكل الرئيسي**
javascript
// المتغيرات العامة
let currentScreen = 'home-screen';
let currentData = {};
let navigationHistory = [];

// التهيئة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // ضبط الحالة الأولية
    updateHeaderTitle(currentScreen);
    loadMockData();
}

**التنقل بين الشاشات**
javascript
function showScreen(screenId) {
    // إضافة الشاشة الحالية إلى السجل
    if (currentScreen !== screenId) {
        navigationHistory.push(currentScreen);
    }
    
    // إخفاء جميع الشاشات
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // عرض الشاشة المطلوبة
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
    
    // تحديث العنوان
    updateHeaderTitle(screenId);
}

function goBack() {
    if (navigationHistory.length > 0) {
        const previousScreen = navigationHistory.pop();
        showScreen(previousScreen);
    } else {
        showScreen('home-screen');
    }
}

function updateHeaderTitle(screenId) {
    const titles = {
        'home-screen': 'الرئيسية',
        'recipient-screen': 'المستلم',
        'amount-screen': 'المبلغ',
        'confirm-screen': 'التأكيد',
        'result-screen': 'النتيجة',
        'history-screen': 'السجل'
    };
    
    document.querySelector('.header-title').textContent = titles[screenId] || 'التطبيق';
}


**التحقق من الصحة والتنسيق**
javascript
// تنسيق رقم الهاتف
function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    
    // إضافة +7 إذا بدأ بـ 8 أو 7
    if (value.startsWith('8')) {
        value = '7' + value.substring(1);
    }
    if (value.startsWith('7')) {
        value = '+7' + value.substring(1);
    }
    
    // تنسيق الرقم
    if (value.startsWith('+7')) {
        let digits = value.substring(2);
        let formatted = '+7';
        
        if (digits.length > 0) formatted += ' (' + digits.substring(0, 3);
        if (digits.length > 3) formatted += ') ' + digits.substring(3, 6);
        if (digits.length > 6) formatted += '-' + digits.substring(6, 8);
        if (digits.length > 8) formatted += '-' + digits.substring(8, 10);
        
        input.value = formatted;
    }
    
    hideError('phone-error');
}

// التحقق من صحة المبلغ
function validateAmount(input) {
    const amount = parseFloat(input.value) || 0;
    const continueBtn = document.getElementById('amount-continue-btn');
    
    hideError('amount-error');
    
    if (amount <= 0) {
        continueBtn.disabled = true;
        return;
    }
    
    if (amount > currentBalance) {
        showError('amount-error', 'أموال غير كافية في الحساب');
        continueBtn.disabled = true;
        return;
    }
    
    // فحوصات الحدود الإضافية
    if (currentRecipient && currentRecipient.maritalStatus === 'MARRIED' && amount > 50000) {
        showError('amount-error', 'تم تجاوز حد التحويل لهذه الحالة');
        continueBtn.disabled = true;
        return;
    }
    
    continueBtn.disabled = false;
}

**محاكاة API**
javascript
// محاكاة البحث عن المستلم
function findRecipient() {
    const phoneInput = document.getElementById('phone-input');
    const phone = phoneInput.value.replace(/\D/g, '');
    
    // التحقق من صحة الهاتف
    if (phone.length !== 11 || !phone.startsWith('7')) {
        showError('phone-error', 'أدخل رقم هاتف صحيح');
        return;
    }
    
    // محاكاة طلب API
    setTimeout(() => {
        const mockRecipients = {
            '79123456789': {
                id: '123e4567-e89b-12d3-a456-426614174000',
                name: 'إيفان إيفانوف',
                phone: '+7 (912) 345-67-89',
                maritalStatus: 'MARRIED'
            },
            '79111234567': {
                id: '987e6543-e21b-43d2-b456-426614174111',
                name: 'ماريا بيتروفا', 
                phone: '+7 (911) 123-45-67',
                maritalStatus: 'SINGLE'
            }
            // بيانات اختبار إضافية
        };
        
        const recipient = mockRecipients[phone];
        
        if (recipient) {
            currentRecipient = recipient;
            showRecipientInfo(recipient);
            hideError('phone-error');
        } else {
            showError('phone-error', 'المستلم غير موجود');
            hideRecipientInfo();
        }
    }, 500); // محاكاة تأخير API
}

// محاكاة معالجة التحويل
function processTransfer() {
    const randomSuccess = Math.random() > 0.1; // 90% عمليات ناجحة
    
    setTimeout(() => {
        if (randomSuccess) {
            const transactionId = generateTransactionId();
            const currentTime = new Date().toLocaleString('ru-RU');
            showTransferResult(true, 'تم التحويل بنجاح!', transactionId);
            
            // تحديث الرصيد
            currentBalance -= transferAmount;
            updateBalanceDisplay();
            
            // إضافة إلى السجل
            addToHistory({
                type: 'transfer',
                recipient: currentRecipient,
                amount: transferAmount,
                timestamp: currentTime,
                transactionId: transactionId
            });
        } else {
            showTransferResult(false, 'حدث خطأ أثناء العملية', null);
        }
    }, 1500);
}


**الأدوات والمساعدات**
javascript
// عرض وإخفاء الأخطاء
function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function hideError(errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.classList.remove('show');
}

// تنسيق العملة
function formatCurrency(amount) {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 2
    }).format(amount);
}

// إنشاء معرف المعاملة
function generateTransactionId() {
    return Math.floor(Math.random() * 1000000000).toString();
}

// الإجراءات السريعة
function setAmount(amount) {
    document.getElementById('amount-input').value = amount;
    validateAmount(document.getElementById('amount-input'));
}


---

###### 4.3.7.1.4. 📱 متطلبات التصميم المتجاوب
الأجهزة المحمولة (التركيز الرئيسي)
العرض: 480px - 320px
أقصى عرض للحاوية: 414px
الحشو: 20px-16px على الحواف
حجم الخط: 16px كحد أدنى لحقول الإدخال
ارتفاع الزر: 44px كحد أدنى للمس

الأجهزة اللوحية
العرض: 767px - 481px
توسيط الحاوية
حشو متزايد

سطح المكتب
العرض: من 768px
حاوية بأقصى عرض 414px
توسيط مع الظلال
زوايا حاوية مستديرة
---

###### 4.3.7.1.5. 🧪 بيانات الاختبار
سيناريوهات الاختبار الإلزامية:

javascript
const testData = {
    // السيناريوهات الناجحة
    validRecipients: [
        {
            phone: '79123456789',
            name: 'إيفان إيفانوف',
            maritalStatus: 'MARRIED',
            limit: 50000
        },
        {
            phone: '79111234567',
            name: 'ماريا بيتروفا',
            maritalStatus: 'SINGLE',
            limit: null
        },
        {
            phone: '79998887766',
            name: 'آنا سيدوروفا',
            maritalStatus: 'DIVORCED',
            limit: null
        }
    ],
    
    // سيناريوهات الخطأ
    errorScenarios: [
        { type: 'RECIPIENT_NOT_FOUND', phone: '79999999999' },
        { type: 'INSUFFICIENT_FUNDS', amount: 999999 },
        { type: 'LIMIT_EXCEEDED', amount: 60000, maritalStatus: 'MARRIED' },
        { type: 'TECHNICAL_ERROR', random: true }
    ],
    
    // رصيد الاختبار
    initialBalance: 125450.00
};

---

###### 4.3.7.1.6. 📋 قائمة مراجعة الجودة

**HTML**
- [ ] ترميز HTML5 صالح
- [ ] الوسوم الدلالية (`<header>`, `<main>`, `<section>`)
- [ ] سمات إمكانية الوصول (`aria-*`, `role`)
- [ ] أنواع الإدخال الصحيحة (`tel`, `number`, `email`)
- [ ] معرفات فريدة لجميع العناصر التفاعلية

**CSS**
- [ ] نهج Mobile-first
- [ ] متغيرات CSS للألوان والأحجام
- [ ] التحولات والحركات السلسة
- [ ] حالات Hover للعناصر التفاعلية
- [ ] عمل صحيح لحالات Focus
- [ ] تصميم متجاوب لجميع الدقات

**JavaScript**
- [ ] معالجة جميع سيناريوهات المستخدم
- [ ] التحقق من الصحة على جانب العميل
- [ ] محاكاة API بتأخيرات واقعية
- [ ] معالجة الأخطاء برسائل واضحة
- [ ] سجل التنقل
- [ ] حفظ الحالة بين الشاشات

**UX/UI**
- [ ] تنقل بديهي
- [ ] حالات تحميل واضحة
- [ ] رسائل أخطاء مفيدة
- [ ] تأكيدات للإجراءات الحرجة
- [ ] إجراءات سريعة (مثل أزرار المبالغ)
- [ ] التنسيق التلقائي لحقول الإدخال

---

###### 4.3.7.1.7. 📖 مثال الاستخدام

**عند إنشاء wireframe لميزة جديدة:**

1. **ادرس المتطلبات** من User Story و Use Case
2. **حدد الشاشات الرئيسية** والانتقالات بينها
3. **أنشئ هيكل HTML** بدءًا من حاوية التطبيق
4. **أضف أنماط CSS** باستخدام نظام التصميم الحالي
5. **نفذ منطق JavaScript** لجميع السيناريوهات
6. **اختبر جميع المسارات** بما في ذلك سيناريوهات الأخطاء
7. **أنشئ التوثيق** في README.md

**مثال لميزة "تحويل مع تعليق":**
html
<!-- حقل إضافي على شاشة المبلغ -->
<div class="input-group">
    <label for="comment-input">تعليق (اختياري)</label>
    <textarea 
        id="comment-input" 
        placeholder="تعليق على التحويل"
        class="comment-input"
        maxlength="200"
        rows="3"
    ></textarea>
    <div class="char-counter">
        <span id="char-count">0</span>/200
    </div>
</div>


---


##### 4.3.7.2. مكونات Wireframe
الاستخدام: مكونات جاهزة لإنشاء wireframes سريع
يشمل:
- عناوين التطبيق
- بطاقات الرصيد
- حقول الإدخال
- الأزرار والتنقل
- قوائم المعاملات

###### 4.3.7.2.1. 🧩 مكونات جاهزة بناءً على Banking wireframes

**📱 عنوان التطبيق**
html
<header class="header">
    <div class="header-content">
        <button class="back-btn" onclick="goBack()">←</button>
        <h1 class="header-title">الرئيسية</h1>
        <button class="profile-btn">👤</button>
    </div>
</header>


css
.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 44px 20px 20px;
    position: sticky;
    top: 0;
    z-index: 100;
}

.back-btn, .profile-btn {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    transition: background 0.3s;
}


**💳 بطاقة الرصيد**
html
<div class="balance-card">
    <h2>رصيد الحساب</h2>
    <div class="balance-amount">125 450,00 ₽</div>
    <p class="account-number">**** 5678</p>
</div>


css
.balance-card {
    background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
    color: white;
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 24px;
    text-align: center;
}

.balance-amount {
    font-size: 32px;
    font-weight: 700;
    margin: 8px 0;
}

.account-number {
    opacity: 0.8;
    font-size: 14px;
}


**🎯 شبكة الإجراءات**
html
<div class="actions-grid">
    <button class="action-btn primary" onclick="showScreen('transfer-screen')">
        <div class="action-icon">💸</div>
        <span>تحويل</span>
    </button>
    <button class="action-btn" onclick="showScreen('history-screen')">
        <div class="action-icon">📋</div>
        <span>السجل</span>
    </button>
    <button class="action-btn">
        <div class="action-icon">📱</div>
        <span>إعادة شحن</span>
    </button>
    <button class="action-btn">
        <div class="action-icon">⚙️</div>
        <span>الإعدادات</span>
    </button>
</div>


css
.actions-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 24px;
}

.action-btn {
    background: white;
    border: 2px solid #e9ecef;
    padding: 20px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 14px;
    font-weight: 500;
}

.action-btn:hover {
    border-color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.action-btn.primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-color: transparent;
}

.action-icon {
    font-size: 24px;
}


**📝 مجموعة حقول الإدخال**
html
<div class="input-group">
    <label for="phone-input">رقم الهاتف</label>
    <input 
        type="tel" 
        id="phone-input" 
        placeholder="+7 (___) ___-__-__"
        class="phone-input"
        oninput="formatPhone(this)"
    >
    <div class="input-error" id="phone-error"></div>
</div>


css
.input-group {
    margin-bottom: 24px;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #495057;
}

.phone-input {
    width: 100%;
    padding: 16px;
    border: 2px solid #e9ecef;
    border-radius: 12px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.phone-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.input-error {
    color: #dc3545;
    font-size: 14px;
    margin-top: 8px;
    display: none;
}

.input-error.show {
    display: block;
    animation: fadeIn 0.3s ease-out;
}


**👤 بطاقة المستلم**
html
<div class="recipient-info hidden" id="recipient-info">
    <div class="recipient-card">
        <div class="recipient-avatar">👤</div>
        <div class="recipient-details">
            <h3 id="recipient-name">إيفان إيفانوف</h3>
            <p id="recipient-phone">+7 (912) 345-67-89</p>
            <span class="status-badge" id="recipient-status">متزوج</span>
        </div>
    </div>
</div>


css
.recipient-info {
    margin: 24px 0;
    animation: fadeIn 0.3s ease-out;
}

.recipient-card {
    display: flex;
    align-items: center;
    padding: 16px;
    background: #f8f9fa;
    border-radius: 12px;
    gap: 16px;
}

.recipient-avatar {
    width: 50px;
    height: 50px;
    background: #667eea;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}

.recipient-details h3 {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 4px;
}

.recipient-details p {
    color: #6c757d;
    font-size: 14px;
    margin-bottom: 8px;
}

.status-badge {
    background: #28a745;
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
}


**💰 حقل إدخال المبلغ**
html
<div class="amount-input-container">
    <input 
        type="number" 
        id="amount-input" 
        placeholder="0"
        class="amount-input"
        min="1"
        max="100000"
        oninput="validateAmount(this)"
    >
    <span class="currency">₽</span>
</div>

<div class="balance-info">
    <span>المتاح: 125 450,00 ₽</span>
</div>

<div class="quick-amounts">
    <button class="quick-amount" onclick="setAmount(1000)">1 000</button>
    <button class="quick-amount" onclick="setAmount(5000)">5 000</button>
    <button class="quick-amount" onclick="setAmount(10000)">10 000</button>
</div>


css
.amount-input-container {
    position: relative;
    margin-bottom: 16px;
}

.amount-input {
    width: 100%;
    padding: 16px 60px 16px 16px;
    border: 2px solid #e9ecef;
    border-radius: 12px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
}

.currency {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    color: #6c757d;
}

.balance-info {
    color: #6c757d;
    margin-bottom: 16px;
    text-align: center;
}

.quick-amounts {
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
}

.quick-amount {
    flex: 1;
    padding: 12px;
    background: white;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
}

.quick-amount:hover {
    border-color: #667eea;
    background: #f8f9ff;
}


**✅ شاشة التأكيد**
html
<div class="confirmation-details">
    <div class="detail-row">
        <span>المستلم:</span>
        <strong id="confirm-name">إيفان إيفانوف</strong>
    </div>
    <div class="detail-row">
        <span>الهاتف:</span>
        <span id="confirm-phone">+7 (912) 345-67-89</span>
    </div>
    <div class="detail-row">
        <span>المبلغ:</span>
        <strong id="confirm-amount">5 000,00 ₽</strong>
    </div>
    <div class="detail-row">
        <span>العمولة:</span>
        <span>0,00 ₽</span>
    </div>
    <hr>
    <div class="detail-row total">
        <span>للخصم:</span>
        <strong id="confirm-total">5 000,00 ₽</strong>
    </div>
</div>

<div class="warning-message" id="married-warning" style="display: none;">
    ⚠️ للمستلمين المتزوجين تطبق قيود إضافية على مبالغ التحويلات
</div>


css
.confirmation-details {
    background: #f8f9fa;
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 16px;
}

.detail-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    align-items: center;
}

.detail-row:last-child {
    margin-bottom: 0;
}

.detail-row.total {
    font-weight: 700;
    font-size: 16px;
    margin-top: 8px;
}

.confirmation-details hr {
    border: none;
    border-top: 1px solid #e9ecef;
    margin: 12px 0;
}

.warning-message {
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    color: #856404;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 16px;
    font-size: 14px;
}


**🎉 شاشة النتيجة**
html
<div class="result-container">
    <div class="result-icon success" id="result-icon">✅</div>
    <h2 id="result-title">تم إجراء التحويل بنجاح!</h2>
    <p id="result-message">تم تحويل الأموال إلى المستلم</p>
    
    <div class="transaction-details">
        <div class="detail-row">
            <span>رقم العملية:</span>
            <span id="transaction-id">123456789</span>
        </div>
        <div class="detail-row">
            <span>التاريخ والوقت:</span>
            <span id="transaction-time">15.11.2024, 14:30</span>
        </div>
    </div>
</div>


css
.result-container {
    text-align: center;
}

.result-icon {
    font-size: 64px;
    margin-bottom: 16px;
}

.result-icon.success {
    color: #28a745;
}

.result-icon.error {
    color: #dc3545;
}

.result-container h2 {
    font-size: 24px;
    font-weight: 700;
    color: #28a745;
    margin-bottom: 8px;
}

.result-container p {
    color: #6c757d;
    margin-bottom: 24px;
}

.transaction-details {
    background: #f8f9fa;
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 24px;
    text-align: left;
}


**📋 قائمة المعاملات**
html
<div class="transaction-list">
    <div class="transaction-item">
        <div class="transaction-info">
            <div class="transaction-type">تحويل</div>
            <div class="transaction-recipient">إيفان إيفانوف</div>
            <div class="transaction-phone">+7 (912) 345-67-89</div>
        </div>
        <div class="transaction-amount negative">-5 000,00 ₽</div>
        <div class="transaction-date">15.11.2024 14:30</div>
    </div>
</div>


css
.transaction-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.transaction-item {
    background: white;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid #e9ecef;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    gap: 8px;
}

.transaction-info {
    grid-column: 1;
    grid-row: 1;
}

.transaction-type {
    font-weight: 500;
    color: #495057;
    font-size: 14px;
}

.transaction-recipient {
    font-weight: 600;
    font-size: 16px;
    margin: 4px 0;
}

.transaction-phone {
    color: #6c757d;
    font-size: 14px;
}

.transaction-amount {
    grid-column: 2;
    grid-row: 1;
    font-weight: 600;
    font-size: 16px;
    text-align: right;
}

.transaction-amount.negative {
    color: #dc3545;
}

.transaction-amount.positive {
    color: #28a745;
}

.transaction-date {
    grid-column: 1 / 3;
    grid-row: 2;
    color: #6c757d;
    font-size: 12px;
}


###### 4.3.7.2.2. ⚙️ دوال JavaScript

**معالجة الأخطاء**
javascript
function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function hideError(errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}


**تنسيق رقم الهاتف**
javascript
function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.startsWith('8')) {
        value = '7' + value.substring(1);
    }
    if (value.startsWith('7')) {
        value = '+7' + value.substring(1);
    }
    
    if (value.startsWith('+7')) {
        let digits = value.substring(2);
        let formatted = '+7';
        
        if (digits.length > 0) formatted += ' (' + digits.substring(0, 3);
        if (digits.length > 3) formatted += ') ' + digits.substring(3, 6);
        if (digits.length > 6) formatted += '-' + digits.substring(6, 8);
        if (digits.length > 8) formatted += '-' + digits.substring(8, 10);
        
        input.value = formatted;
    }
    
    hideError('phone-error');
}


**التحقق من صحة المبلغ**
javascript
function validateAmount(input) {
    const amount = parseFloat(input.value) || 0;
    const continueBtn = document.getElementById('amount-continue-btn');
    
    hideError('amount-error');
    
    if (amount <= 0) {
        continueBtn.disabled = true;
        return false;
    }
    
    if (amount > currentBalance) {
        showError('amount-error', 'رصيد غير كافي في الحساب');
        continueBtn.disabled = true;
        return false;
    }
    
    if (currentRecipient && currentRecipient.maritalStatus === 'MARRIED' && amount > 50000) {
        showError('amount-error', 'تم تجاوز حد التحويل لهذه الحالة');
        continueBtn.disabled = true;
        return false;
    }
    
    continueBtn.disabled = false;
    return true;
}


**محاكاة API**
javascript
function findRecipient() {
    const phoneInput = document.getElementById('phone-input');
    const phone = phoneInput.value.replace(/\D/g, '');
    
    if (phone.length !== 11 || !phone.startsWith('7')) {
        showError('phone-error', 'أدخل رقم هاتف صحيح');
        return;
    }
    
    setTimeout(() => {
        const mockRecipients = {
            '79123456789': {
                name: 'إيفان إيفانوف',
                phone: '+7 (912) 345-67-89',
                maritalStatus: 'MARRIED'
            },
            '79111234567': {
                name: 'ماريا بيتروفا',
                phone: '+7 (911) 123-45-67',
                maritalStatus: 'SINGLE'
            },
            '79998887766': {
                name: 'آنا سيدوروفا',
                phone: '+7 (999) 888-77-66',
                maritalStatus: 'DIVORCED'
            }
        };
        
        const recipient = mockRecipients[phone];
        
        if (recipient) {
            currentRecipient = recipient;
            showRecipientInfo(recipient);
            hideError('phone-error');
        } else {
            showError('phone-error', 'لم يتم العثور على المستلم');
            hideRecipientInfo();
        }
    }, 500);
}

function showRecipientInfo(recipient) {
    const recipientInfo = document.getElementById('recipient-info');
    const recipientName = document.getElementById('recipient-name');
    const recipientPhone = document.getElementById('recipient-phone');
    const recipientStatus = document.getElementById('recipient-status');
    const searchBtn = document.getElementById('search-btn');
    const continueBtn = document.getElementById('continue-btn');
    
    recipientName.textContent = recipient.name;
    recipientPhone.textContent = recipient.phone;
    
    const statusTexts = {
        'MARRIED': 'متزوج',
        'SINGLE': 'أعزب',
        'DIVORCED': 'مطلق',
        'WIDOWED': 'أرمل'
    };
    recipientStatus.textContent = statusTexts[recipient.maritalStatus] || recipient.maritalStatus;
    
    recipientInfo.classList.remove('hidden');
    searchBtn.classList.add('hidden');
    continueBtn.classList.remove('hidden');
}