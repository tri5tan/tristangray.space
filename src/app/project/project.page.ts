import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
//import { VimeoVideosService } from '../vimeo-videos.service';
//import { CodeProjectsService } from '../../code-projects.service'
import { ProjectService } from '../project.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

const urlStart = "https://player.vimeo.com/video/";
const urlEnd = "?autoplay=0&title=0&byline=0&portrait=0&frameborder=0";


@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {
    
    id: string;
    type: string;
    codeProjects: any = [];
    //projObservable: Observable;
    project: any;

  constructor(private router: Router, private route: ActivatedRoute, public ps: ProjectService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
      console.log("this.router.url: ", this.router.url);
      this.id = this.route.snapshot.paramMap.get('id');
      console.log("this.id: ", this.id);
      //this.type = this.route.snapshot.paramMap.get('type');
      //console.log("this.ps.projectData.videos[0]: ",  this.ps.projectData.videos[0]);
      //this.project = this.ps.getProject(this.id);
     /* this.projObservable = this.ps.getProject(this.id)
            .subscribe(res => {
               
                this.projectData = res;
                console.log("this.project: ", this.project);
        }, err => {
            console.log(err);
        });*/
      
      
        const letter: string = this.id.substring(0,1);
        const num = this.id.substring(1); //id.slice[1]; // num = 1
        console.log("letter: ", letter);
        console.log("num: ", num);
        
       this.ps.getProjectData()
            .subscribe(res => {
                console.log(res);
                //this.codeProjects = res.codes;
                //let currentProject/
                if(letter == "v") { // video, e.g. id = v1
                    this.project = res.videos[num]; 
                    console.log("this.project: ", this.project);
                  }
                  else { //"c"
                    this.project = res.codes[num];
                  }
            }, err => {
                console.log(err);
            });
      
       
  }

      isVideo() {
           let url_string = this.router.url;
           console.log("url_string: ", url_string);
          return url_string.includes('video');
    }
      
      
      
      
   /* getCodes() {
        this.cps.getCodesData()
            .subscribe(res => {
                console.log(res);
                this.codeProjects = res;
                this.project = this.codeProjects[this.id];
        }, err => {
            console.log(err);
        });
    }*/
    
   // gotoCode() {
     //   this.router.navigate('/code');
   // }
    
    
    private getURL(id: string) {
        //console.log('id: ', id);
        let url = urlStart + id + urlEnd;
        //console.log('url: ', url);
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    
}
