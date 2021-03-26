import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';
import { FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private brandService:BrandService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      brandName:["",Validators.required]
    })
  }

  addBrand(){
    if(this.brandAddForm.valid){
      let brandModel = Object.assign({},this.brandAddForm.value)
      this.brandService.addBrand(brandModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success("Brand added", "Successful")
      })

    }else{
      this.toastrService.error("Your form is incomplete", "Attention")
    }


  }
}
