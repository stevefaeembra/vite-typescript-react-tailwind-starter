import { IBlogPost } from '../../functionality/blogging/blogpost.interface';
import { getBlogs } from './blogs';

export const getPost = (id: string): IBlogPost | undefined => getBlogs().find(post => post.id === id);
