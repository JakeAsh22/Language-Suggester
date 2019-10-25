var calculate = function(choice1,choice2,choice3,choice4,choice5,choice6)
{
  return choice1 + choice2 + choice3 + choice4 + choice5 + choice6;
}

$(document).ready(function()
{
  $("form#nameForm").submit(function(event)
  {
  var name = $("#name").val();
  $("form#nameForm").hide();
  $("form#suggestForm").show();
  event.preventDefault();
  });
  $("form#suggestForm").submit(function(event)
  {
    event.preventDefault();
    var question1 = parseInt($("input:radio[name=choice1]:checked").val());
    var question2 = parseInt($("input:radio[name=choice2]:checked").val());
    var question3 = parseInt($("input:radio[name=choice3]:checked").val());
    var question4 = parseInt($("input:radio[name=choice4]:checked").val());
    var question5 = parseInt($("input:radio[name=choice5]:checked").val());
    var question6 = parseInt($("input:radio[name=choice6]:checked").val());
    var results= calculate(question1,question2,question3,question4,question5,question6);
    $(".answers").hide();
    $("#quizButton").hide();
    $("form#suggestForm").hide();
    if (results>1)
    {
      $("#javaScript").show();
    }
    else if (results==0) {
      $("#cSharp").show();
      $("#quizButton").show();
    }
    else if (results<-1)
    {
      $("#java").show();
      $("#quizButton").show();
    }
    else
    {
      $("#error").show();
      $("#quizButton").show();
    }
  });
  $("form#resultsPage").submit(function(event)
    {
      event.preventDefault();
      $(".answers").hide();
      $("form#suggestForm").show();
    })
});
