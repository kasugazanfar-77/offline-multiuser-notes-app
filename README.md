# Offline Multi-User Notes App (Expo / React Native)

This is a ready-to-run Expo project that implements the Offline Multi-User Notes App assignment.

## Features
- Offline Sign Up / Login (user data stored in AsyncStorage)
- Per-user notes (title, body, optional image)
- Create / Edit / Delete notes
- Pick image from gallery or capture with camera (images copied to app file system)
- Search and Sort
- Logout and switch users

## Quick start (Windows CMD)
1. Install Node.js (LTS), Git, and optionally Android Studio for emulator.
2. Install Expo CLI and EAS:
   ```
   npm install -g expo-cli eas-cli
   ```
3. From the project folder:
   ```
   cd offline-notes-app
   npm install
   npx expo start
   ```
   Scan the QR code with Expo Go or press `a` to open Android emulator.

## Build APK (EAS)
1. Login to Expo:
   ```
   npx eas login
   ```
2. Run build:
   ```
   npx eas build --platform android --profile production
   ```

## Notes & Known Limitations
- This is a demo app for internship assignment. Passwords are stored in plain text in AsyncStorage (acceptable for the exercise but not for production).
- Clearing app data will remove notes and images.
