package ru.morcheck.testtask.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.transaction.annotation.Transactional;
import ru.morcheck.testtask.domain.User;
import ru.morcheck.testtask.repositories.UserRepository;

/**
 * Project: testtask
 * Created by Sergej Shestopalov on 21.02.2019.
 */
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserRepository userRepository;

    @Autowired
    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional(readOnly = true)
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByUsername(username);
        org.springframework.security.core.userdetails.User.UserBuilder builder;
        if (user != null) {
            builder = org.springframework.security.core.userdetails.User.withUsername(username);
            builder.disabled(!user.isEnabled());
            builder.password(user.getPassword());
            builder.authorities("ROLE_ADMIN");
        } else {
            throw new UsernameNotFoundException("User not found.");
        }
        return builder.build();
    }
}
