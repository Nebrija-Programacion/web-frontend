import { Slot } from "../types.ts";
import { ObjectId } from "mongo";

export type SlotSchema = Slot& {
  _id: ObjectId;
};
