import Departement from "./Departement.js";

class ITDepartement extends Departement {
  constructor(id: string, private admin: string[]) {
    super(id, "IT");
  }

  setDataAdmin(value: string): void {
    this.admin.push(value);
  }
  describe(): void {
    console.log(`Departement ${this.name} Memiliki Id ${this.id}`);
  }
}

/**
 * Singleton Class AccountingDepartement
 */
class AccountingDepartement extends Departement {
  private static instance: AccountingDepartement;

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  // Singleton Instances
  static getInstance() {
    if(AccountingDepartement.instance){
      return AccountingDepartement.instance
    }

    AccountingDepartement.instance = new AccountingDepartement('d2', []);
    return AccountingDepartement.instance
  }

  /**
   * @get adalah getters dari sebuah class
   * @set adalah setters dari sebuah class
   */
  get dataReports(): string[] {
    return this.reports;
  }
  set dataReports(value: string[]) {
    this.reports = value;
  }

  // Abstract Dari Departement
  describe(): void {
    console.log(`Departement ${this.name} Memiliki Id ${this.id}`);
  }
}

const IT = new ITDepartement("TI1", ["Admin"]);
console.log(IT);

const Accounting = AccountingDepartement.getInstance();
Accounting.addEmployee("Kevin");

/**
 * Cara Menggunakan Setter Dan Getter
 */
Accounting.dataReports = [
  "Laporan Keuangan 2019",
  "Laporan Keuangan 2020",
  "Laporan Keuangan 2021",
];
console.log(Accounting.dataReports);
Accounting.describe();

// const accountingCopy = {
//   name: "Mola",
//   employee: [],
//   addEmployee: accounting.addEmployee,
//   describeEmployee: accounting.describeEmployee,
//   describe: accounting.describe,
// };

// accountingCopy.describe("Hello From Accounting Copy ");
