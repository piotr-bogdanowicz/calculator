import { priceMockup } from "./mocks/service-year-price-mock";
import { CalculatedPrice } from "./types/calculated-price";
import { canAddService, findDependentServicesToRemove, getDependentServiceConfigurationsForDependentService, getDependentServiceConfigurationsForParentService } from "./types/dependent-service-configuration";
import { Discount, getDiscountsForSelection } from "./types/discount";
import { ServiceType } from "./types/service-type";
import { ServiceYear } from "./types/service-year";

export const updateSelectedServices = (
    previouslySelectedServices: ServiceType[],
    action: { type: "Select" | "Deselect"; service: ServiceType }
): ServiceType[] => {
    switch (action.type) {
        case "Select":
            return selectService(previouslySelectedServices, action.service);
        case "Deselect":
            return deselectService(previouslySelectedServices, action.service);
    }
}

const selectService = (previouslySelectedServices: ServiceType[], service: ServiceType): ServiceType[] => {
    const index = previouslySelectedServices.indexOf(service);

    if (index !== -1) {
        return previouslySelectedServices;
    }

    if (canAddService(previouslySelectedServices, service)) {
        previouslySelectedServices.push(service);
    }

    return previouslySelectedServices;
} 

const deselectService = (previouslySelectedServices: ServiceType[], service: ServiceType): ServiceType[] => {
    const dependentServiceTypesToRemove = findDependentServicesToRemove(previouslySelectedServices, service);

    dependentServiceTypesToRemove.forEach((serviceToRemove) =>{
        const index = previouslySelectedServices.indexOf(serviceToRemove);
        if (index !== -1) {
            previouslySelectedServices.splice(index, 1);
        }
    });

    return previouslySelectedServices.filter((x: ServiceType) => x != service);
}

export const calculatePrice = (selectedServices: ServiceType[], selectedYear: ServiceYear) : CalculatedPrice => {
    

    if (selectedServices.length === 0)
    {
        return { basePrice: 0, finalPrice: 0 };
    }

    const availableDiscounts = getDiscountsForSelection(selectedServices, selectedYear);

    const [basePrice, finalPrice] = selectedServices
        .map(service => getPriceForService(service, selectedYear, availableDiscounts))
        .reduce(([basePriceSum, finalPriceSum], [basePrice, finalPrice]) => [basePriceSum + basePrice, finalPriceSum + finalPrice], [0, 0]);

    return { basePrice: basePrice, finalPrice: finalPrice };
};

const getPriceForService = (service: ServiceType, year: ServiceYear, availableDiscounts: Discount[]) : [number, number] => {
    const basePrice = priceMockup[year][service];

    const relevantDiscounts = availableDiscounts.filter(discount => discount.discountedService === service);
    const relevantPrices = relevantDiscounts.sort((a, b) => a.discountedPrice - b.discountedPrice);

    const finalPrice = relevantPrices.length > 0 ? relevantPrices[0].discountedPrice : basePrice;

    return [basePrice, finalPrice];
    
}