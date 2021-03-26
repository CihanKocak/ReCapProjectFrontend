import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from './../../services/brand.service';
import { Brand } from './../../models/brand';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandUpdateForm: FormGroup;
  brand: Brand;

  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.getBrandById(param['brandId']);
   });
  }

  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      brandId: [this.brand.brandId, Validators.required],
      brandName: [this.brand.brandName, Validators.required]
    });
 }

 getBrandById(brandId: number) {
    this.brandService.getBrandById(brandId).subscribe(response => {
       this.brand = response.data;
       this.createBrandUpdateForm();
    });
 }

 update() {
    let brand: Brand = Object.assign({}, this.brandUpdateForm.value);

    if (!this.brandUpdateForm.valid) {
       this.toastrService.warning('Your form is incomplete', 'Attention');
       return;
    }

    this.brandService.update(brand).subscribe(responseSuccess => {
       return this.toastrService.success(responseSuccess.message, 'Successful');
    }, responseError => {
       if (responseError.error.ValidationErrors.length == 0) {
          this.toastrService.error(responseError.error.Message, responseError.error.StatusCode);
          return;
       }

       for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
          this.toastrService.error(
             responseError.error.ValidationErrors[i].ErrorMessage, 'Verification Error'
          );
       }
    });
 }
}
