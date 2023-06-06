import { slotsCollection } from "../db/dbconnection.ts";
import { ObjectId } from "mongo";
import { Slot } from "../types.ts";

export const Query = {
  availableSlots: async (
    _: unknown,
    params: { year: number; month: number; day?: number }
  ): Promise<Slot[]> => {
    let slots: Slot[];
    if (params?.day) {
      slots = await slotsCollection
        .find({
          year: params.year,
          month: params.month,
          day: params.day,
          available: true,
        })
        .toArray();
    } else {
      slots = await slotsCollection
        .find({
          year: params.year,
          month: params.month,
          available: true,
        })
        .toArray();
    }

    return slots;
  },
};
