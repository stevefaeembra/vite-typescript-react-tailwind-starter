import React, { FC } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import BlogPostForm from './blogpostform';
import usePost from './usePost';
import useUpdatePost from './useUpdatePost';

const UpdateBlogPostForm: FC = () => {
  const { id } = useParams();
  console.log('updateblogpost id', id);
  console.log('updateblogpost typeof', typeof id);

  // TODO: find out why this returns undefined
  const { isLoading, isError, data: existingPost, error } = usePost(id);

  console.log('existingPost', existingPost);

  const navigate = useNavigate();
  const { mutate: updateMutate } = useUpdatePost(() => navigate('/'));
  console.log('mutator is', updateMutate);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return existingPost ? <BlogPostForm mutator={updateMutate} post={existingPost} /> : null;
};

export default UpdateBlogPostForm;
