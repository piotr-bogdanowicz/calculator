import { Discount } from "../types/discount";
import { ServiceTypeNames } from "../types/service-type-names";

export const discountsMock : Discount[] = [
    // Photography + wedding session
    { year: 2020, baseService: ServiceTypeNames.photography, discountedService: ServiceTypeNames.weddingSession, discountedPrice: 300 },
    { year: 2021, baseService: ServiceTypeNames.photography, discountedService: ServiceTypeNames.weddingSession, discountedPrice: 300 },
    { year: 2022, baseService: ServiceTypeNames.photography, discountedService: ServiceTypeNames.weddingSession, discountedPrice: 300 },

    // Video + wedding session
    { year: 2020, baseService: ServiceTypeNames.videoRecording, discountedService: ServiceTypeNames.weddingSession, discountedPrice: 300 },
    { year: 2021, baseService: ServiceTypeNames.videoRecording, discountedService: ServiceTypeNames.weddingSession, discountedPrice: 300 },
    { year: 2022, baseService: ServiceTypeNames.videoRecording, discountedService: ServiceTypeNames.weddingSession, discountedPrice: 300 },
    
    // Photography + wedding session
    { year: 2022, baseService: ServiceTypeNames.photography, discountedService: ServiceTypeNames.weddingSession, discountedPrice: 0 },

    // Photography + video recording
    { year: 2020, baseService: ServiceTypeNames.photography, discountedService: ServiceTypeNames.videoRecording, discountedPrice: 500 },
    { year: 2021, baseService: ServiceTypeNames.photography, discountedService: ServiceTypeNames.videoRecording, discountedPrice: 500 },
    { year: 2022, baseService: ServiceTypeNames.photography, discountedService: ServiceTypeNames.videoRecording, discountedPrice: 600 },
];