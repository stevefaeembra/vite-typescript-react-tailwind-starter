import { ReactElement } from 'react';

import PropTypes from 'prop-types';
import { useQuery } from 'react-query';

import { IBlogPost } from './interfaces/interfaces';

interface Props {
  uniqueID: string;
}

const BlogPost: React.FC<Props> = ({ uniqueID }): ReactElement => {
  console.log('uniqueID', uniqueID);
  const {
    isLoading,
    isError,
    data: post,
    error,
  } = useQuery(['getBlog', uniqueID], () => fetch(`/blogs/${uniqueID}`).then(res => res.json()));
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

BlogPost.propTypes = {
  uniqueID: PropTypes.string.isRequired,
};

export default BlogPost;
