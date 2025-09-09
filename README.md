Community Marketplace App

React Native (Expo) ve Firebase kullanılarak geliştirilmiş ikinci el satış mobil uygulaması.

✨ Özellikler

İkinci el ilanları listeleme ve arama

Kendi ilanlarını oluşturma, düzenleme ve silme (başlık, açıklama, fiyat, görsel ekleme)

Firebase Auth ile e‑posta/şifre tabanlı kimlik doğrulama

Firebase Firestore ile bulut tabanlı veri depolama

Firebase Storage ile görsel yükleme

Form doğrulama ve hata yakalama

NativeWind (React Native için Tailwind) ile modern ve duyarlı arayüz

Expo yapısı sayesinde hızlı geliştirme ve kolay derleme

🗂️ Proje Yapısı
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
🧰 Teknoloji Yığını

React Native (Expo) – Çapraz platform ve hızlı geliştirme

Firebase Auth – Kullanıcı girişi (email/şifre)

Cloud Firestore – İlan verilerinin tutulduğu NoSQL veritabanı

Firebase Storage – İlan görselleri için depolama

NativeWind (Tailwind CSS) – Kullanışlı ve modern arayüz

🚀 Başlangıç (Yerel Kurulum)
1) Gereksinimler

Node.js 18+

Expo CLI: npm i -g expo-cli (veya npx expo)

Android Studio / Xcode (ya da cihazda Expo Go uygulaması)

2) Bağımlılıkları yükle
npm install
# veya
yarn
3) Firebase yapılandırması

firebaseConfig.jsx dosyasına Firebase web uygulamanızın yapılandırmasını ekleyin:

export const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
};
4) Uygulamayı çalıştır
npx expo start
# "a" → Android emülatör, "i" → iOS simülatör veya Expo Go ile QR kod okut
🗄️ Veri Modeli

Collection: listings

{
  "title": "Dell XPS 13 (2019)",
  "description": "Temiz, batarya iyi durumda",
  "price": 18500,
  "images": ["gs://.../image1.jpg"],
  "ownerUid": "uid",
  "createdAt": 1690000000000,
  "location": { "city": "İstanbul", "district": "Kadıköy" }
}

🙌 Teşekkürler
