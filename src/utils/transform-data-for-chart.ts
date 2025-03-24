import {TransactionsByDivision} from './group-transactions-by-period';

export interface AggregatedTransaction {
  date: string;
  income: number;
  debt: number;
  revenue: number;
  expanses: number;
}

export type PeriodType = 'year' | 'month' | 'week';

export const transformData = (
  data: TransactionsByDivision,
  activeDivision: keyof TransactionsByDivision,
  activePeriod: PeriodType
): AggregatedTransaction[] => {
  const divisionData = data[activeDivision];
  if (!divisionData || !divisionData[activePeriod]) {
    console.warn(`Нет данных для ${activeDivision} за период ${activePeriod}`);
    return [];
  }

  const transactions = divisionData[activePeriod];

  const aggregated = transactions.reduce<Record<string, AggregatedTransaction>>(
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
