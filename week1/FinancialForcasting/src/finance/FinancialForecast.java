package finance;

public class FinancialForecast {

    public static double calculateGrowth(int duration, double principal, double rate) {
        return (duration == 0) ? principal : calculateGrowth(duration - 1, principal, rate) * (1 + rate);
    }
}
