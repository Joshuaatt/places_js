$(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedTimeOfYear = $("input#time-of-year").val();
    var inputtedNotes = $("input#notes").val();
    var newPlace = { location: inputtedLocation, timeOfYear: inputtedTimeOfYear, notes: inputtedNotes };

    $("ul#places").append("<li><span class='place'>" + newPlace.location + "</span></li>");

    $(".place")
  })
});
