package io.myproject.history.repository;

import io.myproject.history.model.AccountEvent;
import io.myproject.history.model.EventKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountEventRepository extends JpaRepository<AccountEvent, EventKey> {
    List<AccountEvent> findAllByAccountIdAndUserIdOrderByCreatedDesc(Long accountId, Long userId);
}