var allowDrop = function(event) {
  event.preventDefault();

}

var drag = function(event) {
  event.dataTransfer.setData("text", event.target.id);
}

var drop = function(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}