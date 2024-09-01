package br.com.diassindicoprofissional.backend_java.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.diassindicoprofissional.backend_java.dao.ContatoDAO;
import br.com.diassindicoprofissional.backend_java.entities.Contato;

@Component
public class ContatoServiceImpl implements IContatoService {

    @Autowired
    private ContatoDAO contatoDao;

    @Override
    public void salvarContato(Contato contato) {
        contatoDao.save(contato);
    }

}
