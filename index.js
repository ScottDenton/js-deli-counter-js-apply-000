function takeANumber (currentLine, name){
  currentLine.push(name);
  return(`Welcome, ${name}. You are number ${currentLine.length} in line.`);
  
}

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



