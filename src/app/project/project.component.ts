import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private _commonSvc:CommonService) { 
    this._commonSvc.mainMenuActive("projectmenu");
  }

  ngOnInit(): void {
  }

}
