var app = require('./src/app');

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

//TODO: add winston logger https://github.com/winstonjs/winston
