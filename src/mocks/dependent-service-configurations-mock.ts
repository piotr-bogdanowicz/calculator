import { DependentServiceConfiguration } from "../types/dependent-service-configuration";
import { ServiceTypeNames } from "../types/service-type-names";

export const dependentServiceConfigurationsMock: DependentServiceConfiguration[] = [
    { parentServices: [ServiceTypeNames.videoRecording], requiresAllParents: false, dependentService: ServiceTypeNames.blurayPackage},
    { parentServices: [ServiceTypeNames.photography, ServiceTypeNames.videoRecording], requiresAllParents: false, dependentService: ServiceTypeNames.twoDayEvent},
];