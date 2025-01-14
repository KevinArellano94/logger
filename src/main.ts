

export class Logger {
    private log(level: string, message: string) {
        console.log(JSON.stringify({
            level: level,
            message: message,
            timestamp: new Date().toUTCString(),
        }));
    }

    public info(message: string) {
        return this.log("info", message);
    }

    public error(message: string) {
        return this.log("error", message);
    }

    public warn(message: string) {
        return this.log("warn", message);
    }

    public debug(message: string) {
        return this.log("debug", message);
    }
}

const logger = new Logger();
export default logger;
