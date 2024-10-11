package br.com.diassindicoprofissional.backend_java.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.diassindicoprofissional.backend_java.entities.Usuario;
import br.com.diassindicoprofissional.backend_java.security.SalutarToken;
import br.com.diassindicoprofissional.backend_java.services.User.IAuthService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    private IAuthService service;

    @PostMapping("/usuarios")
    public ResponseEntity<Usuario> adicionarNovo(@RequestBody Usuario novo) {
        System.out.println("Dados recebidos: " + novo);
        Usuario res = service.criarUsuario(novo);
        if (res != null) {
            return ResponseEntity.ok(res);
        }
            return ResponseEntity.badRequest().build();
    }

    @PostMapping("/login")
    public ResponseEntity<SalutarToken> efetuarLogin(@RequestBody Usuario dadosLogin) {
        System.out.println("Dados recebidos: " + dadosLogin);
        SalutarToken token = service.realizarLogin(dadosLogin);
        if (token != null) {
            return ResponseEntity.ok(token);
        }
        return ResponseEntity.badRequest().build();
    }
}