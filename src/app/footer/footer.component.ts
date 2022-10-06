import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  fbURL: string = "https://www.facebook.com/profile.php?id=100073955277141";
  twitterURL: string = "https://twitter.com/mschoudhary81";
  googleURL: string = "https://sites.google.com/view/mahipalchoudhary";
  instaURL: string = "https://www.instagram.com/mahi_0107/";
  linkedinURL: string = "https://www.linkedin.com/in/mahipal-singh-choudhary-b0290494/";
  githubURL: string = "https://github.com/choudharymahipal";

  constructor() { }

  ngOnInit(): void {
  }

}
