package com.example.demo.models;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Table(name = "requestContactor")
@Entity
public class ContactorRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String message;
    private String companyName;
    private String companyAddress;
}
