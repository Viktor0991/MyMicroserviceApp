package io.myproject.history.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.myproject.history.model.AccountEvent;
import io.myproject.history.repository.AccountEventRepository;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class AccountEventKafkaListener {
    private final AccountEventRepository repository;
    private final ObjectMapper mapper = new ObjectMapper();

    @Autowired
    public AccountEventKafkaListener(AccountEventRepository repository) {
        this.repository = repository;
    }

    @KafkaListener(topics = "account-events")
    public void consumeEvent(ConsumerRecord<Long, String> record) {
        AccountEvent evt;
        String value = record.value();
        try {
            evt = mapper.readValue(value, AccountEvent.class);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        repository.save(evt);
    }
}