const bunyan = require('bunyan');
const config = require('config');
const fs = require('fs');
const mkdirp = require('mkdirp');

const loggerConfig = {
  name: 'main',
  level: config.log.info || 'info',
  streams: [{
    type: 'rotating-file',
    path: config.log.path || `${__dirname}/../logs/main.log`,
    period: '1d',
    count: 5
  }],
  serializers: bunyan.stdSerializers
};

// if (config.util.getEnv('NODE_ENV') === 'development') {
loggerConfig.streams.push({
  stream: process.stdout,
  level: config.log.info || 'info'
});
// }

function ensureLogsFolderExists() {
  const pathToLogs = (config.log.path && config.log.path.slice(0, config.log.path.lastIndexOf('/'))) || `${__dirname}/../logs`;
  return new Promise((resolve, reject) => {
    try {
      fs.statSync(pathToLogs);
      resolve();
    } catch (err) {
      mkdirp(pathToLogs, e => (e ? reject(e) : resolve()));
    }
  }).catch((err) => {
    console.log('Couldnt create log directory', err); // eslint-disable-line no-console
  });
}

module.exports = () => ensureLogsFolderExists().then(() => {
  const log = bunyan.createLogger(loggerConfig);
  global.log = log;
  return log;
});