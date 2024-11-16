package br.com.diassindicoprofissional.backend_java.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import br.com.diassindicoprofissional.backend_java.entities.Condominios;
import br.com.diassindicoprofissional.backend_java.services.Condominio.ICondominioService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CondominioController {

    @Autowired
    private ICondominioService condominioService;

    @PostMapping
    public ResponseEntity<Condominios> criar(@RequestBody Condominios condominio) {
        Condominios novoCondominio = condominioService.salvar(condominio);
        return new ResponseEntity<>(novoCondominio, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Condominios>> listarTodos() {
        return ResponseEntity.ok(condominioService.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Condominios> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(condominioService.buscarPorId(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Condominios> atualizar(@PathVariable Long id, @RequestBody Condominios condominio) {
        condominio.setId(id);
        return ResponseEntity.ok(condominioService.salvar(condominio));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        condominioService.deletar(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/busca")
    public ResponseEntity<List<Condominios>> buscarPorNome(@RequestParam String nome) {
        return ResponseEntity.ok(condominioService.buscarPorNome(nome));
    }
}
