import { contacts, InsertContact } from "@/db/schema";
import { db } from "./sqlite-service";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const newContact: InsertContact = {
      ...body
    }
    const result = db.insert(contacts).values(newContact).run();
    return { newUser : result}
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});