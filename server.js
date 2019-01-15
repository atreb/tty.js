const tty = require('./lib/tty.js');
const fs = require('fs');

const bashRcPath = `${require('os').homedir()}/.bashrc`;
fs.stat(bashRcPath, err => {
  const data = '\nset +o history\n';

  if (err) {
    fs.writeFileSync(bashRcPath, data);
  } else {
    fs.appendFileSync(bashRcPath, data);
  }
});

const app = tty.createServer({
  shell: 'bash',
  port: process.env.PORT || 4000
});

app.get('/_health', (req, res) => {
  res.send(':-)');
});

app.listen();
