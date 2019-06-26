import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

//const codesJSON_URL = "https://filedn.com/lpFcLLJaD7ykujLgfog5Fmu/TristanSystem/codeProjects.json";
const codesJSON_URL = "../assets/data/codeProjects.json";


@Injectable({
  providedIn: 'root'
})
export class CodeProjectsService {
    
    codeJSON: any = [];


  constructor(public http: HttpClient, private sanitizer: DomSanitizer){
      this.loadData();
  }
    loadData() {
        //this.codeJSON = this.http.get(codesJSON_URL, httpOptions);
        //console.log("this.codeJSON: ", this.codeJSON);
        
        this.getCodesData()
            .subscribe(res => {
                console.log(res);
                this.codeJSON = res;
        }, err => {
            console.log(err);
        });
    }
    
    getCodesData(): Observable<any> {
        return this.http.get(codesJSON_URL, httpOptions);
        //return this.codeJSON;
    }
    getCodesJSON() {
        //return this.http.get(codesJSON_URL, httpOptions);
        return this.codeJSON;
    }
    
    getCodeProject(id) {
        return this.codeJSON.designs[id];
    }
    
    
}
