package com.example.evenementms.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Evenement implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idEvenement;
    String titre;
    String description;
    @JsonFormat(pattern = "yyyy-MM-dd")
    Date dateDebut;
    @JsonFormat(pattern = "yyyy-MM-dd")
    Date dateFin;
    long placeDisponible;
    boolean hasParticipated;
}
