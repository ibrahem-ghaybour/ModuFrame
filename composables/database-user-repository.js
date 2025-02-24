import {
  doc,
  getDocs,
  onSnapshot,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { getCollaction, getQureyCollaction } from "./database-collection";

import { makeDatabaseRepository } from "./database-repository";
export function makeDatabaseUsersRepository() {
  const collection = getCollaction("users");
  const databaseRepository = makeDatabaseRepository({ collection: collection });
  return Object.freeze({
    ...databaseRepository,
    snapshotDatalist,
    snapshotDataUserById,
    addUser,
  });
  async function snapshotDatalist(callback, emailProfile) {
    try {
      const collR = getQureyCollaction(
        "users",
        where("email", "!=", emailProfile)
      );
      onSnapshot(collR, (snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        callback(list);
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  async function snapshotDataUserById(id, callback) {
    try {
      const docUser = doc(collection, id);
      onSnapshot(docUser, (doc) => {
        const obj = { ...doc.data(), id: doc.id };
        callback(obj);
      });
    } catch (err) {
      console.error(err.message);
    }
  }
  async function addUser({ email, name }) {
    const obj = {
      createdAt: serverTimestamp(),
      about: "",
      imgUser: "",
      email,
      name,
    };
    const id = await databaseRepository.addData(obj);
    return { ...obj, id: id };
  }
}

export async function getDataProfile(email) {
  try {
    const collR = getQureyCollaction("users", where("email", "==", email));
    const us = (await getDocs(collR)).docs;
    return { ...us[0].data(), id: us[0].id };
  } catch {
    return {};
  }
}
