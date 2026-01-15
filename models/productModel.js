import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String },

  description: { type: String, required: true },
  price: { type: Number, required: true },
  moq: { type: String, default: "" },

  image: { type: [String], required: true },

  category: { type: String, required: true },
  subCategory: { type: String, required: true },

  sizes: { type: [String], default: [] },
  fabric: { type: [String], default: [] },
  colors: { type: [String], default: [] },

  warranty: { type: String, default: "" },
  bestseller: { type: Boolean, default: false },

  // 🔥🔥🔥 THIS WAS MISSING
  apparelAttributes: {
    type: Object,
    default: {},
  },

  date: { type: Number, default: Date.now },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
