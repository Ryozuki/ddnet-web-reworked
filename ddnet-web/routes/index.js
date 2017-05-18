var express = require('express');
var useragent = require('useragent');
var constants = require('../constants');

var router = express.Router();

router.get('/', function(req, res, next) {
  var agent = useragent.parse(req.headers['user-agent']);

  var currentDonationPercent = (constants.donatedCurYear / constants.maxDontationCurYear) * 100;
  var donationPercent = (constants.donated / constants.maxdonation) * 100;

  console.log(agent);
  res.render('index', { 
    title: constants.title,
    version: constants.version,
    useragent: agent,
    video_link: constants.video,
    download_text: "Download DDraceNetwork Client & Server ",
    maxDontationCurYear: constants.maxDontationCurYear,
    donatedCurYear: constants.donatedCurYear,
    donated: constants.donated,
    maxdonation: constants.maxdonation,
    currentYear: constants.currentYear,
    currentDonationPercent: currentDonationPercent,
    donationPercent: donationPercent
 });
});

// TODO: Detect 32-64 bits

module.exports = router;
