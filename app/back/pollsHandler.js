'use strict';

function PollsHandler (db) {
	var polls = db.collection('polls');
	
	this.addPoll = function (req, res) {
	    var poll = req.body;
		//console.log("bod", bod);
		//res.json(bod);
    
	    polls.insert(poll, function(err, data) {
	      if (err) throw err;
	      console.log(JSON.stringify(poll));
	      db.close();
	      
	      res.writeHead(200, { 'Content-Type': 'text/json' });
	      res.end(JSON.stringify( {id: poll['_id']} ));
	    });
	};
		
		/*polls
			.findAndModify(
				{},
				{ '_id': 1 },
				{ $inc: { 'clicks': 1 } },
				function (err, result) {
					if (err) {
						throw err;
					}

					res.json(result);
				}
			);
	};*/

	/*this.getClicks = function (req, res) {
		clicks
			.findOne(
				{},
				{ '_id': false },
				function (err, result) {
					if (err) {
						throw err;
					}

					var clickResults = [];

					if (result) {
						clickResults.push(result);
						res.json(clickResults);
					} else {
						clicks.insert({ 'clicks': 0 }, function (err) {
							if (err) {
								throw err;
							}

							clicks.findOne({}, {'_id': false}, function (err, doc) {
								if (err) {
									throw err;
								}

								clickResults.push(doc);
								res.json(clickResults);
							});

						});

					}
				}
			);
	};

	this.resetClicks = function (req, res) {
		clicks
			.update(
				{},
				{ 'clicks': 0 },
				function (err, result) {
					if (err) {
						throw err;
					}

					res.json(result);
				}
			);
	};*/

}

module.exports = PollsHandler;
