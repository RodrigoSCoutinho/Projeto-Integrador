package br.com.diassindicoprofissional.backend_java.entities;

import java.math.BigDecimal;
import java.time.LocalDate;

import br.com.diassindicoprofissional.backend_java.enumerated.CategoriaDespesa;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_despesas")
public class Despesas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "descricao", length = 100, nullable = false)
    private String descricao;

    @Column(name = "valor", nullable = false)
    private BigDecimal valor;

    @Column(name = "data", nullable = false)
    private LocalDate data;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CategoriaDespesa categoria;

    public Despesas() {
    }

    public Despesas(Long id, String descricao, BigDecimal valor, LocalDate data, CategoriaDespesa categoria) {
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
        this.data = data;
        this.categoria = categoria;
    }

    public Long getId() {
        return id;
    }

    public String getDescricao() {
        return descricao;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public LocalDate getData() {
        return data;
    }

    public CategoriaDespesa getCategoria() {
        return categoria;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }
}
