# 🔥 Firebase Setup Guide

This guide covers the process of setting up Firebase Authentication and Firestore for CopilotAI.

## 1. Create a Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **Add project** and follow the on-screen instructions. Name it `copilotai-prod` (or your preferred name).
3. (Optional) Enable Google Analytics during setup if you want user metrics.

## 2. Register Your Web App
1. On the project overview page, click the **Web (</>)** icon to add a web app.
2. Register the app with a nickname (e.g., `CopilotAI Landing`).
3. Click **Register app**.
4. Firebase will provide a `firebaseConfig` object. Keep this open.

## 3. Configure Environment Variables
Copy the values from the `firebaseConfig` object into your local `.env.local` file:

```env
NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSy..."
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-project.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-project.appspot.com"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="123456789"
NEXT_PUBLIC_FIREBASE_APP_ID="1:123:web:abc"
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="G-ABCDEF"
```

## 4. Enable Authentication
1. In the Firebase Console, go to **Build > Authentication**.
2. Click **Get Started**.
3. Go to the **Sign-in method** tab.
4. Enable **Email/Password**.
5. (Optional) Enable Google and GitHub providers for social login.
6. **Important for Production**: Go to the **Settings** tab (under Authentication) > **Authorized domains**. Ensure your production Vercel URL (e.g., `copilotai.com`) is added to this list, or users will not be able to log in.

## 5. Enable Firestore Database
1. Go to **Build > Firestore Database**.
2. Click **Create database**.
3. Start in **Production mode**.
4. Choose a location closest to your user base.
5. Once created, go to the **Rules** tab and update the security rules to allow authenticated users to read/write their own data:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 6. Testing
Run `npm run dev`. Click "Sign In" and attempt to create an account. You should see the new user appear in the Firebase Authentication console.
