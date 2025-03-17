import {useMemo, useState} from 'react';
import clsx from 'clsx';

import {TransactionsByDivision} from '../../../../../utils/group-transactions-by-period';
import {
  AggregatedTransaction,
  transformData,
} from '../../../../../utils/transform-data-for-chart';
import {CustomLineChart} from '../../../../components/charts/custom-line-chart';

import './style.scss';

const PERIOD = [
  {name: 'Неделя', type: 'week'},
  {name: 'Месяц', type: 'month'},
  {name: 'Год', type: 'year'},
];
interface StatisticChartProps {
  className?: string;
  data: TransactionsByDivision;
  activeDivision: string;
}

export const StatisticChart = ({
  className,
  data,
  activeDivision,
}: StatisticChartProps) => {
  const [activePeriod, setActivePeriod] = useState({
    name: 'Год',
    type: 'year',
  });
  const transformedData = useMemo<AggregatedTransaction[]>(() => {
    return transformData(
      data,
      activeDivision as keyof TransactionsByDivision,
      activePeriod.type as 'year' | 'month' | 'week'
    );
  }, [data, activeDivision, activePeriod]);

  return (
    <section className={clsx(className, {'statistic-chart-section': true})}>
      <div className="statistic-chart-section-info">
        <h1 className="statistic-chart-section-info__title">
          Общая статистика
        </h1>
        <div className="statistic-chart-section-info__period">
          {PERIOD.map((period, index) => (
            <button
              onClick={() => setActivePeriod(period)}
              key={index}
              className={clsx({
                'statistic-chart-section-info__period-button': true,
                active: activePeriod.name === period.name,
              })}>
              {period.name}
            </button>
          ))}
        </div>
      </div>
      <CustomLineChart data={transformedData} />
    </section>
  );
};
