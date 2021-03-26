import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { environment } from 'src/environments/environment';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }

  getColors(): Observable<ListResponseModel<Color>>{
    let newPath = environment.apiUrl + "colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  addColor(color:Color){
    let newPath = environment.apiUrl + "colors/add"
    return this.httpClient.post(newPath,color)
  }

  getColorById(colorId: number): Observable<ItemResponseModel<Color>> {
    let newPath = environment.apiUrl + "colors/getbyid?id=" + colorId
    return this.httpClient.get<ItemResponseModel<Color>>(newPath);
 }

 update(color: Color): Observable<ResponseModel> {
  let newPath = environment.apiUrl + "colors/update"
  return this.httpClient.post<ResponseModel>(newPath, color);
}
}
