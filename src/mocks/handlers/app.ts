import { rest } from 'msw';

import { getConfig } from '../fixtures/app';
import { getBlogs } from '../fixtures/blogs';
import { getPost } from '../fixtures/getPost';

const getAppConfig = rest.get('*/api/app/config', (req, res, ctx) => res(ctx.status(200), ctx.json(getConfig())));

const getBlogList = rest.get('*/blogs', (req, res, ctx) => res(ctx.status(200), ctx.json(getBlogs())));

const getBlogPost = rest.get('*/blogs/:id', (req, res, ctx) =>
  res(ctx.status(200), ctx.json(getPost(req.params['id']))),
);

const handlers = [getAppConfig, getBlogList, getBlogPost];

export default handlers;
