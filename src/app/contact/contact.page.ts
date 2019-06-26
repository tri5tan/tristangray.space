import { Component, OnInit } from '@angular/core';
//import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

const toPost = "%6c%65%72%66%73%37%37%3d%5b%27%25%36%33%25%36%66%25%36%65%25%37%34%25%36%31%25%36%33%25%37%34%27%2c%5b%27%25%37%33%25%37%30%25%36%31%25%36%33%25%36%35%27%2c%27%25%37%34%25%37%32%25%36%39%25%37%33%25%37%34%25%36%31%25%36%65%25%36%37%25%37%32%25%36%31%25%37%39%27%5d%2e%72%65%76%65%72%73%65%28%29%2e%6a%6f%69%6e%28%27%2e%27%29%5d%2e%6a%6f%69%6e%28%27%40%27%29%3b%6a%68%6b%65%62%36%30%3d%75%6e%65%73%63%61%70%65%28%6c%65%72%66%73%37%37%29%3b%64%6f%63%75%6d%65%6e%74%2e%77%72%69%74%65%28%6a%68%6b%65%62%36%30%2e%6c%69%6e%6b%28%27%6d%61%69%27%2b%27%6c%74%6f%3a%27%2b%6c%65%72%66%73%37%37%29%29%3b";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
    contactData: any;

    
  constructor(private ps: ProjectService) { }

  ngOnInit() {
     // const p = this.renderer.createElement('p');
      //eval(unescape(toPost));
      //this.renderer
     // console.log(this.element);
      
      //console.log(this.element.nativeElement.('post'););
    //  const div = this.renderer.selectRootElement(post);
      //console.log("div: ", div);
      
      //const p = this.renderer.createElement('p');
      //const text = this.renderer.createText(eval(unescape(toPost)));
      //const text = this.renderer.createText(toPost);
      
      //this.renderer.appendChild(p, text);
      //this.renderer.appendChild(div, p);
      
      this.getContactData();
  }
    
    getContactData() {
        this.ps.getProjectData()
            .subscribe(res => {
                console.log(res);
                this.contactData = res.contact;
            }, err => {
                console.log(err);
            });
    }

}
