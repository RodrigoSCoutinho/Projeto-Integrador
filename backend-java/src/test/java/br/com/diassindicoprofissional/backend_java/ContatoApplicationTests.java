package br.com.diassindicoprofissional.backend_java;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import br.com.diassindicoprofissional.backend_java.entities.Contato;
import br.com.diassindicoprofissional.backend_java.services.Contato.IContatoService;

@SpringBootTest
@ActiveProfiles("test")
class ContatoApplicationTests {

    @Autowired
    private IContatoService service;

    @Test
    public void shouldCreateContato() {
        Contato contato = new Contato();
        contato.setName("Rodrigo Coutinho");
        contato.setPhone("123456789");
        contato.setEmail("rodrigo@example.com");
        contato.setMessage("Gostaria de mais informações sobre os serviços do dias sindico profissional.");

        Contato res = service.salvarContato(contato);
        assertNotNull(res);
        assertNotNull(res.getId());
    }

    @Test
    public void shouldListAllContatos() {
        List<Contato> contatos = service.buscarContatos();
        assertNotNull(contatos);
        assertTrue(contatos.size() >= 0);
    }

    @Test
    public void shouldFindContatoById() {
        Contato contato = new Contato();
        contato.setName("Maria Oliveira");
        contato.setPhone("987654321");
        contato.setEmail("maria@example.com");
        contato.setMessage("Preciso de assistência técnica no condominio XXX.");

        Contato savedContato = service.salvarContato(contato);
        Contato foundContato = service.buscarContatoPorId(savedContato.getId());

        assertNotNull(foundContato);
        assertTrue(foundContato.getId().equals(savedContato.getId()));
    }
}
