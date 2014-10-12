require([
  '$api/models',
  '$views/image#Image'
], function(models) {
  'use strict';

  var GetCurrentTrack = function() {
    
    document.getElementById('curTrack').innerHTML = " ";
    var player = models.player;

    // Get the track that is currently playing
    var currentTrack = player.track;
    var currentArtist = player.track.artists[0].name;
    //document.getElementById('curTrack').innerHTML = currentArtist;

    return currentArtist;
  };

  exports.GetCurrentTrack = GetCurrentTrack;
});