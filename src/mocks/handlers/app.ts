import { rest } from 'msw';

import { getConfig } from '../fixtures/app';

const getAppConfig = rest.get('*/api/app/config', (req, res, ctx) => res(ctx.status(200), ctx.json(getConfig())));

const handlers = [getAppConfig];

export default handlers;
