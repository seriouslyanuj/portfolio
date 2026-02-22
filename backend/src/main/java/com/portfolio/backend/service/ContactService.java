package com.portfolio.backend.service;

import com.portfolio.backend.model.ContactRequest;
import com.portfolio.backend.model.ContactResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private static final Logger logger = LoggerFactory.getLogger(ContactService.class);

    @Autowired(required = false)
    private JavaMailSender mailSender;

    @Value("${mail.recipient.email:admin@example.com}")
    private String recipientEmail;

    public ContactResponse processContactForm(ContactRequest request) {
        logger.info("Processing contact form from: {}", request.getEmail());

        ContactResponse response = new ContactResponse();

        try {
            if (mailSender != null) {
                sendEmail(request);
                response.setSuccess(true);
                response.setMessage("Thank you! Your message has been sent successfully.");
                logger.info("Email sent successfully from: {}", request.getEmail());
            } else {
                logger.warn("Mail sender not configured. Logging contact request instead.");
                logger.info("Contact Request - Name: {}, Email: {}, Message: {}",
                        request.getName(), request.getEmail(), request.getMessage());
                response.setSuccess(true);
                response.setMessage("Thank you! Your message has been received. We will get back to you soon.");
            }
        } catch (Exception e) {
            logger.error("Failed to process contact form", e);
            response.setSuccess(false);
            response.setMessage("Sorry, there was an error processing your request. Please try again later.");
        }

        return response;
    }

    private void sendEmail(ContactRequest request) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(recipientEmail);
        message.setSubject("Portfolio Contact: " + request.getName());
        message.setText(
            "Name: " + request.getName() + "\n" +
            "Email: " + request.getEmail() + "\n\n" +
            "Message:\n" + request.getMessage()
        );
        message.setReplyTo(request.getEmail());
        mailSender.send(message);
    }
}
