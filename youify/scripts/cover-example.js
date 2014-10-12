require([
  '$api/models',
  '$views/image#Image'
], function(models, Image) {
  'use strict';

  var doCoverForAlbum = function() {
  	document.getElementById('albumCoverContainer').innerHTML = "";
  	var currentAlbum = models.player.track.album.uri;
  	console.log(currentAlbum);
    var album = models.Album.fromURI(currentAlbum);
    var image = Image.forAlbum(album, {width: 200, height: 200, player: true});
    document.getElementById('albumCoverContainer').appendChild(image.node);
  };

  exports.doCoverForAlbum = doCoverForAlbum;
});
