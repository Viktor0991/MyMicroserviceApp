package io.myproject.history.controller;

import io.myproject.history.model.AccountEvent;
import io.myproject.history.service.AccountEventService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("history")
public class AccountHistoryController {
    private final AccountEventService historyService;

    public AccountHistoryController(AccountEventService historyService) {
        this.historyService = historyService;
    }

    @GetMapping("/account/{id}")
    public List<List<AccountEvent>> retrieveAccountHistory(@PathVariable("id") Long accountId) {
        List<List<AccountEvent>> accountEvents = new ArrayList<>();
         accountEvents.add(historyService.findAllAccountEvents(accountId));
        return accountEvents;
    }
}