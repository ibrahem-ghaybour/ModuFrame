import {
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { getCollaction, getQureyCollaction } from "./database-collection";
import { makeDatabaseRepository } from "./database-repository";

export function makeDatabaseMessagesRepository(idUser, idChat) {
  const collectionMessage = getCollaction(`chats-${idUser}/${idChat}/messages`);
  const basicRepository = makeDatabaseRepository({
    collection: collectionMessage,
  });
  return Object.freeze({
    ...basicRepository,
    snapshotDataMessages,
    snapshotDataMessagesDistintve,
    getListMessagesDocs,
    snapshotDataNewMessages,
    viewMessages,
    sendAndAddMessage,
    sendAndAddMessageReplay,
  });
  async function snapshotDataMessages(callback) {
    try {
      const queryMessages = query(collectionMessage, orderBy("creatTi"));
      onSnapshot(queryMessages, (snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        callback(list);
      });
    } catch (err) {
      console.error(err.message);
    }
  }
  async function getListMessagesDocs() {
    const list = (await getDocs(collectionMessage)).docs;
    return list.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  }
  async function snapshotDataNewMessages(callback) {
    try {
      const collectionMessages = getQureyCollaction(
        `chats-${idUser}/${idChat}/messages`,
        where("viewMessage", "==", false)
      );
      onSnapshot(collectionMessages, (snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        callback(list);
      });
    } catch (err) {
      console.error(err.message);
    }
  }
  function viewMessages(list) {
    try {
      list.forEach((element) => {
        basicRepository.updateById(element.id, { viewMessage: true });
      });
    } catch (err) {
      console.error(err.message);
    }
  }
  async function sendAndAddMessage(message,sender,otherٍSideId) {
    const dataMessages = {
      interaction: {
        he: "",
        you: "",
      },
      message,
      viewMessage: !sender,
      send: sender,
      timeM: new Date().getTime(),
      otherٍSideId,
      creatTi: serverTimestamp(),
    };
   return await basicRepository.addData(dataMessages);

  }
  async function sendAndAddMessageReplay(
    message,sender,otherٍSideId,
    replayMessage,
  ) {
    const dataMessages = {
      interaction: {
        he: "",
        you: "",
      },
      message,
      send: sender,
      timeM: new Date().getTime(),
      creatTi: serverTimestamp(),
      viewMessage: !sender,
      otherٍSideId,
      replayMessage
    };
     return await basicRepository.addData(dataMessages);
  }
 async function  snapshotDataMessagesDistintve(callback){
  try {
    const queryMessages = query(collectionMessage, orderBy("creatTi"),where("star","==",true));
    onSnapshot(queryMessages, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      callback(list);
    });
  } catch (err) {
    console.error(err.message);
  }
  }
}

// function createDataMessage(send) {
//   if (!this.replayMessage)
//     return {
//       interaction: {
//         he: "",
//         you: "",
//       },
//       message: this.message,
//       viewMessage: !send,
//       send: send,
//       timeM: new Date().getTime(),
//       otherٍSideId: "",
//       creatTi: serverTimestamp(),
//     };
//   else
//     return {
//       interaction: {
//         he: "",
//         you: "",
//       },
//       message: this.message,
//       send: send,
//       timeM: new Date().getTime(),
//       creatTi: serverTimestamp(),
//       viewMessage: !send,
//       otherٍSideId: "",
//       replayMessage: {
//         message: this.replayMessage.message,
//         name: !send ? "you" : this.replayMessage.name,
//         id: this.replayMessage.id,
//       },
//     };
// }
