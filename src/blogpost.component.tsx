import { ReactElement } from 'react';

import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const BlogPost: React.FC = (): ReactElement => {
  const { id } = useParams();

  const {
    isLoading,
    isError,
    data: post,
    error,
  } = useQuery(['getBlog', id], () => fetch(`/blogs/${id}`).then(res => res.json()));
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }
  return (
    <>
      <hr />
      <div>
        <h1>{post.title}</h1>
      </div>
      <div>
        <h2>by {post.author}</h2>
      </div>
      <div>
        <h3>{post.text}</h3>
      </div>
    </>
  );
};

export default BlogPost;
