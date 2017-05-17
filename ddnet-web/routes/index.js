var express = require('express');
var useragent = require('useragent');
var constants = require('../constants');

var router = express.Router();

router.get('/', function(req, res, next) {
  var agent = useragent.parse(req.headers['user-agent']);
  res.render('index', { 
    title: constants.title,
    version: constants.version,
    OS: agent.os.toString(),
    video_link: 'https://www.youtube.com/embed/sbYJ4UeFUPU?autoplay=0&hd=1&iv_load_policy=3',
    download_text: "Download DDraceNetwork Client & Server "
 });
});

// TODO: Detect 32-64 bits

module.exports = router;
