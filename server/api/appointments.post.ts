import { appointments, InsertAppointment } from "@/db/schema";
import { db } from "./sqlite-service";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const newAppointment: InsertAppointment = {
      ...body
    }
    const result = db.insert(appointments).values(newAppointment).run();
    return { newUser : result}
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});