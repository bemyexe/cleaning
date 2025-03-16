import {StatisticInfoSection} from './statistic-info-section';

import './style.scss';

export const StatisticMainSection = () => (
  <main className="statistic-main-section">
    <h1 className="statistic-main-section__title">Сводный отчет</h1>
    <StatisticInfoSection sum={10000000} active={false} />
  </main>
);
