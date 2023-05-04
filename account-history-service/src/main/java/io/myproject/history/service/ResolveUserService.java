package io.myproject.history.service;

import org.json.JSONObject;
import org.springframework.boot.autoconfigure.security.oauth2.resource.ResourceServerProperties;
import org.springframework.boot.autoconfigure.security.oauth2.resource.UserInfoRestTemplateFactory;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

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
        ResponseEntity<String> response = restTemplate.getForEntity(resource.getUserInfoUri(), String.class);
        JSONObject principal = new JSONObject(response.getBody());
        JSONObject userId = principal.getJSONObject("principal");
        return userId.getLong("userId");
    }
}