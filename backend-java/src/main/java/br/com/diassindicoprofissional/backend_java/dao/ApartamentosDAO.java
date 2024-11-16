package br.com.diassindicoprofissional.backend_java.dao;

import br.com.diassindicoprofissional.backend_java.entities.Condominios;
import br.com.diassindicoprofissional.backend_java.entities.Apartamentos;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApartamentosDAO extends JpaRepository<Apartamentos, Long> {

    List<Condominios> findByNomeContaining(String nome);

    List<Apartamentos> findByCondominioId(Long condominioId);
}