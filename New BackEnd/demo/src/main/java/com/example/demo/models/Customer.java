package com.example.demo.models;
import com.example.demo.embedded.Person;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    private String email;
    private String phone;
    @Embedded
    private Person generaleInfo;
    @OneToMany(mappedBy = "customer")
    private List<Construction> constructions;
    @ManyToOne
    private Company company;
}
