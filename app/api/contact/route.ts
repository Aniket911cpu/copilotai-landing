import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const { type, name, email, message } = await req.json();

    if (!email || !message) {
      return new NextResponse("Email and Message are required", { status: 400 });
    }

    const docRef = await addDoc(collection(db, "contact_messages"), {
      type: type || "general",
      name: name || "Anonymous",
      email,
      message,
      createdAt: serverTimestamp(),
      status: "unread",
    });

    return NextResponse.json({ success: true, id: docRef.id });
  } catch (error: any) {
    console.error("[CONTACT_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
