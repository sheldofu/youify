require([
  '$api/models',
  'scripts/language-example',
  'scripts/cover-example',
  'scripts/button-example',
  'scripts/playlist-example',
  'scripts/utilities'
], function(models, languageExample, coverExample, buttonExample, playlistExample, utilities) {
  'use strict';

  models.player.load('playing').done(function(){
    if (models.player.playing) {
      getGigs();
    }
  });

  models.player.addEventListener('change:track', function() {
    getGigs();
    console.log("something changed");
  });

  function loadXMLDoc(dname) {
    if (window.ActiveXObject)
      {
      var xhttp=new ActiveXObject("Msxml2.XMLHTTP.3.0");
      }
    else
      {
      var xhttp=new XMLHttpRequest();
      }
    xhttp.open("GET",dname,false);
    xhttp.send("");
    return xhttp.responseXML;
  }
 

function getGigs() {

  coverExample.doCoverForAlbum();
  var artist = utilities.GetCurrentTrack();
  languageExample.doHelloWorld(artist);
  var lookup = "http://api.bandsintown.com/artists/" + artist + "/events?format=xml&app_id=showTime"
  var xml=loadXMLDoc(lookup);
  var xsl=loadXMLDoc("display.xsl");
  document.getElementById("upcomingGigs").innerHTML = "";
  
  // code for IE
  if (window.ActiveXObject)
    {
    var ex=xml.transformNode(xsl);
    document.getElementById("upcomingGigs").innerHTML=ex;
    }
  // code for Mozilla, Firefox, Opera, etc.
  else if (document.implementation && document.implementation.createDocument)
    {
    var xsltProcessor=new XSLTProcessor();
    xsltProcessor.importStylesheet(xsl);
    var resultDocument = xsltProcessor.transformToFragment(xml,document);
    document.getElementById("upcomingGigs").appendChild(resultDocument);
    console.log(xml);
    }
  }

});
