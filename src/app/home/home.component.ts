import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _commonSvc:CommonService) { 
    this._commonSvc.mainMenuActive("homemenu");
  }

  ngOnInit(): void {
  }


}
