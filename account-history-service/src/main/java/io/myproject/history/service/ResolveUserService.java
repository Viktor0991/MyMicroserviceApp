package io.myproject.history.service;

import io.myproject.history.model.AccountEvent;
import org.springframework.boot.autoconfigure.security.oauth2.resource.ResourceServerProperties;
import org.springframework.boot.autoconfigure.security.oauth2.resource.UserInfoRestTemplateFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Objects;

@Service
public class ResolveUserService {
    private final UserInfoRestTemplateFactory restTemplateFactory;
    private final ResourceServerProperties resource;

    public ResolveUserService(UserInfoRestTemplateFactory restTemplateFactory, ResourceServerProperties resource) {
        this.restTemplateFactory = restTemplateFactory;
        this.resource = resource;
    }

    public Long resolveUserId() {
        RestTemplate restTemplate = restTemplateFactory.getUserInfoRestTemplate();
        ResponseEntity<AccountEvent> response = restTemplate.getForEntity(resource.getUserInfoUri(), AccountEvent.class);
        AccountEvent accountEvent = response.getBody();
        return Objects.requireNonNull(accountEvent).getUserId();
    }
}