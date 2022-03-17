import mongoose, { Schema, Document, ObjectId } from "mongoose";

type Product = Document & {
  name: String;
  description: String;
  price: number;
  stock: number;
  category_id: String;
  brand_id: String;
};

const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Categories",
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brands",
  },
  createdAt: {
    type: "Date",
    default: Date.now,
  },
  updatedAt: {
    type: "Date",
    default: Date.now,
  },
});

const Product = mongoose.model<Product>("Products", ProductSchema);

export { Product };
