import { Cliente, TipoCliente } from "./Cliente";

export type TipoContaBancaria = {
  saldo: number;
  numero: string;
  agencia: string;
  senha: string;
  cliente: Cliente;
};
export abstract class ContaBancaria {
  protected saldo: number;
  public numero: string;
  public agencia: string;
  protected senha: string;
  public cliente: Cliente;

  constructor(dadosContas: TipoContaBancaria) {
    (this.saldo = dadosContas.saldo),
      (this.numero = dadosContas.numero),
      (this.agencia = dadosContas.agencia),
      (this.senha = dadosContas.senha),
      (this.cliente = dadosContas.cliente);
  }

  consultarSaldo(senha: string) {
    if (senha === this.senha) {
      return `Saldo: R$ ${(this.saldo / 100).toFixed(2).replace(".", ",")}`;
    }

    return `Senha Invalida`;
  }

  abstract depositar(valor: number): void;
  abstract sacar(valor: number, senha: string): void;
}
