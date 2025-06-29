package com.example;

import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = mock(ExternalApi.class);     // Create mock
        MyService service = new MyService(mockApi);        // Inject mock
        service.fetchData();                               // Call method
        verify(mockApi).getData();                         // Verify call
    }
}
