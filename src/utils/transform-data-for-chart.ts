import {TransactionsByDivision} from './group-transactions-by-period';

export interface Transaction {
  division: string;
  date: string;
  amount: string;
  type: 'income' | 'debt' | 'revenue';
}

export interface AggregatedTransaction {
  date: string;
  income: number;
  debt: number;
  revenue: number;
}

export const transformData = (
  data: TransactionsByDivision,
  activeDivision: keyof TransactionsByDivision,
  activePeriod: 'year' | 'month' | 'week'
): AggregatedTransaction[] => {
  const divisionData = data[activeDivision];
  if (!divisionData || !divisionData[activePeriod]) {
    console.warn(`Нет данных для ${activeDivision} за период ${activePeriod}`);
    return [];
  }

  const transactions = divisionData[activePeriod];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const aggregated = transactions.reduce<Record<string, any>>(
    (acc, transaction) => {
      const {date, amount, type} = transaction;

      if (!acc[date]) {
        acc[date] = {date, income: 0, debt: 0, revenue: 0, expanses: 0};
      }

      acc[date][type] += Number(amount);
      return acc;
    },
    {}
  );

  return Object.values(aggregated);
};
