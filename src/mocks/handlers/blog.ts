import { rest } from 'msw';

import { addPost, getBlogs, getPost } from '../fixtures/blogs';

const getBlogList = rest.get('*/blogs', (req, res, ctx) => res(ctx.status(200), ctx.json(getBlogs())));

const getBlogPost = rest.get('*/blogs/:id', (req, res, ctx) =>
  res(ctx.status(200), ctx.json(getPost(req.params['id']))),
);

const addBlogPost = rest.post('*/blogs', (req, res, ctx) => {
  const newPost = req.json;
  addPost(newPost);
  return res(ctx.status(200), ctx.json(newPost));
});

const handlers = [getBlogList, getBlogPost, addBlogPost];

export default handlers;
