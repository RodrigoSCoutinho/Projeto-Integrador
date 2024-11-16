package br.com.diassindicoprofissional.backend_java.controllers;

import org.springframework.web.bind.annotation.RestController;

import br.com.diassindicoprofissional.backend_java.services.Apartamento.IApartamentoService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.util.List;
import br.com.diassindicoprofissional.backend_java.entities.Apartamentos;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ApartamentoController {

    @Autowired
    private IApartamentoService apartamentoService;

    @PostMapping("/apartamento")
    public ResponseEntity<Apartamentos> criar(@RequestBody Apartamentos apartamento) {
        Apartamentos novoApartamento = apartamentoService.salvar(apartamento);
        return new ResponseEntity<>(novoApartamento, HttpStatus.CREATED);
    }

    @GetMapping("/apartamento")
    public ResponseEntity<List<Apartamentos>> listarTodos() {
        return ResponseEntity.ok(apartamentoService.listarTodos());
    }

    @GetMapping("/{id}/apartamento")
    public ResponseEntity<Apartamentos> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(apartamentoService.buscarPorId(id));
    }

    @PutMapping("/{id}/apartamento")
    public ResponseEntity<Apartamentos> atualizar(@PathVariable Long id, @RequestBody Apartamentos apartamento) {
        apartamento.setId(id);
        return ResponseEntity.ok(apartamentoService.salvar(apartamento));
    }

    @DeleteMapping("/{id}/apartamento")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        apartamentoService.deletar(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/condominio/{condominioId}")
    public ResponseEntity<List<Apartamentos>> listarPorCondominio(@PathVariable Long condominioId) {
        return ResponseEntity.ok(apartamentoService.listarPorCondominio(condominioId));
    }
}