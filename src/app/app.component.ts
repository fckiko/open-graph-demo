import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-your-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class YourComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags(): void {
    this.titleService.setTitle('My Angular Page');

    this.meta.addTags([
      { property: 'og:title', content: 'My Angular Page' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.example.com/page.html' },
      { property: 'og:image', content: 'https://www.example.com/image.jpg' },
      { property: 'og:description', content: 'This is a description of my Angular page.' }
    ]);
  }
}