import { ContaPoupanca } from "./ContaPoupanca";
import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";

const cliente1 = new Cliente({
  nome: "Cliente1",
  email: "cliente1@email.com",
  cpf: "12345678900",
});

const cliente2 = new Cliente({
  nome: "Cliente2",
  email: "cliente2@email.com",
  cpf: "00987654321",
});

const contaPoupanca = new ContaPoupanca({
  cliente: cliente1,
  numero: "00001-0",
  agencia: "123-0",
  senha: "12345",
  saldo: 50000,
});

const contaCorrente = new ContaCorrente({
  cliente: cliente2,
  numero: "00002-0",
  agencia: "123-0",
  senha: "12345",
  saldo: 1000,
});

// console.log(contaPoupanca, contaCorrente);

console.log(contaCorrente.consultarSaldo("12345"));
console.log(contaCorrente.sacar(200, "12345"));
console.log(contaCorrente.consultarSaldo("12345"));
