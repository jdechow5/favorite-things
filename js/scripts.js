$(document).ready(function () {
  $("form#favorite-things").submit(function (event) {
    event.preventDefault();
    const favOne = $("input#fav-things-1").val();
    const favTwo = $("input#fav-things-2").val();
    const favThree = $("input#fav-things-3").val();
    const favArray = [favOne, favTwo, favThree];
    let changedfavArray = [];
    changedfavArray.push(favArray[0], favArray[1], favArray[2]);
    // console.log("Changed fav array: ", changedfavArray);


    favArray.forEach(function (thing) {
      $("#results").append("<li>" + thing + "</li>");
    })
  })
})