import { ReactElement } from 'react';

import PropTypes from 'prop-types';

interface Props {
  uniqueID: string;
}

const BlogPost: React.FC<Props> = ({ uniqueID }): ReactElement => {
  console.log('uniqueID', uniqueID);
  return (
    <>
      <hr />
      <div>Hello world!</div>
    </>
  );
};

BlogPost.propTypes = {
  uniqueID: PropTypes.string.isRequired,
};

export default BlogPost;
