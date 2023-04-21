package io.myproject.history.service;

import io.myproject.history.model.AccountEvent;
import io.myproject.history.repository.AccountEventRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountEventService {
    private final AccountEventRepository repository;
    private final ResolveUserService userService;

    public AccountEventService(AccountEventRepository repository, ResolveUserService userService) {
        this.repository = repository;
        this.userService = userService;
    }

    public List<AccountEvent> findAllAccountEvents(Long accountId) {
        Long userId = userService.resolveUserId();
        return repository.findAllByAccountIdAndUserIdOrderByCreatedDesc(accountId, userId);
    }
}