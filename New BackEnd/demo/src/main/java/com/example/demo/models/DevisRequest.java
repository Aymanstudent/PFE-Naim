package com.example.demo.models;
import com.example.demo.embedded.PotentialCustomer;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
@Table(name = "devisRequest")
public class DevisRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Embedded
    private PotentialCustomer Potential_customer;
    private String location;
    private String post_code;
    private String building_type;
    private Integer available_area;
    private String roof_type;
    private Boolean electricity_access;
    private Float consumption;
    private String status;
    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
    @JsonIdentityReference(alwaysAsId=true)
    @ManyToOne
    private Company company;
}
