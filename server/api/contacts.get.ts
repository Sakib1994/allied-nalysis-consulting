import { contacts } from "~/db/schema";
import { db } from "./sqlite-service";

export default defineEventHandler(async () => {
  try {
    const contactResp = db.select().from(contacts).all();
    return { "conatacts" : contactResp}
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});