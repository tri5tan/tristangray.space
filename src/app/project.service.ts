import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};
/*const httpOptions2 = {
    headers: new HttpHeaders({'Content-Type': 'text/json'})
}; */
const project_URL = "../assets/data/projects.json";
//const project_URL = "https://filedn.com/lpFcLLJaD7ykujLgfog5Fmu/TristanSystem/data/projects.json"

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    projectData: any;
    ready: Boolean;
    projectURL: SafeUrl;

   constructor(public http: HttpClient, private sanitizer: DomSanitizer) { 
       this.ready = false;
        //this.loadData();
      // this.projectURL = this.sanitizer.bypassSecurityTrustUrl(project_URL);
      // console.log("this.projectURL: ", this.projectURL);
   }
    
    ngOnInit() {
        this.loadData();
    }
    
   /* getURL() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(project_URL);
    } */
    
    async loadData() {
        //this.getProjectData()
       // this.http.get(project_URL, httpOptions)         
        // return await this.http.get(this.projectURL, httpOptions2)
        return await this.http.get(project_URL, httpOptions)
            .subscribe(res => {
                console.log(res);
                this.ready = true;
                this.projectData = res;
        }, err => {
            console.log(err);
        });
    }
    
     getProjectData(): Observable<any> {
       return this.http.get(project_URL, httpOptions);
       //  return this.http.get(this.projectURL, httpOptions2);
     }
    
    
    
    
    getVideoProject(id) {
        return this.projectData.videos[id];
    }
    
    getCodeProject(id) {
        return this.projectData.codes[id];
    }
    
    
    getVideoArray() {
        return this.projectData.videos;
    }
    
    getCodeArray() {
        return this.projectData.codes;
    }
    
    
    //getProject(id: string): Observable {
   /* getProject() {
        this.projectData = this.loadData();
        
        console.log("id: ", id);
        const letter: string = id.substring(0,1);
        const num = id.substring(1); //id.slice[1]; // num = 1
        console.log("letter: ", letter);
        console.log("num: ", num);
        
        //let currentProject/
        if(letter == "v") { // video, e.g. id = v1
              //return this.getVideoProject(num);
            //return this.projectData.videos[this.num];
           return this.http.get(project_URL, httpOptions)
                    .subscribe(res => {
                        console.log(res);
                        //this.projectData = res;
                        return res.videos[this.num];
                }, err => {
                    console.log(err);
                });
          }
          else { //"c"
            //  let num = id.slice[1];
              //console.log("num: ", num);
              //return this.getCodeProject(num);
             // return this.projectData.codes[this.num];
            return this.http.get(project_URL, httpOptions)
                    .subscribe(res => {
                        console.log(res);
                        //this.projectData = res;
                        return res.codes[this.num];
                }, err => {
                    console.log(err);
                });
          }
        
    } */
}
