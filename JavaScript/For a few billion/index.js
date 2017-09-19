// reward after 30 days
var reward = 0.01;
for(i=1; i<=30; i++){
  reward=reward*2
}
console.log("the final reward after 30 days is: $" + reward);

// to$10,000
var daysto10k;
var reward = 0.01;
for(i=1; i<=Infinity; i++){
  reward=reward*2;
  if(reward>=10000 && reward<11000){
      daysto10k = i;
    }
  if(reward >=1000000000 && reward < 2000000000){
    daystobillion = i;
  }
  if(reward >=Infinity){
    daystoinfinity = i;
    break;
  }
}
console.log("It is " + daysto10k + " days to reach $10k")
console.log("It is " + daystobillion + " days to reach at least $1 billion")
console.log("It is " + daystoinfinity + " days to reach infinite funds.");
