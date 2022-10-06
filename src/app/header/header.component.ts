import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  makeMeActive(id: string) {
    document.getElementById("homemenu").classList.remove("active");
    document.getElementById("aboutmenu").classList.remove("active");
    document.getElementById("projectmenu").classList.remove("active");
    document.getElementById("contactmenu").classList.remove("active");
    document.getElementById(id).classList.add("active");
  }

}
