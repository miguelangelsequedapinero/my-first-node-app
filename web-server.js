
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const port = 3002


/* All facts */
app.get('/facts', (req, res) => {
    const filePath = path.join(__dirname, 'facts.json');

    fs.readFile(filePath, 'utf8', (err ,data) => {
      if(err) {
          res.send(err.message)
      } else {
          res.send(JSON.parse(data));
      }

    });

});

/* Facts ID */
app.get('/facts/:factId', (req, res) => {
    const filePath = path.join(__dirname, 'facts.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
      if(err) {
          res.send(err.message)
      } else {
            const allFactsObject = JSON.parse(data);

            const foundFact = allFactsObject.all.find((fact) => {
                return fact._id === req.params.factId
            });

            res.send(foundFact);
        }
    });
});

app.listen(port);
