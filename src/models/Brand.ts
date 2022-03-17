import mongoose, { Schema } from "mongoose";

interface Brand {
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const BrandSchema = new Schema({
  name: String,
  createdAt: {
    type: "Date",
    default: Date.now,
  },
  updatedAt: {
    type: "Date",
    default: Date.now,
  },
});

const Brand = mongoose.model<Brand>("Brands", BrandSchema);

export { Brand };
