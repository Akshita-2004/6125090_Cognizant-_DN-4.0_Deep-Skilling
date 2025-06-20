public class Main {
    public static void main(String[] args) {
        Logger auditLogger = Logger.getInstance();
        auditLogger.log("User logged in.");

        Logger errorLogger = Logger.getInstance();
        errorLogger.log("Error: Null pointer exception occurred.");

        if (auditLogger == errorLogger) {
            System.out.println("Singleton Verified: Same logger instance used across modules.");
        } else {
            System.out.println("Different instances created! Singleton pattern failed.");
        }
    }
}
