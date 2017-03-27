function zip(arrays) {
  var result = [];
  for (var c=0; c<arrays[0].length; c++) {
    var newArray = [];
    for (var r=0; r<arrays.length; r++) {
      newArray.push(arrays[r][c]);
    }
    result.push(newArray);
  }
  return result;
};

function reversed(array) {
  return array.reverse();
};
