const figlet = require('figlet');
const express = require('express');

const app = express();
app.enable('trust proxy');

const title = figlet.textSync('FIGlet as a Service', { font: 'Doom' });

const info = `${title}\n`
  + '              Fetal-Neonatal Neuroimaging & Developmental Science Center\n'
  + "                            Boston Children's Hospital\n"
  + "                              and the Mass Open Cloud\n"

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
    font: 'Doom',
  }, function(err, data) {
    if (err) {
        console.dir(err);
        return;
    }
    res.status(200).send(data);
  });
});

app.listen(process.env.PORT || 8080);
