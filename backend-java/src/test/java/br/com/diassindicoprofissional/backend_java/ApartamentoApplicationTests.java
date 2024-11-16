package br.com.diassindicoprofissional.backend_java;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import br.com.diassindicoprofissional.backend_java.entities.Apartamentos;
import br.com.diassindicoprofissional.backend_java.services.Apartamento.IApartamentoService;

@SpringBootTest
@ActiveProfiles("test")
public class ApartamentoApplicationTests {
    @Autowired
    private IApartamentoService service;

    @Test
    public void shouldCreateApartamento() {
        Apartamentos apartamento = new Apartamentos();
        apartamento.setNumero("101");
        apartamento.setBloco("A");

        Apartamentos res = service.salvar(apartamento);
        assertNotNull(res);
        assertNotNull(res.getId());
    }

    @Test
    public void shouldListAllApartamentos() {
        List<Apartamentos> apartamentos = service.listarTodos();
        assertNotNull(apartamentos);
        assertTrue(apartamentos.size() >= 0);
    }

    @Test
    public void shouldFindApartamentoById() {
        Apartamentos apartamento = new Apartamentos();
        apartamento.setNumero("202");
        apartamento.setBloco("B");

        Apartamentos savedApartamento = service.salvar(apartamento);
        Apartamentos foundApartamento = service.buscarPorId(savedApartamento.getId());

        assertNotNull(foundApartamento);
        assertTrue(foundApartamento.getId().equals(savedApartamento.getId()));
    }
}
