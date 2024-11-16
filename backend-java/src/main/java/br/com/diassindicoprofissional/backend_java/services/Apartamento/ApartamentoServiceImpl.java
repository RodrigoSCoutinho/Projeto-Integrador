package br.com.diassindicoprofissional.backend_java.services.Apartamento;

import org.springframework.stereotype.Component;
import java.util.List;

import br.com.diassindicoprofissional.backend_java.dao.ApartamentosDAO;
import br.com.diassindicoprofissional.backend_java.entities.Apartamentos;

import org.springframework.beans.factory.annotation.Autowired;

@Component
public class ApartamentoServiceImpl implements IApartamentoService {
    @Autowired
    private ApartamentosDAO dao;

    @Override
    public Apartamentos salvar(Apartamentos apartamento) {
        return dao.save(apartamento);
    }

    @Override
    public List<Apartamentos> listarTodos() {
        return dao.findAll();
    }

    @Override
    public Apartamentos buscarPorId(Long id) {
        return dao.findById(id)
                .orElseThrow(() -> new RuntimeException("Apartamento não encontrado"));
    }

    @Override
    public void deletar(Long id) {
        dao.deleteById(id);
    }

    @Override
    public List<Apartamentos> listarPorCondominio(Long condominioId) {
        return dao.findByCondominioId(condominioId);
    }
}
