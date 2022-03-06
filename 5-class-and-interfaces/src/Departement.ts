export default abstract class Departement {
  //   private name: string;
  private employee: string[] = [];

  /**
   *
   * @name & @id
   * paramater name dan id pada constructor adalah shortcut membuat parameter pada class di typescript
   *
   * @readonly
   * jika ada sebuah properti dengan keyword readonly, maka properti itu tidak bisa diubah ubah
   * itu adalah feature dari typescript bukan javascript
   */
  constructor(protected readonly id: string, protected name: string) {}

  /**
   *
   * this: Departement
   * digunakan untuk merefer data bilamana ada variabel yang ingin menggunakan method describe
   * Tidak Masuk Dalam Parameter Yang Harus Diinput
   */
  abstract describe(this: Departement): void;

  addEmployee(this: Departement, name: string): void {
    this.employee.push(name);
  }

  describeEmployee(this: Departement): void {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}
