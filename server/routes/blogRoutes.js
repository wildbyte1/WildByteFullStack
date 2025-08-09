import express from 'express';
import {
  addBlog,
  addComment,
  deleteBlogById,
  generateContent,
  getAllBlogs,
  getBlogById,
  getBlogComments,
  togglePublish,
} from '../controllers/blogController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const blogRouter = express.Router();

// Custom middleware: use multer only for multipart/form-data
function optionalImageUpload(req, res, next) {
  const contentType = req.headers['content-type'] || '';
  if (contentType.startsWith('multipart/form-data')) {
    // If multipart, run multer upload
    return upload.single('image')(req, res, (err) => {
      if (err)
        return res
          .status(400)
          .json({ message: 'Image upload failed', error: err.message });
      next();
    });
  }
  // If not multipart, skip multer
  next();
}

// ✅ Updated /add route
blogRouter.post('/add', auth, optionalImageUpload, addBlog);

blogRouter.get('/all', getAllBlogs);
blogRouter.post('/delete', auth, deleteBlogById);
blogRouter.post('/toggle-publish', auth, togglePublish);
blogRouter.post('/add-comment', addComment);
blogRouter.post('/comments', getBlogComments);
blogRouter.post('/generate', auth, generateContent);

blogRouter.get('/:blogId', getBlogById);

export default blogRouter;
