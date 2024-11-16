package br.com.diassindicoprofissional.backend_java.services.Condominio;

import br.com.diassindicoprofissional.backend_java.entities.Condominios;
import java.util.List;

public interface ICondominioService {
    Condominios salvar(Condominios condominio);

    List<Condominios> listarTodos();

    Condominios buscarPorId(Long id);

    void deletar(Long id);

    List<Condominios> buscarPorNome(String nome);
}
