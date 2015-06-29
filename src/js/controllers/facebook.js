'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');


router.route('facebook/:id', function (userId) {
$.ajax({
    url: 'data/facebook.data',
    method: 'GET'
  })
  .then(parseFacebookCsv)
  .then(parseLang)
  .then(renderFacebookUser);
 

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
  
  function parseLang(facebookArray) {
    var arr = facebookArray;
    $.each(arr, function() {
    if (this.internet_user == "1") {
        this.internet_user = "Yes";
    }
    if (this.internet_user == "2") {
        this.internet_user = "No";
    }
    if (this.facebook_user == "1") {
        this.facebook_user = "Yes";
    }
    if (this.facebook_user == "2") {
        this.facebook_user = "No";
    }
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
     if (this.income == "1") {
        this.income = "< $10k";
     }
     if (this.income == "2") {
        this.income = "$10k-$20K";
     }
      if (this.income == "3") {
        this.income = "$20k-$30K";
     }
      if (this.income == "4") {
        this.income = "$30k-$40K";
     }
      if (this.income == "5") {
        this.income = "$40k-$50K";
     }
      if (this.income == "6") {
        this.income = "$50k-$75K";
     }
      if (this.income == "7") {
        this.income = "$75k-$100K";
     }
      if (this.income == "8") {
        this.income = "$100k-$150K";
     } 
      if (this.income == "9") {
        this.income = "$150K+";
     }
      if (this.income == "99") {
        this.income = "NA";
     }
});
  console.log(arr);
  return arr;
  }
  
  function renderFacebookUser(facebookArray) {
    var facebook = _.findWhere(facebookArray, { id: userId});
    var facebookTemplate = views['facebook-template'];
    var templateFn = _.template(facebookTemplate, { variable: 'm' });
    var facebookHTML = templateFn(facebook);
    
    $('.main-content').html(facebookHTML);
    
    //renderChart(bridge, bridgesArray);
  }
  });
//   function renderChart(bridge, bridgesArray) {
//     var older = bridgesArray.filter(function (b) {
//       return b.erected < bridge.erected;
//     }).length;
    
//     var newer = bridgesArray.filter(function (b) {
//       return b.erected > bridge.erected;
//     }).length;
    
//     c3.generate({
//       bindto: '.bridge-chart',
//       data: {
//         columns: [
//           ['Older', older],
//           ['Newer', newer],
//           ['Same', bridgesArray.length - newer - older]
//         ],
//         type : 'pie'
//       },
//       color: {
//         pattern: ['#3FBEBB', '#FF5843', '#39B54A']
//       }
//     });
//   }
// });