package ru.morcheck.testtask.ui.controllers;

import lombok.extern.log4j.Log4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import ru.morcheck.testtask.domain.User;
import ru.morcheck.testtask.repositories.UserRepository;

import java.util.List;

/**
 * Project: testtask
 * Created by Sergej Shestopalov on 18.02.2019.
 */
@Log4j
@Controller
@RequestMapping(value = "/admin")
public class AdminRootController {
    private UserRepository userRepository;

    public AdminRootController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping(value = "/users.html", method = RequestMethod.GET)
    public ModelAndView usersPage() {
        ModelAndView modelAndView = new ModelAndView("admin/users");
        List<User> tList = userRepository.findAll();
        modelAndView.addObject("userList", tList);
        return modelAndView;
    }

    @RequestMapping(value = "/staticUsers.html", method = RequestMethod.GET)
    public ModelAndView staticUsersPage() {
        ModelAndView modelAndView = new ModelAndView("admin/staticusers");
        List<User> tList = userRepository.findAll();
        modelAndView.addObject("userList", tList);
        return modelAndView;
    }
}
