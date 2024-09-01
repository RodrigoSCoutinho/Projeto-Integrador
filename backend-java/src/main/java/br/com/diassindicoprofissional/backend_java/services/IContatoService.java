package br.com.diassindicoprofissional.backend_java.services;

import java.util.List;

import br.com.diassindicoprofissional.backend_java.entities.Contato;

public interface IContatoService {
    public Contato salvarContato(Contato contato);

    public List<Contato> buscarContatos();

}