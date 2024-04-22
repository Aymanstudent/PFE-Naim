package com.example.demo.models;


import ch.qos.logback.core.net.server.Client;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "company")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String address;
    private String contact;
    @OneToOne(mappedBy = "company")
    private Contactor contactor;
    @OneToMany(mappedBy = "company")
    private List<Worker> workers;
    @OneToMany(mappedBy = "company")
    private List<Devis> devisList;
    @OneToMany(mappedBy = "company")
    private List<DevisRequest> devisRequestList;
    @OneToMany(mappedBy = "company")
    private List<SolarPanel> SolarePanelList;
    @OneToMany(mappedBy = "company")
    private List<Meter> meterList;
    @OneToMany(mappedBy = "company")
    private List<SystemFixing> systemFixingList;
    @OneToMany(mappedBy = "company")
    private List<Inverter> inverterList;
    @OneToMany(mappedBy = "company")
    private List<Supplier> supplierList;
    @OneToMany(mappedBy = "company")
    private List<Battery> batteryList;
    @OneToMany(mappedBy = "company")
    private List<Cable> cableList;
    @OneToMany(mappedBy = "company")
    private List<Customer> customerList;
    @OneToMany(mappedBy = "company")
    private List<Activity> activityList;
    @OneToMany(mappedBy = "company")
    private List<Construction> constructionList;
}
