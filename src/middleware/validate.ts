const VALID_LANGUAGES = ["en", "de", "es", "fr", "ja", "zh"];

function validateLanguage(language: string): boolean {
  if (VALID_LANGUAGES.indexOf(language) === -1) {
    return false;
  }
  return true;
}

export default validateLanguage;
