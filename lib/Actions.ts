import { collection, addDoc, query, getDocs } from "firebase/firestore";
import { db } from "./ConnectToDB";
import { IQuestion } from "@/types";

export async function addUser(name: string, lastName: string) {
  try {
    await addDoc(collection(db, "users"), {
      name: name,
      lastName: lastName,
    });
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`);
  }
}

export async function getData() {
  try {
    const data: IQuestion[][] = [];
    const q = query(collection(db, "data"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push(doc.data().russian);
    });

    return data;
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`);
  }
}
