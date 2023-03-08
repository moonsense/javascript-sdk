
/**
 * The configuration object used to initialize a Moonsense Client
 */
export interface ClientConfig {
    /**
     * API secret token generated from the Moonsense Cloud web console
     */
	secretToken: string

	/**
     * Root API domain (defaults to moonsense.cloud)
     */
	rootDomain?: string

	/**
     * Protocol to use when connecting to the API (defaults to https)
     */
	protocol?: string

	/**
     * Default Moonsense Cloud Data Plane region to connect to
     */
	defaultRegion?: string
}