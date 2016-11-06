'use strict';

var Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function(playlist) {
  if (playlist instanceof Playlist) {
    this.playlists.push(playlist)
  }
}

var Playlist = function(name){
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.overallRating = function() {
  let ratingSum = 0;
  this.tracks.forEach((elm) => {
    ratingSum += elm.rating;
  })
  return ratingSum / this.tracks.length
}

Playlist.prototype.totalDuration = function() {
  let duration = 0;
  this.tracks.forEach((elm) => {
    duration += elm.length;
  })
  return duration;
}

Playlist.prototype.addTrack = function(track) {
  if (track instanceof Track) {
    this.tracks.push(track);
  }
}

var Track  = function(title, rating, length){
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Track.prototype.addToPlaylist = function(playlist) {
  if (playlist instanceof Playlist) {
    playlist.tracks.push(this);
  }
}


const library1 = new Library("Matt's Library", "Matthew");
const playlist1 = new Playlist("Playlist1");
const song1 = new Track("Song1", 5, 100);
const song2 = new Track("Song2", 1, 50);

library1.addPlaylist(playlist1);
library1.addPlaylist(song1);

playlist1.addTrack(song1);
playlist1.addTrack(playlist1);

song2.addToPlaylist(playlist1);

console.log(library1)
console.log(playlist1)
console.log(playlist1.overallRating(), playlist1.totalDuration())
