export function getAlbumLength(tracklist) {
    var hours = 0; var minutes = 0; var seconds = 0;
    var timeString = "";
    var length = 0;
    for(var i = 0; i < tracklist.length; i++) {
      var song = tracklist[i];
      length += song.duration_ms;
    }
    length = Math.floor(length/1000);
    seconds = length%60;
    length = Math.floor(length/60);
    minutes = length%60;
    length = Math.floor(length/60);
    hours = length;

    var time = [hours, minutes, seconds];

    for (var j = 0 ; j < 3 ; j++) {
      if (time[j] < 10) {
        timeString += "0" + time[j];
      }
      else {
        timeString += time[j];
      }
      if (j !== 2) {timeString += ":";}
    }
    return [time, timeString];
}