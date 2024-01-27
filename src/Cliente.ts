export type TipoCliente = {
  nome: string;
  email: string;
  cpf: string;
};

export type Adress = {
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
};

export class Cliente {
  nome: string;
  email: string;
  cpf: string;
  dataCadastro?: Date;
  enderecos?: Adress[];
  constructor(cliente: TipoCliente) {
    this.nome = cliente.nome;
    this.email = cliente.email;
    this.cpf = cliente.cpf;
    this.dataCadastro = new Date();
    this.enderecos = [];
  }

  adicionarEndereco(endereco: Adress): void {
    this.enderecos?.push(endereco);
  }
}
