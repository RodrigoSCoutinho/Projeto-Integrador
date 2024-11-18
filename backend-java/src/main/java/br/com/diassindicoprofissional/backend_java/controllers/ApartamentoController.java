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

    @PostMapping("/apartamentos")
    public ResponseEntity<Apartamentos> salvarApartamentos(@RequestBody Apartamentos apartamento) {
        Apartamentos res = apartamentoService.salvarApartamentos(apartamento);
        if (res != null) {
            return ResponseEntity.ok(res);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

        }
    }

    @GetMapping("/apartamentos")
    public ResponseEntity<List<Apartamentos>> listarTodos() {
        return ResponseEntity.ok(apartamentoService.listarTodos());
    }

    @GetMapping("/apartamentos/{id}")
    public ResponseEntity<Apartamentos> buscarPorId(@PathVariable Long id) {
        Apartamentos res = apartamentoService.buscarPorId(id);
        if (res != null) {
            return ResponseEntity.ok(res);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/apartamentos/{id}")
    public ResponseEntity<Apartamentos> atualizar(@PathVariable Long id, @RequestBody Apartamentos apartamento) {
        apartamento.setId(id);
        Apartamentos res = apartamentoService.salvarApartamentos(apartamento);
        if (res != null) {
            return ResponseEntity.ok(res);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

        }
    }

    @DeleteMapping("/apartamentos/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        Apartamentos res = apartamentoService.buscarPorId(id);
        if (res != null) {
            apartamentoService.deletar(res.getId());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/condominio/{condominioId}")
    public ResponseEntity<List<Apartamentos>> listarPorCondominio(@PathVariable Long condominioId) {
        return ResponseEntity.ok(apartamentoService.listarPorCondominio(condominioId));
    }
}