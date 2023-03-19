# Mortgage Calculator App

This is a Mortgage Calculator app built with React Native, Expo, and Firebase. The app allows users to sign up, log in, and perform mortgage calculations that are saved to their account.

## Prerequisites

- Node.js
- Expo CLI

## Getting Started

1. Clone this repository.

2. Install the required dependencies.

```bash
cd mortgage-calculator
npm install
```

3. Set up your Firebase project:

- Create a new Firebase project on the [Firebase Console](https://console.firebase.google.com/).
- Enable "Email/Password" authentication in the "Authentication" section.
- Retrieve your Firebase project's configuration from the "Project Settings" page.

4. Rename `.example.app.config.js` to `app.config.js`:

```bash
mv .example.app.config.js app.config.js
```

5. Update the `app.config.js` file with your Firebase project's configuration:

Replace the placeholders with your actual Firebase configuration values:

```javascript
export default {
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
  },
};
```

6. Start the development server:

```bash
npm start
```

Follow the instructions in the terminal. Scan the QR code with your Expo Go app or run the app on an emulator or simulator.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
