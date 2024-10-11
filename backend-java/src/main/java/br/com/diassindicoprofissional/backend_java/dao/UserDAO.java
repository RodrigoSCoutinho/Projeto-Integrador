package br.com.diassindicoprofissional.backend_java.dao;

import br.com.diassindicoprofissional.backend_java.entities.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface UserDAO extends CrudRepository<Usuario, Long> {
    public Usuario findByLogin(String login);
}
