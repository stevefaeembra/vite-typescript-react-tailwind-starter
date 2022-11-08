import React, { FC, ReactElement } from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { LanguageSwitcher } from '../i18n/language-switcher.component';
import { ThemeSwitcher } from '../theme/theme-switcher.component';

const Header: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <header className="header flex justify-between p-10">
      <h1 className="font-bold">
        <Link to="/">{t('greeting')} User</Link>
      </h1>
      <nav>
        <Link to="/blogs">
          <button>Add new post</button>
        </Link>
      </nav>
      <span className="flex items-center justify-between">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </span>
    </header>
  );
};

export default Header;
