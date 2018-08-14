'use sctrict';

exports.processRequest = function (req,res){

	if (req.body.result.action == "schedule") 
	  { // nome evento dialogflor	    
	    return res.json({

	    	displayText : "test-risposta_schedule"

	    });
	  }
	  else if (req.body.result.action == "tell.about") //eventi dialogflow
	  {
	      return res.json({
	      		displayText : "test-risposta-tell.about"
	      });
	  }

}