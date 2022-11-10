import React, { FC } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import BlogPostForm from './blogpostform';
import usePost from './usePost';
import useUpdatePost from './useUpdatePost';

const UpdateBlogPostForm: FC = () => {
  const { id } = useParams();

  const { isLoading, isError, data: existingPost, error } = usePost(id);

  const navigate = useNavigate();
  const { mutate: updateMutate } = useUpdatePost(() => navigate('/'));

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return existingPost ? <BlogPostForm mutator={updateMutate} post={existingPost} /> : null;
};

export default UpdateBlogPostForm;
