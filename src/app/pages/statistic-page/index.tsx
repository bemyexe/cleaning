import {StatisticHeader} from './statistic-header';
import {StatisticMainSection} from './statistic-main-section';

import './style.scss';

export const StatisticPage = () => (
  <div className="statistic-page">
    <StatisticHeader />
    <StatisticMainSection />
  </div>
);
