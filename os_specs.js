var os = require(‘os’);

module.exports = function() {
    return {
        EOL: os.EOL,
        arch: os.arch(),
        cpus: os.cpus(),
        endianness: os.endianness(),
        homedir: os.homedir(),
        hostname: os.hostname(),
        networkInterfaces: os.networkInterfaces(),
        platform: os.platform(),
        release: os.release(),
        tmpdir: os.tmpdir(),
        totalmem: os.totalmem(),
        type: os.type()
    };
};