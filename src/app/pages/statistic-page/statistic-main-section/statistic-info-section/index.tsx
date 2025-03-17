import clsx from 'clsx';

import {StatisticInfoBlock} from './statistic-info-block';

import './style.scss';

const DIVISIONS = ['Итоги', 'B2B', 'B2C'];

interface StatisticInfoBlockProps {
  sum: number;
  active: boolean;
  className?: string;
}

export const StatisticInfoSection = ({
  sum,
  active,
  className,
}: StatisticInfoBlockProps) => (
  <section className={clsx(className, {'statistic-info-section': true})}>
    {DIVISIONS.map((division, index) => (
      <StatisticInfoBlock
        key={index}
        division={division}
        sum={sum}
        active={active}
      />
    ))}
  </section>
);
