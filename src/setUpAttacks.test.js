import findBy from './js/findBy';

test('Проверка по полю name', () => {
  const finder = findBy('name', 'урон');
  const result = [
    { name: 'маг', type: 'character' },
    { name: 'заклинание', type: 'attack' },
    { name: 'урон', type: 'help' },
  ].filter(finder);
  const expected = [{ name: 'урон', type: 'help' }];
  expect(result).toEqual(expected);
});

test('Проверка по полю type', () => {
  const finder = findBy('type', 'character');
  const result = [
    { name: 'маг', type: 'character' },
    { name: 'заклинание', type: 'attack' },
    { name: 'урон', type: 'help' },
  ].filter(finder);
  const expected = [{ name: 'маг', type: 'character' }];
  expect(result).toEqual(expected);
});

test('Проверка type на несколько результатов', () => {
  const result = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const finder = findBy('type', 'help');
  const received = result.filter(finder);
  const expected = [
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  expect(received).toEqual(expected);
});

test('Проверка без результатов', () => {
  const finder = findBy(' ', ' ');
  const expected = false;
  const received = finder({ name: 'урон' });
  expect(received).toBe(expected);
});
