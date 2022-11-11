import { FC, ReactElement } from 'react';

import { Link } from 'react-router-dom';

import { IBlogPost } from './blogpost.interface';
import useDeletePost from './useDeletePost';
import usePosts from './usePosts';

const BlogList: FC = (): ReactElement => {
  const { isLoading, isError, data, error } = usePosts();
  const { mutate: deleteMutate } = useDeletePost();

  if (data) {
    data.sort((a: IBlogPost, b: IBlogPost) => {
      //TODO : find why sorting not working
      new Date(a.postdate).valueOf() - new Date(b.postdate).valueOf();
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
        <div key={post.id}>
          <Link to={`/blogs/${post.id}`}>
            <h1>{post.title}</h1>
          </Link>
          <div>
            by {post.author}, {post.postdate}
          </div>
          <div>
            <button onClick={() => deleteMutate(post.id)}>Delete</button> | <Link to={`/edit/${post.id}`}>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
