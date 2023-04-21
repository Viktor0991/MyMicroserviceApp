package io.myproject.processing.controller;

import io.myproject.processing.dto.ExchangeMoneyDTO;
import io.myproject.processing.dto.NewAccountDTO;
import io.myproject.processing.dto.PutAccountMoneyDTO;
import io.myproject.processing.model.AccountEntity;
import io.myproject.processing.model.Operation;
import io.myproject.processing.service.AccountService;
import io.myproject.processing.service.ExchangeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("processing")
@RequiredArgsConstructor
public class ProcessingController {
    private final AccountService accountService;

    private final ExchangeService exchangeService;

    @PostMapping("/account")
    public AccountEntity createAccount(@RequestBody NewAccountDTO account) {
        return accountService.createNewAccount(account);
    }

    @PutMapping("/account/{id}")
    public AccountEntity putMoney(@PathVariable("id") Long accountId, @RequestBody PutAccountMoneyDTO data) {
        return accountService.addMoneyToAccount(data.getUid(), accountId, null, Operation.PUT, data.getMoney());
    }

    @PutMapping("/exchange/{uid}")
    public BigDecimal exchange(@PathVariable("uid") String uid, @RequestBody ExchangeMoneyDTO data) {
        return exchangeService.exchangeCurrency(uid, data.getFromAccountId(), data.getToAccountId(), data.getMoney());
    }

    @GetMapping("/accounts")
    public List<AccountEntity> getAllAccount() {
        return accountService.getAllAccount();
    }
}
