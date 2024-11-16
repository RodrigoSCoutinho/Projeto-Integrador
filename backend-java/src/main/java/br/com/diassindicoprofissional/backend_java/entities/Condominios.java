package br.com.diassindicoprofissional.backend_java.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "condominios")
public class Condominios {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String endereco;

    @Column(name = "qtd_blocos")
    private Integer quantidadeBlocos;

    @OneToMany(mappedBy = "condominio", cascade = CascadeType.ALL)
    private List<Apartamentos> apartamentos = new ArrayList<>();

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public Integer getQuantidadeBlocos() {
        return quantidadeBlocos;
    }

    public void setQuantidadeBlocos(Integer quantidadeBlocos) {
        this.quantidadeBlocos = quantidadeBlocos;
    }

    public List<Apartamentos> getApartamentos() {
        return apartamentos;
    }

    public void setApartamentos(List<Apartamentos> apartamentos) {
        this.apartamentos = apartamentos;
    }
}
