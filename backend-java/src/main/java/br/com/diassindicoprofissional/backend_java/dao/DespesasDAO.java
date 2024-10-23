package br.com.diassindicoprofissional.backend_java.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.diassindicoprofissional.backend_java.entities.Despesas;

public interface DespesasDAO extends CrudRepository<Despesas, Long> {
    public Despesas findById(long id);

    public List<Despesas> findAll();
}
