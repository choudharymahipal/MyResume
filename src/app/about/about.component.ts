import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _commonSvc:CommonService) { 
    this._commonSvc.mainMenuActive("aboutmenu");
  }

  ngOnInit(): void {
  }

}
