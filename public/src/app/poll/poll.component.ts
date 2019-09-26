import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  constructor(private _httpService: HttpService, private _router: Router,private route: ActivatedRoute) { }
id:string
  Survey={likes:0}
  clickMessage = ''
  EditObj
  clicked = false
  ngOnInit() {
    this.id=this.route.snapshot.params.id
    this.loadpage(this.id)
    console.log("~PollComponent~ loadpage "+this.route.snapshot.params.id)
  }

loadpage(id){
  console.log("~PollComponent: loadPage() initialzed~")
    let tempObs = this._httpService.getOneSurvey(id);
    tempObs.subscribe((data:any)=>{
      console.log("~Component: loadPage() response~", data)
      this.Survey=data
    })
}
vote(target,value){
  console.log("~PollComponent~: vote() "+ value)
  value=value+1
  if(target=='rating1'){this.Survey.likes= value}
  console.log(this.EditObj)
  let tempObs = this._httpService.editSurvey(this.id, this.Survey)
    tempObs.subscribe((data:any)=>{
      console.log("~Component: loadPage() response~", data)
    })
  }
  deleteSurvey(id:string){
    console.log("~Component: deleteSurvey() initialzed~")
    let observable = this._httpService.deleteSurvey(id);
    observable.subscribe(data=>{
      console.log("~Component: deleteAuthor() response~,", data)
      this._router.navigate(["/pets"])
    })
  }

}
