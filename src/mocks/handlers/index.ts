import appHandlers from './app';
import blogHandlers from './blog';

const handlers = [...appHandlers, ...blogHandlers];

export default handlers;
