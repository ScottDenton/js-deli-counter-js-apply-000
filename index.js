function takeANumber (currentLine, name){
  currentLine.push(name);
  return(`Welcome, ${name}. You are number ${currentLine.length} in line.`);
  
}




function takeANumber(currentLine) {
  var number =1;
  
  function increase(){
  var welcome = (`Welcome! You are number ${number}`)
  number ++;
  }
  return welcome;
}

// takeANumber(katzDeli) => "Welcome! You're ticket number #1" [1]
// takeANumber(katzDeli) => "Welcome! You're ticket number #2" [1, 2]

// nowServing(katzDeli) => "Currently serving: #1" [2]
// nowServing(katzDeli) => "Currently serving: #2" []

// takeANumber(katzDeli) => "Welcome! You're ticket number #3"




function nowServing(currentLine){
  if(currentLine.length > 0){
    var serving = currentLine[0];
     currentLine.shift();
    return (`Currently serving ${serving}.`);
  } else {
  return ("There is nobody waiting to be served!")
    }
}

function currentLine(line){
  if(line.length > 0){
    var newArray = [];
    for (var i = 0; i < line.length; i++){
     newArray.push(` ${i+1}. ${line[i]}`);
    }
    return (`The line is currently:${newArray}`)
  } else {
    return ("The line is currently empty.")
    }
}



