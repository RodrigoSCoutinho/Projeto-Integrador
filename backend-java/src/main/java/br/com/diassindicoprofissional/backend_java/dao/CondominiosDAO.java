package br.com.diassindicoprofissional.backend_java.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.diassindicoprofissional.backend_java.entities.Condominios;

import java.util.List;
import java.util.Optional;

public interface CondominiosDAO extends JpaRepository<Condominios, Long> {

    Optional<Condominios> findById(Long id);

    List<Condominios> findByNomeContaining(String nome);
}
