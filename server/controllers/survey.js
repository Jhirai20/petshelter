var mongoose = require("mongoose");
var Survey = mongoose.model("Survey");

module.exports = {
//LOGIN REG
    login: function(req, res){
            console.log("~login~")
            User.create({name: req.body.name}, function(err){
                if(err){
                    res.json({message: "Error!", error: err});
                }
                else{
                    // res.json({message: "Success! new user created", added: true});
                    req.session.name= req.body.name
                    console.log(req.session)
                    res.json({name:req.session.name})
                }
            })
        },
    indexlogin: function(req, res){
        console.log("~Controller: showlogin() initialized~");
        User.find({},function(err, Survey){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json(Survey);
            }
        })
    },
    //do you need to fine the actually obj or name?
    finduser: function(req,res){
        Survey.findOneAndUpdate({name: req.session.name}, {$push: {name: name}}, function(err, data){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", added: true});
            }
        })
        res.json({message: "Success!", added: true});
    },

        // User.findOne({_id: id},function(err, Survey){
        //     if(err){
        //         res.json({message: "Error!", error:err})
        //     }
        //     else{
        //         res.json(survey)
        //     }
        // })
//SESSION
    // setSession: function(req,res){
    //     console.log("~setSession~ controller" + req.body)
    //     req.session.name= req.body.name
    //     console.log(req.session)
    //     res.json({name:req.session.name})
    // },
    // getSession: function(req,res){
    //     console.log("~getSession~controller"+ req.session.name)
    //     res.json({name:req.session.name})
    // },
    // deleteSession: function(req,res){
    //     console.log("~deleteSession~controller")
    //     req.session.name=""
    //     res.json({name:""})
    // },

//CRUD
    index: function(req, res){
        console.log("~Controller: index() initialized~");
        Survey.find({}, function(err, survey){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json(survey);
            }
        }).sort( { type: 1 } )
    },

    show: function(req, res){
        console.log("~Controller: show() initialized~");
        let id = req.params.id;
        Survey.findOne({_id: id},function(err, Survey){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json(Survey);
            }
        })
    },

    addSurvey: function(req, res){
        Survey.create({ name: req.body.name, type: req.body.type , description: req.body.description ,skill1: req.body.skill1 ,skill2: req.body.skill2 , skill3: req.body.skill3 , likes :0  }, function(err, newSurvey){
        if(err){
            res.json({message: "Error!", error: err});
        }
        else{
            res.json({success: "Success!"})

        }
    })
        
    
        console.log("~Controller: addSurvey() initialized~");
    },
    editSurvey: function(req, res){
        console.log("~Controller: editSurvey() initialized~");
        let id = req.params.id;
        Survey.findById(id, function(err, obj){
            console.log("~Controller: editSurvey() - findById initialized~"+obj);
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                
                if(req.body.likes){
                    console.log(obj.likes)
                    obj.likes= req.body.likes 
                }
                if(req.body.name){
                   
                    obj.name= req.body.name 
                }
                if(req.body.type){
                    
                    obj.type= req.body.type 
                }
                if(req.body.skill1){
                    console.log(obj.skill1)
                    obj.skill1= req.body.skill1 
                }
                if(req.body.skill2){
                    
                    obj.skill2= req.body.skill2
                }
                if(req.body.skill3){
                    console.log(obj.skill3)
                    obj.skill3= req.body.skill3
                }
                if(req.body.description){
                    console.log(obj.description)
                    obj.description= req.body.description
                }
                console.log("~Controller: editSurvey() - save initialized~");
                obj.save(function(err, object){
                
                if(err){
                    res.json({message: "Error!", error: err});
                }
                else{
                    console.log("~Controller: editSurvey() - saved~"+ object);
                    res.json({message: "Success!", Survey: object})
                }
            })
            }
        })
    },

    deleteSurvey: function(req, res){
        console.log("~Controller: deleteSurvey() initialized~");
        let id = req.params.id;
        Survey.remove({_id: id},function(err){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", removed: true});
            }
        })
    },
}