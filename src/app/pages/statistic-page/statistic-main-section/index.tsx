import {StatisticChart} from './statistic-chart-section';
import {StatisticInfoSection} from './statistic-info-section';
import {StatisticProblemZoneSection} from './statistic-problem-zone-section';

import './style.scss';

export const StatisticMainSection = () => (
  <main className="statistic-main-section">
    <h1 className="statistic-main-section__title">Сводный отчет</h1>
    <div className="statistic-main-section__grid">
      <StatisticInfoSection
        sum={10000000}
        active={false}
        className="info-section"
      />
      <StatisticProblemZoneSection className="problem-zone-section" />
      <StatisticChart className="chart-section" />
    </div>
  </main>
);
