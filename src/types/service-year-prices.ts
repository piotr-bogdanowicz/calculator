import { ServiceTypePrice } from "./service-type-price";
import { ServiceYear } from "./service-year";

export type ServiceYearPrices = { [key in ServiceYear ]: ServiceTypePrice };