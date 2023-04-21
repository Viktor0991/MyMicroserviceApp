package io.myproject.history.config;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudConfig {

    @Bean
    public RestTemplateBuilder restTemplate() {
        return new RestTemplateBuilder();
    }
}