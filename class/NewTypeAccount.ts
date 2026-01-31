import { DioAccount } from "./DioAccount";

export class NewTypeAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  // deposit = (amout: number): void => {
  //   if (this.getValidateStatus() && amout > 0) {
  //     this.addBalance(amout + 10);
  //     console.log(`${this.getName()}, você depositou R$${amout},00 com bônus de R$10,00`);
  //   } else {
  //     console.log(`${this.getName()}, valor de depósito inválido.`);
  //   }
  // };

  deposit = (amount: number): void => {
    if (this.getValidateStatus() && amount > 0) {
      this.addBalance(amount + 10);
      console.log(`${this.getName()}, você depositou R$${amount},00 e ganhou R$$10,00 de bônus!`);
      console.log(`Novo saldo após depósito: R$${this.getBalance()},00`);
    } else {
      console.log(`${this.getName()}, valor de depósito inválido.`);
    }
  };
}
