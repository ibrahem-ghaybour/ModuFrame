import { getCollaction, getQureyCollaction } from "./database-collection";
import { doc, getDocs, onSnapshot, orderBy, where } from "firebase/firestore";
import { makeDatabaseRepository } from "./database-repository";

export function makeDatabaseChatsRepository(idUser) {
  const collection = getCollaction(`chats-${idUser}`);
  const basicRepository = makeDatabaseRepository({ collection });
  return Object.freeze({
    ...basicRepository,
    snapshotListChats,
    checkChatExist,
    addChat,
    snapshotDataOneById,
  });
  async function snapshotListChats(callback) {
    const query = getQureyCollaction(
      `chats-${idUser}`,
      orderBy("lastTime", "desc")
    );
    try {
      onSnapshot(query, async (snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          ...doc.data(),
          idChat: doc.id,
        }));
        callback(list);
      });
    } catch (err) {
      console.error(err.message);
    }
  }
  async function checkChatExist(idFrinde) {
    try {
      const collR = getQureyCollaction(
        `chats-${idUser}`,
        where("idFrinde", "==", idFrinde)
      );
      const chat = (await getDocs(collR)).docs;
      return chat[0].id;
    } catch {
      return "";
    }
  }
  async function addChat(idFrinde, idChatFrinde = "") {
    try {
      const obj = {
        lastTime: new Date().getTime(),
        idFrinde,
        idChatFrinde,
      };
      const idChat = await basicRepository.addData(obj);
      return { ...obj, idChat };
    } catch (err) {
      console.err(err.message);
    }
  }
  async function snapshotDataOneById(id, callback) {
    const colRi = doc(collection, id);
    onSnapshot(colRi, (doc) => {
      const data = { ...doc.data(), idChat: doc.id };
      callback(data);
    });
  }
}
