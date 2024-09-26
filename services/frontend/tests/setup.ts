import "@testing-library/jest-dom/vitest";

import { initializeApp } from 'firebase/app';
import fs from 'fs';

import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment
} from "@firebase/rules-unit-testing"

let testEnv = await initializeTestEnvironment({
  projectId: "demo-project-1234",
});

const firebaseConfig = {
  apiKey: process.env.VITE_APIKEY,
  authDomain: process.env.VITE_AUTHDOMAIN,
  projectId: process.env.VITE_PROJECTID,
  storageBucket: process.env.VITE_STORAGEBUCKET,
  messagingSenderId: process.env.VITE_MESSAGINGSENDERID,
  appId: process.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);