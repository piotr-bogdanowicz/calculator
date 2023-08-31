import { ServiceTypeNames } from "../enums/service-type-names";
import { ServiceYearPrices } from "../types/service-year-prices";

export const pricesData : ServiceYearPrices = {
    2020: { 
        [ServiceTypeNames.Photography]: 1700,
        [ServiceTypeNames.VideoRecording]: 1700,
        [ServiceTypeNames.TwoDayEvent]: 400,
        [ServiceTypeNames.WeddingSession]: 600,
        [ServiceTypeNames.BlurayPackage]: 300,
    },
    2021: { 
        [ServiceTypeNames.Photography]: 1800,
        [ServiceTypeNames.VideoRecording]: 1800,
        [ServiceTypeNames.TwoDayEvent]: 400,
        [ServiceTypeNames.WeddingSession]: 600,
        [ServiceTypeNames.BlurayPackage]: 300,
    },
    2022: {
        [ServiceTypeNames.Photography]: 1900,
        [ServiceTypeNames.VideoRecording]: 1900,
        [ServiceTypeNames.TwoDayEvent]: 400,
        [ServiceTypeNames.WeddingSession]: 600,
        [ServiceTypeNames.BlurayPackage]: 300,
    }
};