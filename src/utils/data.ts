import {calculateYearlySummary} from './calculate-balance';
import {generateRandomTransactions} from './generate-random-data';
import {
  groupTransactionsForChart,
  TransactionsByDivision,
} from './group-transactions-by-period';

export type DivisionsSum = {[division: string]: number};

export const DATA: TransactionsByDivision = groupTransactionsForChart(
  generateRandomTransactions(100)
);

export const DIVISIONS_SUM: DivisionsSum = calculateYearlySummary(DATA);
