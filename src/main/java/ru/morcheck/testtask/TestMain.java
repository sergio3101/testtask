package ru.morcheck.testtask;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * Project: testtask
 * Created by Sergej Shestopalov on 22.02.2019.
 */
public class TestMain {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(11);
        System.out.println(encoder.encode("DarwiN1"));
    }
}
