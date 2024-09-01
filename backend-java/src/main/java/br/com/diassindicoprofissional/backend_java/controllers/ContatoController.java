package br.com.diassindicoprofissional.backend_java.controllers;

import org.springframework.beans.factory.annotation.Autowired;
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
    public String enviarContato(@RequestBody Contato contato) {
        contatoService.salvarContato(contato);
        return "Contato salvo com sucesso!";
    }
}
