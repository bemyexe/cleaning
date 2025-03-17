import {format} from 'date-fns';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
} from 'recharts';

import {AggregatedTransaction} from '../../../../utils/transform-data-for-chart';

interface CustomLineChartProps {
  data: AggregatedTransaction[];
}

export const CustomLineChart: React.FC<CustomLineChartProps> = ({data}) => {
  const revenueColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--revenue-chart');
  const expensesColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--expenses-chart');

  const arrearsColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--arrears-chart');
  const profitColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--profit-chart');
  const resultColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--result-chart');
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="6" horizontal={false} />
        <XAxis
          dataKey="date"
          tickFormatter={(tick) => format(new Date(tick), 'MMMM')}
        />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke={revenueColor}
          activeDot={{r: 8}}
          name="Выручка"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="expanses"
          stroke={expensesColor}
          activeDot={{r: 8}}
          name="Затраты"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="income"
          stroke={profitColor}
          activeDot={{r: 8}}
          name="Прибыль"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="debt"
          stroke={arrearsColor}
          activeDot={{r: 8}}
          name="Задолженность"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="total"
          stroke={resultColor}
          activeDot={{r: 8}}
          name="Итог"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
