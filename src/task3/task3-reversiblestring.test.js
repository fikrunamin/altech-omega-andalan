const isReversibleString = require('./task3-reversiblestring');

test('abba is a reversible string', () => {
    expect(isReversibleString('abba')).toBe(true);
});

test('abcdefgh is not a reversible string', () => {
    expect(isReversibleString('abcdefgh')).toBe(false);
});

test('abcdefghgfedcba is a reversible string', () => {
    expect(isReversibleString('abcdefghgfedcba')).toBe(true);
});