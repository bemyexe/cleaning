import {StatisticInfoBlock} from '../statistic-info-block';

import './style.scss';

export const StatisticMainSection = () => (
  <main className="statistic-main-section">
    <h1 className="statistic-main-section__title">Сводный отчет</h1>
    <StatisticInfoBlock division="Итоги" sum={20000000} active />
  </main>
);
