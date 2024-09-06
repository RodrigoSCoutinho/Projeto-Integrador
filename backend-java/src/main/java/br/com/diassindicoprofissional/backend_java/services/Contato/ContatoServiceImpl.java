package br.com.diassindicoprofissional.backend_java.services.Contato;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.diassindicoprofissional.backend_java.dao.ContatoDAO;
import br.com.diassindicoprofissional.backend_java.entities.Contato;

@Component
public class ContatoServiceImpl implements IContatoService {

    @Autowired
    private ContatoDAO contatoDao;

    @Override
    public Contato salvarContato(Contato contato) {
        return contatoDao.save(contato);
    }

    @Override
    public List<Contato> buscarContatos() {
        return contatoDao.findAll();
    }

    @Override
    public Contato buscarContatoPorId(Integer id) {
        return contatoDao.findById(id);
    }

}
