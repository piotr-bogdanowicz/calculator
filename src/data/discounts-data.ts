import { Discount } from "../types/discount";
import { ServiceTypeNames } from "../enums/service-type-names";

export const discountsData : Discount[] = [
    // Photography + wedding session
    { year: 2020, baseService: ServiceTypeNames.Photography, discountedService: ServiceTypeNames.WeddingSession, discountedPrice: 300 },
    { year: 2021, baseService: ServiceTypeNames.Photography, discountedService: ServiceTypeNames.WeddingSession, discountedPrice: 300 },
    { year: 2022, baseService: ServiceTypeNames.Photography, discountedService: ServiceTypeNames.WeddingSession, discountedPrice: 300 },

    // Video + wedding session
    { year: 2020, baseService: ServiceTypeNames.VideoRecording, discountedService: ServiceTypeNames.WeddingSession, discountedPrice: 300 },
    { year: 2021, baseService: ServiceTypeNames.VideoRecording, discountedService: ServiceTypeNames.WeddingSession, discountedPrice: 300 },
    { year: 2022, baseService: ServiceTypeNames.VideoRecording, discountedService: ServiceTypeNames.WeddingSession, discountedPrice: 300 },
    
    // Photography + wedding session
    { year: 2022, baseService: ServiceTypeNames.Photography, discountedService: ServiceTypeNames.WeddingSession, discountedPrice: 0 },

    // Photography + video recording
    { year: 2020, baseService: ServiceTypeNames.Photography, discountedService: ServiceTypeNames.VideoRecording, discountedPrice: 500 },
    { year: 2021, baseService: ServiceTypeNames.Photography, discountedService: ServiceTypeNames.VideoRecording, discountedPrice: 500 },
    { year: 2022, baseService: ServiceTypeNames.Photography, discountedService: ServiceTypeNames.VideoRecording, discountedPrice: 600 },
];