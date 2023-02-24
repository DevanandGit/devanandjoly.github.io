function showDescription(buttonId) {
  var descriptionDiv = document.getElementById('description');
  switch(buttonId) {
    case 'button1':
      descriptionDiv.innerHTML= "This is the For description";
      break;
    case 'button2':
      descriptionDiv.innerHTML = "This is for rules";
      break;
    case 'button3':
      descriptionDiv.innerHTML = "Price";
      break;
    case 'button4':
      descriptionDiv.innerHTML = "Time and Date";
      break;
    case 'button5':
      descriptionDiv.innerHTML = "This is for Venue";
      break;
    default:
      descriptionDiv.innerHTML = "This is description";
  }
}