import clsx from 'clsx';

import {ProblemZoneItem} from './problem-zone-item';

import './style.scss';

export type Zone = {zone: string; amount: number};

const ZONES: Zone[] = [
  {zone: 'Линейный персонал', amount: 300367},
  {zone: 'Подразделение разовых работ ФОТ', amount: 901470},
  {zone: 'Бензин (наличные)', amount: 278325},
  {zone: 'Закупка инвентаря', amount: 44742},
  {zone: 'Закупка спецодежды/СИЗ', amount: 16810},
  {zone: 'Ремонт оборудования', amount: 28570},
  {zone: 'Обслуживание автомобиля', amount: 47868},
  {zone: 'Форс-мажоры', amount: 13750},
  {zone: 'Рекламные бюджеты (Блогеры)', amount: 101500},
  {zone: 'Рекламные бюджеты (Контекст)', amount: 200000},
];

interface StatisticProblemZoneSectionProps {
  className?: string;
}

export const StatisticProblemZoneSection = ({
  className,
}: StatisticProblemZoneSectionProps) => (
  <section
    className={clsx(className, {'statistic-problem-zone-section': true})}>
    <h1 className="statistic-problem-zone-section__title">Проблемные зоны</h1>
    {ZONES.map((zone, index) => (
      <ProblemZoneItem key={index} zones={zone} />
    ))}
  </section>
);
