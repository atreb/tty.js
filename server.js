const tty = require('./lib/tty.js'),
  app = tty.createServer({
    shell: 'bash',
    port: process.env.PORT || 4000
  });

app.get('/_health', (req, res) => {
  res.send(':-)');
});

app.listen();
