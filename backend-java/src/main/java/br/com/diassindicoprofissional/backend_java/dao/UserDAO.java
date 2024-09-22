package br.com.diassindicoprofissional.backend_java.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.diassindicoprofissional.backend_java.entities.Usuario;

public interface UserDAO extends JpaRepository<Usuario, Long> {
    public Usuario findByLogin(String login);
}
