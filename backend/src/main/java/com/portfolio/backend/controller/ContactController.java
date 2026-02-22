package com.portfolio.backend.controller;

import com.portfolio.backend.model.ContactRequest;
import com.portfolio.backend.model.ContactResponse;
import com.portfolio.backend.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/contact")
    public ResponseEntity<ContactResponse> sendMessage(
            @Valid @RequestBody ContactRequest request) {
        ContactResponse response = contactService.processContactForm(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Portfolio Backend is running!");
    }
}
