var daysUntilMyBirthday = 60;

for(var i = daysUntilMyBirthday; i >=0; i--){
  if(i >=30) {
    console.log(i + " "+"daysUntilMyBirthday. Such a long time... :(")
  }

  else if (i<30 && i>5){
    console.log(i+ " " + "days left!!")
  }

  else if (i<=5 && i>0){
    console.log(i+ " " + "DAYS UNTIL MY BIRTHDAY!!!")
  }

  else if (i == 0){
    console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
  }
}
