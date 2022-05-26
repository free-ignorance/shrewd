const LUNAR_MONTH = 29.530588853;
const LUNAR_WEEK = 7.38264721325;
const JULIAN_DATE = 2451550.1;
const JULIAN_UNIX_TIME = 2440587.5;
const LUNAR_BUFFER = 3.38631919932; // roughly 1 day in lunar percentages

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
      end: LUNAR_BUFFER,
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
      start: LUNAR_BUFFER,
      end: 25 - LUNAR_BUFFER,
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
      start: 25 - LUNAR_BUFFER,
      end: 25 + LUNAR_BUFFER,
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
      start: 25 + LUNAR_BUFFER,
      end: 50 - LUNAR_BUFFER,
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
      start: 50 - LUNAR_BUFFER,
      end: 50 + LUNAR_BUFFER,
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
      start: 50 + LUNAR_BUFFER,
      end: 75 - LUNAR_BUFFER,
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
      start: 75 - LUNAR_BUFFER,
      end: 75 + LUNAR_BUFFER,
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
      start: 75 + LUNAR_BUFFER,
      end: 100 - LUNAR_BUFFER,
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

/**
 * We start by getting the Julian date called a "lunar month".
 * This time between two identical syzygies is around 29.530588853 days.
 * then using the time at which unix epoch started we can calculate the number of cycles from current date.
 * @param {Date} date the current or desired date to calculate the lunar phase for
 * @returns {number} the number of lunar cycles since the unix epoch
 */
function getJulianDate(date: Date = new Date()): number {
  const time = date.getTime();
  const tzoffset = date.getTimezoneOffset();

  return time / 86400000 - tzoffset / 1440 + JULIAN_UNIX_TIME;
}

/**
 * This will get the current age in the lunar cycle for a specified date.
 * @param date the current or desired date to calculate the lunar age for
 * @returns {number} the age of the lunar cycle passed in days
 */
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
  const percent = getLunarAgePercent(date) * 100;
  if (
    percent >= lunarPhases.new.range.start &&
    percent <= lunarPhases.new.range.end
  ) {
    return lunarPhases.new;
  } else if (
    percent >= lunarPhases.waxingCrescent.range.start &&
    percent <= lunarPhases.waxingCrescent.range.end
  ) {
    return lunarPhases.waxingCrescent;
  } else if (
    percent >= lunarPhases.firstQuarter.range.start &&
    percent <= lunarPhases.firstQuarter.range.end
  ) {
    return lunarPhases.firstQuarter;
  } else if (
    percent >= lunarPhases.waxingGibbous.range.start &&
    percent <= lunarPhases.waxingGibbous.range.end
  ) {
    return lunarPhases.waxingGibbous;
  } else if (
    percent >= lunarPhases.full.range.start &&
    percent <= lunarPhases.full.range.end
  ) {
    return lunarPhases.full;
  } else if (
    percent >= lunarPhases.waningGibbous.range.start &&
    percent <= lunarPhases.waningGibbous.range.end
  ) {
    return lunarPhases.waningGibbous;
  } else if (
    percent >= lunarPhases.lastQuarter.range.start &&
    percent <= lunarPhases.lastQuarter.range.end
  ) {
    return lunarPhases.lastQuarter;
  } else if (
    percent >= lunarPhases.waningCrescent.range.start &&
    percent <= lunarPhases.waningCrescent.range.end
  ) {
    return lunarPhases.waningCrescent;
  }
  return lunarPhases.new;
}

/**
 * @param date {Date} The date to get the lunar phase for.
 * @param lang {String} The language to get the name of the phase in.
 * @returns {IExturnalPhase} The lunar phase for the given date.
 */
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
