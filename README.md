# Community Marketplace App - İkinci El Satış Mobil Uygulaması

<div align="center">
  
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)

Community Marketplace App, kullanıcıların ikinci el ürünleri kolayca listeleyebildiği, satabildiği, satın alabildiği ve takas edebildiği kullanıcı dostu bir mobil pazar uygulamasıdır. Uygulama, yerel topluluklar içinde sürdürülebilir tüketimi teşvik etmek amacıyla geliştirilmiştir.

[Proje Özellikleri](#-proje-özellikleri) • [Kurulum](#-kurulum) • [Kullanım](#-kullanım) • [Teknolojiler](#-teknolojiler) • [Ekran Görüntüleri](#-ekran-görüntüleri)

</div>

---

## ✨ Özellikler

* İkinci el ilanları listeleme ve arama
* Kendi ilanlarını oluşturma, düzenleme ve silme (başlık, açıklama, fiyat, görsel ekleme)
* Firebase Auth ile e-posta/şifre tabanlı kimlik doğrulama
* Firebase Firestore ile bulut tabanlı veri depolama
* Firebase Storage ile görsel yükleme
* Form doğrulama ve hata yakalama
* NativeWind (React Native için Tailwind) ile modern ve duyarlı arayüz
* Expo yapısı sayesinde hızlı geliştirme ve kolay derleme

---

## 🗂️ Proje Yapısı

```
community-marketplace-app/
├─ Apps/                # Uygulama ekranları (Home, Details, NewListing, Profile)
├─ assets/              # Uygulama ikonları, görseller, ekran görüntüleri
├─ hooks/               # Yeniden kullanılabilir hook’lar (auth, firestore vb.)
├─ App.js               # Uygulama giriş noktası (navigasyon + provider’lar)
├─ app.json             # Expo yapılandırması
├─ firebaseConfig.jsx   # Firebase client yapılandırması
├─ tailwind.config.js   # NativeWind/Tailwind ayarları
├─ package.json         # Script’ler ve bağımlılıklar
└─ ...
```

---

## 🧰 Teknoloji Yığını

* **React Native (Expo)** – Çapraz platform ve hızlı geliştirme
* **Firebase Auth** – Kullanıcı girişi (email/şifre)
* **Cloud Firestore** – İlan verilerinin tutulduğu NoSQL veritabanı
* **Firebase Storage** – İlan görselleri için depolama
* **NativeWind (Tailwind CSS)** – Kullanışlı ve modern arayüz

---

## 🚀 Başlangıç (Yerel Kurulum)

### 1) Gereksinimler

* Node.js 18+
* Expo CLI: `npm i -g expo-cli` (veya `npx expo`)
* Android Studio / Xcode (ya da cihazda Expo Go uygulaması)

### 2) Bağımlılıkları yükle

```bash
npm install
```

### 3) Firebase yapılandırması

`firebaseConfig.jsx` dosyasına Firebase web uygulamanızın yapılandırmasını ekleyin:

```jsx
export const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
};
```

### 4) Uygulamayı çalıştır

```bash
npx expo start
# "a" → Android emülatör, "i" → iOS simülatör veya Expo Go ile QR kod okut
```

---

## 🗄️ Veri Modeli

**Collection:** `listings`

```json
{
  "title": "Dell XPS 13 (2019)",
  "description": "Temiz, batarya iyi durumda",
  "price": 18500,
  "images": ["gs://.../image1.jpg"],
  "ownerUid": "uid",
  "createdAt": 1690000000000,
  "location": { "city": "İstanbul", "district": "Kadıköy" }
}
```

---

## 🖼️ Ekran Görüntüleri

`assets/screenshots/` klasörü içine ekran görüntüleri ekleyebilirsiniz.

| Ana Sayfa                            | Detay                                      | Yeni İlan                                  |
| ------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| ![Home](assets/screenshots/home.png) | ![Details](assets/screenshots/details.png) | ![New](assets/screenshots/new-listing.png) |

---

## 👨‍💻 Geliştirici

<div align="center">

### **Ahmet Yeşeriroğlu**

[![LinkedIn](https://img.shields.io/badge/📎_LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ahmetyeserir)
[![Email](https://img.shields.io/badge/📧_Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ahmetyeserirogluu@gmail.com)
[![GitHub](https://img.shields.io/badge/💻_GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AhmetYeserir)

</div>

---

## 🙏 Teşekkür

Bu projeyi inceleyen herkese teşekkürler!

