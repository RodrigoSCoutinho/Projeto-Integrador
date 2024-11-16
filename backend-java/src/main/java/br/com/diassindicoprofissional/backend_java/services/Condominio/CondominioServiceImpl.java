package br.com.diassindicoprofissional.backend_java.services.Condominio;

import java.util.List;

import org.springframework.stereotype.Component;
import br.com.diassindicoprofissional.backend_java.dao.CondominiosDAO;
import br.com.diassindicoprofissional.backend_java.entities.Condominios;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class CondominioServiceImpl implements ICondominioService {
    @Autowired
    private CondominiosDAO dao;

    @Override
    public Condominios salvar(Condominios condominio) {
        return dao.save(condominio);
    }

    @Override
    public List<Condominios> listarTodos() {
        return dao.findAll();
    }

    @Override
    public Condominios buscarPorId(Long id) {
        return dao.findById(id)
                .orElseThrow(() -> new RuntimeException("Condomínio não encontrado"));
    }

    @Override
    public void deletar(Long id) {
        dao.deleteById(id);
    }

    @Override
    public List<Condominios> buscarPorNome(String nome) {
        return dao.findByNomeContaining(nome);
    }
}
