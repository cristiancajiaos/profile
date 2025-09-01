import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit, AfterViewInit {

  public loadingLayout: boolean = false;

  ngOnInit(): void {
    this.loadingLayout = true;
  }

  ngAfterViewInit(): void {
    this.loadingLayout = false;
  }



}
