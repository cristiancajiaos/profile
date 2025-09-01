import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit, AfterViewInit {

  public loadingLayout: boolean = false;

  constructor(
    private title: Title
  ) {}

  ngOnInit(): void {
    this.loadingLayout = true;
    this.setTitle();
  }

  ngAfterViewInit(): void {
    this.loadingLayout = false;
  }

  private setTitle(): void {
    this.title.setTitle('Cristian Cajiao Skarnic');
  }
}
