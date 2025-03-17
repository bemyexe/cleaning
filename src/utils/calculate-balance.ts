import {Transaction} from './generate-random-data';
import {groupTransactionsForChart} from './group-transactions-by-period';

const calculateBalance = (transactions: Transaction[]) => {
  return transactions.reduce((acc, t) => {
    if (t.type === 'revenue') {
      return acc + Number(t.amount);
    } else if (t.type === 'expanses') {
      return acc - Number(t.amount);
    }
    return acc;
  }, 0);
};

export const calculateYearlySummary = (
  data: ReturnType<typeof groupTransactionsForChart>
) => {
  return {
    Итоги: calculateBalance(data.total.year),
    B2B: calculateBalance(data.B2B.year),
    B2C: calculateBalance(data.B2C.year),
  };
};
