export class MissingPriceConfigurationError extends Error {
    public constructor(message: string | null = null) {
        super(message ?? 'Prices for selected service are not defined in the specified year.');
        this.name = 'MissingPriceConfigurationError';
    }
} 