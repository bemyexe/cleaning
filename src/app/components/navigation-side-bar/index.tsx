import clsx from 'clsx';

import Logo from '../../../assets/logo.svg?react';

import {ICONS} from './icons';

import './style.scss';

export const NavigationSidebar = () => {
  const {pathname} = window.location;
  return (
    <aside>
      <nav className="navigation-side-bar">
        <Logo />
        <ul className="icons-list">
          {ICONS.map(({Icon, link, label}, index) => (
            <li
              key={index}
              className={clsx({
                'icon-list_item': true,
                active: link === pathname,
              })}>
              <a href={link} aria-label={label}>
                <Icon className="icon-svg" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
