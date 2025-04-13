"use server";
import { Client, Account, Databases, Storage } from "node-appwrite";

// أضف هذا الجزء للتأكد من أن المتغيرات موجودة
console.log("[Debug] ENV Variables:", {
  endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
  project: process.env.NEXT_PUBLIC_APPWRITE_PROJECT, // لاحظ التهجئة هنا!
  key: !!process.env.NEXT_APPWRITE_KEY,
  database: process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
  collection: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKITCOLLECTION
});

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT) // خطأ متوقع هنا!
    .setKey(process.env.NEXT_APPWRITE_KEY); // خطأ آخر هنا!

  return {
    get account() { return new Account(client); },
    get databases() { return new Databases(client); },
    get storage() { return new Storage(client); }
  };
}

export async function createSessionClient(session) {
  const client = new Client()
    .setEndpoint(endPoint)
    .setProject(project);

  if (session) {
    client.setSession(session);
  }

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
  };
}
