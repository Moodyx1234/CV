// كائن تخزين النصوص للغتين
const translations = {
    ar: {
        pageTitle: "السيرة الذاتية - مؤيد فقيه",
        navName: "مؤيد فقيه",
        langButtonText: "English", // النص الذي سيظهر للانتقال للإنجليزية
        heroTitle: "مؤيد إبراهيم فقيه",
        heroSubtitle: "طالب علوم حاسب | مطور برمجيات وألعاب",
        section_summary: "الملخص الاحترافي",
        summary_content: "طالب علوم حاسب متحمس بشدة للتكنولوجيا، مع تركيز متزايد على **تطوير الويب الحديث (HTML/CSS/JS)** وتطوير الألعاب. ملتزم بالتعلم الذاتي المستمر وتطبيق المعرفة في مسابقات الهاكاثون رفيعة المستوى مثل هاكاثون سدايا و GovJam 2024. أظهرت الخبرة في هذه الفعاليات مهارات قوية في العمل الجماعي، وإدارة المشاريع، وحل المشكلات، وتصميم UI/UX باستخدام Figma. أهدف إلى الابتكار وتطوير براءات الاختراع وتأسيس شركة تقنية رائدة.",
        nav_summary: "الملخص",
        nav_skills: "المهارات",
        nav_accomplishments: "الإنجازات",
        section_skills: "المهارات والتقنيات",
        skills_tech_label: "لغات البرمجة",
        skills_tools_label: "الأدوات والتصميم",
        skills_soft_label: "المهارات الشخصية",
        section_accomplishments: "الإنجازات والتعليم",
        timeline_achievements: "سجل الإنجازات",
        timeline_education: "المسار التعليمي",
        footer_name: "مؤيد فقيه",
        footer_rights: "Glassmorphism UI",
        // بيانات القوائم (تم التعديل)
        skills_list: {
            programming: [
                { name: "SQL", icon: "database", color: "text-blue-400" }, 
                { name: "Python (جاري التعلم)", icon: "code", color: "text-yellow-400" }, 
                { name: "HTML (جاري التعلم)", icon: "figma", color: "text-red-500" }, 
                { name: "CSS (جاري التعلم)", icon: "palette", color: "text-sky-400" }, 
                { name: "JavaScript (جاري التعلم)", icon: "zap", color: "text-amber-400" }
            ],
            design: [
                { name: "Figma (تصميم UI/UX)", icon: "square-stack", color: "text-pink-500" } 
            ],
            soft: [
                { name: "العمل الجماعي", icon: "users", color: "text-emerald-400" }, 
                { name: "القيادة", icon: "crown", color: "text-amber-400" }, 
                { name: "التنظيم وإدارة الوقت", icon: "calendar", color: "text-purple-400" }, 
                { name: "الإبداع والابتكار", icon: "lightbulb", color: "text-red-400" }, 
                { name: "التعلم الذاتي", icon: "book-open-text", color: "text-cyan-400" }, 
                { name: "التواصل", icon: "message-square", color: "text-lime-400" }
            ]
        },
        commits_list: [
            { title: "التأهل لـ أفضل 50 فكرة في هاكاثون ساري (من 450+ فريق)", date: "يونيو 2021 - 2025", context: "هيئة الفضاء السعودية" },
            { title: "التأهل لـ أفضل 90 فريق في هاكاثون إنجاز (من 900+ مشارك)", date: "2025", context: "سدايا" },
            { title: "الحصول على ترتيب ضمن أفضل 18 فريق في GovJam 2024 (من 480 فريق)", date: "2024", context: "هيئة الحكومة الرقمية" }
        ],
        education_list: [
            { title: "جامعة نجران", date: "الحالة: حالي", context: "بكالوريوس علوم الحاسب - المعدل: 4.65" }
        ]
    },
    en: {
        pageTitle: "CV - Moayad Faqih (Glassmorphism)",
        navName: "Moayad Faqih",
        langButtonText: "العربية", // النص الذي سيظهر للانتقال للعربية
        heroTitle: "Moayad Ibrahim Faqih",
        heroSubtitle: "Computer Science Student | Software & Game Developer",
        section_summary: "Professional Summary",
        summary_content: "Motivated Computer Science student with a strong passion for technology, with a growing focus on **modern web development (HTML/CSS/JS)** and game development. Committed to continuous self-learning and applying knowledge in high-profile hackathons like SDAIA's Injaz Hackathon and GovJam 2024. Experience in these events has demonstrated strong skills in teamwork, project management, problem-solving, and UI/UX design using Figma. My goal is innovation, patent development, and founding a leading technology company.",
        nav_summary: "Summary",
        nav_skills: "Skills",
        nav_accomplishments: "Accomplishments",
        section_skills: "Skills and Technologies",
        skills_tech_label: "Programming Languages",
        skills_tools_label: "Tools and Design",
        skills_soft_label: "Soft Skills",
        section_accomplishments: "Accomplishments and Education",
        timeline_achievements: "Achievements Timeline",
        timeline_education: "Educational Path",
        footer_name: "Moayad Faqih",
        footer_rights: "Glassmorphism UI",
        // بيانات القوائم (تم التعديل)
        skills_list: {
            programming: [
                { name: "SQL", icon: "database", color: "text-blue-400" },
                { name: "Python (In Progress)", icon: "code", color: "text-yellow-400" },
                { name: "HTML (In Progress)", icon: "figma", color: "text-red-500" },
                { name: "CSS (In Progress)", icon: "palette", color: "text-sky-400" },
                { name: "JavaScript (In Progress)", icon: "zap", color: "text-amber-400" }
            ],
            design: [
                { name: "Figma (UI/UX Design)", icon: "square-stack", color: "text-pink-500" }
            ],
            soft: [
                { name: "Teamwork", icon: "users", color: "text-emerald-400" }, 
                { name: "Leadership", icon: "crown", color: "text-amber-400" }, 
                { name: "Organization & Time Management", icon: "calendar", color: "text-purple-400" }, 
                { name: "Innovation & Creativity", icon: "lightbulb", color: "text-red-400" }, 
                { name: "Self-Learning", icon: "book-open-text", color: "text-cyan-400" }, 
                { name: "Communication", icon: "message-square", color: "text-lime-400" }
            ]
        },
        commits_list: [
            { title: "Qualified for Top 50 Ideas in Sari Hackathon (450+ Teams)", date: "June 2021 - 2025", context: "Saudi Space Agency" },
            { title: "Secured Top 90 Teams in SDAIA's Injaz Hackathon (900+ Participants)", date: "2025", context: "SDAIA" },
            { title: "Ranked Top 18 Teams in GovJam 2024 (480 Teams)", date: "2024", context: "Digital Government Authority" }
        ],
        education_list: [
            { title: "Najran University", date: "Status: Current", context: "Bachelor of Computer Science - GPA: 4.65" }
        ]
    }
};

let currentLang = 'ar';
let currentTheme = 'dark';

/**
 * إنشاء عنصر الشارة (Pill Badge) للمهارات مع الأيقونات
 */
function createSkillBadge(data, isRTL) {
    const badge = document.createElement('span');
    // استخدام flex-row-reverse في RTL لوضع الأيقونة على اليمين
    const directionClass = isRTL ? 'flex-row-reverse' : 'flex-row';
    badge.className = `skill-badge px-3 py-1 text-sm rounded-full shadow-lg transition duration-300 cursor-default whitespace-nowrap flex items-center gap-1 ${directionClass}`;
    
    // إضافة الأيقونة بلون مخصص
    const iconHtml = `<i data-lucide="${data.icon}" class="w-4 h-4 ${data.color}"></i>`;
    
    // إضافة النص
    const textNode = document.createTextNode(data.name);

    // في RTL: النص يليه الأيقونة (يظهر النص على اليسار والأيقونة على اليمين بسبب flex-row-reverse)
    // في LTR: الأيقونة يليها النص
    if (isRTL) {
        badge.appendChild(textNode);
        badge.insertAdjacentHTML('beforeend', iconHtml);
    } else {
        badge.insertAdjacentHTML('beforeend', iconHtml);
        badge.appendChild(textNode);
    }
    
    return badge;
}


/**
 * إنشاء عنصر الخط الزمني (Timeline Item)
 */
function createTimelineItem(data) {
    const item = document.createElement('div');
    item.className = 'timeline-item';

    // تحديد لون النص الأساسي بناءً على الثيم الحالي
    const contentColor = document.querySelector('html').classList.contains('dark') ? 'text-gray-100' : 'text-gray-900';
    
    item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <h4 class="text-xl font-semibold ${contentColor}">${data.title}</h4>
            <p class="text-sm text-sky-400 mt-1">${data.context}</p>
            <p class="text-xs text-gray-400 mt-1">${data.date}</p>
        </div>
    `;
    return item;
}

/**
 * تبديل الوضع الداكن/الفاتح
 */
function switchTheme() {
    const htmlElement = document.querySelector('html');
    const icon = document.getElementById('themeIcon');
    
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
        icon.setAttribute('data-lucide', 'moon');
        currentTheme = 'light';
    } else {
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
        icon.setAttribute('data-lucide', 'sun');
        currentTheme = 'dark';
    }
    localStorage.setItem('portfolioTheme', currentTheme);
    // يجب إعادة تحديث المحتوى لتطبيق أنماط الثيم على العناصر المولدة ديناميكياً
    updateContent(); 
}

/**
 * تبديل اللغة وتحديث المحتوى.
 */
function switchLanguage() {
    currentLang = (currentLang === 'ar') ? 'en' : 'ar';
    localStorage.setItem('portfolioLang', currentLang);
    updateContent();
}

/**
 * فتح قائمة الجوال
 */
function openMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('hidden');
    // استخدام مهلة لتمكين انتقال الأوباسيتي
    setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10); 
}

/**
 * إغلاق قائمة الجوال
 */
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.add('opacity-0');
    // استخدام مهلة لانتهاء انتقال الأوباسيتي قبل إخفاء العنصر
    setTimeout(() => mobileMenu.classList.add('hidden'), 300); 
}

/**
 * تحديث جميع النصوص والاتجاهات في الصفحة.
 */
function updateContent() {
    const langData = translations[currentLang];
    const isRTL = currentLang === 'ar';
    const htmlElement = document.querySelector('html');
    
    // 1. تحديث اتجاه الصفحة والخط
    htmlElement.setAttribute('lang', currentLang);
    htmlElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.body.style.fontFamily = isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif';

    // 2. تحديث النصوص العامة
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (langData[key]) {
            // نستخدم innerHTML هنا فقط للفقرة التي تحتوي على تنسيق Markdown (bold)
            if (key === 'summary_content') {
                el.innerHTML = langData[key];
            } else {
                 el.textContent = langData[key];
            }
        }
    });

    document.getElementById('pageTitle').textContent = langData.pageTitle;
    document.getElementById('navName').textContent = langData.navName;
    document.getElementById('langButtonText').textContent = langData.langButtonText;
    document.getElementById('heroTitle').textContent = langData.heroTitle;
    document.getElementById('heroSubtitle').textContent = langData.heroSubtitle;


    // 3. إعادة بناء قائمة المهارات
    const skillsContainerMap = {
        programmingSkills: langData.skills_list.programming,
        designSkills: langData.skills_list.design,
        softSkills: langData.skills_list.soft
    };

    for (const [id, skillsArray] of Object.entries(skillsContainerMap)) {
        const container = document.getElementById(id);
        if (container) {
            container.innerHTML = ''; // مسح المحتوى القديم
            skillsArray.forEach(skill => {
                container.appendChild(createSkillBadge(skill, isRTL));
            });
        }
    }
    
    // 4. إعادة بناء سجل الإنجازات والتعليم
    const commitLog = document.getElementById('commitLog');
    commitLog.innerHTML = '';
    langData.commits_list.forEach(commit => {
        commitLog.appendChild(createTimelineItem(commit));
    });

    const educationLog = document.getElementById('educationLog');
    educationLog.innerHTML = '';
    langData.education_list.forEach(edu => {
        educationLog.appendChild(createTimelineItem(edu));
    });

    // 5. إعادة تهيئة الأيقونات
    lucide.createIcons();
}

// عند تحميل الصفحة
window.onload = function() {
    // 1. استرجاع حالة اللغة المحفوظة
    const savedLang = localStorage.getItem('portfolioLang');
    if (savedLang) {
        currentLang = savedLang;
    } else {
        currentLang = 'ar'; 
    }
    
    // 2. استرجاع حالة الثيم المحفوظة
    const savedTheme = localStorage.getItem('portfolioTheme');
    const htmlElement = document.querySelector('html');
    const themeIcon = document.getElementById('themeIcon');

    if (savedTheme === 'light') {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
        themeIcon.setAttribute('data-lucide', 'moon');
        currentTheme = 'light';
    } else {
         // Default is Dark Mode
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
        themeIcon.setAttribute('data-lucide', 'sun');
        currentTheme = 'dark';
    }

    // 3. تطبيق الحالة
    updateContent();

    // 4. ربط الأزرار والـ Event Listeners
    document.getElementById('langToggle').addEventListener('click', switchLanguage);
    document.getElementById('themeToggle').addEventListener('click', switchTheme);
    
    // ربط أزرار قائمة الجوال
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    if (mobileMenuButton) mobileMenuButton.addEventListener('click', openMobileMenu);
    
    const closeMenuButton = document.getElementById('closeMenuButton');
    if (closeMenuButton) closeMenuButton.addEventListener('click', closeMobileMenu);
    
    // 5. جعل الروابط الأقسام تعمل بسلاسة وإغلاق قائمة الجوال
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // إغلاق قائمة الجوال إذا تم الضغط على رابط من داخلها
            if (this.classList.contains('mobile-nav-link')) {
                closeMobileMenu();
            }

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};
