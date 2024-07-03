import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'open-graph-demo';
}

@Component({
  selector: 'app-your-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class YourComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) { }

  ngOnInit(): void {
    // Set the page title
    this.titleService.setTitle('Dynamic Page Title');

    // Set Open Graph meta tags
    this.meta.updateTag({ property: 'og:title', content: 'Dynamic Page Title' });
    this.meta.updateTag({ property: 'og:description', content: 'Dynamic page description' });
    this.meta.updateTag({ property: 'og:image', content: 'URL to dynamic image' });
    this.meta.updateTag({ property: 'og:url', content: 'https://yourwebsite.com/dynamic-page' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }

}