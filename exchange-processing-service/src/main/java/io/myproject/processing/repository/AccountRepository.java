package io.myproject.processing.repository;

import io.myproject.processing.model.AccountEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AccountRepository extends CrudRepository<AccountEntity, Long> {
    List<AccountEntity> findByUserId(Long userId);
}
