var calculate = function(choice1,choice2,choice3,choice4,choice5,choice6)
{
  return choice1 + choice2 + choice3 + choice4 + choice5 + choice6;
}


$(document).ready(function()
{
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

    if (results>1)
    {
      $("#javaScript").show();
    }
    else if (results==0) {
      $("#cSharp").show();
    }
    else if (results<-1)
    {
      $("#java").show();
    }
    else
    {
      $("#error").show();
    }
  });
});
