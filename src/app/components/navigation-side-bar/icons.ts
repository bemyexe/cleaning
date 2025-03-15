import Calendar from '../../../assets/calendar.svg?react';
import Diagram from '../../../assets/diagram.svg?react';
import Folder from '../../../assets/folder.svg?react';
import List from '../../../assets/list.svg?react';
import Money from '../../../assets/money.svg?react';
import Peeps from '../../../assets/peeps.svg?react';
import Settings from '../../../assets/settings.svg?react';

export const ICONS = [
  {Icon: Calendar, link: '/calendar', label: 'Календарь'},
  {Icon: List, link: '/tasks', label: 'Список'},
  {Icon: Folder, link: '/files', label: 'Файлы'},
  {Icon: Peeps, link: '/users', label: 'Пользователи'},
  {Icon: Money, link: '/finance', label: 'Финансы'},
  {Icon: Diagram, link: '/analytics', label: 'Аналитика'},
  {Icon: Settings, link: '/settings', label: 'Настройки'},
];
