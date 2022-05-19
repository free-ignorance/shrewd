const LUNAR_MONTH = 29.530588853;
const LUNAR_WEEK = 7.38264721325;
const JULIAN_DATE = 2451550.1;
const JULIAN_UNIX_TIME = 2440587.5;
const LUNAR_PHASE_RANGE_ = 5.53699;

interface IName {
	en: string;
	de: string;
	es: string;
	fr: string;
	ja: string;
	zh: string;
}

interface IDescription {
	en: string;
}

interface IRange {
	start: number;
	end: number;
}

interface IPhase {
  symbol: string;
	name: IName;
	description: IDescription;
	range: IRange;
}

const lunarPhases = {
	new: {
		name: {
			en: 'New Moon',
			de: 'Neue Mondphase',
			es: 'Luna nueva',
			fr: 'Lune nueve',
			ja: '新月',
			zh: '新月',
		},
		range:{
			start: 0,
			end: 1.5,
		},
		symbol: '🌑',
		description: {
			en: 'The Moon is new and full of energy.',
		},
	},
	waxingCrescent: {
		name: {
			en: 'Waxing Crescent',
			de: 'Zunehmende Sichelmondphase',
			es: 'Luna creciente',
			fr: 'Lune crépusculaire',
			ja: '薄月',
			zh: '薄月',
		},
		range:{
			start: 1.00000001,
			end: 6.53699,
		},
		symbol: '🌒',
		description: {
			en: 'The Moon is waxing and the energy is increasing.',
		},
	},
	firstQuarter: {
		name: {
			en: 'First Quarter',
			de: 'Erste Viertelphase',
			es: 'Luna primero del cuarto',
			fr: 'Premier quartier',
			ja: '初月',
			zh: '初月',
		},
		range:{
			start: 1.00000001,
			end: 6.53699,
		},
		symbol: '🌓',
		description: {
			en: 'The Moon is waxing and the energy is increasing.',
		},
	},
	waxingGibbous: {
		name: {
			en: 'Waxing Gibbous',
			de: 'Zunehmende Gebündelte Mondphase',
			es: 'Luna creciente',
			fr: 'Lune gibbeuse',
			ja: '薄月',
			zh: '薄月',
		},
		age_end: 17.61096,
		age_start: 9.22832,
		symbol: '🌔',
		description: {
			en: 'The Moon is waxing and the energy is increasing.',
		},
	},
	full: {
		name: {
			en: 'Full Moon',
			de: 'Vollmond',
			es: 'Luna llena',
			fr: 'Lune pleine',
			ja: '満月',
			zh: '満月',
		},
		age_end: 13.2652944265,
		age_start: 15.00000001,
		symbol: '🌕',
		description: {
			en: 'The Moon is full.',
		},
	},
	waningGibbous: {
		name: {
			en: 'Waning Gibbous',
			de: 'Abnehmende Gebündelte Mondphase',
			es: 'Luna creciente',
			fr: 'Lune gibbeuse',
			ja: '薄月',
			zh: '薄月',
		},
		symbol: '🌖',
		description: {
			en: 'The Moon is waning and the energy is decreasing.',
		},
	},
	lastQuarter: {
		name: {
			en: 'Last Quarter',
			de: 'Letzte Viertelphase',
			es: 'Luna último cuarto',
			fr: 'Dernier quartier',
			ja: '末月',
			zh: '末月',
		},
		symbol: '🌗',
		description: {
			en: 'The Moon is waning and the energy is decreasing.',
		},
	},
	waningCrescent: {
		name: {
			en: 'Waning Crescent',
			de: 'Abnehmende Sichelmondphase',
			es: 'Luna creciente',
			fr: 'Lune crépusculaire',
			ja: '薄月',
			zh: '薄月',
		},
		symbol: '🌘',
		description: {
			en: 'The Moon is waning and the energy is decreasing.',
		}
	},
};

const rareLunarPhases = {
	bloodMoon: {
		name: {
			en: 'Blood Moon',
			de: 'Blutmond',
			es: 'Luna sangrienta',
			fr: 'Lune sanglante',
			ja: '血月',
			zh: '血月',
		},
		symbol: '🔴',
		description: {
			en: 'The Moon is blood-red and full of energy.',
		}
	},
};

// We start by getting the Julian date, which is a lunar month, time between two identical syzygies, which is around 29.53 days.

function getJulianDate(date: Date = new Date()): number {
  const time = date.getTime();
  const tzoffset = date.getTimezoneOffset()

  return (time / 86400000) - (tzoffset / 1440) + JULIAN_UNIX_TIME;
}

function getLunarAge (date = new Date()): number {
  const percent = getLunarAgePercent(date);
  const age = percent * LUNAR_MONTH;
	return age;
}

function getLunarAgePercent (date: Date = new Date()) {
  return normalize((getJulianDate(date) - JULIAN_DATE) / LUNAR_MONTH);
}

function normalize (value:number): number {
  value = value - Math.floor(value);
  if (value < 0) {
    value = value + 1
	}

	return value;
}

/**
 *        ✩     ⁂     ⚝      ❂
 *  🌑  🌒  🌓  🌔  🌕  🌖  🌗  🌘  🌑
 * we decide the age of the lunar cycle to determine its maturity in that cycle.
 * there are special moons which will need to be denoted in some sort of calendar
 * that can not be calcualted from the Julian date methodology used currently.
 * @description Get the lunar phase for a given date.
 * @param date {Date} The date to get the lunar phase for.
 * @returns IPhase The lunar phase for the given date.
 */
 function getLunarPhase (date: Date = new Date()): IPhase {
  const age = getLunarAge(date);
}

module.exports = {
	lunarPhases, rareLunarPhases, getLunarAge, getLunarAgePercent, getJulianDate, normalize
}