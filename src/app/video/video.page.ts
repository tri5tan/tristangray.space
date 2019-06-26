import { Component, ElementRef, Renderer, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { VimeoVideosService } from '../vimeo-videos.service';
import { ProjectService } from '../project.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';


const urlStart = "https://player.vimeo.com/video/";
const urlEnd = "?autoplay=0&title=0&byline=0&portrait=0&frameborder=0";

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
    videoProjects: any = [];
    iframeLoaded: Boolean = false;
    loadedFrames: any;

  constructor(private element: ElementRef, private renderer: Renderer, private http: HttpClient, public ps: ProjectService, private sanitizer: DomSanitizer, public router: Router) { 
    //this.getVideos();
      
  /*    for(let i = 0; i < 8; i++) {
               this.loadedFrames[this.i] = false;
        }
      console.log("this.loadedFrames: ", this.loadedFrames);*/
      console.log("constructor");
      //this.iframeOnload();
  }

  ngOnInit() {
      this.getVideos(); 
      /*this.getVideos().then((res) => {
           console.log("getVideos good boy"); 
           //this.videos.forEach(item, index) {
           for(let index in this.videos) {
               this.loadedFrames[index] = false;
           }
           console.log("this.loadedFrames: ", this.loadedFrames);
       },
           (err) => {
           console.log("getVideos you Promised!!");
       });*/
      //this.isLoaded();
      console.log("ngOnInit");
      //this.iframeOnload();
  }
    
 ionViewDidLoad() {
     console.log("ionViewDidLoad gone and done loaded"); 
    // this.parseHTML();
     //this.isLoaded();
     // this.iframeOnload();
 }   
    
    navTo(index) {
        let detail = "v" + index;
        console.log('navigating with data: ', detail);
        this.router.navigate(['/videoproject', detail]);
    }
    
     
    getVideos() {
       // this.videos = this.ps.getVideoArray();
        this.ps.getProjectData()
            .subscribe(res => {
                console.log(res);
                let projects = res.videos;
                console.log('projects: ', projects);
                let p_array = Object.values(projects);
                this.videoProjects = p_array.reverse();
                console.log('this.videoProjects: ', this.videoProjects);
            }, err => {
                console.log(err);
            });
    }
    
    isImg(imageURL): Boolean {
        console.log("imageURL: ", imageURL);
        //if(this.http.get(imageURL)) {
        if(imageURL) {
            return true;
        }
        else {
            return false;
        }
    }
    
    
    iframeOnload() {
   // window.onload = () => {
         //let frame = document.getElementById('showreel');
        //let frames = this.el.getElementsByTagName('iframe');
         //let frames = this.renderer.(this.element);
       // ..... let frames = this.element.getElementsByTagName('iframe');
        //let frames: HTMLCollection = document.getElementsByClassName('videoframe');
        //console.log("frames: ", frames);
        //let frameO = (document.getElementsByClassName('videoframe')[0]);
        //console.log("frames[0]: ", frames[0]);
        //frame.onload = (event) => {
          //  frame.style.backgroundImage = "none";
        //};
        
        //frames.forEach((frame, index) => {
        //});
      //    for(let i in this.frames) {
          /*  for(let i = 0; i < frames.length; i++) {
            frames[i].onload = () => {
                  frames[i].style.backgroundImage = "none";
            }
          }*/
    }
    
    
    isLoaded() {
        /* document.getElementById(this.id).onload = () => {
            this.iframeLoaded = true;
        }
        return this.iframeLoaded; 
        
        let frames = document.getElementsByTagName('iframe');
         console.log("frames: ", frames);
        //for(let frame of frames; let i = index){
        frames.forEach((frame, index) => {
           this.loadedFrames[index] = false;   
             frame.onload = () => {
                this.loadedFrames[index] = true;   
            }
        });
        console.log("this.loadedFrames: ", this.loadedFrames);*/
    }
    
    
  private getURL(id: string) {
        //console.log('id: ', id);
        let url = urlStart + id + urlEnd;
       // console.log('url: ', url);
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    
   // mouseHome() {
     //   document.getElementById('tooly').style.background = black;
    //}
    
    parseHTML() {
        //<p class="longText" text-wrap>{{v.longText}}</p>
     /*   let peas = document.getElementsByTagName("P");
        console.log("peas: ", peas);
        for(p of peas) {
            p.innerHTML = JSON.parse(p.innerHTML);
        }
        console.log("peas: ", peas);
        
        */
    }
    
    /*getVideos() {
        this.vvs.getVimeosData()
            .subscribe(res => {
                console.log(res);
                this.videos = res;
                this.iframeOnload();
            }, err => {
                console.log(err);
            });
    } */
   
    
    
   /* getVideos(): Promise {
        return new Promise((resolve) => { this.vvs.getVimeosData()
            .subscribe(res => {
                console.log(res);
                this.videos = res;
                resolve = true;
            }, err => {
                console.log(err);
                resolve = false;
            });
            return resolve;
        });
    }*/
    
   /* getVideos() {
        this.videos = this.vvs.getVimeosData();
    } */

}
