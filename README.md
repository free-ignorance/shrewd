shrewd
=========

#### "an astute shrewd knows the moon's secrets"


[![Issues](https://img.shields.io/github/issues/free-ignorance/shrewd.svg)](https://github.com/free-ignorance/shrewd/issues)
[![License](https://img.shields.io/badge/license-GPL-blue.svg)](https://github.com/free-ignorance/shrewd/blob/main/LICENSE)
![Known Vulnerabilities](https://snyk.io/test/github/free-ignorance/shrewd/badge.svg)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/free-ignorance/shrewd.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/free-ignorance/shrewd/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/free-ignorance/shrewd.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/free-ignorance/shrewd/context:javascript)
[![codecov](https://codecov.io/gh/free-ignorance/shrewd/branch/main/graph/badge.svg)](https://codecov.io/gh/free-ignorance/shrewd)



## Description


This RESTful API returns a json object with the current moon phase

Basic usage

```bash
curl https://shrewdly.herokuapp.com/
```

Response

```json
{
  "name": "New Moon",
  "description": "The Moon is new and full of energy.",
  "symbol": "🌑",
}
```

Recieve the Response in a different language using the `lang` query param.

```bash
  curl https://sage.af/api/shrewd/?lang="es"
```

Response

```json
{
  "name": "Luna nueva",
  "description": "La luna es nueva y llena de energía.",
  "symbol": "🌑",
}
```
localized into multiple languages, currently supported are:
* `en` - English (default if no language is specified)
* `de` - German
* `fr` - French
* `es` - Spanish
* `zh` - Chinese
* `ja` - Japanese

it also returns an emoji symbol for universal understanding.

### Looking for Translators! 

[Click here](https://github.com/free-ignorance/shrewd/blob/main/docs/CONTRIBUTING.md) to learn more or if you would like to contribute in anyway! 


## Methodology

To get the Current moon cycle . . .

Because we know the moon phase at the [Unix Epoch](https://en.wikipedia.org/wiki/Unix_time) (00:00:00 UTC on 1 January 1970) we can calculate the current place in the current cycle from that point. We do this by converting the Gregorian Calendar date to a [Julian Date](https://en.wikipedia.org/wiki/Julian_day), which will aproximately tell us a lunar cycle, or lunar month.

Enjoy this emoji rendering of a lunar month cycle

```
      ✩        ⁂         ⚝          ❂
  🌑   🌒   🌓   🌔   🌕   🌖   🌗   🌘   🌑            (phase)
  0         7       14        21       29.530588853  (lunar age)

```

### Example Usage



## Local Development

### Installation

```
npm install
```

