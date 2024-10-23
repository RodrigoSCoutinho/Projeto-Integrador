package br.com.diassindicoprofissional.backend_java.services.Reservas;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.diassindicoprofissional.backend_java.dao.ReservasDAO;
import br.com.diassindicoprofissional.backend_java.entities.Reservas;
import br.com.diassindicoprofissional.backend_java.enumerated.Status;

@Component
public class ReservaServiceImpl implements IReservasService {

    @Autowired
    private ReservasDAO dao;

    @Override
    public List<Reservas> listarReservas() {
        return dao.findAll();
    }

    @Override
    public Reservas salvarReservas(Reservas reservas) {
        reservas.setStatus(Status.PENDENTE);
        return dao.save(reservas);
    }

    @Override
    public Reservas buscarReservasPorId(Integer id) {
        return dao.findById(id);
    }

    @Override
    public Reservas aprovarReserva(Long id) {
        Reservas reserva = dao.findById(id).orElseThrow();
        reserva.setStatus(Status.APROVADO);
        return dao.save(reserva);
    }

    @Override
    public Reservas recusarReserva(Long id) {
        Reservas reserva = dao.findById(id).orElseThrow();
        reserva.setStatus(Status.RECUSADO);
        return dao.save(reserva);
    }

}
