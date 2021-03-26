import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private carService:CarService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      brandId:["",Validators.required],
      brandName:["",Validators.required],
      colorId:["",Validators.required],
      colorName:["",Validators.required],
      modelYear:["",Validators.required],
      description:["",Validators.required],
      dailyPrice:["",Validators.required],
      imagePath:["",Validators.required]
    })
  }

  addCar(){
    if(this.carAddForm.valid){
      let carModel = Object.assign({},this.carAddForm.value)
      this.carService.addCar(carModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success("Car added", "Successful")
      })

    }else{
      this.toastrService.error("Your form is incomplete", "Attention")
    }


  }
}
