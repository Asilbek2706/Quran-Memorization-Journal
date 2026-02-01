# 📖 Quran Memorization Journal

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646cff?style=for-the-badge&logo=vite&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-1.83.4-cc6699?style=for-the-badge&logo=sass&logoColor=white)
![License](https://img.shields.io/badge/License-Educational-green?style=for-the-badge)

**Qur'oni Karimni yodlash va o'rganish uchun zamonaviy veb-ilova**

[Demo](https://asilbek2706.github.io/Quran-Memorization-Journal) • [Xatoliklar haqida xabar berish](https://github.com/Asilbek2706/Quran-Memorization-Journal/issues) • [Hissa qo'shish](#-hissa-qoshish)

</div>

---

## 📋 Umumiy ma'lumot

Quran Memorization Journal - bu Qur'oni Karimni yodlash va o'rganish jarayonini osonlashtirish uchun yaratilgan interaktiv veb-ilova. Loyiha Qur'onning barcha suralarini o'z ichiga oladi va foydalanuvchilarga arabcha matn, o'zbekcha tarjima, transkripsiya va audio qiroatlarni taqdim etadi.

### ✨ Asosiy imkoniyatlar

Bu loyiha quyidagi maqsadlar uchun yaratilgan:
- 🕌 **Qur'oni Karim o'rganish**: Barcha 114 sura uchun arabcha matn, o'zbekcha tarjima va transkripsiya
- 🎧 **Audio qiroat**: Har bir sura uchun professional qiroatlarni tinglash
- 📱 **Responsive dizayn**: Har qanday qurilmada (telefon, planshet, kompyuter) qulay foydalanish
- 🎯 **Yodlash jarayonini kuzatish**: O'rganilgan suralarni belgilash va takrorlash
- 💻 **Zamonaviy texnologiyalar**: React, TypeScript, SASS orqali sifatli kod yozish tajribasi

## 🛠 Texnologiyalar va vositalar

### Frontend
- **React 19.2.0** - Zamonaviy UI yaratish uchun
- **TypeScript 5.6.2** - Tiplarni tekshirish va kod xavfsizligi
- **Vite 6.0.5** - Tez ishlab chiqish va build qilish
- **SASS/SCSS 1.83.4** - Murakkab va moslashuvchan stillar

### Kutubxonalar
- **Axios 1.13.4** - HTTP so'rovlar uchun
- **react-h5-audio-player 3.10.1** - Audio pleyerlar uchun

### API va Ma'lumotlar
- **AlQuran Cloud API** - Qur'on matni va tarjimalari
- **Uzbek translations** - O'zbekcha sura nomlari va tarjimalar

### Dev Tools
- **ESLint** - Kod sifatini ta'minlash
- **TypeScript ESLint** - TypeScript uchun maxsus qoidalar

## ✨ Xususiyatlari

### 🎨 Interfeys
- **Interaktiv Sidebar:** Barcha suralar ro'yxati bilan tezkor navigatsiya
- **Qidiruv funksiyasi:** Sura nomini qidirish orqali tezkor topish
- **Dinamik Rendering:** Tanlangan sura darhol yuklanadi va ko'rsatiladi
- **Responsive dizayn:** Telefon, planshet va kompyuterlar uchun moslashtirilgan

### 📖 Matn ko'rinishi
- **Arabcha matn:** Asl Qur'on matni lotin alifbosida
- **O'zbekcha tarjima:** Har bir oyatning ma'nosi
- **Transkripsiya:** Arabcha matnni o'qish uchun yordam
- **Ikkita ustun:** Matn va tarjima yonma-yon joylashgan

### 🎧 Audio imkoniyatlari
- **Sifatli qiroat:** Professional qori qiroatlari
- **Audio player:** Pauza, davom ettirish, vaqtni boshqarish
- **Har sura uchun alohida:** Har bir suraning o'z audio fayli

### 💾 Ma'lumotlarni saqlash
- **LocalStorage:** Sura ma'lumotlarini keshga saqlash
- **Tez yuklash:** Qayta serverga murojaat qilmasdan ishlash
- **Samaradorlik:** Ma'lumotlar yuklanish tezligini oshirish

## 📂 Loyiha strukturasi

```
Quran-Memorization-Journal/
├── src/
│   ├── components/
│   │   └── SuraCard.tsx          # Sura kartasi komponenti
│   ├── styles/
│   │   └── SuraCard.scss         # Karta stillari
│   ├── assets/
│   │   └── react.svg             # Rasmlar va boshqa resurslar
│   ├── App.tsx                   # Asosiy ilova komponenti
│   ├── App.scss                  # Asosiy stillar
│   ├── main.tsx                  # Kirish nuqtasi
│   └── index.css                 # Global stillar
├── public/                       # Statik fayllar
├── index.html                    # HTML shablon
├── package.json                  # Loyiha bog'liqliklari
├── tsconfig.json                 # TypeScript konfiguratsiyasi
├── vite.config.ts                # Vite konfiguratsiyasi
├── eslint.config.js              # ESLint qoidalari
└── README.md                     # Loyiha hujjatlari
```

## 🎯 Asosiy komponentlar

### App.tsx
Loyihaning markaziy komponenti:
- Suralar ro'yxatini boshqarish
- API bilan ishlash (AlQuran Cloud)
- Tanlangan surani ko'rsatish
- Qidiruv funksiyasi
- LocalStorage bilan ma'lumotlarni kesh qilish

### SuraCard.tsx
Har bir sura uchun karta komponenti:
- Arabcha matn, tarjima va transkripsiya
- Audio player integratsiyasi
- Responsive dizayn
- Oyatlarni dinamik ko'rsatish

## 🚀 O'rnatish va ishga tushirish

### Tizim talablari

Loyihani ishga tushirish uchun quyidagilar kerak:
- **Node.js**: v16.0.0 yoki yuqori versiya ([yuklab olish](https://nodejs.org/))
- **npm**: v7.0.0 yoki yuqori (Node.js bilan birga o'rnatiladi)
- **Git**: Repositoriyani klonlash uchun

### O'rnatish bosqichlari

#### 1. Repositoriyani klonlash
```bash
git clone https://github.com/Asilbek2706/Quran-Memorization-Journal.git
```

#### 2. Loyiha papkasiga o'tish
```bash
cd Quran-Memorization-Journal
```

#### 3. Bog'liqliklarni o'rnatish
```bash
npm install
```

### Ishlatish

#### Development rejimi (ishlab chiqish)
```bash
npm run dev
```
Brauzerda `http://localhost:5173` manziliga o'ting

#### Production build qilish
```bash
npm run build
```
Build fayllar `dist/` papkasida saqlanadi

#### Production build'ni ko'rish
```bash
npm run preview
```

#### Kod sifatini tekshirish (Linting)
```bash
npm run lint
```

## 📝 Foydalanish qo'llanmasi

### Boshlash

1. **Loyihani ishga tushiring:**
   ```bash
   npm run dev
   ```

2. **Brauzerda oching:**
   - Avtomatik ochiladi yoki `http://localhost:5173` ga o'ting

3. **Sidebar'dan sura tanlang:**
   - Chap tarafdagi menyu orqali kerakli surani toping
   - Qidiruv maydonidan foydalanib tezroq toping

4. **Sura matnini o'qing:**
   - Arabcha matn va o'zbekcha tarjima yonma-yon ko'rinadi
   - Transkripsiya talaffuzga yordam beradi

5. **Qiroat tinglang:**
   - Audio player orqali professional qiroat tinglang
   - Pauza, davom ettirish, vaqtni boshqarish

### Qidiruv funksiyasi

Qidiruv maydoniga:
- Sura nomini kiriting (masalan: "Fotiha", "Baqara")
- Inglizcha nomini kiriting (masalan: "Al-Fatihah")
- Sura raqamini kiriting (masalan: "1", "2")

### Klaviatura yorliqlari

*Hozirda klaviatura yorliqlari qo'llab-quvvatlanmaydi, lekin kelgusida qo'shilishi rejalashtirilgan*

## 🌐 API va Ma'lumotlar Manbalari

### AlQuran Cloud API

Loyiha [AlQuran Cloud API](https://alquran.cloud/api) dan foydalanadi:
- **Sura ro'yxati:** `https://api.alquran.cloud/v1/surah`
- **Arabcha matn:** `https://api.alquran.cloud/v1/surah/{number}/ar.alafasy`
- **O'zbekcha tarjima:** `https://api.alquran.cloud/v1/surah/{number}/uz.sodik`
- **Transkripsiya:** `https://api.alquran.cloud/v1/surah/{number}/en.transliteration`

### Ma'lumotlar keshi

Loyiha LocalStorage'dan foydalanib ma'lumotlarni kesh qiladi:
- Sura ro'yxati `suras_list` kaliti ostida saqlanadi
- API'ga takroriy so'rovlarni kamaytiradi
- Tezroq yuklashni ta'minlaydi

## 🔧 Muammolarni hal qilish

### Umumiy muammolar

**Loyiha ishga tushmayapti:**
```bash
# Node.js versiyasini tekshiring
node --version  # v16+ bo'lishi kerak

# Bog'liqliklarni qayta o'rnating
rm -rf node_modules package-lock.json
npm install
```

**Port band:**
```bash
# Boshqa port ishlatish
npm run dev -- --port 3000
```

**Build xatoliklari:**
```bash
# TypeScript xatolarini tekshirish
npm run lint

# Cache'ni tozalash
rm -rf dist node_modules/.vite
npm run build
```

**API bilan bog'lanish muammosi:**
- Internet ulanishini tekshiring
- Brauzer konsolida (F12) xatolarni ko'ring
- API manzili to'g'riligini tasdiqlang

## 🗺 Loyiha rejasi va kelajak ishlanmalar

### Joriy versiya (v0.1.0)
- ✅ Asosiy interfeys
- ✅ Barcha suralar uchun qo'llab-quvvatlash
- ✅ Audio player
- ✅ Qidiruv funksiyasi
- ✅ Responsive dizayn

### Rejalashtirilgan yangiliklar

#### v1.0.0
- [ ] Yodlash jarayonini kuzatish tizimi
- [ ] Belgilangan suralar ro'yxati
- [ ] O'rganish statistikasi
- [ ] Klaviatura yorliqlari

#### v1.1.0
- [ ] Dark mode (tungi rejim)
- [ ] Shrift o'lchami va turini sozlash
- [ ] Boshqa tillar qo'llab-quvvatlash
- [ ] Bookmark funksiyasi

#### v2.0.0
- [ ] Foydalanuvchi hisobi
- [ ] Bulutda ma'lumotlarni saqlash
- [ ] Tavsif va eslatmalar qo'shish
- [ ] Ijtimoiy tarmoqlarda ulashish

### Texnik takomillashtirish
- [ ] Test qamrovi qo'shish
- [ ] PWA (Progressive Web App) funksiyalari
- [ ] Offline rejimida ishlash
- [ ] SEO optimizatsiyasi

## 🤝 Hissa qo'shish

Loyihaga hissa qo'shishingizdan xursandmiz! Quyidagi qadamlarni bajaring:

### Hissa qo'shish bosqichlari

1. **Repository'ni Fork qiling**
   - GitHub'da "Fork" tugmasini bosing

2. **Local'ga klonlang**
   ```bash
   git clone https://github.com/sizning-username/Quran-Memorization-Journal.git
   cd Quran-Memorization-Journal
   ```

3. **Yangi branch yarating**
   ```bash
   git checkout -b feature/yangi-funksiya
   ```

4. **O'zgarishlar kiriting**
   - Kod yozing
   - Test qiling
   - Linting qiling: `npm run lint`

5. **Commit qiling**
   ```bash
   git add .
   git commit -m "Yangi funksiya: tavsif"
   ```

6. **Push qiling**
   ```bash
   git push origin feature/yangi-funksiya
   ```

7. **Pull Request oching**
   - GitHub'da o'z fork'ingizga o'ting
   - "New Pull Request" tugmasini bosing
   - O'zgarishlaringizni tavsiflab yuboring

### Hissa qo'shish yo'riqnomalari

- **Kod sifati:** TypeScript va ESLint qoidalariga amal qiling
- **Commit xabarlari:** Aniq va tushunarli yozing
- **Hujjatlar:** Yangi funksiyalarni README'ga qo'shing
- **Test:** Imkon qadar test yozing (kelgusida)
- **Kod uslubi:** Mavjud kod uslubiga amal qiling

### Qanday hissa qo'shish mumkin?

- 🐛 Bug'larni tuzatish
- ✨ Yangi funksiyalar qo'shish
- 📝 Hujjatlarni yaxshilash
- 🌐 Yangi tillar qo'shish
- 🎨 Dizaynni yaxshilash
- ⚡ Ishlash tezligini oshirish

## 📄 Litsenziya

Bu loyiha shaxsiy o'quv va ma'naviy rivojlanish maqsadlari uchun yaratilgan. Loyihadan foydalanish, o'zgartirish va tarqatish erkin.

**Muhim eslatma:**
- Qur'oni Karim matni va tarjimalari muqaddas va hurmatli
- Loyihadan foydalanganda Islom qoidalariga rioya qiling
- Noto'g'ri foydalanish uchun mas'uliyat foydalanuvchiga tegishli

## 👤 Muallif

**Asilbek Yusupov**
- GitHub: [@Asilbek2706](https://github.com/Asilbek2706)
- Loyiha: [Quran Memorization Journal](https://github.com/Asilbek2706/Quran-Memorization-Journal)

## 📧 Bog'lanish va Qo'llab-quvvatlash

### Savollar va takliflar

Agar savollaringiz yoki takliflaringiz bo'lsa:
- 📝 [Issue ochish](https://github.com/Asilbek2706/Quran-Memorization-Journal/issues/new)
- 💬 [Discussion bo'limiga yozish](https://github.com/Asilbek2706/Quran-Memorization-Journal/discussions)
- 📧 Email orqali muallif bilan bog'lanish

### Xatolar haqida xabar berish

Bug topganingizda:
1. [Issues](https://github.com/Asilbek2706/Quran-Memorization-Journal/issues) bo'limiga o'ting
2. Xato haqida batafsil ma'lumot bering
3. Screenshot va xato kodini qo'shing
4. Qanday qayta hosil qilish mumkinligini tushuntiring

## 🙏 Minnatdorchilik va Tashakkur

Bu loyiha quyidagi manba va xizmatlardan foydalanadi:

### API va Ma'lumotlar
- **[AlQuran Cloud API](https://alquran.cloud/)** - Qur'on matni, tarjimalari va audio fayllar uchun
- **O'zbekcha tarjimalar** - Muhammad Sodiq Muhammad Yusuf tarjimasi
- **Audio qiroatlar** - Professional qorilar qiroatlari

### Texnologiyalar va Kutubxonalar
- **React Team** - React kutubxonasi uchun
- **Vite Team** - Tez build vositasi uchun
- **TypeScript Team** - TypeScript tili uchun
- **SASS Team** - SCSS preprocessor uchun
- **Open Source jamiyati** - Barcha ochiq kodli vositalar uchun

### Ilhom manbalari
- Qur'oni Karimni o'rganish va yodlash ishtiyoqi
- Islomiy ta'lim va ma'rifat
- Zamonaviy texnologiyalarni o'rganish orzusi

---

<div align="center">

**Eslatma:** Bu loyiha Qur'oni Karimni yodlash va o'rganish jarayonida zamonaviy Web dasturlashni ham o'rganish maqsadida yaratilgan.

Loyihadan foydalanganingiz uchun rahmat! 🌟

**"Albatta, Qur'onni yod olishni osonlashtirib qo'ydik. Shunday ekan, ibrat oluvchi bormi?"**
*(Qamar surasi, 17-oyat)*

[⬆ Yuqoriga qaytish](#-quran-memorization-journal)

</div>