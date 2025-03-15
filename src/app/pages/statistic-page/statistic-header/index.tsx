import clsx from 'clsx';

import {UserBlock} from '../../../components/user-block';

import {StatisticPagination} from './statistic-pagination';

import './style.scss';

interface StatisticHeaderProps {
  className?: string;
}

export const StatisticHeader = ({className}: StatisticHeaderProps) => (
  <header className={clsx({className, 'statistic-header': true})}>
    <div className="statistic-header__wrapper">
      <StatisticPagination />
      <UserBlock />
    </div>
  </header>
);
