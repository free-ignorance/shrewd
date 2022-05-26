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
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param next
 * @returns
 */
function invalidLanguageMiddleware(req: any, res: any, next: any): void {
  if (!validateLanguage(req.params.language)) {
    res.status(400).send("Invalid language");
    return;
  }
  next();
}

function invalidDateMiddleware(req: any, res: any, next: any): void {
  if (!validateDate(req.params.date)) {
    res.status(400).send("Invalid date");
    return;
  }
  next();
}
export { validateLanguage, validateDate };
