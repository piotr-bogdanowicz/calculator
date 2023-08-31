import { ServiceType } from "./types/service-type";
import { ServiceYear } from "./types/service-year";

export const updateSelectedServices = (
    previouslySelectedServices: ServiceType[],
    action: { type: "Select" | "Deselect"; service: ServiceType }
) : ServiceType[] => {
    switch (action.type) {
        case "Select":
            const index = previouslySelectedServices.indexOf(action.service);

            if (index == -1) {
                previouslySelectedServices.push(action.service);
            }

            return previouslySelectedServices;
        case "Deselect":
            return previouslySelectedServices.filter(x => x != action.service);
    }
}

export const calculatePrice = (selectedServices: ServiceType[], selectedYear: ServiceYear) : { basePrice: number, finalPrice: number } => {
    return { basePrice: 0, finalPrice: 0 };
};