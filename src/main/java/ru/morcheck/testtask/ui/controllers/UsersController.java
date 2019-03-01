package ru.morcheck.testtask.ui.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.morcheck.testtask.domain.User;
import ru.morcheck.testtask.repositories.UserRepository;

import java.util.Collection;

/**
 * Created by sergey on 23.02.2019.
 */
@RestController
public class UsersController {
    private final UserRepository userRepository;

    @Autowired
    public UsersController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @CrossOrigin
    @RequestMapping("/getusers")
    public Collection<User> getUsers() {
        return userRepository.findAll();
    }

}
