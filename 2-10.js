const myRoom = {
  size: 12,
  closets: {
    firstCloset: {
      color: "red",
      shelves: 3,
    },
    secondCloset: {
      color: "orange",
      shelves: 5,
    },
  },
  numOfShelves: function () {
    let firstClosetShelves = this.closets.firstCloset.shelves;
    let secondClosetShelves = this.closets.secondCloset.shelves;

    return firstClosetShelves + secondClosetShelves;
  },
};

console.log(myRoom.numOfShelves());
