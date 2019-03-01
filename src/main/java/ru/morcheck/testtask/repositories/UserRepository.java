package ru.morcheck.testtask.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.morcheck.testtask.domain.User;

import java.util.List;

/**
 * Project: testtask
 * Created by Sergej Shestopalov on 18.02.2019.
 */

public interface UserRepository extends JpaRepository<User,Long> {
    User findUserByUsername(String username);
}
