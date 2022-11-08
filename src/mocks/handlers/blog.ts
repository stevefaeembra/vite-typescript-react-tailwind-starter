import { rest } from 'msw';

import { addPost, deletePost, getBlogs, getPost } from '../fixtures/blogs';

const getBlogList = rest.get('*/blogs', (req, res, ctx) => res(ctx.status(200), ctx.json(getBlogs())));

const getBlogPost = rest.get('*/blogs/:id', (req, res, ctx) => res(ctx.status(200), ctx.json(getPost(req.params.id))));

const addBlogPost = rest.post('*/blogs', async (req, res, ctx) => {
  const newPost = await req.json();
  const newBlogList = addPost(newPost);
  return res(ctx.status(200), ctx.json(newBlogList));
});

const deleteBlogPost = rest.delete('*/blogs/:id', async (req, res, ctx) => {
  console.log('req params', req.params);
  const foo = deletePost(req.params.id);
  return res(ctx.status(200), ctx.json(foo));
});

const handlers = [getBlogList, getBlogPost, addBlogPost, deleteBlogPost];

export default handlers;
