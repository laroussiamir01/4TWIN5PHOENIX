package com.example.evenementms.Service;

import com.example.evenementms.Entity.Evenement;
import com.example.evenementms.Repository.EvenementRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.persistence.EntityNotFoundException;
import java.util.Date;
import java.util.List;
import java.util.Properties;

@Service
@AllArgsConstructor
public class EvenementServiceImpl implements IEvenementService{
    EvenementRepository evenementRepository;
    @Override
    public Evenement addEvenement(Evenement evenement) {

        Evenement savedEvenement = evenementRepository.save(evenement);
      //  sendEmail(savedEvenement);
        return savedEvenement;

    }


    @Override
    public Evenement getEvenement(long idEvenement) {
        return evenementRepository.findById(idEvenement).orElse(null);
    }

    @Override
    public List<Evenement> getAllEvenements() {
        return evenementRepository.findAll();
    }

    @Override
    public void deleteEvenement(long idEvenement) {
        evenementRepository.deleteById(idEvenement);
    }

    @Override
    public Evenement updateEvenement(Evenement evenement) {
        Evenement evenement1= evenementRepository.findById(evenement.getIdEvenement()).orElseThrow(() -> new EntityNotFoundException("No Bloc with id " + evenement.getIdEvenement() + " was found!"));
        if (evenement1!=null){
            evenementRepository.save(evenement);}
        return evenement1;
    }

    @Override
    public List<Evenement> findByDateFinBefore(Date endDate) {
        return evenementRepository.findByDateFinBefore(endDate);

    }

    @Override
    public long countByDateFinBefore(Date endDate) {
        return evenementRepository.countByDateFinBefore(endDate);
    }

    @Override
    public Evenement getEvenementByTitre(String titre) {
        return evenementRepository.findByTitre(titre);
    }

    @Override
    public void deleteExpiredEvents() {
return;
    }




    private void sendEmail(Evenement evenement) {
        // Sender's email information
        String senderEmail = "amir.laroussi@esprit.tn";
        String senderPassword = "aney avyr jedz ogti";

        // Recipient's email address
        String recipientEmail = "amirlaroussi99544029@gmail.com";

        // Email subject
        String subject = "New Event Added";

        // Email body
        String body = "A new event has been added get ready:\n\n" +
                "Event Title: " + evenement.getTitre() + "\n" +
                "Event Description: " + evenement.getDescription() + "\n" +
                "Event Starting Date : " + evenement.getDateDebut() + "\n" +
                "Event Ending Date: " + evenement.getDateFin() + "\n" +
                "Event Space Available: " + evenement.getPlaceDisponible() + "\n";

        // SMTP server configuration
        String host = "smtp.gmail.com";
        int port = 587;

        // Create properties object for the SMTP server
        Properties properties = new Properties();
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", port);

        // Create a session with the SMTP server
        Session session = Session.getInstance(properties, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(senderEmail, senderPassword);
            }
        });

        try {
            // Create a MimeMessage object
            MimeMessage message = new MimeMessage(session);

            // Set the sender address
            message.setFrom(new InternetAddress(senderEmail));

            // Set the recipient address
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(recipientEmail));

            // Set the subject
            message.setSubject(subject);

            // Set the body
            message.setText(body);

            // Send the email
            Transport.send(message);

            System.out.println("Email sent successfully.");
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }



}
