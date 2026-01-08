const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();

// Ensure you have a serviceAccountKey.json in your server root or configured in env
// For now, we'll initialize with default credentials or dummy mock for local dev without key
try {
    admin.initializeApp({
        credential: admin.credential.applicationDefault()
    });
    console.log('Firebase Admin Initialized');
} catch (error) {
    console.warn('Firebase Admin Initialization Failed (Expected if no creds):', error.message);
}

const db = admin.firestore();
const auth = admin.auth();

module.exports = { admin, db, auth };
