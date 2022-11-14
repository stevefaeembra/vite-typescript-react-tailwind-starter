import { ReactElement } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import STYLES from '../../theme/styling-classes';
import usePost from './usePost';

const BlogPost: React.FC = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, isError, data: post, error } = usePost(id);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }
  return (
    <div className={STYLES.centered}>
      <div className={STYLES.padding}>
        <h1>{post.title}</h1>
      </div>
      <div className={STYLES.padding}>
        <h2>by {post.author}</h2>
      </div>
      <div className={STYLES.padding}>
        <h3>{post.text}</h3>
      </div>
      <button className={`${STYLES.primary} ${STYLES.padding}`} onClick={() => navigate('/')}>
        Go Back
      </button>
    </div>
  );
};

export default BlogPost;
