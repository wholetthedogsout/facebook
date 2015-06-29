'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');
var c3 = require('c3');

router.route('', 'facebook', function () {
  $.ajax({
    url: 'data/facebook.data',
    method: 'GET'
  })
  .then(parseFacebookCsv)
  .then(parseLang)
  .then(renderFacebook)
  .then(countInt);
  
 

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
          income: cells[29],
          internet_user: cells[9],
          facebook_user: cells[12]
        };
      });   
  }
  
  function countInt (facebookArray) {
  $('.chartType').change(function () {
    if ($('.chartType').val() == "1"){
        var arr = facebookArray;
         var Yes = 0;
          var No  = 0;
        $.each(arr, function() {
         
          if (this.internet_user === "1") {
              Yes++;
          }
          if (this.internet_user == "2") {
              No++;
          }
        }); 
        console.log(Yes);
        console.log(No);
         c3.generate({
          bindto: '.internet-chart',
          data: {
            columns: [
              ['Yes', Yes],
              ['No', No],
            ],
            type : 'pie'
          },
          color: {
            pattern: ['#3FBEBB', '#FF5843', '#39B54A']
          }
        });
    }
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
  return arr;
  }
  
  function renderFacebook(facebookArray) {
    var facebookTemplate = views['facebooks-template'];
    var templateFn = _.template(facebookTemplate, { variable: 'm' });
    var facebookHTML = templateFn({ facebooks: facebookArray });
    
    $('.main-content').html(facebookHTML);
   return facebookArray;
  }
});