module.exports.security = function(req, res, next) {
  res.removeHeader('X-Powered-By');  
  next();
}

module.exports.cors = function (req, res, next) {  
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
}

module.exports.errorGeneralHandler = function (err, req, res, next) {  
  res.status(500).send({
    error: process.env.NOD_ENV === 'development' ? err : {},
    message: err.message,
  });
}