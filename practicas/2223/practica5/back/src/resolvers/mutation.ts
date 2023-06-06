import { ObjectId } from "mongo";
import { slotsCollection } from "../db/dbconnection.ts";
import { SlotSchema } from "../db/schema.ts";
import { Slot } from "../types.ts";

const isValidDate = (
  year: number,
  month: number,
  day: number,
  hour: number
): boolean => {
  const date = new Date(year, month, day, hour);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day &&
    date.getHours() === hour
  );
};

export const Mutation = {
  addSlot: async (_:unknown, params:Omit<Slot, "available"> ): Promise<Slot>=> {
    try{
      const { month, year, day, hour} = params;

      if (!isValidDate(year, month - 1, day, hour)) {
        throw new Error ("Date is invalid.")      }

      const foundSlot = await slotsCollection.findOne({ day, month, year, hour });

      if (foundSlot) {
        if (!foundSlot.available) {
          throw new Error ("Slot not available.");
        } else {
          throw new Error ("Slot was already added.");
        }
      }

      const addingSlot: Slot = {...params, available: true};
      await slotsCollection.insertOne(addingSlot as SlotSchema);

      return addingSlot;
    }
    catch(error){
      console.log(error.message);
      throw new Error (error);
    }
  },
  removeSlot: async (_:unknown, params:{year:number, month:number, day:number, hour:number}): Promise<Slot> => {
    try{
      const { year, month, day, hour } = params;
      const slot: SlotSchema | undefined = await slotsCollection.findOne({
        year: year,
        month: month,
        day: day,
        hour: hour,
      });
      
      if (!slot) {
        throw new Error ("Slot not found.");
      }
      if (!slot.available) {
        throw new Error ("Slot found but not available.");
      }

      await slotsCollection.deleteOne({ _id: slot._id });
      return slot;
    }
    catch(error){
      console.log(error.message);
      throw new Error (error);
    }
  },
  bookSlot: async(_:unknown, params:{year: number, month: number,
    day: number, hour: number, dni: string}): Promise<Slot> =>{
    try{
      const { month, year, day, hour, dni} = params;

      const slot: SlotSchema | undefined = await slotsCollection.findOne({
        year: year,
        month: month,
        day: day,
        hour: hour,
        available: true
      });

      if (!slot) {
        throw new Error ("Slot not found.");
      }

      await slotsCollection.updateOne(
        { _id: slot._id },
        { $set: { available: false, dni } }
      );

      const { _id, ...rest } = slot;

      return { ...rest, available: false, dni }
    }
    catch(error){
      console.log(error.message);
      throw new Error (error);
    }
  }
};
