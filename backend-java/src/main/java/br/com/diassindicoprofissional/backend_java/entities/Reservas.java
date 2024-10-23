package br.com.diassindicoprofissional.backend_java.entities;

import java.time.LocalDate;

import br.com.diassindicoprofissional.backend_java.enumerated.AreaComum;
import br.com.diassindicoprofissional.backend_java.enumerated.Status;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_reservas")
public class Reservas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private AreaComum area;

    @Column(name = "nome_morador", nullable = false)
    private String morador;

    @Column(nullable = false)
    private LocalDate data;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status = Status.PENDENTE;

    public Reservas() {
    }

    public Reservas(Long id, String morador, LocalDate data) {
        this.id = id;
        this.morador = morador;
        this.data = data;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AreaComum getArea() {
        return area;
    }

    public void setArea(AreaComum area) {
        this.area = area;
    }

    public String getMorador() {
        return morador;
    }

    public void setMorador(String morador) {
        this.morador = morador;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Reservas [data=" + data + ", id=" + id + ", morador=" + morador + "]";
    }
}
