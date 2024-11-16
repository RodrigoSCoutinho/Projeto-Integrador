package br.com.diassindicoprofissional.backend_java.services.Apartamento;

import java.util.List;
import br.com.diassindicoprofissional.backend_java.entities.Apartamentos;

public interface IApartamentoService {
    Apartamentos salvar(Apartamentos apartamento);

    List<Apartamentos> listarTodos();

    Apartamentos buscarPorId(Long id);

    void deletar(Long id);

    List<Apartamentos> listarPorCondominio(Long condominioId);
}
