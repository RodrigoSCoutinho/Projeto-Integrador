package br.com.diassindicoprofissional.backend_java.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import br.com.diassindicoprofissional.backend_java.entities.Despesas;
import br.com.diassindicoprofissional.backend_java.services.Despesas.IDespesasService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DespesasController {

    @Autowired
    private IDespesasService service;

    @PostMapping("/despesas")
    public ResponseEntity<Despesas> criarDespesa(@RequestBody Despesas despesas) {
        Despesas res = service.salvarDespesas(despesas);
        if (res != null) {
            return ResponseEntity.ok(res);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/despesas")
    public ResponseEntity<List<Despesas>> listarTodasAsDespesas() {
        List<Despesas> res = service.listarDespesas();
        if (res != null) {
            return ResponseEntity.ok(res);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/despesas/{id}")
    public ResponseEntity<Despesas> buscarDespesaPorId(@PathVariable Integer id) {
        Despesas res = service.buscarDespesaPorId(id);
        if (res != null) {
            return ResponseEntity.ok(res);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    // * Criar funcionalidade */

    // @DeleteMapping("/despesas/{id}")
    // public ResponseEntity<Void> delete(@PathVariable Integer id) {
    // service.deletarDespesa(id);
    // return ResponseEntity.noContent().build();
    // }

}
