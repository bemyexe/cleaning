import {NavigationSidebar} from './components/navigation-side-bar';
import {StatisticPage} from './pages/statistic-page';

import './style.scss';

export const App = () => {
  return (
    <div className="app-wrapper">
      <NavigationSidebar />
      <StatisticPage />
    </div>
  );
};
