const express = require('express');

const app = express();
const port = 7777;

let BLOGS = [
  {
    id: 1,
    author: 'steven',
    title: 'my first blog',
    text: 'This is my blog. There are many blogs but this one is mine.',
  },
  {
    id: 2,
    author: 'steven',
    title: 'another blog',
    text: 'Lorem ipsum solor soddit',
  },
  {
    id: 3,
    author: 'andrew',
    title: 'heres a guest one',
    text: 'Something something something darkside',
  },
];

app.get('/blogs', (req, res) => {
  res.json(BLOGS);
});

app.get('/blogs/:blog_id', (req, res) => {
  const blog_id = parseInt(req.params['blog_id']);
  const post = BLOGS.find(post => post.id === blog_id);
  res.json(post);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
