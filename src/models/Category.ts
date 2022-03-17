import mongoose, { Schema } from "mongoose";

type Category = {
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const CategorySchema = new Schema({
  name: String,
  description: String,
  createdAt: {
    type: "Date",
    default: Date.now,
  },
  updatedAt: {
    type: "Date",
    default: Date.now,
  },
});

const Category = mongoose.model<Category>("Categories", CategorySchema);

export { Category };
