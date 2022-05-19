import {
	getLunarPhase,
	IExturnalPhase
} from '../../src/models/lunar';

describe('Lunar', () => {
	describe('getLunarPhase', () => {
		const lastQuarterDate = new Date('May 22, 2022 15:43:00');
		const newMoonDate = new Date('May 30, 2022 07:24:00');
		const waningCrescentDate = new Date('May 25, 2022 07:24:00');

		it('getLunarPhase should return the correct New Moon Phase for Test Phase 1', () => {
			const expectedResponse:IExturnalPhase = {
				"description": "The Moon is new and full of energy.",
				"name": "New Moon",
				"symbol": "🌑",
			};

			expect(getLunarPhase(newMoonDate)).toEqual(expectedResponse);
		});
		it('getLunarPhase should return the correct Last Quarter Phase for Test Phase 1', () => {
			const expectedResponse:IExturnalPhase = {
				"description": "The Moon is waning and the energy is decreasing.",
				"name": "Last Quarter",
				"symbol": "🌗",
			};

			expect(getLunarPhase(lastQuarterDate)).toEqual(expectedResponse);
		});
		it('getLunarPhase should return the correct Waning Crescent Phase for Test Phase 1', () => {
			const expectedResponse:IExturnalPhase = {
				"description": "The Moon is waning and the energy is decreasing.",
				"name": "Waning Crescent",
				"symbol": "🌘",
			};

			expect(getLunarPhase(waningCrescentDate)).toEqual(expectedResponse);
		});
	});
});