import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Surveys = []
  userName=""
  displayPolls
  displayPollsQ
  bob={search:""}
  allPolls
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    // this.authenticate()
    this.loadPage()
    
  }
  // authenticate(){ console.log("~Component: authenticate() initialzed~")
  //   let self = this
  //   let tempObs = this._httpService.getSession();
  //   tempObs.subscribe((data:any)=>{
  //     console.log("~Component: authenticate() response~", data)
  //     self.userName = data.name;
  //     console.log(self.userName)
  //     if (this.userName==""){this._router.navigate([""])}
  //   })
  // }
  permission(name){
    
    return this.userName==name
  }

  loadPage(){
    console.log("~Component: loadPage() initialzed~")
    let tempObs = this._httpService.getAllSurveys();
    tempObs.subscribe((data:any)=>{
      console.log("~Component: loadPage() response~", data)
      this.Surveys = data;
      console.log("*****"+this.Surveys[0].name[0].name)
      this.allPolls= data
    })
  }
  format(dt){
    let date = new Date(dt)
    return date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear()
  }

  
  performSearch(){
    console.log(this.bob)
    console.log(this.allPolls)
    this.displayPollsQ=[]
    this.displayPolls=[]
    if(this.bob.search==""){
      this.displayPolls=[]
      this.displayPollsQ=[]
    }
    else{
        for(var i=0; i<this.allPolls.length; i++){
          if(this.allPolls[i].name[0].name.startsWith(this.bob.search)){
            this.displayPolls.push(this.allPolls[i])
          }
          if(this.allPolls[i].question.startsWith(this.bob.search)){
            this.displayPollsQ.push(this.allPolls[i])
          }
        }
      }
    }
}