const LUNAR_MONTH = 29.530588853;
const LUNAR_WEEK = 7.38264721325;
const JULIAN_DATE = 2451550.1;
const JULIAN_UNIX_TIME = 2440587.5;
const LUNAR_BUFFER = 0.85;

interface IPhaseName {
  en: string;
  de?: string;
  es?: string;
  fr?: string;
  ja?: string;
  zh?: string;
}

interface IPhaseDescription {
  en: string;
  de?: string;
  es?: string;
  fr?: string;
  ja?: string;
  zh?: string;
}

interface IPhaseRange {
  start: number;
  end: number;
}

interface IPhase {
  symbol: string;
  name: IPhaseName;
  description: IPhaseDescription;
  range: IPhaseRange;
}

interface IExturnalPhase {
  symbol: string;
  name?: string;
  description?: string;
}

interface ILunarPhases {
  new: IPhase;
  waxingCrescent: IPhase;
  firstQuarter: IPhase;
  waxingGibbous: IPhase;
  full: IPhase;
  waningGibbous: IPhase;
  lastQuarter: IPhase;
  waningCrescent: IPhase;
}

const lunarPhases: ILunarPhases = {
  new: {
    name: {
      en: "New Moon",
      de: "Neue Mondphase",
      es: "Luna nueva",
      fr: "Lune nueve",
      ja: "新月",
      zh: "新月",
    },
    range: {
      start: 0,
      end: 1.5,
    },
    symbol: "🌑",
    description: {
      en: "The Moon is new and full of energy.",
      de: "Die Mond ist neu und voll mit Energie.",
      es: `La luna es nueva y llena de energía.`,
      fr: `La lune est nueve et pleine d'énergie.`,
      ja: `月は新しいです。`,
      zh: `月是新的，充滿能量。`,
    },
  },
  waxingCrescent: {
    name: {
      en: "Waxing Crescent",
      de: "Zunehmende Sichelmondphase",
      es: "Luna creciente",
      fr: "Lune crépusculaire",
      ja: "上弦月",
      zh: "薄月",
    },
    range: {
      start: 1.00000001,
      end: 6.53699,
    },
    symbol: "🌒",
    description: {
      en: "The Moon is waxing and the energy is increasing.",
      de: "Die Mond ist zunehmend und die Energie wird erhöht.",
      es: `La luna está creciendo y la energía está aumentando.`,
      fr: `La lune est en train de se crépusculer et l'énergie est en train d'augmenter.`,
      ja: `月は薄くなっています。`,
      zh: `月是薄的，能量增加。`,
    },
  },
  firstQuarter: {
    name: {
      en: "First Quarter",
      de: "Erste Viertelphase",
      es: "Luna primero del cuarto",
      fr: "Premier quartier",
      ja: "初月",
      zh: "初月",
    },
    range: {
      start: 6.83264721325,
      end: 7.93264721325,
    },
    symbol: "🌓",
    description: {
      en: "The Moon is waxing and the energy is increasing.",
      de: "Die Mond ist zunehmend und die Energie wird erhöht.",
      es: "La luna está creciendo y la energía está aumentando.",
      fr: "La lune est en train de se crépusculer et l'énergie est en train d'augmenter.",
      ja: `月は薄くなっています。`,
      zh: `月是薄的，能量增加。`,
    },
  },
  waxingGibbous: {
    name: {
      en: "Waxing Gibbous",
      de: "Zunehmende Gebündelte Mondphase",
      es: "Luna creciente",
      fr: "Lune gibbeuse",
      ja: "薄月",
      zh: "薄月",
    },
    range: {
      start: 1.00000001,
      end: 6.53699,
    },
    symbol: "🌔",
    description: {
      en: "The Moon is waxing and the energy is increasing.",
      de: "Die Mond ist zunehmend und die Energie wird erhöht.",
      es: "La luna está creciendo y la energía está aumentando.",
      fr: "La lune est en train de se crépusculer et l'énergie est en train d'augmenter.",
      ja: `月は薄くなっています。`,
      zh: `月是薄的，能量增加。`,
    },
  },
  full: {
    name: {
      en: "Full Moon",
      de: "Vollmond",
      es: "Luna llena",
      fr: "Lune pleine",
      ja: "満月",
      zh: "満月",
    },
    range: {
      start: 1.00000001,
      end: 6.53699,
    },
    symbol: "🌕",
    description: {
      en: "The Moon is full.",
      de: "Die Mond ist voll.",
      es: "La luna está llena.",
      fr: "La lune est pleine.",
      ja: `月は満ちました。`,
      zh: `月是滿的。`,
    },
  },
  waningGibbous: {
    name: {
      en: "Waning Gibbous",
      de: "Abnehmende Gebündelte Mondphase",
      es: "Luna creciente",
      fr: "Lune gibbeuse",
      ja: "薄月",
      zh: "薄月",
    },
    range: {
      start: 1.00000001,
      end: 6.53699,
    },
    symbol: "🌖",
    description: {
      en: "The Moon is waning and the energy is decreasing.",
      de: "Die Mond ist abnehmend und die Energie wird verringert.",
      es: "La luna está creciendo y la energía está aumentando.",
      fr: "La lune est en train de se crépusculer et l'énergie est en train d'augmenter.",
      ja: `月は薄くなっています。`,
      zh: `月是薄的，能量增加。`,
    },
  },
  lastQuarter: {
    name: {
      en: "Last Quarter",
      de: "Letzte Viertelphase",
      es: "Luna último cuarto",
      fr: "Dernier quartier",
      ja: "末月",
      zh: "末月",
    },
    range: {
      start: 1.00000001,
      end: 6.53699,
    },
    symbol: "🌗",
    description: {
      en: "The Moon is waning and the energy is decreasing.",
      de: "Die Mond ist abnehmend und die Energie wird verringert.",
      es: "La luna está creciendo y la energía está aumentando.",
      fr: "La lune est en train de se crépusculer et l'énergie est en train d'augmenter.",
      ja: `月は薄くなっています。`,
      zh: `月是薄的，能量增加。`,
    },
  },
  waningCrescent: {
    name: {
      en: "Waning Crescent",
      de: "Abnehmende Sichelmondphase",
      es: "Luna creciente",
      fr: "Lune crépusculaire",
      ja: "下弦月",
      zh: "薄月",
    },
    range: {
      start: 1.00000001,
      end: 6.53699,
    },
    symbol: "🌘",
    description: {
      en: "The Moon is waning and the energy is decreasing.",
      de: "Die Mond ist abnehmend und die Energie wird verringert.",
      es: "La luna está creciendo y la energía está aumentando.",
      fr: "La lune est en train de se crépusculer et l'énergie est en train d'augmenter.",
      ja: `月は薄くなっています。`,
      zh: `月是薄的，能量增加。`,
    },
  },
};

const rareLunarPhases = {
  bloodMoon: {
    name: {
      en: "Blood Moon",
      de: "Blutmond",
      es: "Luna sangrienta",
      fr: "Lune sanglante",
      ja: "血月",
      zh: "血月",
    },
    symbol: "🔴",
    description: {
      en: "The Moon is blood-red and full of energy.",
      de: "Die Mond ist blutrot und voll mit Energie.",
      es: "La luna es sangrienta y llena de energía.",
      fr: "La lune est rouge sanglante et pleine d'énergie.",
      ja: `月は血色で満ちました。`,
      zh: `月是血色的，能量滿滿。`,
    },
  },
};

// We start by getting the Julian date, which is a lunar month, time between two identical syzygies, which is around 29.53 days.

function getJulianDate(date: Date = new Date()): number {
  const time = date.getTime();
  const tzoffset = date.getTimezoneOffset();

  return time / 86400000 - tzoffset / 1440 + JULIAN_UNIX_TIME;
}

function getLunarAge(date = new Date()): number {
  const percent = getLunarAgePercent(date);
  const age = percent * LUNAR_MONTH;
  return age;
}

function getLunarAgePercent(date: Date = new Date()) {
  return normalize((getJulianDate(date) - JULIAN_DATE) / LUNAR_MONTH);
}

function normalize(value: number): number {
  value = value - Math.floor(value);
  if (value < 0) {
    value = value + 1;
  }

  return value;
}

/**
 * we decide the age of the lunar cycle to determine its maturity in that cycle.
 * enjoy this emoji rendering of a lunar month cycle
 *        ✩        ⁂         ⚝          ❂
 *  🌑   🌒   🌓   🌔   🌕   🌖   🌗   🌘   🌑
 *  0         7         14        21        29.530588853
 * (lunar age)
 * there are special moons which will need to be denoted in some sort of calendar
 * that can not be calcualted from the Julian date methodology used currently.
 * @description Get the lunar phase for a given date.
 * @param date {Date} The date to get the lunar phase for.
 * @returns IPhase The lunar phase for the given date.
 */
function createLunarPhase(date: Date = new Date()): IPhase {
  const age = getLunarAge(date);
  if (age < 1) {
    return lunarPhases.new;
  } else if (age < LUNAR_WEEK - LUNAR_BUFFER) {
    return lunarPhases.waxingCrescent;
  } else if (
    age >= LUNAR_WEEK - LUNAR_BUFFER &&
    age <= LUNAR_WEEK + LUNAR_BUFFER
  ) {
    return lunarPhases.firstQuarter;
  } else if (age < LUNAR_WEEK * 2 - LUNAR_BUFFER) {
    return lunarPhases.waxingGibbous;
  } else if (
    age >= LUNAR_WEEK * 2 - LUNAR_BUFFER &&
    age <= LUNAR_WEEK * 2 + LUNAR_BUFFER
  ) {
    return lunarPhases.full;
  } else if (age < LUNAR_WEEK * 3 - LUNAR_BUFFER) {
    return lunarPhases.waningGibbous;
  } else if (
    age >= LUNAR_WEEK * 3 - LUNAR_BUFFER &&
    age <= LUNAR_WEEK * 3 + LUNAR_BUFFER
  ) {
    return lunarPhases.lastQuarter;
  } else if (age < LUNAR_MONTH - LUNAR_BUFFER) {
    return lunarPhases.waningCrescent;
  }
  return lunarPhases.new;
}

/**
 * @param date {Date} The date to get the lunar phase for.
 * @param lang {String} The language to get the name of the phase in.
 * @returns {IExturnalPhase} The lunar phase for the given date.
 */
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> feat: added express and a few other things
function getLunarPhase(date: Date = new Date(), lang = "en"): IExturnalPhase {
  const phase = createLunarPhase(date);
  switch (lang) {
    case "de":
      return {
        name: phase.name.de,
        symbol: phase.symbol,
        description: phase.description.de,
      };
    case "es":
      return {
        name: phase.name.es,
        symbol: phase.symbol,
        description: phase.description.es,
      };
    case "fr":
      return {
        name: phase.name.fr,
        symbol: phase.symbol,
        description: phase.description.fr,
      };
    case "ja":
      return {
        name: phase.name.ja,
        symbol: phase.symbol,
        description: phase.description.ja,
      };
    case "zh":
      return {
        name: phase.name.zh,
        symbol: phase.symbol,
        description: phase.description.zh,
      };
    case "en":
    default:
      return {
        name: phase.name.en,
        symbol: phase.symbol,
        description: phase.description.en,
      };
  }
<<<<<<< HEAD
=======
function getLunarPhase(date: Date = new Date(), lang:String = "en"): IExturnalPhase {
  const phase = createLunarPhase(date);

  // TODO: switch language on lang usage
  let responsePhase: IExturnalPhase = {
    name: phase.name.en,
    description: phase.description.en,
    symbol: phase.symbol,
  };

  return responsePhase;
>>>>>>> fix: added accurate tests and tweeks
=======
>>>>>>> feat: added express and a few other things
}

export {
  lunarPhases,
  rareLunarPhases,
  getLunarAge,
  getLunarAgePercent,
  getJulianDate,
  normalize,
  getLunarPhase,
  createLunarPhase,
  IExturnalPhase,
};
