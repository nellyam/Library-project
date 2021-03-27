export interface ILivre {
  id:number,
  Name: string,
  LongDescription?:string,
  ImageUrl?:string,
  InStock?: boolean,
  ShortDescription?: string;
  Price: number,
  Category: string,
  Etoile?: number

}
