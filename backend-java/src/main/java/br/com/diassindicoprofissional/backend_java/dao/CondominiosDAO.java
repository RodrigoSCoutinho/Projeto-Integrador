package br.com.diassindicoprofissional.backend_java.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.diassindicoprofissional.backend_java.entities.Condominios;
import br.com.diassindicoprofissional.backend_java.entities.Apartamentos;
import java.util.List;

public interface CondominiosDAO extends JpaRepository<Condominios, Long> {
    List<Apartamentos> findByCondominioId(Long condominioId);

    List<Apartamentos> findByBloco(String bloco);

    List<Condominios> findByNomeContaining(String nome);
}
