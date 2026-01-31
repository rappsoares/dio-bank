export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (amout: number): void => {
    if (this.validateStatus() && amout > 0) {
      this.balance += amout;
      console.log(`${this.name}, você depositou R$${amout},00`);
      console.log(`Novo saldo após depósito: R$${this.balance},00`);
    } else {
      console.log(`${this.name}, valor de depósito inválido.`);
    }
  };

  withdraw = (amout: number): void => {
    if (this.validateStatus() && amout > 0 && this.balance >= amout) {
      this.balance -= amout;
      console.log(`${this.name}, você está sacando: R$${amout},00`);
      console.log(`Novo saldo após saque: R$${this.balance},00`);
    } else {
      console.log(`${this.name}, saldo insuficiente para saque.`);
    }
  };

  addBalance = (amout: number): void => {
    this.balance += amout;
  };

  getBalance(): number {
    return this.balance;
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };

  getValidateStatus = (): boolean => {
    return this.status;
  };
}
