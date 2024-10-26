package br.com.diassindicoprofissional.backend_java;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import br.com.diassindicoprofissional.backend_java.entities.Reservas;
import br.com.diassindicoprofissional.backend_java.enumerated.AreaComum;
import br.com.diassindicoprofissional.backend_java.enumerated.Status;
import br.com.diassindicoprofissional.backend_java.services.Reservas.IReservasService;

@SpringBootTest
@ActiveProfiles("test")
class ReservasApplicationTests {

    @Autowired
    private IReservasService service;

    @Test
    public void shouldCreateReserva() {
        Reservas reserva = new Reservas();
        reserva.setArea(AreaComum.ACADEMIA);
        reserva.setMorador("João");
        reserva.setData(LocalDate.now());
        reserva.setStatus(Status.PENDENTE);

        Reservas res = service.salvarReservas(reserva);
        assertNotNull(res);
        assertNotNull(res.getId());
    }

    @Test
    public void shouldListAllReservas() {
        List<Reservas> reservas = service.listarReservas();
        assertNotNull(reservas);
        assertTrue(reservas.size() >= 0);
    }

    @Test
    public void shouldFindReservaById() {
        Reservas reserva = new Reservas();
        reserva.setArea(AreaComum.SALAO_DE_FESTAS);
        reserva.setMorador("Maria");
        reserva.setData(LocalDate.now());
        reserva.setStatus(Status.PENDENTE);

        Reservas savedReserva = service.salvarReservas(reserva);
        Reservas foundReserva = service.buscarReservasPorId(savedReserva.getId().intValue());

        assertNotNull(foundReserva);
        assertTrue(foundReserva.getId().equals(savedReserva.getId()));
    }

    @Test
    public void shouldApproveReserva() {
        Reservas reserva = new Reservas();
        reserva.setArea(AreaComum.QUADRA);
        reserva.setMorador("Carlos");
        reserva.setData(LocalDate.now());
        reserva.setStatus(Status.PENDENTE);

        Reservas savedReserva = service.salvarReservas(reserva);
        Reservas approvedReserva = service.aprovarReserva(savedReserva.getId());

        assertNotNull(approvedReserva);
        assertTrue(Status.APROVADO.equals(approvedReserva.getStatus()));
    }

    @Test
    public void shouldRejectReserva() {
        Reservas reserva = new Reservas();
        reserva.setArea(AreaComum.ACADEMIA);
        reserva.setMorador("Fernanda");
        reserva.setData(LocalDate.now());
        reserva.setStatus(Status.PENDENTE);

        Reservas savedReserva = service.salvarReservas(reserva);
        Reservas rejectedReserva = service.recusarReserva(savedReserva.getId());

        assertNotNull(rejectedReserva);
        assertTrue(Status.RECUSADO.equals(rejectedReserva.getStatus()));
    }
}