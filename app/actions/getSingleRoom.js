'use server';

import { createAdminClient } from "@/config/appwrite";
import { ID } from "node-appwrite"; // تأكد من استيراده

export async function getRoom(roomId) {
    try {
        const { databases } = await createAdminClient();
        
        const room = await databases.getDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKITCOLLECTION,
            roomId
        );

        if (!room) {
            throw new Error("Room not found");
        }

        return room;
    } catch (error) {
        console.error('[Appwrite Error] getRoom:', {
            message: error.message,
            code: error.code,
            type: error.type
        });
        
        if (error.code === 404) {
            throw new Error("Room not found");
        } else {
            throw new Error("Failed to fetch room data");
        }
    }
}