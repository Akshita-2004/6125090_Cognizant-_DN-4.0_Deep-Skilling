package ecommerce;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(102, "Laptop", "Electronics"),
            new Product(56, "Shoes", "Fashion"),
            new Product(78, "Watch", "Accessories"),
            new Product(23, "Phone", "Electronics")
        };

        // Perform linear search for 56 (will work even on unsorted array)
        int index1 = SearchUtility.linearSearch(products, 56);
        System.out.println("Linear Search Index: " + index1);

        // Perform binary search on UNSORTED array (will fail or return wrong result)
        int index2 = SearchUtility.binarySearch(products, 56);
        System.out.println("Binary Search Index: " + index2 + " (Note: incorrect due to unsorted data)");
    }
}
