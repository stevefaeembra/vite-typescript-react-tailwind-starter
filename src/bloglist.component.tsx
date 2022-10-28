import { FC, ReactElement } from 'react';

import { useQuery } from 'react-query';

const BlogList: FC = (): ReactElement => {
  const { isLoading, isError, data, error } = useQuery(['blogs'], () => fetch('/blogs').then(res => res.json()));
  console.log('data', data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  if (data) {
    return (
      <div>
        {data.map(post => (
          <>
            <h1>{post.title}</h1>
            <span>{post.author}</span>
            <hr />
          </>
        ))}
      </div>
    );
  }
};

export default BlogList;
