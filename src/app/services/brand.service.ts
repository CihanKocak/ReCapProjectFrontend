import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
import { ItemResponseModel } from '../models/itemResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath = environment.apiUrl + "brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  getBrandById(brandId: number): Observable<ItemResponseModel<Brand>> {
    let newPath = environment.apiUrl + "brands/getbyid?id=" + brandId
    return this.httpClient.get<ItemResponseModel<Brand>>(newPath);
  }

  addBrand(brand:Brand){
    let newPath = environment.apiUrl + "brands/add"
    return this.httpClient.post(newPath,brand)
  }

  update(brand: Brand): Observable<ResponseModel> {
    let newPath = environment.apiUrl + "brands/update"
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }
}
