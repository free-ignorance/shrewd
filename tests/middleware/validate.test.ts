import { NextFunction, Request, Response } from "express";

import {
	invalidDateMiddleware,
	invalidLanguageMiddleware,
	validateLanguage,
	validateDate,
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
		describe('invalidLanguageMiddleware method', () => {
			let mockRequest: Partial<Request>;
			let mockResponse: any;
			let nextFunction: NextFunction = jest.fn();

			beforeEach(() => {

				mockResponse = {
					send: jest.fn(),
					status: jest.fn(() => mockResponse),
				};
			});
			it( 'should call next if language is valid - en', () => {
				mockRequest = {
					params: {
						language: 'en'
					}
				};

				invalidLanguageMiddleware(mockRequest as Request, mockResponse as Response, nextFunction as NextFunction);
				expect(nextFunction).toHaveBeenCalled();
			});
			it( 'should not call next if language is invalid', () => {
				mockRequest = {
					params: {
						language: 'xx'
					}
				};

				invalidLanguageMiddleware(mockRequest as Request, mockResponse as Response, nextFunction as NextFunction);
				expect(mockResponse.status).toHaveBeenCalledWith(400);
				expect(mockResponse.send).toHaveBeenCalledWith("Invalid language, valid languages are \"en\", \"de\", \"es\", \"fr\", \"ja\", \"zh\"");
			});
			it( 'should call next if no language is there', () => {
				mockRequest = {
					params: {
						nothing: 'here'
					}
				};

				invalidLanguageMiddleware(mockRequest as Request, mockResponse as Response, nextFunction as NextFunction);
				expect(nextFunction).toHaveBeenCalled();
			});
		});
		describe('invalidDateMiddleware method', () => {
			let mockRequest: Partial<Request>;
			let mockResponse: any;
			let nextFunction: NextFunction = jest.fn();

			beforeEach(() => {

				mockResponse = {
					send: jest.fn(),
					status: jest.fn(() => mockResponse),
				};
			});

			it( 'should call next if no date is provided', () => {
				mockRequest = {
					params: {
						language: 'en'
					}
				};

				invalidDateMiddleware(mockRequest as Request, mockResponse as Response, nextFunction as NextFunction);
				expect(nextFunction).toHaveBeenCalled();
			});
			it( 'should call next if date is valid', () => {
				mockRequest = {
					params: {
						date: '2018-01-01',
						language: 'en'
					}
				};

				invalidDateMiddleware(mockRequest as Request, mockResponse as Response, nextFunction as NextFunction);
				expect(nextFunction).toHaveBeenCalled();
			});
		});
	});
});