import { CompanyAccount } from "./class/CompanyAccount";
import { NewTypeAccount } from "./class/NewTypeAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
const specialAccount: NewTypeAccount = new NewTypeAccount("Special", 30);

peopleAccount.deposit(100);
peopleAccount.withdraw(50);

companyAccount.deposit(100);
companyAccount.withdraw(50);

specialAccount.deposit(100);
specialAccount.withdraw(50);
