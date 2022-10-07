import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private _commonSvc:CommonService) { 
    this._commonSvc.mainMenuActive("contactmenu");
  }

  ngOnInit(): void {
  }

}
