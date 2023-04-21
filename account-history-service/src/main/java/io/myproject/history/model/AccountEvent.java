package io.myproject.history.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.expression.Operation;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@IdClass(EventKey.class)
@Setter
@Getter
public class AccountEvent {
    @Id
    @Column(name = "uid", nullable = false)
    private String uuid;

    @Id
    @Column(name = "account_id", nullable = false)
    private Long accountId;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "from_account")
    private Long fromAccount;

    @Column(name = "currency_code", length = 3, nullable = false)
    private String currency;

    @Column(name = "operation_code", nullable = false)
    private Operation operation;

    @Column(name = "amount", nullable = false)
    private BigDecimal amount;

    @Column(name = "created", nullable = false)
    private Date created;
}