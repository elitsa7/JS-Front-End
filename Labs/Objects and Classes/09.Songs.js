function solve(input) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }
  let songs = [];
  let numberOfSongs = input.shift();
  let typeSong = input.pop();
  for (let index = 0; index < numberOfSongs; index++) {
    let [type, name, time] = input[index].split("_");
    let song = new Song(type, name, time);
    songs.push(song);
  }
  if (typeSong === "all") {
    songs.forEach((index) => console.log(index.name));
  } else {
    let filter = songs.filter((index) => index.type === typeSong);
    filter.forEach((index) => console.log(index.name));
  }
}
solve([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
solve([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
solve([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
