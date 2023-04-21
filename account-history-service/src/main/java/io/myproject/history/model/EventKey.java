package io.myproject.history.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Getter
@Setter
public class EventKey implements Serializable {
    private Long accountId;
    private String uuid;
}
