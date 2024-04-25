import { collection, addDoc, query, getDocs, where } from "firebase/firestore";
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

export async function getUserId(
  user: { name: string; lastname: string },
  purpose?: "id" | "user"
) {
  try {
    const q = query(
      collection(db, "users"),
      where("name", "==", user.name),
      where("lastName", "==", user.lastname)
    );

    const querySnapshot = await getDocs(q);

    if (purpose === "id") return querySnapshot.docs[0].id as string;
    if (purpose === "user") return querySnapshot.docs[0].data();
  } catch (error) {
    console.error(`Something went wrong: ${error}`);
    return ""; // Return an empty string in case of error
  }
}
