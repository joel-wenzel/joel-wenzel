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
      { name: 'og.url', content: '/home'},
      { name: 'og.title', content: 'Joel Wenzel'},
      { name: 'og.description', content: 'lorem'},
      { name: 'og.image', content: '/home'},
    ])
  }

}
