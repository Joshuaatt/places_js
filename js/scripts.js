$(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedTimeOfYear = $("input#time-of-year").val();
    var inputtedNotes = $("input#notes").val();
    var newPlace = { location: inputtedLocation, timeOfYear: inputtedTimeOfYear, notes: inputtedNotes };

    $("ul#places").append("<li><span class='place'>" + newPlace.location + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.location); // adds location name to h2 tag
      $(".location").text(newPlace.location);
      $(".time-of-year").text(newPlace.timeOfYear);
      $(".notes").text(newPlace.notes);
    })
  })
});
