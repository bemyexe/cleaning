import clsx from 'clsx';

import {TrendIndicator} from '../../../../../../shared/ui/trend-indicator';
import {DivisionsSum} from '../../../../../../utils/data';

import './style.scss';

interface StatisticInfoBlockProps {
  className?: string;
  divisionSum: DivisionsSum;
  divisionType: string;
  active: boolean;
  onClick: () => void;
}

export const StatisticInfoBlock = ({
  className,
  divisionSum,
  divisionType,
  active,
  onClick,
}: StatisticInfoBlockProps) => (
  <div
    className={clsx({className, 'statistic-info-block': true, active})}
    onClick={onClick}>
    <TrendIndicator value={divisionSum[divisionType]} active={active} />
    <div className="statistic-info-block-wrapper">
      <span>₽</span>
      <p className="statistic-info-block__sum">
        {divisionSum[divisionType].toLocaleString('ru-RU')}
      </p>
    </div>

    <p className="statistic-info-block__division">{divisionType}</p>
  </div>
);
