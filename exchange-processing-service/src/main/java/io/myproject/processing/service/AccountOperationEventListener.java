package io.myproject.processing.service;

import io.myproject.processing.model.AccountEvent;
import org.springframework.stereotype.Service;
import org.springframework.transaction.event.TransactionalEventListener;

@Service
public class AccountOperationEventListener {

    private final AccountEventSendingService sendingService;

    public AccountOperationEventListener(AccountEventSendingService sendingService) {
        this.sendingService = sendingService;
    }

    @TransactionalEventListener
    public void handleEvent(AccountEvent evt){
        sendingService.sendEvent(evt);
    }
}
