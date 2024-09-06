package br.com.diassindicoprofissional.backend_java.services.User;

import java.util.Optional;

import br.com.diassindicoprofissional.backend_java.entities.User;

public interface IUserService {
    User registerUser(String email, String password);

    boolean loginUser(String email, String password);

    Optional<User> findByEmail(String email);

    boolean checkPassword(String rawPassword, String encodedPassword);
}
