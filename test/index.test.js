const {ehPalindromo} = require('../src/index'); // ajuste o caminho conforme necessário

describe('Teste da função ehPalindromo', () => {
    test('deve retornar true para palíndromos', () => {
        expect(ehPalindromo('arara')).toBe(true);
        expect(ehPalindromo('hannah')).toBe(true);
    });

    test('deve retornar false para não palíndromos', () => {
        expect(ehPalindromo('amor')).toBe(false);
        expect(ehPalindromo('teste')).toBe(false);
    });
});