package br.com.diassindicoprofissional.backend_java.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.diassindicoprofissional.backend_java.entities.Contato;
import br.com.diassindicoprofissional.backend_java.services.IContatoService;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/contato")
public class ContatoController {

    @Autowired
    private IContatoService contatoService;

    @PostMapping("/enviar")
    public ResponseEntity<Contato> enviarContato(@RequestBody Contato contato) {
        try {
            Contato res = contatoService.salvarContato(contato);
            if (res != null) {
                return ResponseEntity.ok(res);
            }
        } catch (Exception ex) {
            System.out.println("Erro ao cadastrar contato" + ex.getMessage());
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/contatos")
    public ResponseEntity<List<Contato>> buscarContatos() {
        try {
            List<Contato> res = contatoService.buscarContatos();
            if (res != null) {
                return ResponseEntity.ok(res);
            }
        } catch (Exception ex) {
            System.out.println("Erro ao buscar contatos" + ex.getMessage());
        }
        return ResponseEntity.badRequest().build();
    }

}
