package finance;

public class Main {
    public static void main(String[] args) {
        int forecastYears = 5;
        double startingAmount = 10000;
        double annualRate = 0.08;

        double predictedAmount = FinancialForecast.calculateGrowth(forecastYears, startingAmount, annualRate);

        System.out.println("Projected balance after " + forecastYears + " years: ₹" + String.format("%.2f", predictedAmount));
    }
}
