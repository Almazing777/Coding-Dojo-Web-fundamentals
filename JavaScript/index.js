var names = ["James", "Jill", "Jane","Jack"];

function printnames (arr, symbol){
  for(var i=0; i<arr.length; i++){
    console.log(i+" "+symbol + " " + names[i]);
  }
}
printnames(names, "->");
