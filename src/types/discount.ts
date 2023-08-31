import { discountsMock } from "../mocks/discounts-mock";
import { ServiceType } from "./service-type";
import { ServiceYear } from "./service-year";

export type Discount = { year: ServiceYear, baseService: ServiceType | null, discountedService: ServiceType, discountedPrice: number };

export const getDiscountsForSelection = (services: ServiceType[], serviceYear: ServiceYear) : Discount[] => {

    return discountsMock.filter(discount => discount.year == serviceYear
        && (discount.baseService === null || services.includes(discount.baseService))
        && services.includes(discount.discountedService));
};