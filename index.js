const figlet = require('figlet');
const express = require('express');

const app = express();
app.enable('trust proxy');

const title = figlet.textSync('FIGlet as a Service', { font: 'Bulbhead' });

const info = `${title}\n\n\n`
  + 'Hello ENG EC 528 Cloud Computing!\n'
  + "This is an example JavaScript application to demo OpenShift Deployment\n"

app.get('/', (req, res) => {
  res.type('text/plain');
  if (!req.query.message) {
    res.status(400).send(
      info + '\n\n' +
      `usage: curl '${req.protocol}://${req.hostname}${req.path}?message=YOUR+TEXT'`
    );
    return;
  }
  figlet.text(req.query.message, {
    font: 'Bulbhead',
  }, function(err, data) {
    if (err) {
        console.dir(err);
        return;
    }
    res.status(200).send(data);
  });
});

app.listen(process.env.PORT || 8080);
