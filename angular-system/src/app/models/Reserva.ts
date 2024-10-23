export class Reserva {
    id: number = 0;
    area: string = '';
    morador: string = '';
    data: string = '';
    status: 'PENDENTE' | 'APROVADA' | 'RECUSADA' = 'PENDENTE';
}