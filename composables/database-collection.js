import { initializeApp } from "firebase/app";
import { collection, getFirestore, query } from "firebase/firestore";
// const { config } = require("./config.js");
// initializeApp(config);

const db = getFirestore();
export function getCollaction(collectionName) {
  return collection(db, collectionName);
}
export function getQureyCollaction(collectionName, func, func2) {
  const coll = getCollaction(collectionName);
  if (!func2) return query(coll, func);
  return query(coll, func, func2);
}
