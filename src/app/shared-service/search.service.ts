import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import{Observable}  from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SearchService {

  private baseUrl: string='http://localhost:8090/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  constructor(private _http:Http) { }


  getProducts(){

    return this._http.get(this.baseUrl,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }


  getProductById(id:Number){
    
        return this._http.get(this.baseUrl+"/products/id/"+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
      }


  getProductByDescription(description:String){
    
        return this._http.get(this.baseUrl+"/products/description/"+description,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
      }

  getProductByDepartment(department:String){
    
        return this._http.get(this.baseUrl+"/products/department/"+department,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
      }

  errorHandler(error:Response){

    return Observable.throw(error||"Server Error");

  }



}
