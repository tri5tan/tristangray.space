import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
    //headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': *})
  /*  headers: new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*'); */
};
//const vimeoJSON_URL = "https://filedn.com/lpFcLLJaD7ykujLgfog5Fmu/TristanSystem/vimeos.json";
const vimeoJSON_URL = "../assets/data/vimeosURL.json";

@Injectable({
  providedIn: 'root'
})
export class VimeoVideosService {
    
    
    vimeosData: any;
   // trustedURL: any;
    

  constructor(public http: HttpClient, private sanitizer: DomSanitizer) { 
   //this.trustedURL = this.sanitizer.bypassSecurityTrustUrl(vimeoJSON_URL);
     // console.log('trustedURL: ', this.trustedURL);
      this.loadData();
  }
    
    loadData() {
        //this.codeJSON = this.http.get(codesJSON_URL, httpOptions);
        //console.log("this.codeJSON: ", this.codeJSON);
        
        this.getVimeosData()
            .subscribe(res => {
                console.log(res);
                this.vimeosData = res;
        }, err => {
            console.log(err);
        });
    }
    
    
    getVideoProject(id) {
        return this.vimeosData[id];
    }
    
    getVimeosData(): Observable<any> {
       // let trustedURL = this.getTrustedURL();
    //    let trustedURL = this.sanitizer.bypassSecurityTrustResourceUrl(vimeoJSON_URL);
       return this.http.get(vimeoJSON_URL, httpOptions);
       // console.log('this.vimeosData: ', this.vimeosData);
        //return this.vimeosData;
       // return this.http
         //   .get(trustedURL, httpOptions)
           // .pipe(catchError(this.handleError));
        
        //.pipe(map(response => response.data)
        
        /*this.http.get(vimeoJSON_URL, httpOptions)
            .subscribe(data => {
            this.vimeosData = data;
            console.log('this.vimeosData: ', this.vimeosData);
        }, err => {
            console.log('Failed to get Vimeo data');
        }); */
        
            
    }
    
    getVideoJSON() {
        //return this.http.get(codesJSON_URL, httpOptions);
        return this.vimeosData;
    }
    
   // private getTrustedURL() {
     //   return  this.sanitizer.bypassSecurityTrustUrl(vimeoJSON_URL);
    //}
    
    
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError('Something bad happened; please try again later.');
}
    
}
