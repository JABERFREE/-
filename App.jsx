import React, { useState } from 'react';
import { Globe, Phone, Mail, MapPin, Truck, Package, Menu, X } from 'lucide-react';

// استيراد الصور المحلية من مجلد assets
import trucksImg from './assets/trucks.jpg';
import legumesImg from './assets/legumes.jpg';
import delightImg from './assets/delight.jpg';
import grainsImg from './assets/grains.jpg';

// قاموس الترجمات للغات الثلاث
const t = {
  ar: {
    brand: "أحمد كات لوجستيكس",
    subtitle: "للإستيراد والتصدير والشحن الدولي",
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    sectors: "الأعمال",
    contact: "اتصل بنا",
    quote: "طلب عرض سعر",
    heroTitle: "بوابتك الموثوقة للتجارة والشحن الدولي",
    heroDesc: "نقدم خدمات الاستيراد والتصدير، والشحن البحري والبري والجوي بكفاءة عالية وأسعار منافسة.",
    startBtn: "ابدأ الآن",
    
    aboutTitle: "من نحن",
    aboutDesc: "منذ 2009 نعمل بالتجارة والشحن متخصصون بتصدير اجود انواع البضائع التركية خبرة في النقل البري",

    servicesTitle: "خدماتنا",
    serv1Title: "استيراد وتصدير",
    serv1Desc: "نقدم خدمات متكاملة في استيراد وتصدير أجود البضائع والمنتجات التركية بمواصفات عالية.",
    serv2Title: "نقل دولي",
    serv2Desc: "خبرة واسعة واحترافية عالية في النقل البري والدولي لضمان وصول شحناتكم بأمان تام.",

    sectorsTitle: "أعمالنا التصديرية",
    sec1: "تجارة الشاحنات",
    sec1Desc: "استيراد وتصدير وتجارة شاحنات نقل البضائع الثقيلة والخفيفة بمواصفات عالية.",
    sec2: "البقوليات وأنواعها",
    sec2Desc: "توريد أجود أنواع البقوليات كالعدس، الحمص، والبرغل التركي الفاخر بالجملة.",
    sec3: "الحلقوم التركي الفاخر",
    sec3Desc: "أفخر أنواع الحلويات التقليدية والحلقوم التركي الأصلي بجميع النكهات.",
    sec4: "تصدير الحبوب",
    sec4Desc: "تصدير وتوزيع مختلف أنواع الحبوب والسلع الغذائية بمواصفات عالمية.",
    featuresTitle: "التوزيع والتوريد العالمي",
    featuresDesc: "حلول موثوقة لاحتياجات عملك التجاري والشحن.",
    feat1Title: "توريد المنتجات",
    feat1Desc: "نؤمن منتجات عالية الجودة من أفضل المصنعين حول العالم.",
    feat2Title: "الخدمات اللوجستية الدولية",
    feat2Desc: "شحن وتوزيع فعال إلى كافة الوجهات العالمية.",
    getInTouch: "تواصل معنا",
    getInTouchDesc: "يسعدنا تواصلك معنا في أي وقت لتلبية كافة متطلبات الشحن والاستيراد والتصدير.",
    phoneLabel: "رقم الهاتف / واتساب",
    emailLabel: "البريد الإلكتروني",
    addressLabel: "العنوان",
    phoneInfo: "05325041643",
    emailInfo: "ahmetkatlojistik@gmail.com",
    addressInfo: "Hatay - Reyhanli",
    namePlaceholder: "الاسم الكريم",
    emailPlaceholder: "البريد الإلكتروني",
    phonePlaceholder: "رقم الهاتف",
    msgPlaceholder: "رسالتك...",
    sendBtn: "إرسال الطلب",
    footer: "© 2026 Ahmed Kat Logistics. جميع الحقوق محفوظة."
  },
  en: {
    brand: "AHMED KAT LOGISTICS",
    subtitle: "IMPORT, EXPORT & INTERNATIONAL SHIPPING",
    home: "Home",
    about: "About Us",
    services: "Services",
    sectors: "Operations",
    contact: "Contact",
    quote: "Get a Quote",
    heroTitle: "Your Trusted Gateway to Global Trade",
    heroDesc: "We provide top-tier import, export, sea, land, and air freight services with high efficiency and competitive rates.",
    startBtn: "Get Started",
    
    aboutTitle: "About Us",
    aboutDesc: "Since 2009, we have been working in trade and shipping, specializing in exporting the finest Turkish goods with extensive experience in land transport.",

    servicesTitle: "Our Services",
    serv1Title: "Import & Export",
    serv1Desc: "We provide comprehensive services in importing and exporting the finest Turkish goods with high specifications.",
    serv2Title: "International Transport",
    serv2Desc: "Extensive experience and high professionalism in land and international transport to ensure your shipments arrive safely.",

    sectorsTitle: "Our Export Operations",
    sec1: "Trucks Trading",
    sec1Desc: "Import, export, and trade of heavy and light cargo transport trucks with high specifications.",
    sec2: "Legumes & Grains",
    sec2Desc: "Supplying the finest legumes such as lentils, chickpeas, and premium Turkish bulgur.",
    sec3: "Turkish Delight (Lokum)",
    sec3Desc: "Authentic and traditional Turkish delight and sweets in various delicious flavors.",
    sec4: "Grains Export",
    sec4Desc: "Exporting and distributing various types of grains and food commodities globally.",
    featuresTitle: "Global Sourcing & Distribution",
    featuresDesc: "Reliable Solutions for Your Business Needs.",
    feat1Title: "Product Sourcing",
    feat1Desc: "We source quality products from top manufacturers worldwide.",
    feat2Title: "International Logistics",
    feat2Desc: "Efficient shipping and distribution to all destinations.",
    getInTouch: "Get in Touch",
    getInTouchDesc: "Contact Us for Your Trading & Shipping Needs.",
    phoneLabel: "Phone / WhatsApp",
    emailLabel: "Email Address",
    addressLabel: "Address",
    phoneInfo: "05325041643",
    emailInfo: "ahmetkatlojistik@gmail.com",
    addressInfo: "Hatay - Reyhanli",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email Address",
    phonePlaceholder: "Phone Number",
    msgPlaceholder: "Message",
    sendBtn: "Send Inquiry",
    footer: "© 2026 Ahmed Kat Logistics. All Rights Reserved."
  },
  tr: {
    brand: "AHMED KAT LOJİSTİK",
    subtitle: "İTHALAT, İHRACAT VE ULUSLARARASI NAKLİYE",
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetler",
    sectors: "Faaliyetler",
    contact: "İletişim",
    quote: "Teklif Al",
    heroTitle: "Küresel Ticaret İçin Güvenilir Kapınız",
    heroDesc: "Yüksek verimlilik ve rekabetçi fiyatlarla ithalat, ihracat, deniz, kara ve hava taşımacılığı hizmetleri sunuyoruz.",
    startBtn: "Başlayın",
    
    aboutTitle: "Hakkımızda",
    aboutDesc: "2009 yılından bu yana ticaret ve nakliye alanında faaliyet gösteriyor, en kaliteli Türk ürünlerinin ihracatında uzmanlaşarak kara taşımacılığında derin bir deneyim sunuyoruz.",

    servicesTitle: "Hizmetlerimiz",
    serv1Title: "İthalat ve İhracat",
    serv1Desc: "En kaliteli Türk mallarının ithalatı ve ihracatında yüksek standartlarda kapsamlı hizmetler sunuyoruz.",
    serv2Title: "Uluslararası Nakliye",
    serv2Desc: "Gönderilerinizin güvenle ulaşmasını sağlamak için kara ve uluslararası taşımacılıkta geniş deneyim ve yüksek profesyonellik.",

    sectorsTitle: "İhracat Faaliyetlerimiz",
    sec1: "Kamyon ve Tır Ticareti",
    sec1Desc: "Ağır ve hafif yük taşıma kamyonlarının ithalatı, ihracatı ve ticareti.",
    sec2: "Bakliyat ve Çeşitleri",
    sec2Desc: "Mercimek, nohut ve kaliteli Türk bulguru gibi en iyi bakliyatların tedariği.",
    sec3: "Türk Lokumu ve Tatlılar",
    sec3Desc: "Çeşitli lezzetlerde orijinal geleneksel Türk lokumları ve tatlıları.",
    sec4: "Tahıl İhracatı",
    sec4Desc: "Çeşitli tahıl ürünlerinin ve gıda emtialarının küresel ihracatı ve dağıtımı.",
    featuresTitle: "Küresel Tedarik ve Dağıtım",
    featuresDesc: "İş İhtiyaçlarınız İçin Güvenilir Çözümler.",
    feat1Title: "Ürün Tedariği",
    feat1Desc: "Dünya çapındaki en iyi üreticilerden kaliteli ürünler tedarik ediyoruz.",
    feat2Title: "Uluslararası Lojistik",
    feat2Desc: "Tüm destinasyonlara verimli nakliye ve dağıtım.",
    getInTouch: "İletişime Geçin",
    getInTouchDesc: "Ticari ve Lojistik İhtiyaçlarınız İçin Bizimle İletişime Geçin.",
    phoneLabel: "Telefon / WhatsApp",
    emailLabel: "E-posta",
    addressLabel: "Adres",
    phoneInfo: "05325041643",
    emailInfo: "ahmetkatlojistik@gmail.com",
    addressInfo: "Hatay - Reyhanli",
    namePlaceholder: "Adınız Soyadınız",
    emailPlaceholder: "E-posta Adresi",
    phonePlaceholder: "Telefon Numarası",
    msgPlaceholder: "Mesajınız...",
    sendBtn: "Talep Gönder",
    footer: "© 2026 Ahmed Kat Lojistik. Tüm Hakları Saklıdır."
  }
};

export default function App() {
  const [lang, setLang] = useState('ar');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const txt = t[lang];
  const isArabic = lang === 'ar';

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className={`site-container ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      {/* شريط التنقل العلوي */}
      <header className="header">
        <div className="logo-area">
          <div className="logo-globe">
            <Globe className="globe-svg" />
          </div>
          <div>
            <h1>{txt.brand}</h1>
            <p>{txt.subtitle}</p>
          </div>
        </div>
        
        {/* القائمة الرئيسية للشاشات الكبيرة */}
        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={closeMenu}>{txt.home}</a>
          <a href="#about" onClick={closeMenu}>{txt.about}</a>
          <a href="#services" onClick={closeMenu}>{txt.services}</a>
          <a href="#sectors" onClick={closeMenu}>{txt.sectors}</a>
          <a href="#contact" onClick={closeMenu}>{txt.contact}</a>
        </nav>

        <div className="header-actions">
          <div className="lang-switcher">
            <Globe className="globe-icon" />
            <button onClick={() => setLang('ar')} className={lang === 'ar' ? 'active' : ''}>عربي</button>
            <button onClick={() => setLang('en')} className={lang === 'en' ? 'active' : ''}>EN</button>
            <button onClick={() => setLang('tr')} className={lang === 'tr' ? 'active' : ''}>TR</button>
          </div>
          <a href="#contact" className="quote-btn">{txt.quote}</a>
          
          {/* زر القائمة للموبايل */}
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* قسم البانر الرئيسي */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h2>{txt.heroTitle}</h2>
          <p>{txt.heroDesc}</p>
          <a href="#contact" className="start-btn">{txt.startBtn}</a>
        </div>
      </section>

      {/* قسم من نحن */}
      <section id="about" className="about-section">
        <div className="about-container">
          <h2>{txt.aboutTitle}</h2>
          <p>{txt.aboutDesc}</p>
        </div>
      </section>

      {/* قسم خدماتنا */}
      <section id="services" className="services-section">
        <div className="services-container">
          <h2>{txt.servicesTitle}</h2>
          <div className="services-grid">
            <div className="service-card">
              <Package className="serv-icon" />
              <h3>{txt.serv1Title}</h3>
              <p>{txt.serv1Desc}</p>
            </div>
            <div className="service-card">
              <Truck className="serv-icon" />
              <h3>{txt.serv2Title}</h3>
              <p>{txt.serv2Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الأعمال التصديرية */}
      <section id="sectors" className="sectors-section">
        <div className="sectors-header">
          <h3>{txt.sectorsTitle}</h3>
        </div>
        <div className="sectors-grid">
          <div className="sector-card">
            <img src={trucksImg} alt="Trucks Trading" className="sector-img" />
            <div className="sector-card-content">
              <h4>{txt.sec1}</h4>
              <p>{txt.sec1Desc}</p>
            </div>
          </div>

          <div className="sector-card">
            <img src={legumesImg} alt="Legumes and Grains" className="sector-img" />
            <div className="sector-card-content">
              <h4>{txt.sec2}</h4>
              <p>{txt.sec2Desc}</p>
            </div>
          </div>

          <div className="sector-card">
            <img src={delightImg} alt="Turkish Delight" className="sector-img" />
            <div className="sector-card-content">
              <h4>{txt.sec3}</h4>
              <p>{txt.sec3Desc}</p>
            </div>
          </div>

          <div className="sector-card">
            <img src={grainsImg} alt="Grains Export" className="sector-img" />
            <div className="sector-card-content">
              <h4>{txt.sec4}</h4>
              <p>{txt.sec4Desc}</p>
            </div>
          </div>
        </div>

        <div className="distribution-box">
          <div className="dist-text">
            <h3>{txt.featuresTitle}</h3>
            <p>{txt.featuresDesc}</p>
          </div>
          <div className="dist-grid">
            <div>
              <h5>{txt.feat1Title}</h5>
              <p>{txt.feat1Desc}</p>
            </div>
            <div>
              <h5>{txt.feat2Title}</h5>
              <p>{txt.feat2Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم التواصل */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-intro">
            <h3>{txt.getInTouch}</h3>
            <p>{txt.getInTouchDesc}</p>
          </div>

          <div className="contact-info-boxes">
            <div className="info-card">
              <MapPin className="contact-icon" />
              <h5>{txt.addressLabel}</h5>
              <p className="dir-ltr">{txt.addressInfo}</p>
            </div>

            <div className="info-card">
              <Mail className="contact-icon" />
              <h5>{txt.emailLabel}</h5>
              <p>
                <a href={`mailto:${txt.emailInfo}`} className="contact-link">
                  {txt.emailInfo}
                </a>
              </p>
            </div>

            <div className="info-card">
              <Phone className="contact-icon" />
              <h5>{txt.phoneLabel}</h5>
              <p className="dir-ltr">
                <a href="https://wa.me/905325041643" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                  {txt.phoneInfo}
                </a>
              </p>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert('تم الإرسال بنجاح!'); }} className="contact-form">
            <div className="form-row">
              <input type="text" placeholder={txt.namePlaceholder} required />
              <input type="email" placeholder={txt.emailPlaceholder} required />
              <input type="text" placeholder={txt.phonePlaceholder} required />
            </div>
            <textarea placeholder={txt.msgPlaceholder} rows="3" required></textarea>
            <button type="submit" className="submit-btn">{txt.sendBtn}</button>
          </form>
        </div>
      </section>

      {/* التذييل */}
      <footer>
        <p>{txt.footer}</p>
      </footer>
    </div>
  );
}