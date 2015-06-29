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
    if ($('.chartType').val() == "2") {
       var arr = facebookArray;
       var Yes = 0;
       var No  = 0;
       $.each(arr, function() {
         if (this.internet_user === "1" && this.facebook_user ==="1") {
              Yes++;
          }
          if (this.internet_user === "1" && this.facebook_user ==="2") {
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
  if ($('.chartType').val() == "3") {
       var arr = facebookArray;
       var Male = 0;
       var Female  = 0;
       $.each(arr, function() {
         if (this.facebook_user === "1" && this.sex ==="male") {
              Male++;
          }
          if (this.facebook_user === "1" && this.sex ==="female") {
              Female++;
          }
       }); 
       console.log(Male);
        console.log(Female);
         c3.generate({
          bindto: '.internet-chart',
          data: {
            columns: [
              ['Male', Male],
              ['Female', Female],
            ],
            type : 'pie'
          },
          color: {
            pattern: ['#3FBEBB', '#FF5843', '#39B54A']
          }
        });
    }
      if ($('.chartType').val() == "4") {
       var arr = facebookArray;
       var one = 0;
       var two = 0;
       var three = 0;
       var four = 0;
       var five = 0;
       var six = 0;
       var seven = 0;
       var eight = 0;
       var nine = 0; 
       var ninenine = 0;
       $.each(arr, function() {
         if (this.facebook_user === "1" && this.income ==="1") {
              one++;
          }
          if (this.facebook_user === "1" && this.income ==="2") {
              two++;
          }
          if (this.facebook_user === "1" && this.income ==="3") {
              three++;
          }
          if (this.facebook_user === "1" && this.income ==="4") {
              four++;
          } 
          if (this.facebook_user === "1" && this.income ==="5") {
              five++;
          }  
          if (this.facebook_user === "1" && this.income ==="6") {
              six++;
          }   
          if (this.facebook_user === "1" && this.income ==="7") {
              seven++;
          }  
           if (this.facebook_user === "1" && this.income ==="8") {
              eight++;
          }    
           if (this.facebook_user === "1" && this.income ==="9") {
              nine++;
          } 
          if (this.facebook_user === "1" && this.income ==="99") {
              ninenine++;
          }         
       }); 
         c3.generate({
          bindto: '.internet-chart',
          data: {
            columns: [
              ['< $10k', one],
              ['$10k-$20K', two],
              ['$20k-$30K', three],
              ['$30k-$40K', four],
              ['$40k-$50K', five],
              ['$50k-$75K', six],
              ['$75k-$100K', seven],
              ['$100k-$150K', eight],
              ['$150K+', nine],
              ['NA', ninenine], 
            ],
            type : 'pie'
          },
          color: {
            pattern: ['#3FBEBB', '#FF5843', '#39B54A', '#E0B81A', '#D44B91', '#42758A', '#81BD1D', '#E86F28', '#368E5C']
          }
        });
    }
    if ($('.chartType').val() == "5") {
       var arr = facebookArray;
       var one = 0;
       var two = 0;
       var three = 0;
       var four = 0;
       var five = 0;
       var six = 0;
       var seven = 0;
       var eight = 0;
       var nine = 0; 
       $.each(arr, function() {
         if (this.facebook_user === "1" && this.education ==="< High School") {
              one++;
          }
          if (this.facebook_user === "1" && this.education ==="Some High School") {
              two++;
          }
          if (this.facebook_user === "1" && this.education ==="High School Graduate") {
              three++;
          }
          if (this.facebook_user === "1" && this.education ==="Some College") {
              four++;
          } 
          if (this.facebook_user === "1" && this.education ==="Two Year Degree") {
              five++;
          }  
          if (this.facebook_user === "1" && this.education ==="Four Year Degree") {
              six++;
          }   
          if (this.facebook_user === "1" && this.education ==="Some Grad Work") {
              seven++;
          }  
           if (this.facebook_user === "1" && this.education ==="Graduate Degree") {
              eight++;
          }    
           if (this.facebook_user === "1" && this.education ==="NA") {
              nine++;
          } 
         
       }); 
       console.log(three);
         c3.generate({
          bindto: '.internet-chart',
          data: {
            columns: [
              ['< High School', one],
              ['Some High School', two],
              ['High School Graduate', three],
              ['Some College', four],
              ['Two Year Degree', five],
              ['Four Year Degree', six],
              ['Some Grad Work', seven],
              ['Graduate Degree', eight],
              ['NA', nine],
            ],
            type : 'pie'
          },
          color: {
            pattern: ['#3FBEBB', '#FF5843', '#39B54A', '#E0B81A', '#D44B91', '#42758A', '#81BD1D', '#E86F28']
          }
        });
    }
      if ($('.chartType').val() == "8") {
       var arr = facebookArray;
       var Male = 0;
       var Female  = 0;
       $.each(arr, function() {
         if (this.facebook_user === "2" && this.sex ==="male") {
              Male++;
          }
          if (this.facebook_user === "2" && this.sex ==="female") {
              Female++;
          }
       }); 
       console.log(Male);
        console.log(Female);
         c3.generate({
          bindto: '.internet-chart',
          data: {
            columns: [
              ['Male', Male],
              ['Female', Female],
            ],
            type : 'pie'
          },
          color: {
            pattern: ['#3FBEBB', '#FF5843', '#39B54A']
          }
        });
    }
    if ($('.chartType').val() == "6") {
       var arr = facebookArray;
       var one = 0;
       var two = 0;
       var three = 0;
       var four = 0;
       var five = 0;
       var six = 0;
       var seven = 0;
       var eight = 0;
       var nine = 0; 
       var ninenine = 0;
       $.each(arr, function() {
         if (this.facebook_user === "2" && this.income ==="1") {
              one++;
          }
          if (this.facebook_user === "2" && this.income ==="2") {
              two++;
          }
          if (this.facebook_user === "2" && this.income ==="3") {
              three++;
          }
          if (this.facebook_user === "2" && this.income ==="4") {
              four++;
          } 
          if (this.facebook_user === "2" && this.income ==="5") {
              five++;
          }  
          if (this.facebook_user === "2" && this.income ==="6") {
              six++;
          }   
          if (this.facebook_user === "2" && this.income ==="7") {
              seven++;
          }  
           if (this.facebook_user === "2" && this.income ==="8") {
              eight++;
          }    
           if (this.facebook_user === "2" && this.income ==="9") {
              nine++;
          } 
          if (this.facebook_user === "2" && this.income ==="99") {
              ninenine++;
          }         
       }); 
         c3.generate({
          bindto: '.internet-chart',
          data: {
            columns: [
              ['< $10k', one],
              ['$10k-$20K', two],
              ['$20k-$30K', three],
              ['$30k-$40K', four],
              ['$40k-$50K', five],
              ['$50k-$75K', six],
              ['$75k-$100K', seven],
              ['$100k-$150K', eight],
              ['$150K+', nine],
              ['NA', ninenine], 
            ],
            type : 'pie'
          },
          color: {
            pattern: ['#3FBEBB', '#FF5843', '#39B54A', '#E0B81A', '#D44B91', '#42758A', '#81BD1D', '#E86F28', '#368E5C']
          }
        });
    }
     if ($('.chartType').val() == "7") {
       var arr = facebookArray;
       var one = 0;
       var two = 0;
       var three = 0;
       var four = 0;
       var five = 0;
       var six = 0;
       var seven = 0;
       var eight = 0;
       var nine = 0; 
       $.each(arr, function() {
         if (this.facebook_user === "2"  && this.education ==="< High School") {
              one++;
          }
          if (this.facebook_user === "2" && this.education ==="Some High School") {
              two++;
          }
          if (this.facebook_user === "2" && this.education ==="High School Graduate") {
              three++;
          }
          if (this.facebook_user === "2" && this.education ==="Some College") {
              four++;
          } 
          if (this.facebook_user === "2" && this.education ==="Two Year Degree") {
              five++;
          }  
          if (this.facebook_user === "2" && this.education ==="Four Year Degree") {
              six++;
          }   
          if (this.facebook_user === "2" && this.education ==="Some Grad Work") {
              seven++;
          }  
           if (this.facebook_user === "2" && this.education ==="Graduate Degree") {
              eight++;
          }    
           if (this.facebook_user === "2" && this.education ==="NA") {
              nine++;
          } 
         
       }); 
       console.log(three);
         c3.generate({
          bindto: '.internet-chart',
          data: {
            columns: [
              ['< High School', one],
              ['Some High School', two],
              ['High School Graduate', three],
              ['Some College', four],
              ['Two Year Degree', five],
              ['Four Year Degree', six],
              ['Some Grad Work', seven],
              ['Graduate Degree', eight],
              ['NA', nine],
            ],
            type : 'pie'
          },
          color: {
            pattern: ['#3FBEBB', '#FF5843', '#39B54A', '#E0B81A', '#D44B91', '#42758A', '#81BD1D', '#E86F28']
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