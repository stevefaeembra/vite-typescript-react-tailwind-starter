import { IBlogPost } from '../../functionality/blogging/blogpost.interface';

let BLOGS = [
  {
    id: '1',
    author: 'steven',
    title: 'This is a welcome',
    text: 'This is my blog. There are many blogs but this one is mine.',
    postdate: 'Fri, 08 Nov 2022 11:32:53 GMT',
  },
  {
    id: '2',
    author: 'steven',
    title: 'It is November',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisi id nisl hendrerit pretium quis et dui. Suspendisse potenti. Morbi sollicitudin mi non nunc venenatis, a pretium est porttitor. Fusce ornare quam ac ipsum lobortis, nec gravida turpis dictum. Nam a accumsan turpis, in facilisis augue. Duis tempor ex tortor, sit amet congue quam imperdiet sed. Donec efficitur laoreet lorem, eu iaculis risus dapibus eget. Cras molestie consectetur nisl, aliquam ultrices ex tincidunt quis. Duis pharetra lacus sed aliquet mollis. Mauris et nisl ut nulla venenatis aliquet interdum ullamcorper augue. Quisque ac posuere felis. Praesent quis sollicitudin lectus, a aliquet lectus. Nullam malesuada rutrum eros, id pellentesque neque elementum a. Aenean ornare felis tortor. In nisi justo, tristique scelerisque leo id, rutrum faucibus nulla. Fusce laoreet laoreet sapien et consectetur. Nulla facilisi. Nunc tempus, ex nec dignissim mattis, turpis risus consectetur augue, sagittis tincidunt orci tortor interdum ligula. Aenean at vehicula tellus. Suspendisse ut malesuada magna, ut commodo enim. Donec arcu nibh, placerat sit amet egestas id, faucibus sit amet quam. Integer posuere massa in mauris volutpat, ut dapibus sapien aliquet. Proin eu turpis porta, viverra eros ut, congue diam.',
    postdate: 'Sat, 05 Nov 2022 11:32:53 GMT',
  },
  {
    id: '3',
    author: 'andrew',
    title: 'Guest post',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas tellus rutrum tellus pellentesque eu. Curabitur vitae nunc sed velit dignissim sodales ut. Mi tempus imperdiet nulla malesuada pellentesque. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus.',
    postdate: 'Tue, 13 Sep 2022 11:32:53 GMT',
  },
  {
    id: '4',
    author: 'andrew',
    title: 'One from September',
    text: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas tellus rutrum tellus pellentesque eu. Curabitur vitae nunc sed velit dignissim sodales ut. Mi tempus imperdiet nulla malesuada pellentesque. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus.',
    postdate: 'Mon, 12 Nov 2022 11:32:53 GMT',
  },
  {
    id: '5',
    author: 'conor',
    title: 'Something something',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas tellus rutrum tellus pellentesque eu. Curabitur vitae nunc sed velit dignissim sodales ut. Mi tempus imperdiet nulla malesuada pellentesque. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus.',
    postdate: 'Tue, 13 Sep 2022 11:32:53 GMT',
  },
];

export const getBlogs = (): IBlogPost[] => BLOGS;

export const getPost = (id: string): IBlogPost | undefined => BLOGS.find(post => post.id === id);

export const addPost = (post: IBlogPost) => {
  const nextId = (BLOGS.length + 1).toString();
  const newpost = { ...post, id: nextId };
  BLOGS.push(newpost);
  return BLOGS;
};
