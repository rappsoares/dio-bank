import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (amout: number): void => {
    if (!this.getValidateStatus()) {
      throw new Error("Empréstimo negado. Conta inválida.");
    } else {
      console.log(`${this.getName()}, empréstimo de R$${amout},00 aprovado!`);
      this.addBalance(amout);
      console.log(`${this.getName()}, novo saldo de R$${this.getBalance()} após depósito de empréstimo!`);
    }
  };
}
