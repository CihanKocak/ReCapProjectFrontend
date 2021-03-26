import { CarImage } from "./carImage";
import { Car } from "./car";

export interface CarDetailAndImagesDto{
        car:Car,
        carImages:CarImage[],
        carId:number,
        brandId:number,
        colorId:number,
        brandName:string,
        colorName:string,
        modelYear:string,
        description:string,
        dailyPrice:number,
        imagePath:string

}
