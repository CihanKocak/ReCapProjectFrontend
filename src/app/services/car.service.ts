import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { environment } from 'src/environments/environment';
import { CarDetail } from '../models/carDetail';
import { CarDetailAndImagesDto } from '../models/carDetailAndImagesDto';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

    constructor(private httpClient:HttpClient) { }

    getCar():Observable<ListResponseModel<Car>>{
      let newPath = environment.apiUrl +'cars/getcarsdetail';
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }

    getCarById(carId: number): Observable<ItemResponseModel<CarDetail>> {
      let newPath = environment.apiUrl + "cars/getbyid?id=" + carId
      return this.httpClient.get<ItemResponseModel<CarDetail>>(newPath);
   }

   getCarsByBrandId(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = environment.apiUrl + 'cars/getbybrand?brandid=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

    getCarsByColorId(colorId: number): Observable<ListResponseModel<CarDetail>> {
      let newPath = environment.apiUrl + 'cars/getbycolor?colorid=' + colorId;
      return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
   }
    getCarByBrand(brandId:Number):Observable<ListResponseModel<Car>>{
      let newPath = environment.apiUrl +`cars/getbybrand?brandid=${brandId}`;
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }
    getCarByColor(colorId:Number):Observable<ListResponseModel<Car>>{
      let newPath = environment.apiUrl +`cars/getbycolor?colorid=${colorId}`;
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }
    getCarByBrandAndColor(brandId:Number,colorId:Number):Observable<ListResponseModel<Car>>{
      let newPath = environment.apiUrl +`cars/getbybrandandcolor?brandId=${brandId}&colorid=${colorId}`;
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }

    addCar(car:Car){
      let newPath = (environment.apiUrl + "cars/add")
      return this.httpClient.post(newPath,car)
    }

    update(car: Car): Observable<ResponseModel> {
      let newPath = environment.apiUrl + "cars/update"
      return this.httpClient.post<ResponseModel>(newPath, car);
   }
}
