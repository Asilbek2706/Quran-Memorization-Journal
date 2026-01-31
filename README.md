# 📖 Quran Memorization Journal (Juz 30)

Bu loyiha Qur'oni Karimning 30-porasini yodlash jarayonini kuzatib borish va tartibga solish uchun yaratilgan shaxsiy yordamchidir. Loyiha davomida ham ma'naviy bilimlar, ham zamonaviy Web-texnologiyalar (React & SASS) o'rganilmoqda.



## 🎯 Loyiha maqsadi
- Qur'onning 37 ta surasini (30-pora) bosqichma-bosqich yodlash.
- Har bir suraning arabcha/transkripsiya va o'zbekcha tarjimasini o'qish.
- **Mishary Rashid Al-Afasy** qiroatlarini eshitish orqali talaffuzni to'g'irlash.
- React va SASS texnologiyalari bo'yicha amaliy tajriba orttirish.

## 🛠 Texnologiyalar
- **React 18** (Vite orqali)
- **TypeScript** (Kod sifati va xavfsizligi uchun)
- **SASS (SCSS)** (Murakkab va chiroyli stillar uchun)
- **Flexbox & Grid** (Moslashuvchan dizayn uchun)

## ✨ Xususiyatlari
- **Interaktiv Sidebar:** Suralar ro'yxati orqali tezkor o'tish.
- **Dinamik Rendering:** Tanlangan sura darhol ekranda paydo bo'ladi.
- **Ikki ustunli ko'rinish:** Chap tomonda matn, o'ng tomonda tarjima.
- **Audio player:** Har bir sura uchun alohida qiroat tinglash imkoniyati.
- **Responsive Design:** Telefon va kompyuterlar uchun moslashtirilgan.

## 📂 Loyiha strukturasi
```bash
src/
 ├── components/
 │    ├── SuraCard.tsx      # Suralar uchun umumiy qolip (Wrapper)
 │    └── Suras/            # Har bir sura alohida komponent sifatida
 ├── styles/
 │    ├── App.scss          # Asosiy layout va sidebar stillari
 │    └── SuraCard.scss     # Card va matnlar uchun stillar
 ├── suras-audio/           # Suralar uchun audio fayllar
 ├── assets/                # Rasmlar va boshqa resurslar
 └── App.tsx                # Loyihaning markaziy boshqaruv qismi
```

## 🚀 O'rnatish va ishga tushirish

### Talablar
- Node.js (v16 yoki yuqori versiya)
- npm yoki yarn package manager

### O'rnatish
```bash
# Repositoriyani klonlash
git clone https://github.com/Asilbek2706/Quran-Memorization-Journal.git

# Loyiha papkasiga o'tish
cd Quran-Memorization-Journal

# Bog'liqliklarni o'rnatish
npm install
```

### Ishga tushirish
```bash
# Development rejimida ishga tushirish
npm run dev

# Production uchun build qilish
npm run build

# Production build'ni ko'rish
npm run preview

# Kod sifatini tekshirish (linting)
npm run lint
```

## 📝 Foydalanish
1. Loyihani ishga tushiring (`npm run dev`)
2. Brauzerda `http://localhost:5173` manziliga o'ting
3. Chap tarafdagi sidebar'dan kerakli surani tanlang
4. Sura matni va tarjimasi ko'rinadi
5. Audio player orqali qiroat tinglang

## 🤝 Hissa qo'shish
Loyihaga hissa qo'shmoqchi bo'lsangiz:
1. Repository'ni fork qiling
2. O'zingizning branch yarating (`git checkout -b feature/AmazingFeature`)
3. O'zgarishlaringizni commit qiling (`git commit -m 'Add some AmazingFeature'`)
4. Branch'ga push qiling (`git push origin feature/AmazingFeature`)
5. Pull Request oching

## 📄 Litsenziya
Bu loyiha shaxsiy o'quv maqsadlari uchun yaratilgan.

## 👤 Muallif
**Asilbek**
- GitHub: [@Asilbek2706](https://github.com/Asilbek2706)

## 🙏 Minnatdorchilik
- Qur'on matni va tarjimalari uchun
- Mishary Rashid Al-Afasy qiroatlari uchun

---
**Eslatma:** Bu loyiha Qur'oni Karimni yodlash va o'rganish jarayonida Web dasturlashni ham o'rganish maqsadida yaratilgan.