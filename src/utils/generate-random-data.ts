import {faker} from '@faker-js/faker';

import {getSortedRandomDates} from './get-sorted-random-dates';

type TransactionType = 'expanses' | 'income' | 'revenue' | 'debt';

type DivisionType = 'B2B' | 'B2C';

export interface Transaction {
  division: DivisionType;
  date: string;
  amount: string;
  type: TransactionType;
}

const TYPES: TransactionType[] = ['expanses', 'income', 'revenue', 'debt'];
const DIVISIONS: DivisionType[] = ['B2B', 'B2C'];

export const generateRandomTransactions = (count: number): Transaction[] => {
  const sortedDates = getSortedRandomDates(count);

  return Array.from({length: count}, () => ({
    division: faker.helpers.arrayElement(DIVISIONS),
    date: sortedDates.shift()!,
    amount: faker.finance.amount({min: 10000, max: 1200000, dec: 0}),
    type: faker.helpers.arrayElement(TYPES),
  }));
};
