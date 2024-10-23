package br.com.diassindicoprofissional.backend_java.dao;

import java.util.List;
import java.time.LocalDate;

import org.springframework.data.repository.CrudRepository;

import br.com.diassindicoprofissional.backend_java.entities.Reservas;

public interface ReservasDAO extends CrudRepository<Reservas, Long> {
    public Reservas findByData(LocalDate data);

    public Reservas findById(long id);

    public List<Reservas> findAll();
}
