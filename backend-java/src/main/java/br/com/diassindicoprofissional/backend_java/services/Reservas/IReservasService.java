package br.com.diassindicoprofissional.backend_java.services.Reservas;

import java.util.List;

import br.com.diassindicoprofissional.backend_java.entities.Reservas;

public interface IReservasService {
    public List<Reservas> listarReservas();

    public Reservas salvarReservas(Reservas reservas);

    public Reservas buscarReservasPorId(Integer id);

    public Reservas aprovarReserva(Long id);

    public Reservas recusarReserva(Long id);
}
