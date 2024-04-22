package com.example.demo.token;


import com.example.demo.models.User;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Token {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String token;
    private LocalDateTime creeA;
    private LocalDateTime expireeA;
    private LocalDateTime valideeA;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    private User user;
}
