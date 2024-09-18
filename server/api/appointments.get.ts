import { appointments } from "~/db/schema";
import { db } from "./sqlite-service";

export default defineEventHandler(async () => {
  try {
    const appointmentResp = db.select().from(appointments).all();
    return { "appointments" : appointmentResp}
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});