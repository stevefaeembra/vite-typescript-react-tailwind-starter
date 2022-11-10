import { rest } from 'msw';

import { addPost, deletePost, getBlogs, getPost, updatePost } from '../fixtures/blogs';

const getBlogList = rest.get('*/blogs', (req, res, ctx) => res(ctx.status(200), ctx.json(getBlogs())));

const getBlogPost = rest.get('*/blogs/:id', (req, res, ctx) => res(ctx.status(200), ctx.json(getPost(req.params.id))));

const getBlogPostForEdit = rest.get('*/edit/:id', (req, res, ctx) =>
  res(ctx.status(200), ctx.json(getPost(req.params.id))),
);

const addBlogPost = rest.post('*/blogs', async (req, res, ctx) => {
  const newPost = await req.json();
  const newBlogList = addPost(newPost);
  return res(ctx.status(200), ctx.json(newBlogList));
});

const deleteBlogPost = rest.delete('*/blogs/:id', async (req, res, ctx) => {
  const newBlogList = deletePost(req.params.id);
  return res(ctx.status(200), ctx.json(newBlogList));
});

const updateBlogPost = rest.patch('*/blogs/:id', async (req, res, ctx) => {
  const updatedPost = req.json();
  const foo = updatePost(req.params.id, updatedPost);
  return res(ctx.status(200), ctx.json(foo));
});

const handlers = [getBlogList, getBlogPost, addBlogPost, deleteBlogPost, updateBlogPost, getBlogPostForEdit];

export default handlers;
