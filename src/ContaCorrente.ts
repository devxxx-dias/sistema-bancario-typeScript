import { ContaBancaria, TipoContaBancaria } from "./ContaBancaria";

export class ContaCorrente extends ContaBancaria {
  private limite: number;
  constructor(dadosConta: TipoContaBancaria) {
    super(dadosConta);
    this.limite = 1000;
  }

  depositar(valor: number): string {
    return `Saldo: R$ ${((this.saldo += valor) / 100)
      .toFixed(2)
      .replace(".", ",")}`;
  }

  sacar(valor: number, senha: string): string {
    if (senha === this.senha) {
      if (valor > this.saldo + this.limite) {
        return `Saldo insulficiente`;
      }
      this.saldo -= valor;
      return `Saldo: R$ ${(this.saldo / 100).toFixed(2).replace(".", ",")}`;
    }

    return `Senha Invalida`;
  }
}
