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
@CrossOrigin(origins = "http://127.0.0.1:5501")
@RequestMapping("/api/v1/")
public class AuthController {

    @Autowired
    private IAuthService service;

    @PostMapping("/usuarios")
    public ResponseEntity<Usuario> adicionarNovo(@RequestBody Usuario novo) {
        System.out.println("Dados recebidos: " + novo);
        Usuario res = service.criarUsuario(novo);
        if (res != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(res);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping("/login")
    public ResponseEntity<SalutarToken> login(@RequestBody Usuario dadosLogin) {
        SalutarToken token = service.realizarLogin(dadosLogin);
        if (token != null) {
            return ResponseEntity.status(HttpStatus.OK).body(token);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}