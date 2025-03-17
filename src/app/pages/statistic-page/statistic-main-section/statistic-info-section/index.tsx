import clsx from 'clsx';

import {DivisionsSum} from '../../../../../utils/data';
import {Division} from '..';

import {StatisticInfoBlock} from './statistic-info-block';

import './style.scss';

const DIVISIONS = [
  {name: 'Итоги', type: 'total'},
  {name: 'B2B', type: 'B2B'},
  {name: 'B2C', type: 'B2C'},
];

interface StatisticInfoBlockProps {
  divisionSum: DivisionsSum;
  activeDivision: string;
  onSelectDivision: (division: Division) => void;
  className?: string;
}

export const StatisticInfoSection = ({
  divisionSum,
  activeDivision,
  onSelectDivision,
  className,
}: StatisticInfoBlockProps) => (
  <section className={clsx(className, {'statistic-info-section': true})}>
    {DIVISIONS.map((division, index) => (
      <StatisticInfoBlock
        key={index}
        divisionType={division.name}
        divisionSum={divisionSum}
        active={activeDivision === division.name}
        onClick={() => onSelectDivision(division)}
      />
    ))}
  </section>
);
