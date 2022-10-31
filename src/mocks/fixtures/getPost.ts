import { IBlogPost } from './../../interfaces/interfaces';
import { getBlogs } from './blogs';

export const getPost = (id: string): IBlogPost | undefined => getBlogs().find(post => post.id === id);
