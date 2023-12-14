package com.example.foyer;

import com.example.foyer.entity.Foyer;
import com.example.foyer.repository.FoyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class FoyerApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoyerApplication.class, args);
	}
	@Autowired
	private FoyerRepository repository;
	@Bean
	ApplicationRunner init() {
		return (args) -> {
// save
			repository.save(new Foyer(1, "Ch", 1));
// fetch
			repository.findAll().forEach(System.out::println);
		};
	}
}

