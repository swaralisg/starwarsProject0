const request = require("request");
let urlConfig = {
  rejectUnauthorized: false,
};

// Defining the endpoint for fetching the data for a character after entering the name
exports.getallpeoplename = async (req, res, next) => {
  try {
    urlConfig["url"] = "https://swapi.dev/api/people";
    request(urlConfig, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var jsonResponse = JSON.parse(body);
        let resultSet = jsonResponse.results;
        for (var i = 0; i < resultSet.length; i++) {
          if (resultSet[i].name == req.params.peoplename) {
            return res.json(resultSet[i]);
          }
        }
      }
    });
  } catch (err) {
    res.json({ message: err });
  }
};

// Defining the endpoint for fetching the data after appending id
exports.getPeopleById = async (req, res, next) => {
  try {
    var id = req.params.peopleId;
    urlConfig["url"] = "https://swapi.dev/api/people/" + id;
    request(urlConfig, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var jsonResponse = JSON.parse(body);
        let userData = [];
        userData.push(jsonResponse);
        res.json(userData);
      }
    });
  } catch (err) {
    res.json({ message: err });
  }
};

exports.getallpeople = async (req, res, next) => {
  try {
    urlConfig["url"] = "https://swapi.dev/api/people";
    request(urlConfig, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var jsonResponse = JSON.parse(body);
        let resultSet = jsonResponse.results;
        res.json(resultSet);
      }
    });
  } catch (err) {
    res.json({ message: err });
  }
};

// Defining an endpoint for fetching all the data after hitting the nested APIs
exports.otherAPIs = async (req, res, next) => {
  try {
    urlConfig["url"] = req.body.targetEndpoint;
    request(urlConfig, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var jsonResponse = JSON.parse(body);
        res.json(jsonResponse);
      }
    });
  } catch (err) {
    res.json({ message: err });
  }
};

return exports;
