# 💼 GetNow Shopping App

GetNow brings your favorite local stores online groceries, food, medicines and more delivered in just minutes. It's a mobile shopping application built with **React Native**, offering product listings, detail views, cart functionality, checkout process, and order tracking.

---

## 📦 1. Project Setup

### Prerequisites

- Node.js & npm
- React Native CLI
- Android Studio or Xcode
- Git

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/devxtushar/GetNow.git
   cd your-repo
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run on Android**

   ```bash
   npx react-native run-android
   ```

   **Run on iOS** (macOS only)

   ```bash
   npx react-native run-ios
   ```

---

## 🧰 2. Used Libraries

### ✅ NativeWind (Tailwind CSS for React Native)

**Installation:**

```bash
npm install nativewind
```

**Setup:**

- Create `tailwind.config.js`:

  ```bash
  npx nativewind init
  ```

- Configure `babel.config.js`:

  ```js
  module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: ['nativewind/babel'],
  };
  ```

---

### ✅ React Native Vector Icons

**Installation:**

```bash
npm install react-native-vector-icons
```

**Link Assets (Android):**

```bash
npx react-native link react-native-vector-icons
```

**Usage:**

```js
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
```

---

## 🎥 3. Demo Recording

[Click here to watch the demo](https://drive.google.com/file/d/1ZWpQWI651S6htN4k1SJa-GidiWyy2wPW/view?usp=drive_link)

---

## 📸 4. Screenshots

- **Home Screen:**
  ![Home](https://drive.google.com/uc?id=1p7iWPrvQ30_ljcL5mFUpbDnx_5nVwS6f)

- **Product Listing:**
  ![Product](https://drive.google.com/uc?id=1VCMqXTRrgPsK9QmUzJAraZetyrxZwD5z)

- **Product Detail:**
  ![Detail](https://drive.google.com/uc?id=1ZmBPGKyCPTO3xlFNSVveyXgDoYk0tMhm)

- **Order Detail:**
  ![Order](https://drive.google.com/uc?id=1w43f_BSrWsCJsNFUT3PrSfw4ziwVPTkq)

- **Cart Items:**
  ![Cart](https://drive.google.com/uc?id=1arMtklbmF27pqLiQbAE3D1tVQwUf7cpO)

- **Track Order - Preparing:**
  ![Preparing](https://drive.google.com/uc?id=1ki7-xlsYg15qR6EYXPBV127GHcJ0gSVk)

- **Track Order - Out for Delivery:**
  ![Out](https://drive.google.com/uc?id=1YXkit7GJ97ZRJXxnGfpLrJZphleHDa3P)

- **Track Order - Delivered:**
  ![Delivered](https://drive.google.com/uc?id=1yTCIBnkRyyB7LmdzyWugaUxv5neuM0CW)

- **Tracker Overview:**
  ![Tracker](https://drive.google.com/uc?id=1RYGb6IgluGfNU5gojy4HxuR_ZCnN6KQA)

> Built with ❤️ by devxtushar
