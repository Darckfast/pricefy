import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

const getDBInstance = () => {
  const [appInstace] = getApps()

  return getFirestore(appInstace)
}

if (!getApps().length) {
  initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  })

  if (process.env.VERCEL_ENV !== 'production') {
    connectFirestoreEmulator(
      getDBInstance(),
      process.env.FIRESTORE_LOCAL_IP,
      process.env.FIRESTORE_LOCAL_PORT
    )
  }
}

export const db = getDBInstance()
