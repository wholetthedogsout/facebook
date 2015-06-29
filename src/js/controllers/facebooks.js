'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');

router.route('', 'facebook', function () {
  console.log('no');
  $.ajax({
    url: 'data/facebook.data',
    method: 'GET'
  })
  .then(parseFacebookCsv)
  .then(parseLang)
  .then(renderFacebook);
 

  function parseFacebookCsv(FacebookCsv) {
    return FacebookCsv
      .split('\n')
      .map(function (record) {
        var cells = record.split(',');
        return {
          id: cells[0],
          sex: cells[24],
          age: cells[25],
          education: cells[26],
          income: cells[29]
        };
      });   
  }
  
  function parseLang(facebookArray) {
    var arr = facebookArray;
    $.each(arr, function() {
    if (this.sex == "1") {
        this.sex = "male";
    }
    if (this.sex == "2") {
        this.sex = "female";
    }
    if (this.education == "1") {
        this.education = "< High School";
    }
    if (this.education == "2") {
        this.education = "Some High School";
    }
    if (this.education == "3") {
        this.education = "High School Graduate";
    }
    if (this.education == "4") {
        this.education = "Some College";
    }
    if (this.education == "5") {
        this.education = "Two Year Degree";
    }
    if (this.education == "6") {
        this.education = "Four Year Degree";
    }
    if (this.education == "7") {
        this.education = "Some Grad Work";
    }
    if (this.education == "8") {
        this.education = "Graduate Degree";
    }
    if (this.education == "9") {
        this.education = "NA";
    }
});
  console.log(arr);
  return arr;
  }
  
  function renderFacebook(facebookArray) {
    var facebookTemplate = views['facebooks-template'];
    var templateFn = _.template(facebookTemplate, { variable: 'm' });
    var facebookHTML = templateFn({ facebooks: facebookArray });
    
    $('.main-content').html(facebookHTML);
  }
});