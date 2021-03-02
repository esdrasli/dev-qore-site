import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {


  constructor(private title: Title) {
    this.title.setTitle('devQore');
  }



  ngOnInit(): void {
  }



}
