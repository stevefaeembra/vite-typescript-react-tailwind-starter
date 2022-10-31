import { FC, ReactElement } from 'react';

import { useQuery } from 'react-query';

import { IBlogPost } from './interfaces/interfaces';

const BlogList: FC = (): ReactElement => {
  const { isLoading, isError, data, error } = useQuery(['blogs'], () => fetch('/blogs').then(res => res.json()));

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
          <h1>{post.title}</h1>
          <span>{post.author}</span>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
