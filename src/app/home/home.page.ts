import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

const urlStart = "https://player.vimeo.com/video/";
const urlEnd = "?autoplay=0&title=0&byline=0&portrait=0&frameborder=0";

/* class Project{
    title: string; // "Showreel";
    vimeoID: string; //"39728347";
    shortText?: string; //"";
    coverImage?: string; //"";
    
    constructor(t: string, vid: string, sText?: string, cImg?: string) {
        this.title = t;
        this.vimeoID = vid;
        this.shortText = sText;
        this.coverImage = cImg;
    }
} */
         
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    reel: any = [];
    
    constructor(private ps: ProjectService, private sanitizer: DomSanitizer, public router: Router) {
      // this.project = new Project("Showreel", "39728347");
    }  
    
    ngOnInit() {
        //this.iframeOnload();
        this.loadShowreel();
    }
    
    loadShowreel() {
        this.ps.getProjectData()
            .subscribe(res => {
                console.log(res);
                this.reel = res.showreel;
            }, err => {
                console.log(err);
            });
    }
    
    
    private cleanURL(url: string) {
        //console.log('id: ', id);
       // console.log('url: ', url);
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    
     navTo(id) {
        console.log('navigating to videoproject with data: ', id);
        this.router.navigate(['/videoproject', id]);  

    }
    
    
    
    iframeOnload() {
        // let frame = document.getElementsByTagName('iframe');
         let frame = document.getElementById('showreel');
        console.log("frame: ", frame);
        //console.log("frame: ", frame);
        frame.onload = (event) => {
           // frame.iframe.style.backgroundImage = none;
            frame.style.backgroundImage = "none";
        };
    }
    
    
  
}
