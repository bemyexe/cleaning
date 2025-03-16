import clsx from 'clsx';

import {ProblemZoneItem} from './problem-zone-item';

import './style.scss';

const ZONES = [
  'Линейный персонал',
  'Подразделение разовых работ ФОТ',
  'Бензин (наличные)',
  'Закупка инвентаря',
  'Закупка спецодежды/СИЗ',
  'Ремонт оборудования',
  'Обслуживание автомобиля',
  'Форс-мажоры',
  'Рекламные бюджеты (Блогеры)',
  'Рекламные бюджеты (Контекст)',
];

interface StatisticProblemZoneSectionProps {
  className?: string;
}

export const StatisticProblemZoneSection = ({
  className,
}: StatisticProblemZoneSectionProps) => (
  <section
    className={clsx({className, 'statistic-problem-zone-section': true})}>
    <h1 className="statistic-problem-zone-section__title">Проблемные зоны</h1>
    {ZONES.map((zone, index) => (
      <ProblemZoneItem key={index} zones={zone} sum={100000} />
    ))}
  </section>
);
