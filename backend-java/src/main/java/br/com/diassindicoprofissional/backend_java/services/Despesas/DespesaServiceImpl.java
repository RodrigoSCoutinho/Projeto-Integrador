package br.com.diassindicoprofissional.backend_java.services.Despesas;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.diassindicoprofissional.backend_java.dao.DespesasDAO;
import br.com.diassindicoprofissional.backend_java.entities.Despesas;

@Component
public class DespesaServiceImpl implements IDespesasService {

    @Autowired
    private DespesasDAO dao;

    @Override
    public List<Despesas> listarDespesas() {
        return dao.findAll();
    }

    @Override
    public Despesas salvarDespesas(Despesas despesas) {
        return dao.save(despesas);
    }

    @Override
    public Despesas buscarDespesaPorId(Integer id) {
        return dao.findById(id);
    }

}
