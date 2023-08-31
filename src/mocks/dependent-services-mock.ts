import { ServiceTypeNames } from "../types/service-type-names";

export type DependentService = { parentService: ServiceTypeNames, dependentService: ServiceTypeNames};

export const dependentServicesMock: DependentService[] = [
    { parentService: ServiceTypeNames.videoRecording, dependentService: ServiceTypeNames.blurayPackage},
    { parentService: ServiceTypeNames.photography, dependentService: ServiceTypeNames.twoDayEvent},
    { parentService: ServiceTypeNames.videoRecording, dependentService: ServiceTypeNames.twoDayEvent},
]