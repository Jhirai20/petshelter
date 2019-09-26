var Survey = require("../controllers/survey.js");
var path = require("path");

module.exports = function(app){
    //login and session

    // app.post("/login", Survey.login)

    // app.get("/alllogin", Survey.indexlogin)

    // app.get("/finduser/:id", Survey.finduser)

    // app.get("/setSession", Survey.setSession)
    // app.get("/getSession", Survey.getSession)
    // app.get("/deleteSession", Survey.deleteSession)

    //basic 5 routes
    app.get("/api/Survey", Survey.index)

    app.get("/api/Survey/:id", Survey.show)

    app.post("/api/add", Survey.addSurvey)

    app.put("/api/edit/:id", Survey.editSurvey)

    app.delete("/api/delete/:id", Survey.deleteSurvey)

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}