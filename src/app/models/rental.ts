export interface Rental {
  id?: number;
  carId:number;
  customerId:number;
  //description: string;
  //companyName: string;
  rentDate:Date;
  returnDate?:Date;
  //dailyPrice:number;
}
