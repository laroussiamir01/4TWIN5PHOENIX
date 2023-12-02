package com.example.evenementms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class EvenementMsApplication {

    public static void main(String[] args) {
        SpringApplication.run(EvenementMsApplication.class, args);
    }

}
