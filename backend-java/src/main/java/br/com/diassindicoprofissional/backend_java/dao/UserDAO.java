package br.com.diassindicoprofissional.backend_java.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.diassindicoprofissional.backend_java.entities.User;

public interface UserDAO extends JpaRepository<User, Long> {
    <Optional> User findByEmail(String email);

}
