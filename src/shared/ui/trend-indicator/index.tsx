import clsx from 'clsx';

import Arrow from '../../../assets/arrow.svg?react';

import './style.scss';

interface TrendIndicatorProps {
  className?: string;
  percent: number;
  trend: 'up' | 'down';
  active: boolean;
}

export const TrendIndicator = ({
  percent,
  className,
  trend,
  active,
}: TrendIndicatorProps) => (
  <div
    className={clsx({
      className,
      'trend-indicator': true,
      [trend]: true,
      active,
    })}>
    <Arrow
      className={clsx({
        'trend-indicator-icon': true,
      })}
    />
    {percent} %
  </div>
);
