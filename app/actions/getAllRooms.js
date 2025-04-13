'use server';
import { createAdminClient } from "@/config/appwrite";

export async function getAllRooms() {
  try {
    const { databases } = await createAdminClient();
    
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKITCOLLECTION,
      []
    );

    return response.documents;
  } catch (error) {
    console.error("Appwrite Error:", {
      message: error.message,
      code: error.code,
      type: error.type,
      response: error.response
    });
    throw error;
  }
}