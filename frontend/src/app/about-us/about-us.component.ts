import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  videolist = [
    {
      name: "Item1",
      slug: "item1",
      embed: `VkO62A_CycU`
    }
  ];

  constructor(private sanitizer: DomSanitizer) { }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
  getembedurl(item) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/" + item.embed
    );
  }

  ngOnInit(): void {
    
  }

 

 
}
