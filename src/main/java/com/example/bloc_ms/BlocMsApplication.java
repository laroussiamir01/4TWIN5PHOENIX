package com.example.bloc_ms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@SpringBootApplication
@EnableEurekaClient

public class BlocMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlocMsApplication.class, args);
	}

}
