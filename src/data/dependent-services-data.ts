import { ServiceTypeNames } from "../enums/service-type-names";

export type DependentService = { parentService: ServiceTypeNames, dependentService: ServiceTypeNames};

export const dependentServicesData: DependentService[] = [
    { parentService: ServiceTypeNames.VideoRecording, dependentService: ServiceTypeNames.BlurayPackage},
    { parentService: ServiceTypeNames.Photography, dependentService: ServiceTypeNames.TwoDayEvent},
    { parentService: ServiceTypeNames.VideoRecording, dependentService: ServiceTypeNames.TwoDayEvent},
]