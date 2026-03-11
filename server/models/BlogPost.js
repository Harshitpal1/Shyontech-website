const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true, default: 'Shyontech Team' },
    authorRole: { type: String, default: 'Technical Writer' },
    category: { type: String, required: true },
    tags: [{ type: String }],
    readTime: { type: String, default: '5 min read' },
    published: { type: Boolean, default: true },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('BlogPost', blogPostSchema);
