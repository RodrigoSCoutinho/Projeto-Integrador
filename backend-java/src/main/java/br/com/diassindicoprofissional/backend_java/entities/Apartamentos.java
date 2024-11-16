package br.com.diassindicoprofissional.backend_java.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import jakarta.persistence.Table;

@Entity
@Table(name = "apartamentos")
public class Apartamentos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String numero;

    @Column(nullable = false)
    private String bloco;

    @Column
    private Integer andar;

    @Column(name = "metro_quadrado")
    private Double metroQuadrado;

    @ManyToOne
    @JoinColumn(name = "condominio_id", nullable = false)
    private Condominios condominio;

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getBloco() {
        return bloco;
    }

    public void setBloco(String bloco) {
        this.bloco = bloco;
    }

    public Integer getAndar() {
        return andar;
    }

    public void setAndar(Integer andar) {
        this.andar = andar;
    }

    public Double getMetroQuadrado() {
        return metroQuadrado;
    }

    public void setMetroQuadrado(Double metroQuadrado) {
        this.metroQuadrado = metroQuadrado;
    }

    public Condominios getCondominios() {
        return condominio;
    }

    public void setCondominios(Condominios condominio) {
        this.condominio = condominio;
    }

}
