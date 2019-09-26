import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  login(login){
    console.log("~Login~ initialized")
    return this._http.post("/login",login)
  }
  logout(){
    console.log("~logout~ http.service")
    return this._http.get("/deleteSession")
  }
  setsesson(login){
    console.log("~setsesson~ http.service")
   return this._http.get("/setSession", login)
  }
  getSession(){
    console.log("~getSession~ http.service")
    return this._http.get("/getSession")
  }

  validateuser(id:string){
    console.log("~validateuser~ initialized")
    return this._http.get("/finduser."+id);
  }


  getAllSurveys(){
    console.log("~Service: getAllSurvey() initialized~");
    return this._http.get("/api/Survey");
  }

  getOneSurvey(id:string){
    console.log("~Service: getOneSurvey() initialized~", id);
    return this._http.get("/api/Survey/"+id);
  }

  postSurvey(SurveyObj){
    console.log("~Service: postSurvey() initialized~", SurveyObj);
    return this._http.post("/api/add", SurveyObj);
  }
  editSurvey(id:string, SurveyObj){
    console.log("~Services: EditSurvey() initialized", SurveyObj)
    return this._http.put("/api/edit/"+id, SurveyObj)
  }

  deleteSurvey(id:string){
    console.log("~Service: deleteSurvey() initialized~", id);
    return this._http.delete("/api/delete/"+id);
  }
}