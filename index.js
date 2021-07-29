
module.exports = function () {
  return function (req, res, next) {
    req.globalPrivacyControl = !!(req.headers['sec-gpc'] && req.headers['sec-gpc'].charAt(0) === '1');
    next();
  };
};
