document.getElementById('myForm').addEventListener("submit", function(e){
  e.preventDefault();
  swapcard(e.target);
});

function swapcard(form) {
  var formData = new FormData(form);
  for(var pair of formData.entries()) {
    if(pair[0] == "rating"){
      document.getElementById('rating-text').innerText = "You selected " + pair[1] + " out of 5"
    }
  }
  document.getElementById('rating-form').style.display = 'none';
  document.getElementById('thank-you').style.display = 'block';
};