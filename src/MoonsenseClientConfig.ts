
/**
 * The configuration object used to initialize a Moonsense Client. Values
 * not provided will be read from the environment if possible. If not
 * provided in the environment, the default values will be used.
 */
export interface MoonsenseClientConfig {
    /**
     * API secret token generated from the Moonsense Cloud web console.
     * 
     * This value can also be provided via the MOONSENSE_SECRET_TOKEN environment variable.
     */
	secretToken: string

	/**
     * Root API domain (defaults to moonsense.cloud)
     * 
     * This value can also be provided via the MOONSENSE_ROOT_DOMAIN environment variable.
     */
	rootDomain?: string

	/**
     * Protocol to use when connecting to the API (defaults to https)
     * 
     * This value can also be provided via the MOONSENSE_PROTOCOL environment variable.
     */
	protocol?: string

	/**
     * Default Moonsense Cloud Data Plane region to connect to
     * 
     * This value can also be provided via the MOONSENSE_DEFAULT_REGION environment variable.
     */
	defaultRegion?: string
}