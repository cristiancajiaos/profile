import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-links',
  standalone: false,
  templateUrl: './links.html',
  styleUrl: './links.scss'
})
export class Links implements OnInit {

  faBriefcase: IconDefinition = faBriefcase;
  faGithub: IconDefinition = faGithub;

  ngOnInit(): void {

  }

}
