import { FC, ReactElement } from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import STYLES from '../../theme/styling-classes';
import { IBlogPost } from './blogpost.interface';
import useDeletePost from './useDeletePost';
import usePosts from './usePosts';

const BlogList: FC = (): ReactElement => {
  const { isLoading, isError, data, error } = usePosts();
  const { mutate: deleteMutate } = useDeletePost();
  const { t } = useTranslation();

  if (data) {
    data.sort((a: IBlogPost, b: IBlogPost) => new Date(a.postdate).valueOf() - new Date(b.postdate).valueOf());
  }

  if (isLoading) {
    return <h1>{t('loading')}</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div className={STYLES.centered}>
      {data.map((post: IBlogPost) => (
        <div key={post.id}>
          <Link to={`/blogs/${post.id}`}>
            <h1>{post.title}</h1>
          </Link>
          <div>
            by {post.author}, {post.postdate}
          </div>
          <div>
            <button className={STYLES.danger} onClick={() => deleteMutate(post.id)}>
              {t('delete')}
            </button>{' '}
            <Link to={`/edit/${post.id}`}>
              <button className={STYLES.primary}>{t('edit')}</button>
            </Link>
          </div>
          <hr className={STYLES.ruler} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
