import { Component, OnInit, Input } from '@angular/core';
import {SearchService}  from '../../shared-service/search.service';
import {Product}  from '../../product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private product:Product[];
  category: string = 'Description';
  selectedQuery: string;



  @Input()
  passedCat: string;

   constructor(private _searchService:SearchService) { }

  ngOnInit() {
   

   }


   searchAll(){
        this._searchService.getProducts().subscribe((product)=>{
          console.log(product);
          this.product=product;
      },(error)=>{
          console.log(error);
      })
   }


   searchProd(v: any){


    this.selectedQuery = v;
    
        console.log(this.selectedQuery);


    if(this.category=="ID"){

      this._searchService.getProductById(v).subscribe((product)=>{
        console.log(product);
        this.product=Array.of(product);
      })

    }else if(this.category=="Description"){

      this._searchService.getProductByDescription(v).subscribe((product)=>{
        console.log(product);
        this.product=product;
      })

    }else if(this.category=="Department"){

      this._searchService.getProductByDepartment(v).subscribe((product)=>{
        console.log(product);
        this.product=product;
      })

    }else{

      console.log("Please Select a button")

    }
   }

   setCategory(event: any){

    this.category = event.target.value;
    console.log(this.category);

   }

}
