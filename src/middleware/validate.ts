
const VALID_LANGUAGES = ['en', 'de', 'es', 'fr', 'ja', 'zh'];

function validateLanguage(language: string): Boolean {
	if (VALID_LANGUAGES.indexOf(language) === -1) {
		return false;
	}
	return true;
}