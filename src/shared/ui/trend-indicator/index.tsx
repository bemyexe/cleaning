import {useMemo} from 'react';
import clsx from 'clsx';

import Arrow from '../../../assets/arrow.svg?react';

import './style.scss';

interface TrendIndicatorProps {
  className?: string;
  active: boolean;
  value: number;
}

export const TrendIndicator = ({
  className,
  active,
  value,
}: TrendIndicatorProps) => {
  const trend = value > 0 ? 'up' : 'down';
  const percent = useMemo(() => {
    return (Math.random() * 100).toFixed(1);
  }, []);
  return (
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
};
