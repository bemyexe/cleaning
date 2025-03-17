import {faker} from '@faker-js/faker';

import {getSortedRandomDates} from './get-sorted-random-dates';

type TransactionType = 'expanses' | 'income' | 'revenue' | 'debt';

interface Transaction {
  division: 'B2B' | 'B2C';
  date: string;
  amount: string;
  type: TransactionType;
}

export function generateRandomTransactions(count: number): Transaction[] {
  const types: TransactionType[] = ['expanses', 'income', 'revenue', 'debt'];
  const divisions = ['B2B', 'B2C'];

  const sortedDates = getSortedRandomDates(count);

  return Array.from({length: count}, () => ({
    division: faker.helpers.arrayElement(divisions) as Transaction['division'],
    date: sortedDates.shift()!,
    amount: faker.finance.amount({min: 10000, max: 120000, dec: 0}),
    type: faker.helpers.arrayElement(types),
  }));
}
