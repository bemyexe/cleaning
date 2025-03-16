import clsx from 'clsx';

import {TrendIndicator} from '../../../../../../shared/ui/trend-indicator';

import './style.scss';

interface StatisticInfoBlockProps {
  className?: string;
  sum: number;
  division: string;
  active: boolean;
}

export const StatisticInfoBlock = ({
  className,
  sum,
  division,
  active,
}: StatisticInfoBlockProps) => (
  <div className={clsx({className, 'statistic-info-block': true, active})}>
    <TrendIndicator percent={10} trend="up" active={active} />
    <div className="statistic-info-block-wrapper">
      <span>₽</span>
      <p className="statistic-info-block__sum">{sum.toLocaleString('ru-RU')}</p>
    </div>

    <p className="statistic-info-block__division">{division}</p>
  </div>
);
