import {
	validateLanguage,
	validateDate
} from '../../src/middleware/validate';

describe('/middleware', () => {
	describe('/validate.ts', () => {
		describe('validateLanguage method', () => {
			it( 'should return true for valid language - en', () => {
				expect(validateLanguage('en')).toBe(true);
			});
			it( 'should return true for valid language - de', () => {
				expect(validateLanguage('de')).toBe(true);
			});
			it( 'should return true for valid language - es', () => {
				expect(validateLanguage('es')).toBe(true);
			});
			it( 'should return true for valid language - fr', () => {
				expect(validateLanguage('fr')).toBe(true);
			});
			it( 'should return true for valid language - ja', () => {
				expect(validateLanguage('ja')).toBe(true);
			});
			it( 'should return true for valid language - zh', () => {
				expect(validateLanguage('zh')).toBe(true);
			});
			it( 'should return false for invalid language - meow', () => {
				expect(validateLanguage('meow')).toBe(false);
			});
		});
		describe('validateDate method', () => {
			it( 'should return true for valid date - 2018-01-01', () => {
				expect(validateDate('2018-01-01')).toBe(true);
			});
			it( 'should return true for valid date - 2018-01-01T00:00:00.000Z', () => {
				expect(validateDate('2018-01-01T00:00:00.000Z')).toBe(true);
			});
			it( 'should return true for valid date - 2018-01-01T00:00:00.000+00:00', () => {
				expect(validateDate('2018-01-01T00:00:00.000+00:00')).toBe(true);
			});
			it( 'should return false for invalid date - 2018-01-32', () => {
				expect(validateDate('2018-01-32')).toBe(false);
			});
			it( 'should return false for invalid date - 2018-13-01', () => {
				expect(validateDate('2018-13-01')).toBe(false);
			});
			it( 'should return false for invalid date - hackystring', () => {
				expect(validateDate('2018-01-tacos')).toBe(false);
			});
		});
	});
});