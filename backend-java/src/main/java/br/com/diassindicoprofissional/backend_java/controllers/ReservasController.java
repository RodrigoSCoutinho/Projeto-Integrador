package br.com.diassindicoprofissional.backend_java.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import br.com.diassindicoprofissional.backend_java.entities.Reservas;
import br.com.diassindicoprofissional.backend_java.services.Reservas.IReservasService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ReservasController {

    @Autowired
    private IReservasService service;

    @PostMapping("/reservas")
    public ResponseEntity<Reservas> criarReserva(@RequestBody Reservas reservas) {
        Reservas res = service.salvarReservas(reservas);
        if (res != null) {
            return ResponseEntity.ok(res);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/reservas")
    public ResponseEntity<List<Reservas>> listarTodasReservas() {
        List<Reservas> res = service.listarReservas();
        if (res != null) {
            return ResponseEntity.ok(res);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/reservas/{id}")
    public ResponseEntity<Reservas> buscarPorId(@PathVariable Integer id) {
        Reservas res = service.buscarReservasPorId(id);
        if (res != null) {
            return ResponseEntity.ok(res);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}/aprovar")
    public Reservas aprovarReserva(@PathVariable Long id) {
        return service.aprovarReserva(id);
    }

    @PutMapping("/{id}/recusar")
    public Reservas recusarReserva(@PathVariable Long id) {
        return service.recusarReserva(id);
    }

}
