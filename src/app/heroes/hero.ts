export class Hero {

    constructor(
      public id: number,
      public name: string,
      public power: string,
      public alterEgo: string,
      public life: number,
      public attack: number,
      public def?: number
    ) {  }
  
}