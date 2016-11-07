
var xhr = new XMLHttpRequest();



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

var searchInput = function (event) {
  event.preventDefault();
  var inputVal = document.getElementById("search").value;
  var timeStamp = Date.now();
  xhr.open('GET', `https://gateway.marvel.com:443/v1/public/characters?name=${inputVal}&apikey=${mPKey}&hash=${mPrKey}`, true);
  xhr.send();
  xhr.onreadystatechange = function(e) { 
    
    if(xhr.readyState === 4  && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      // console.log(response.data.results[0].thumbnail);
      display(response.data.results[0].thumbnail.path, response.data.results[0].description)
    }
  }
}

var display = function(thumbUrl, descUrl) {
  var containerImg = document.getElementById('thumb-container');
  var containerP = document.getElementById('description-container');

  var thumb = document.createElement('img');
  thumb.src = thumbUrl + ".jpg";
  containerImg.appendChild(thumb);
  containerP.innerHTML = descUrl;
  console.log(containerP);

}

