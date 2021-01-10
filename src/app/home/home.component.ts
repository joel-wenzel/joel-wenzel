import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Joel Wenzel');
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary'},
      { name: 'og:url', content: '/home'},
      { name: 'og:title', content: 'Joel Wenzel'},
      { name: 'og:description', content: 'Professional full stack software engineer.'},
      { name: 'og:image', content: 'assets/images/joel-wenzel.jpg'}
    ])
  }

}
