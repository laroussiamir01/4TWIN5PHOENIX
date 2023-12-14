package com.example.chambre;

import com.example.chambre.entity.Chambre;
import com.example.chambre.repository.ChambreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ChambreApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChambreApplication.class, args);
	}
	@Autowired
	private ChambreRepository repository;
	@Bean
	ApplicationRunner init() {
		return (args) -> {
// save
			repository.save(new Chambre(1, "Ch11", 15, "c"));
			repository.save(new Chambre(2, "Ch12", 16, "b"));
// fetch
			repository.findAll().forEach(System.out::println);
		};
	}
}

