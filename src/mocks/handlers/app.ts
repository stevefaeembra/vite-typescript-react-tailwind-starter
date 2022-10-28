import { rest } from 'msw';

import { getConfig } from '~/mocks/fixtures/app';

import { getBlogs } from '../fixtures/blogs';

const getAppConfig = rest.get('*/api/app/config', (req, res, ctx) => res(ctx.status(200), ctx.json(getConfig())));
const getBlogList = rest.get('*/blogs', (req, res, ctx) => res(ctx.status(200), ctx.json(getBlogs())));

const handlers = [getAppConfig, getBlogList];

export default handlers;
