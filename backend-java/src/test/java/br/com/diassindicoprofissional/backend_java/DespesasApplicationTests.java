package br.com.diassindicoprofissional.backend_java;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import br.com.diassindicoprofissional.backend_java.entities.Despesas;
import br.com.diassindicoprofissional.backend_java.enumerated.CategoriaDespesa;
import br.com.diassindicoprofissional.backend_java.services.Despesas.IDespesasService;

@SpringBootTest
@ActiveProfiles("test")
public class DespesasApplicationTests {
    @Autowired
    private IDespesasService service;

    @Test
    public void shouldCreateDespesa() {
        Despesas despesa = new Despesas();
        despesa.setDescricao("Compra de material de limpeza");
        despesa.setValor(new BigDecimal("150.00"));
        despesa.setData(LocalDate.now());
        despesa.setCategoria(CategoriaDespesa.LIMPEZA);

        Despesas res = service.salvarDespesas(despesa);
        assertNotNull(res);
        assertNotNull(res.getId());
    }

    @Test
    public void shouldListAllDespesas() {
        List<Despesas> despesas = service.listarDespesas();
        assertNotNull(despesas);
        assertTrue(despesas.size() >= 0);
    }

    @Test
    public void shouldFindDespesaById() {
        Despesas despesa = new Despesas();
        despesa.setDescricao("Pagamento de segurança");
        despesa.setValor(new BigDecimal("500.00"));
        despesa.setData(LocalDate.now());
        despesa.setCategoria(CategoriaDespesa.SEGURANCA);

        Despesas savedDespesa = service.salvarDespesas(despesa);
        Despesas foundDespesa = service.buscarDespesaPorId(savedDespesa.getId().intValue());

        assertNotNull(foundDespesa);
        assertTrue(foundDespesa.getId().equals(savedDespesa.getId()));
    }
}
