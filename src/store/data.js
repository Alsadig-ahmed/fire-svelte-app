import { writable } from "svelte/store";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
let k = [];
(async function () {
  const querySnapshot = await getDocs(collection(db, "feedbacks"));
  querySnapshot.forEach((doc) => {
    k.push({
      id: doc.id,
      rating: doc.data().rating,
      text: doc.data().text,
    });
  });
})();
export let feedback = writable(k);
