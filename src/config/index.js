const mailsender = require('./email-config');

module.exports = {
    ServerConfig: require('./server-config'),
    Logger: require('./logger-config'),
    mailsender : require('./email-config')
}