import { FC, ReactElement } from 'react';

import STYLES from '../theme/styling-classes';

const NotFound: FC = (): ReactElement => {
  return (
    <div className={STYLES.centered}>
      <h1>404</h1>
      <h2>Page not found</h2>
    </div>
  );
};

export default NotFound;
