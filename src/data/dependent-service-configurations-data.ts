import { DependentServiceConfiguration } from "../types/dependent-service-configuration";
import { ServiceTypeNames } from "../enums/service-type-names";

export const dependentServiceConfigurationsData: DependentServiceConfiguration[] = [
    { parentServices: [ServiceTypeNames.VideoRecording], requiresAllParents: false, dependentService: ServiceTypeNames.BlurayPackage},
    { parentServices: [ServiceTypeNames.Photography, ServiceTypeNames.VideoRecording], requiresAllParents: false, dependentService: ServiceTypeNames.TwoDayEvent},
];