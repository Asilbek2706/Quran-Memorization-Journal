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
 └── App.tsx                # Loyihaning markaziy boshqaruv qismi