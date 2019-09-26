import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Survey={name:"",
  type:"",
  description:"",
  skill1:"",
  skill2:"",
  skill3:""
  }
  name:any
  id:string
  error:any
    constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  
    ngOnInit() {
      this.id=this._route.snapshot.params.id
      this.loadpage(this.id)
  
    }

    loadpage(id){
      console.log("~PollComponent: loadPage() initialzed~")
        let tempObs = this._httpService.getOneSurvey(id);
        tempObs.subscribe((data:any)=>{
          console.log("~Component: loadPage() response~", data)
          this.Survey=data
        })
    }
    create(){
      console.log("~Component~ Create()")
      var tempObs = this._httpService.editSurvey(this.id, this.Survey);
      tempObs.subscribe((data:any)=>{
        console.log("~Component: edit() response~", data);
        if(!data.error){
          console.log("~Component: edit() successful~")
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
