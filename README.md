# 📱 Mobile App (React Native)

This is a mobile application built using **React Native**, **TypeScript**, and **Redux Toolkit**.  
The app follows modern UI/UX practices and includes authentication, validation, and theme customization features.

---

## 🚀 Features

### 🔐 Authentication System
- Login page as the entry point of the app
- Users can navigate to the registration page from login
- Full input validation on all forms
- After successful registration:
  - A verification code is received from the API response
  - Users must submit the verification code
  - On successful verification, users are redirected to the Home page

---

### 🏠 Landing / Home Page
- Clean and modern landing page design
- Hero section at the top
- Multiple structured sections below the hero area

---

### 🌙 Dark Mode
- Users can toggle between **Light Mode** and **Dark Mode**
- Improves user experience and accessibility

---

### ✅ Form Validation
- All input fields are properly validated
- Ensures correct user input before submission

---

## 🛠️ Tech Stack

- **React Native**
- **TypeScript**
- **Redux Toolkit (RTK)**
- **React Navigation**

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate to project folder
cd your-repo-name

# Install dependencies
npm install

# Run the app
npx expo run:android 
