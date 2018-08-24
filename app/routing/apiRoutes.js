var survey = [];
module.exports = function(app) {

app.get("/api/survey", function(req, res) {
    return res.json(survey);
  });

  app.post("/api/survey", function(req, res) {
    var newSurvey = req.body;

    console.log("This is req.body " + JSON.stringify(req.body));

    res.json(newSurvey);
  });
};

 //results
 app.post("/countries", function(req, res){
      //push in user's info into an array
      //push in countries' info into an array
    console.log(req.body);
      
  })
