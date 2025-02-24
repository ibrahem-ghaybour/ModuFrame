import {
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
export function makeDatabaseRepository({ collection }) {
  return Object.freeze({
    addData,
    deleteDataByid,
    getDataList,
    updateById,
    getOneById,
  });
  async function addData(data) {
    try {
      const us = await addDoc(collection, data);
      console.log(us.id);
      return us.id;
    } catch (err) {
      return err.message;
    }
  }
  async function getDataList() {
    try {
      const dataList = (await getDocs(collR)).docs;
      return dataList.map((obj) => ({ ...obj.data(), id: obj.id }));
    } catch (err) {
      console.error(err.message);
    }
  }
  async function deleteDataByid(id) {
    try {
      const colRi = doc(collection, id);
      await deleteDoc(colRi, id);
      return "";
    } catch (err) {
      return err.message;
    }
  }

  async function updateById(id, data) {
    try {
      const colRi = doc(collection, id);
      await updateDoc(colRi, data);
      return true;
    } catch (err) {
      console.error(err.message);
    }
  }

  async function getOneById(id) {
    const colRi = doc(collection, id);
    const data = await getDoc(colRi);
    return { ...data.data(), id: data.id };
  }

}
