var katzDeli = [];

function takeANumber(line) {
  var counter = line.length;
  counter++;
  line.push(counter);
  return `Welcome. You are number ${counter}.`;
}
function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!";
  }
  var person = line.shift();
  return `Currently serving ${person}.`;
}
function currentLine(line) {
  var list = [];
  if (line.length < 1) {
    return "The line is currently empty.";
  }
  for (let i = 0; i < line.length; i++) {
    list.push(` ${i+1}. ${line[i]}`);
  }
  return `The line is currently:${list}`; 
}