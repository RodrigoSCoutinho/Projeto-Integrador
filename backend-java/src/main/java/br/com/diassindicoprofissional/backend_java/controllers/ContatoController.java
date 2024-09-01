package br.com.diassindicoprofissional.backend_java.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.diassindicoprofissional.backend_java.entities.Contato;
import br.com.diassindicoprofissional.backend_java.services.IContatoService;

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
}
