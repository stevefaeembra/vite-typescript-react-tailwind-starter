import React, { FC, ReactElement } from 'react';

import { ThemeSwitcher } from '~/theme/theme-switcher.component';

const Header: FC = (): ReactElement => {

  return (
    <header className="header flex justify-between p-10">
      <h1 className="font-bold">Hello User</h1>

      <span className="flex items-center justify-between">
        <ThemeSwitcher />
      </span>
    </header>
  );
};

export default Header;
