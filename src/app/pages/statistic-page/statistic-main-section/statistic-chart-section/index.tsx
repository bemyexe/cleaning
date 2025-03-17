import clsx from 'clsx';

import {CustomLineChart} from '../../../../components/charts/custom-line-chart';

import './style.scss';

const PERIOD = ['Неделя', 'Месяц', 'Год'];

interface StatisticChartProps {
  className?: string;
}

export const StatisticChart = ({className}: StatisticChartProps) => {
  const active = true;
  return (
    <section className={clsx(className, {'statistic-chart-section': true})}>
      <div className="statistic-chart-section-info">
        <h1 className="statistic-chart-section-info__title">
          Общая статистика
        </h1>
        <div className="statistic-chart-section-info__period">
          {PERIOD.map((period, index) => (
            <button
              key={index}
              className={clsx({
                'statistic-chart-section-info__period-button': true,
                active,
              })}>
              {period}
            </button>
          ))}
        </div>
      </div>
      <CustomLineChart />
    </section>
  );
};
