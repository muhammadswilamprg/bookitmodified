"use server";

import { Client, Account, Databases, Storage } from "node-appwrite";

const endPoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const project = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
const key = process.env.NEXT_APPWRITE_KEY;

if (!endPoint || !project || !key) {
  throw new Error("Missing Appwrite environment variables");
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(endPoint)
    .setProject(project)
    .setKey(key);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
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