# 📖 Qur'on Yodlash Jurnali

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646cff?style=for-the-badge&logo=vite&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-1.83.4-cc6699?style=for-the-badge&logo=sass&logoColor=white)

**Qur'oni Karimni yodlash va o'rganish uchun zamonaviy veb-ilova**

[🌐 Demo](https://asilbek2706.github.io/Quran-Memorization-Journal) • [🐛 Xatoliklar](https://github.com/Asilbek2706/Quran-Memorization-Journal/issues) • [🤝 Hissa qo'shish](#-hissa-qoshish)

</div>

---

## 🌟 Umumiy Ma'lumot

Qur'oni Karimni yodlash va o'rganish jarayonini osonlashtirish uchun yaratilgan interaktiv veb-ilova. Loyiha barcha 114 surani o'z ichiga oladi va foydalanuvchilarga arabcha matn, o'zbekcha tarjima, transkripsiya hamda professional audio qiroatlarni taqdim etadi.

## ✨ Asosiy Xususiyatlar

- 🕌 **114 Sura** - To'liq Qur'on matni va tarjimasi
- 🎧 **Audio Qiroat** - Professional qorilar ovozi
- 📱 **Responsive Dizayn** - Barcha qurilmalarda qulay ishlash
- 🔍 **Tezkor Qidiruv** - Sura nomi yoki raqami bo'yicha qidirish
- ⚙️ **Context API** - Zamonaviy state management (shrift o'lchamini sozlash)
- 💾 **LocalStorage** - Ma'lumotlarni kesh qilish va tezkor yuklash

## 🛠 Texnologiyalar

- **React 19.2.0** + **TypeScript 5.6.2** - Zamonaviy UI va tip xavfsizligi
- **Vite 6.0.5** - Tez build va development
- **SASS 1.83.4** - Moslashuvchan stillar
- **Context API** - Global state boshqaruvi
- **Axios** - HTTP so'rovlar
- **AlQuran Cloud API** - Qur'on matni va audio fayllar

## 🚀 Tez Boshlash

```bash
# Repositoriyani klonlash
git clone https://github.com/Asilbek2706/Quran-Memorization-Journal.git

# Papkaga o'tish
cd Quran-Memorization-Journal

# Bog'liqliklarni o'rnatish
npm install

# Ishga tushirish
npm run dev
```

Brauzerda `http://localhost:5173` manziliga o'ting.

## 📦 Mavjud Skriptlar

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Build'ni ko'rish
npm run lint     # Kod sifatini tekshirish
```

## 📂 Loyiha Strukturasi

```
src/
├── components/       # React komponentlari
│   └── SuraCard.tsx # Sura kartasi
├── contexts/         # Context API
│   └── SettingsContext.tsx # Sozlamalar
├── styles/           # SCSS fayllar
├── App.tsx          # Asosiy komponent
└── main.tsx         # Entry point
```

## 🎯 Asosiy Funksiyalar

### Context API Integration
Loyihada **SettingsContext** orqali global state boshqariladi:
- 🔤 Arabcha matn shrift o'lchamini sozlash
- ⚙️ Foydalanuvchi sozlamalarini saqlash
- 🔄 Komponentlar o'rtasida state ulashish

### Audio Player
- ▶️ Oynat/To'xtatish
- ⏩ Oldinga/Orqaga o'tish
- 🔊 Ovoz balandligini boshqarish

### Responsive Dizayn
- 📱 Mobil qurilmalar (320px+)
- 📲 Planshetlar (768px+)
- 💻 Kompyuterlar (1024px+)

## 🤝 Hissa Qo'shish

```bash
# Fork va klonlash
git clone https://github.com/sizning-username/Quran-Memorization-Journal.git

# Yangi branch yaratish
git checkout -b feature/yangi-funksiya

# O'zgarishlarni commit qilish
git commit -m "Yangi funksiya qo'shildi"

# Push va Pull Request
git push origin feature/yangi-funksiya
```

**Yordam kerakmi?**
- 🐛 [Bug xabar berish](https://github.com/Asilbek2706/Quran-Memorization-Journal/issues/new)
- 💬 [Savol berish](https://github.com/Asilbek2706/Quran-Memorization-Journal/discussions)

## 📄 Litsenziya

Bu loyiha shaxsiy o'quv va ma'naviy rivojlanish maqsadida yaratilgan. Erkin foydalanish mumkin.

## 👤 Muallif

**Asilbek Yusupov**  
GitHub: [@Asilbek2706](https://github.com/Asilbek2706)

## 🙏 Minnatdorchilik

- [AlQuran Cloud API](https://alquran.cloud/) - Qur'on matni va audio fayllar
- Muhammad Sodiq Muhammad Yusuf - O'zbekcha tarjima
- React, Vite, TypeScript jamoalari

---

<div align="center">

**"Albatta, Qur'onni yod olishni osonlashtirib qo'ydik. Shunday ekan, ibrat oluvchi bormi?"**  
*(Qamar surasi, 17-oyat)*

Loyihadan foydalanganingiz uchun rahmat! 🌟

[⬆ Yuqoriga qaytish](#-quron-yodlash-jurnali)

</div>