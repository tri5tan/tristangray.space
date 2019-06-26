import { Component, OnInit } from '@angular/core';
//import { CodeProjectsService } from '../code-projects.service'
import { ProjectService } from '../project.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

const urlStart = "https://player.vimeo.com/video/";
const urlEnd = "?autoplay=0&title=0&byline=0&portrait=0&frameborder=0";


@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {
    codeProjects: any = [];
    
    
  constructor(private ps: ProjectService, private sanitizer: DomSanitizer, public router: Router) { }

  ngOnInit() {
      this.getCodes();
  }

    navTo(index) {
        let detail = "c" + index;
        console.log('navigating with data: ', detail);
        this.router.navigate(['/codeproject', detail]);
    }
    
       getCodes() {
       // this.codes = this.ps.getCodeArray();
           this.ps.getProjectData()
            .subscribe(res => {
                console.log(res);
                let projects = res.codes;
                this.codeProjects = Object.values(projects);
                console.log('this.codeProjects: ', this.codeProjects);
            }, err => {
                console.log(err);
            });
    }

    
    private getURL(id: string) {
        //console.log('id: ', id);
        let url = urlStart + id + urlEnd;
        //console.log('url: ', url);
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    
    
        
   /*getCodes() {
        this.cps.getCodesData()
            .subscribe(res => {
                console.log(res);
                this.codeProjects = res;
        }, err => {
            console.log(err);
        });
    }  */
    
 
    
    
    
  /*   getCodes() {
        //this.codeProjects = this.cps.codeJSON;
    }*/
}
