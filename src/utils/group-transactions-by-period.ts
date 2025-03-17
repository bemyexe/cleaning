import {Transaction} from './generate-random-data';

type TransactionsByPeriod = {
  year: Transaction[];
  month: Transaction[];
  week: Transaction[];
};

export type TransactionsByDivision = {
  B2B: TransactionsByPeriod;
  B2C: TransactionsByPeriod;
  total: TransactionsByPeriod;
};

export const groupTransactionsForChart = (
  transactions: Transaction[]
): TransactionsByDivision => {
  const lastDayOf2024 = new Date(2024, 11, 31);
  const lastWeekStart = new Date(lastDayOf2024);
  lastWeekStart.setDate(lastWeekStart.getDate() - 6);

  const lastMonthStart = new Date(2024, 11, 1);

  function filterByPeriod(startDate: Date, endDate: Date) {
    return transactions.filter((t) => {
      const transactionDate = new Date(t.date);
      return transactionDate >= startDate && transactionDate <= endDate;
    });
  }

  const b2bTransactions = transactions.filter((t) => t.division === 'B2B');
  const b2cTransactions = transactions.filter((t) => t.division === 'B2C');

  return {
    B2B: {
      year: b2bTransactions,
      month: filterByPeriod(lastMonthStart, lastDayOf2024).filter(
        (t) => t.division === 'B2B'
      ),
      week: filterByPeriod(lastWeekStart, lastDayOf2024).filter(
        (t) => t.division === 'B2B'
      ),
    },
    B2C: {
      year: b2cTransactions,
      month: filterByPeriod(lastMonthStart, lastDayOf2024).filter(
        (t) => t.division === 'B2C'
      ),
      week: filterByPeriod(lastWeekStart, lastDayOf2024).filter(
        (t) => t.division === 'B2C'
      ),
    },
    total: {
      year: transactions,
      month: filterByPeriod(lastMonthStart, lastDayOf2024),
      week: filterByPeriod(lastWeekStart, lastDayOf2024),
    },
  };
};
