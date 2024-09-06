package br.com.diassindicoprofissional.backend_java.services.User;

import br.com.diassindicoprofissional.backend_java.entities.Usuario;
import br.com.diassindicoprofissional.backend_java.security.SalutarToken;

public interface IAuthService {
    public Usuario criarUsuario(Usuario novo);

    public SalutarToken realizarLogin(Usuario dadosLogin);
}
