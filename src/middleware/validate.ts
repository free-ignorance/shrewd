import { NextFunction, Request, Response } from "express";

const VALID_LANGUAGES = ["en", "de", "es", "fr", "ja", "zh"];

/**
 * a middleware for validating the language parameter.
 * @param language {String} The language to validate.
 * @returns {Boolean} True if the language is valid, false otherwise.
 */
function validateLanguage(language: string): boolean {
  if (VALID_LANGUAGES.indexOf(language) === -1) {
    return false;
  }
  return true;
}

/**
 * a middleware for validating the date parameter.
 * @param date {String} The date to validate.
 * @returns {Boolean} True if the date is valid, false otherwise.
 */
function validateDate(date: string): boolean {
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    return false;
  }
  return true;
}

/**
 *
 * @param {Request} request - Express request object
 * @param {Response} response - Express response object
 * @param {NextFunction} next - Express next function
 */
function invalidLanguageMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (
    !request.params ||
    !request.params.lang ||
    request.params.lang.length === 0
  ) {
    next();
  }

  if (!validateLanguage(request.params.lang)) {
    response
      .status(400)
      .send(
        `Invalid language, valid languages are "en", "de", "es", "fr", "ja", "zh"`
      );
    return;
  }
  next();
}

/**
 *
 * @param {Request} request - Express request object
 * @param {Response} response - Express response object
 * @param {NextFunction} next - Express next function
 */
function invalidDateMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (
    !request.params ||
    !request.params.date ||
    request.params.date.length === 0 ||
    `${request.params.date}` != "undefined"
  ) {
    // there is no date specified
    const date = new Date();
    request.params.date = date.toJSON().slice(0, 10);
    next();
  }

  const date = request.params.date;
  if (!validateDate(date)) {
    // date is specified, but invalid and can't be parsed
    response
      .status(400)
      .send(`Invalid date! Valid date format is "YYYY-MM-DD"`);
    return;
  }
  next();
}
export {
  invalidDateMiddleware,
  invalidLanguageMiddleware,
  validateLanguage,
  validateDate,
};
