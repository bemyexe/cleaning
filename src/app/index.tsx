// import {generateRandomTransactions} from '../utils/generate-random-data';

import {NavigationSidebar} from './components/navigation-side-bar';
import {StatisticPage} from './pages/statistic-page';

import './style.scss';

export const App = () => {
  // console.log(JSON.stringify({data: generateRandomTransactions(60)}, null, 2));
  return (
    <div className="app-wrapper">
      <NavigationSidebar />
      <StatisticPage />
    </div>
  );
};
