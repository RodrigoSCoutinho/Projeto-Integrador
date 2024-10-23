package br.com.diassindicoprofissional.backend_java.services.Despesas;

import java.util.List;

import br.com.diassindicoprofissional.backend_java.entities.Despesas;

public interface IDespesasService {
    public List<Despesas> listarDespesas();

    public Despesas salvarDespesas(Despesas despesas);

    public Despesas buscarDespesaPorId(Integer id);
}
