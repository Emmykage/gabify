import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Prevent model overwrite upon hot-reload in dev
export default mongoose.models.Post || mongoose.model("Post", PostSchema);
