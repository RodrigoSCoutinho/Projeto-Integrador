package br.com.diassindicoprofissional.backend_java;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import br.com.diassindicoprofissional.backend_java.entities.Condominios;
import br.com.diassindicoprofissional.backend_java.services.Condominio.CondominioServiceImpl;

@SpringBootTest
@ActiveProfiles("test")
public class CondominioApplicationTests {

    @Autowired
    private CondominioServiceImpl condominioService;

    @Test
    public void testSalvarCondominio() {
        Condominios condominio = new Condominios();
        condominio.setNome("Condominio Teste");
        condominio.setEndereco("Rua Teste, 123");
        condominio.setQuantidadeBlocos(5);

        Condominios savedCondominio = condominioService.salvar(condominio);
        assertNotNull(savedCondominio);
        assertNotNull(savedCondominio.getId());
    }

    @Test
    public void testListarTodos() {
        List<Condominios> condominios = condominioService.listarTodos();
        assertNotNull(condominios);
        assertTrue(condominios.size() > 0);
    }

    @Test
    public void testBuscarPorId() {
        Condominios condominio = condominioService.buscarPorId(1L);
        assertNotNull(condominio);
    }

    @Test
    public void testDeletar() {
        condominioService.deletar(1L);
        assertTrue(condominioService.listarTodos().isEmpty());
    }

    @Test
    public void testBuscarPorNome() {
        List<Condominios> condominios = condominioService.buscarPorNome("Teste");
        assertNotNull(condominios);
        assertTrue(condominios.size() > 0);
    }
}
