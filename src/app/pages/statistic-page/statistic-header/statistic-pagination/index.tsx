import {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';

import Triangle from '../../../../../assets/triangle.svg?react';

import './style.scss';

const tabs = [
  {id: 1, label: 'Свод данных по сотрудникам'},
  {id: 2, label: 'Сводный отчет внутри компании'},
  {id: 3, label: 'Сводный отчет по сделкам'},
  {id: 4, label: 'Финансовый отчет'},
  {id: 5, label: 'Аналитика'},
];

export const StatisticPagination = () => {
  const [activeTab, setActiveTab] = useState(2);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    tabRefs.current[activeTab - 1]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [activeTab]);

  const nextTab = () => {
    setActiveTab((prev) => (prev < tabs.length ? prev + 1 : prev));
  };

  const prevTab = () => {
    setActiveTab((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="tabs-container">
      <div className="buttons-container">
        <button
          className="button button-prev"
          onClick={prevTab}
          disabled={activeTab === 1}>
          <Triangle className="button-icon" />
        </button>
        <button
          className="button"
          onClick={nextTab}
          disabled={activeTab === tabs.length}>
          <Triangle className="button-icon" />
        </button>
      </div>
      <div className="tabs-container">
        <div className="tabs-wrapper">
          {tabs.map((tab, index) => (
            <button
              className={clsx({
                'tab-button': true,
                active: tab.id === activeTab,
              })}
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              onClick={() => setActiveTab(tab.id)}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
