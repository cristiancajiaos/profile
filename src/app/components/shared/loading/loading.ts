import { Component, OnInit } from '@angular/core';
import { faSpinner, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading',
  standalone: false,
  templateUrl: './loading.html',
  styleUrl: './loading.scss'
})
export class Loading implements OnInit {

  public faSpinner: IconDefinition = faSpinner;

  ngOnInit(): void {

  }

}
