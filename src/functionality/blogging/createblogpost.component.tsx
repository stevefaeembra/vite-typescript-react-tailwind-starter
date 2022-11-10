import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import BlogPostForm from './blogpostform';
import useAddPost from './useCreatePost';

const CreateBlogPostForm: FC = () => {
  const navigate = useNavigate();
  const { mutate: addMutate } = useAddPost(() => navigate('/'));
  console.log('mutator is', addMutate);

  const existingPost = {
    id: null,
    author: 'steven',
    title: '',
    text: '',
    postdate: new Date().toUTCString(),
  };

  return <BlogPostForm mutator={addMutate} post={existingPost} />;
};

export default CreateBlogPostForm;
