shrewd
=========

#### "an astute shrewd knows the moon's secrets"


[![Issues](https://img.shields.io/github/issues/free-ignorance/shrewd.svg)](https://github.com/free-ignorance/shrewd/issues)
[![License](https://img.shields.io/badge/license-GPL-blue.svg)](https://github.com/free-ignorance/shrewd/blob/main/LICENSE)
[![codecov](https://codecov.io/gh/free-ignorance/shrewd/branch/main/graph/badge.svg)](https://codecov.io/gh/free-ignorance/shrewd)



## Description


This RESTful API returns a json object with the current moon phase.


## Methodology

### Lunar Cycle

A lunar cycle is the period of time it takes for the Moon to orbit Earth and return to the same phase. This takes about 29.5 days.

The Moon is illuminated by the Sun, but we can only see the part of the Moon that is facing the Sun. As the Moon orbits Earth, the amount of the Moon that we can see illuminated changes. This is what causes the lunar phases.

There are eight main lunar phases:

* New Moon: 🌑 This is when the Moon is between the Earth and the Sun, and the side of the Moon that is facing us is dark. We cannot see the Moon during a new moon.
* Waxing Crescent: 🌒 As the Moon orbits Earth, it begins to move away from the Sun. We start to see a thin crescent of the Moon illuminated by the Sun.
* First Quarter: 🌓 When the Moon is halfway through its orbit, we see half of the Moon illuminated by the Sun. This is called a first quarter moon.
* Waxing Gibbous: 🌔 As the Moon continues to orbit Earth, we see more and more of the Moon illuminated by the Sun. This is called a waxing gibbous moon.
* Full Moon: 🌕 When the Moon is on the opposite side of the Earth from the Sun, we see the entire near-side of the Moon illuminated by the Sun. This is called a full moon.
* Waning Gibbous: 🌖 As the Moon continues to orbit Earth, we see less and less of the Moon illuminated by the Sun. This is called a waning gibbous moon.
* Third Quarter: 🌗 When the Moon is halfway through its orbit back to the new moon, we see half of the Moon illuminated by the Sun. This is called a third quarter moon.
* Waning Crescent: 🌘 As the Moon gets closer to the new moon, we see less and less of the Moon illuminated by the Sun. This is called a waning crescent moon.

<div align="center">
<img src="https://github.com/free-ignorance/shrewd/assets/127320/262c796a-5d00-4570-a218-5a33c17cff34" alt="a Moon phase diagram" />
</div>


To get the Current lunar cycle . . .

Because we know the moon phase at the [Unix Epoch](https://en.wikipedia.org/wiki/Unix_time) (00:00:00 UTC on 1 January 1970) we can calculate the current place in the current cycle from that point. We do this by converting the Gregorian Calendar date to a [Julian Date](https://en.wikipedia.org/wiki/Julian_day), which will aproximately tell us a lunar cycle, or lunar month.

Enjoy this emoji rendering of a lunar month cycle

```
      ✩        ⁂         ⚝          ❂
  🌑   🌒   🌓   🌔   🌕   🌖   🌗   🌘   🌑            (phase)
  0         7       14        21       29.530588853  (lunar age)

```


## Basic usage

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
  curl https://shrewdly.herokuapp.com/?lang="es"
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

### Advanced Usage

#### Local Development / Installation

```
npm install
```



