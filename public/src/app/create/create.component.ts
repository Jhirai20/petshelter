import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
Survey={name:"",
type:"",
description:"",
skill1:"",
skill2:"",
skill3:""
}
name:any
error:any

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
   
  }


  create(Survey){
    console.log("~Component~ Create()")
    var tempObs = this._httpService.postSurvey(this.Survey);
    tempObs.subscribe((data:any)=>{
      console.log("~Component: create() response~", data);
      
      if(!data.error){
        console.log("~Component: create() successful~")
        this._router.navigate(["/dashboard"]);
      }
      else{
        console.log("~Component: editSubmit() Error~", data.error)
        this.error= data.error.message.slice(25).split(",")
        console.log(this.error)
      }
    })
  }
  
}
