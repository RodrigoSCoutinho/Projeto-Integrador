import { Apartamento } from "./Apartamento";

export interface Condominio {
    id?: number;
    nome: string;
    endereco: string;
    quantidadeBlocos: number;
    apartamentos?: Apartamento[];
  }