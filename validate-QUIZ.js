function validate()
{
  var userName = document.forms[0].UserInfo.value;
  var q1 = document.forms[0].Q1.value;
  var score = 0;
  var error =[];
  var generic ="Please pay attention to fallowing: \n";
  var nameError = "Enter your name \n";
  var oneError = "Answer the first question \n";
  var twoErrorOne = "You have checked more than 2 boxes \n";
  var twoErrorTwo = "Make sure you have checked 2 boxes \n";
  var threeError = "Answer the third question \n";
  var fourError = "Answer the fourth question \n";
  error.push(generic);
//prevents user from leaving the name section empty or just entering white space
  if (userName == "" || /^\s*$/.test(userName))
{
  error.push(nameError);
  document.getElementById("UserInfo").style.backgroundColor = "yellow";
}
//scores if question 1 answer is correct, warns if left unanswered
if(q1 == "c")
{
  score++;
}
else if(q1 == "")
{
    error.push(oneError);
    document.getElementById("Q1").style.backgroundColor = "yellow";
}
//scores if question 2 answer is correct, warns if left unanswered
var q2a = document.getElementById("Q2a").checked;
var q2b = document.getElementById("Q2b").checked;
var q2c = document.getElementById("Q2c").checked;
var q2d = document.getElementById("Q2d").checked;
var question2 = [q2a, q2b, q2c, q2d];
var x=0;

for(var i = 0; i < question2.length; i++)
{
  if(question2[i] == true)
  {
    x++;

  }
}

//checks if the user selects more or less than 2
    if(x > 2)
    {
      error.push(twoErrorOne);
      document.getElementById("Q2").style.backgroundColor = "yellow";

    }
    else if (x < 2)
    {
      error.push(twoErrorTwo);
      document.getElementById("Q2").style.backgroundColor = "yellow";

    }
    else if (q2a == true )
    {
      score++;
      if (q2c == true)
      {
        score++;
      }
    }
    else if (q2c == true)
    {
      score++
      if (q2a == true)
      {
        score++;
      }
    }
//scores if question 3 answer is correct, warns if left unanswered

var q3 = document.forms[0].Q3.value;

if(q3 == "b")
{
  score++;
}
else if(q3 == "")
{
    error.push(threeError);
    document.getElementById("Q3").style.backgroundColor = "yellow";

}
//scores if question 4 answer is correct, warns if left unanswered

var question4 = document.forms[0].Q4.value;
var answer = "british, australian & new zealand sign language";
var answer2 = "british australian new zealand sign language";

if (question4.toLowerCase() == answer)
{
  score++;
}
else if (question4.toLowerCase() == answer2)
{
  score++;
}
else if (question4 == "" || /^\s*$/.test(question4))//dont let white space or null
{
  error.push(fourError);
  document.getElementById("Q4").style.backgroundColor = "yellow";

}
//shows the final score if no question is left unanswered, otherwise prints the warning
if(error.length === 1 )
{
  document.forms[0].thisScore.value = score;

  document.getElementById("Q4").style.backgroundColor = null;
  document.getElementById("Q3").style.backgroundColor = null;
  document.getElementById("Q2").style.backgroundColor = null;
  document.getElementById("Q1").style.backgroundColor = null;


  alert("thank you, your score is: "+score+ "/5");

}
else
{
  alert(error);
  return false;
}

}
