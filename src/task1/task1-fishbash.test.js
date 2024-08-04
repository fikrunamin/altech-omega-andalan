const fishBash = require('./task1-fishbash');

test('create fish bash to 3', () => {
    console.log = jest.fn();
    fishBash(3);
    expect(console.log.mock.calls).toEqual([
        ['fish']
    ]);
});

test('create fish bash to 5', () => {
    console.log = jest.fn();
    fishBash(5);
    expect(console.log.mock.calls).toEqual([
        ['fish'],
        ['bash']
    ]);
});

test('create fish bash to 15', () => {
    console.log = jest.fn();
    fishBash(15);
    expect(console.log.mock.calls).toEqual([
        ['fish'],
        ['bash'],
        ['fish'],
        ['fish'],
        ['bash'],
        ['fish'],
        ['fish bash'],
    ]);
});

test('create fish bash to 30', () => {
    console.log = jest.fn();
    fishBash(30);
    expect(console.log.mock.calls).toEqual([
        ['fish'],
        ['bash'],
        ['fish'],
        ['fish'],
        ['bash'],
        ['fish'],
        ['fish bash'],
        ['fish'],
        ['bash'],
        ['fish'],
        ['fish'],
        ['bash'],
        ['fish'],
        ['fish bash'],
    ]);
});