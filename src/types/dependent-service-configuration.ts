import { dependentServiceConfigurationsData } from "../data/dependent-service-configurations-data";
import { ServiceType } from "./service-type";

export type DependentServiceConfiguration = { parentServices: ServiceType[], requiresAllParents: boolean, dependentService: ServiceType};

export const getDependentServiceConfigurationsForDependentService = (dependentServiceType: ServiceType): DependentServiceConfiguration[]  => {
    return dependentServiceConfigurationsData.filter(configuration => configuration.dependentService === dependentServiceType);
};

export const getDependentServiceConfigurationsForParentService = (parentServiceType: ServiceType): DependentServiceConfiguration[]  => {
    return dependentServiceConfigurationsData.filter(configuration => configuration.parentServices.includes(parentServiceType));
};

export const canAddService = (selectedServices: ServiceType[], service: ServiceType): boolean => {
    const dependentServiceConfigurations = getDependentServiceConfigurationsForDependentService(service);

    for (const configuration of dependentServiceConfigurations) {
        const hasPrerequisites = configuration.parentServices.filter(service => selectedServices.includes(service)).length > 0;
        if (!hasPrerequisites) {
            return false;
        }
    }

    return true;
};

export const findDependentServicesToRemove = (selectedServices: ServiceType[], service: ServiceType): ServiceType[] => {
    const dependentServiceConfigurations = getDependentServiceConfigurationsForParentService(service);

    const dependentServiceTypesToRemove: ServiceType[] = [];
    for (const configuration of dependentServiceConfigurations) {
        const isDependentServiceStillValid = configuration.parentServices.some(parentService => parentService !== service && selectedServices.includes(parentService));
        if (!isDependentServiceStillValid && !dependentServiceTypesToRemove.includes(service)) {
            dependentServiceTypesToRemove.push(configuration.dependentService);
        }
    }
    return dependentServiceTypesToRemove;
}
