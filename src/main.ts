/**
 * @fileOverview Logging functionality to be used universally following standards with minimal configuration needed.
 * @author Kevin Arellano
 * @license MIT
 * @version 1.0.0
 * @module Logging
 */

/**
 * Handles options of logging
 * @class Logger
 *
 * @remarks
 * This service prints into the console an object of:
 * - type of level
 * - message passed through
 * - UTC timestamp
 *
 * @example
 * ```ts
 * logger.info();
 * ```
 */
export class Logger {
    /**
     * Prints directly to the console
     * @param {string} level - .info, .warn, .error
     * @param {string} message
     */
    private log(level: string, message: string): void {
        console.log(JSON.stringify({
            level: level,
            message: message,
            timestamp: new Date().toUTCString(),
        }));
    }

    /**
     * Is used when wanting to specify any type of information
     * @param message
     */
    public info(message: string): void {
        return this.log("info", message);
    }

    /**
     * When wanting to specify an error
     * @param message
     */
    public error(message: string): void {
        return this.log("error", message);
    }

    /**
     * When wanting to specify an output that needs to be looked at but is not critical
     * @param message
     */
    public warn(message: string): void {
        return this.log("warn", message);
    }

    /**
     * Miscellaneous or debugging usage
     * @param message
     */
    public debug(message: string): void {
        return this.log("debug", message);
    }
}

// Singleton instance for application-wide logging
const logger = new Logger();
export default logger;
