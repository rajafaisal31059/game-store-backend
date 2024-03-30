import * as admin from "firebase-admin";
import {ServiceAccount} from "firebase-admin";
import { TEST_COLLECTION } from "../constants";

const firebaseConfig: ServiceAccount = {
    projectId: "game-store-3d1db",
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: process.env.PRIVATE_KEY,
  };

  const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
  });
  console.log(">>>>>>>>>>>>>",process.env.CLIENT_EMAIL)

export const auth = firebaseApp.auth();
export const db = firebaseApp.firestore();

export const testCollection = db.collection(TEST_COLLECTION);