import {
	getLunarPhase,
	lunarPhases,
	IExturnalPhase
} from '../../src/models/lunar';

describe('Lunar', () => {
	describe('getLunarPhase - Phase Test 1', () => {
		describe('en - english', () => {
			// testing a month from 2021 as a lunar case example
			const newMoonStartDate = new Date('January 13, 2021 07:24:00');
			const waxingCrescentDate = new Date('January 16, 2021 07:24:00');
			const firstQuarterDate = new Date('January 20, 2021 07:24:00');
			const waxingGibbousDate = new Date('January 24, 2021 07:24:00');
			const fullMoonDate = new Date('January 28, 2021 07:24:00');
			const waningGibbousDate = new Date('January 31, 2021 07:24:00');
			const lastQuarterDate = new Date('February 4, 2021 15:43:00');
			const waningCrescentDate = new Date('February 7, 2021 07:24:00');
			const newMoonEndDate = new Date('February 11, 2021 07:24:00');

			it('[🌑] New Moon Check - should return the correct New Moon Phase for Test Phase 1', () => {
				const expectedResponse:IExturnalPhase = {
					"description": 	lunarPhases.new.description.en,
					"name": lunarPhases.new.name.en,
					"symbol": lunarPhases.new.symbol,
				};

				expect(getLunarPhase(newMoonStartDate, "en")).toEqual(expectedResponse);
			});

			it('[🌒] Waxing Crescent Check - should return the correct Waxing Crescent Phase for Test Phase 1', () => {
				const expectedResponse:IExturnalPhase = {
					"description": 	lunarPhases.waxingCrescent.description.en,
					"name": lunarPhases.waxingCrescent.name.en,
					"symbol": lunarPhases.waxingCrescent.symbol,
				};

				expect(getLunarPhase(waxingCrescentDate, "en")).toEqual(expectedResponse);
			});

			it('[🌓] First Quarter Check - should return the correct First Quarter Phase for Test Phase 1', () => {
				const expectedResponse:IExturnalPhase = {
					"description": 	lunarPhases.firstQuarter.description.en,
					"name": lunarPhases.firstQuarter.name.en,
					"symbol": lunarPhases.firstQuarter.symbol,
				};

				expect(getLunarPhase(firstQuarterDate, "en")).toEqual(expectedResponse);
			});

			it('[🌔] Waxing Gibbous Check - should return the correct Waxing Gibbous Phase for Test Phase 1', () => {
				const expectedResponse:IExturnalPhase = {
					"description": 	lunarPhases.waxingGibbous.description.en,
					"name": lunarPhases.waxingGibbous.name.en,
					"symbol": lunarPhases.waxingGibbous.symbol,
				};

				expect(getLunarPhase(waxingGibbousDate, "en")).toEqual(expectedResponse);
			});

			it('[🌕] Full Moon Check - should return the correct Full Moon Phase for Test Phase 1', () => {
				const expectedResponse:IExturnalPhase = {
					"description": 	lunarPhases.full.description.en,
					"name": lunarPhases.full.name.en,
					"symbol": lunarPhases.full.symbol,
				};

				expect(getLunarPhase(fullMoonDate, "en")).toEqual(expectedResponse);
			});

			it('[🌖] Waning Gibbous Check - should return the correct Waning Gibbous Phase for Test Phase 1', () => {
				const expectedResponse:IExturnalPhase = {
					"description": 	lunarPhases.waningGibbous.description.en,
					"name": lunarPhases.waningGibbous.name.en,
					"symbol": lunarPhases.waningGibbous.symbol,
				};

				expect(getLunarPhase(waningGibbousDate, "en")).toEqual(expectedResponse);
			});

			it('[🌗] Last Quarter Check - should return the correct Last Quarter Phase for Test Phase 1', () => {
				const expectedResponse:IExturnalPhase = {
					"description": 	lunarPhases.lastQuarter.description.en,
					"name": lunarPhases.lastQuarter.name.en,
					"symbol": lunarPhases.lastQuarter.symbol,
				};

				expect(getLunarPhase(lastQuarterDate, "en")).toEqual(expectedResponse);
			});

			it('[🌘] Waning Crescent Check - should return the correct Waning Crescent Phase for Test Phase 1', () => {
				const expectedResponse:IExturnalPhase = {
					"description": 	lunarPhases.waningCrescent.description.en,
					"name": lunarPhases.waningCrescent.name.en,
					"symbol": lunarPhases.waningCrescent.symbol,
				};

				expect(getLunarPhase(waningCrescentDate, "en")).toEqual(expectedResponse);
			});

			it('[🌑] New Moon Check - should return the correct New Moon Phase for Test Phase 2', () => {
				const expectedResponse:IExturnalPhase = {
					"description": 	lunarPhases.new.description.en,
					"name": lunarPhases.new.name.en,
					"symbol": lunarPhases.new.symbol,
				};

				expect(getLunarPhase(newMoonEndDate, "en")).toEqual(expectedResponse);
			});
		});
	});
});