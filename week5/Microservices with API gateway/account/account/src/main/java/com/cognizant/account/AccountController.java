package com.cognizant.account;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @GetMapping("/{number}")
    public Map<String, Object> getAccount(@PathVariable String number) {
        Map<String, Object> acc = new HashMap<>();
        acc.put("number", number);
        acc.put("type", "savings");
        acc.put("balance", 234343);
        return acc;
    }
}
