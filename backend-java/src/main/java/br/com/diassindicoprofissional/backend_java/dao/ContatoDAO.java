package br.com.diassindicoprofissional.backend_java.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.diassindicoprofissional.backend_java.entities.Contato;

public interface ContatoDAO extends JpaRepository<Contato, Long> {
    public Contato findById(Integer id);
}
