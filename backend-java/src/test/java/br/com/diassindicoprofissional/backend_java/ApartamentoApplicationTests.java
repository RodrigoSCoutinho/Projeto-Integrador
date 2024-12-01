package br.com.diassindicoprofissional.backend_java;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import br.com.diassindicoprofissional.backend_java.services.Apartamento.IApartamentoService;

@SpringBootTest
@ActiveProfiles("test")
public class ApartamentoApplicationTests {
    @Autowired
    private IApartamentoService iApartamentoService;

    @Test
    public void shouldCreateApartamento() {

    }

    @Test
    public void shouldListAllApartamentos() {

    }

    @Test
    public void shouldFindApartamentoById() {

    }
}
