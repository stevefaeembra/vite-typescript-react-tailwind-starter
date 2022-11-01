import { FC, ReactElement } from 'react';

import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { IBlogPost } from './blogpost.interface';
import usePosts from './usePosts';

const BlogList: FC = (): ReactElement => {
  const { isLoading, isError, data, error } = usePosts();

  if (data) {
    data.sort((a: IBlogPost, b: IBlogPost) => {
      new Date(a.postdate) > new Date(b.postdate) ? 1 : -1;
    });
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      {data.map((post: IBlogPost) => (
        <div key={post.title}>
          <Link to={`/blogs/${post.id}`}>
            <h1>{post.title}</h1>
          </Link>
          <div>
            by {post.author}, {post.postdate}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
