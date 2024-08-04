const {sortByAsc, sortByDesc} = require('./task2-sortingarray')

test('sort [5, 3, 4, 1, 2, 8] by desc to equal [8, 5, 4, 3, 2, 1]', () => {
    expect(sortByDesc([5, 3, 4, 1, 2, 8])).toEqual([8, 5, 4, 3, 2, 1]);
});

test('sort [5, 3, 4, 1, 2, 8] by asc to equal [1, 2, 3, 4, 5, 8]', () => {
    expect(sortByAsc([5, 3, 4, 1, 2, 8])).toEqual([1, 2, 3, 4, 5, 8]);
});