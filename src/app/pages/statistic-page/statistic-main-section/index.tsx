import {useState} from 'react';

import {DATA, DIVISIONS_SUM} from '../../../../utils/data';

import {StatisticChart} from './statistic-chart-section';
import {StatisticInfoSection} from './statistic-info-section';
import {StatisticProblemZoneSection} from './statistic-problem-zone-section';

import './style.scss';

export type Division = {name: string; type: string};

const DEFAULT_DIVISION: Division = {name: 'Итоги', type: 'total'};

export const StatisticMainSection = () => {
  const [activeDivision, setActiveDivision] =
    useState<Division>(DEFAULT_DIVISION);

  return (
    <main className="statistic-main-section">
      <h1 className="statistic-main-section__title">Сводный отчет</h1>
      <div className="statistic-main-section__grid">
        <StatisticInfoSection
          divisionSum={DIVISIONS_SUM}
          activeDivision={activeDivision.name}
          onSelectDivision={setActiveDivision}
          className="info-section"
        />
        <StatisticProblemZoneSection className="problem-zone-section" />
        <StatisticChart
          className="chart-section"
          data={DATA}
          activeDivision={activeDivision.type}
        />
      </div>
    </main>
  );
};
