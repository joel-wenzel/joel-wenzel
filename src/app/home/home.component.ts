import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { appConstants } from '../app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle(appConstants.title);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary'},
      { name: 'og:url', content: '/home'},
      { name: 'og:title', content: appConstants.title},
      { name: 'og:description', content: this.about.desc},
      { name: 'og:image', content: this.about.image}
    ])
  }



  get about() {
    return appConstants.about;
  }

  get links() {
    return appConstants.links;
  }

}
