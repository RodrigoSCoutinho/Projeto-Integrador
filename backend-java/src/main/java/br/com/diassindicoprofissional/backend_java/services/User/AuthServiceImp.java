package br.com.diassindicoprofissional.backend_java.services.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import br.com.diassindicoprofissional.backend_java.dao.UserDAO;
import br.com.diassindicoprofissional.backend_java.entities.Usuario;
import br.com.diassindicoprofissional.backend_java.security.SalutarToken;
import br.com.diassindicoprofissional.backend_java.security.TokenUtil;

@Component
public class AuthServiceImp implements IAuthService {

    @Autowired
    private UserDAO dao;

    @Override
    public Usuario criarUsuario(Usuario novo) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(10);
        String novaSenha = encoder.encode(novo.getSenha()); // Quando o usuário é criado, a senha é criptografada
        novo.setSenha(novaSenha); // A senha criptografada é setada no usuário

        return dao.save(novo); // O usuário é salvo no banco de dados
    }

    @Override
    public SalutarToken realizarLogin(Usuario dadosLogin) {
        Usuario res = dao.findByLogin(dadosLogin.getLogin());
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(10);
        if (res != null) {
            if (encoder.matches(dadosLogin.getSenha(), res.getSenha())) {
                return TokenUtil.encode(res); // *Retornando o Token */
            }
        }
        return null;
    }
}
