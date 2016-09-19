var express = require('express');
var Resource = require('../models/resourceModel');
var router = express.Router();

router.get('/allResources', function(req, res){
	Resource.find({}, null, {sort: {name: -1}}).exec(function (err, resources){
		if (err){
			console.log("Error: ", err);
		} else {
			res.json(resources);
		}
	});
});

router.post('/postResource', function(req, res){
	var newResource = new Resource({name: req.body.name,
		link: req.body.link,
		level: req.body.level,
		type: req.body['type'],
		subject: req.body.subject,
		tags: req.body['tags'],
		description: req.body.description
	});

	newResource.save(function(err, resource){
		if (err) {
			console.log("Error: ", err);
		} else {
			console.log("Resource created");
			res.send({
      	message: "Resource created"
      });
		}
	})

});

module.exports = router;
