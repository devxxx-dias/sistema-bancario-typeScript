import { ContaBancaria, TipoContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria {
  private taxaRendimento: number;
  constructor(dadosConta: TipoContaBancaria) {
    super(dadosConta);
    this.taxaRendimento = 0.05;
  }

  depositar(valor: number): string {
    let deposito = (this.saldo += valor *= this.taxaRendimento);
    return `Saldo: R$ ${((this.saldo += valor) / 100)
      .toFixed(2)
      .replace(".", ",")}`;
  }

  sacar(valor: number, senha: string): string {
    if (senha === this.senha) {
      if (valor > this.saldo) {
        return `Saldo insulficiente`;
      }

      this.saldo -= valor;
      return `Saldo: R$ ${(this.saldo / 100).toFixed(2).replace(".", ",")}`;
    }

    return `Senha Invalida`;
  }
}
