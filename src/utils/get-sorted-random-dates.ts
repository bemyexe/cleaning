import {faker} from '@faker-js/faker';

export function getSortedRandomDates(count: number): string[] {
  const dates = new Set<Date>();

  while (dates.size < count) {
    const month = faker.number.int({min: 0, max: 11});
    const day = faker.number.int({
      min: 1,
      max: new Date(2024, month + 1, 0).getDate(),
    });
    dates.add(new Date(2024, month, day));
  }

  return Array.from(dates)
    .sort((a, b) => a.getTime() - b.getTime())
    .map((date) => date.toISOString());
}
