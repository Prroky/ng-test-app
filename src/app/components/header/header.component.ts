import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'NG app';
  cislo: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.title = 'NG fuck!';
    this.cislo = this.spocitej(3, 5);
  }

  spocitej(x: number, y: number): number {
    return x + y;
  }
}
