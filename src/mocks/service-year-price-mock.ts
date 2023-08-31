import { ServiceTypeNames } from "../types/service-type-names";
import { ServiceYearPrices } from "../types/service-year-prices";

const priceMockup : ServiceYearPrices = {
    2020: { 
        [ServiceTypeNames.photography]: 1700,
        [ServiceTypeNames.videoRecording]: 1700,
        [ServiceTypeNames.twoDayEvent]: 400,
        [ServiceTypeNames.weddingSession]: 600,
        [ServiceTypeNames.blurayPackage]: 300,
    },
    2021: { 
        [ServiceTypeNames.photography]: 1800,
        [ServiceTypeNames.videoRecording]: 1800,
        [ServiceTypeNames.twoDayEvent]: 400,
        [ServiceTypeNames.weddingSession]: 600,
        [ServiceTypeNames.blurayPackage]: 300,
    },
    2022: {
        [ServiceTypeNames.photography]: 1900,
        [ServiceTypeNames.videoRecording]: 1900,
        [ServiceTypeNames.twoDayEvent]: 400,
        [ServiceTypeNames.weddingSession]: 600,
        [ServiceTypeNames.blurayPackage]: 300,
    }
};