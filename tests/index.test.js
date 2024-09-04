const soma = require('../src/index')

test('Soma 1 + 2 para igualar 3', () => {
    expect(soma(1, 2)).toBe(3)
});