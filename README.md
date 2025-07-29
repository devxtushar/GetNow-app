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

## 📸 3. Screenshots

- **Home Screen:**
  ![Home](https://drive.google.com/uc?export=view&id=1RPuYekYMfbPxPPMKbbmT3Esyzn8idoiP)

- **Product Detail:**  
  ![Detail](https://drive.google.com/uc?export=view&id=1YQEoFLAHMYEK3QA1mrugORDkdeuU5Mrg)

- **Cart Items:**  
  ![Cart](https://drive.google.com/uc?export=view&id=1khXLAas2zevJmn0b9v8ug3TVk4mXwtFw)

- **Track Order - Preparing:**  
  ![Preparing](https://drive.google.com/uc?export=view&id=1eXW1H6bQPZ0AFDFErNa_QV8KfuIr4ACd)

- **Track Order - Out for Delivery:**  
  ![Out](https://drive.google.com/uc?export=view&id=1WSz8_6cMPLs4nTW-6hIJ6QaoBZ9XSZVV)


> Built with ❤️ by devxtushar
