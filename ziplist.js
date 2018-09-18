const list1 = ['h', 'l', 'z'];
const list2 = [3, 5, 7];

function ziplist(list, otherList) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(list[i], otherList[i]);
  }
  return result;
}

function ziplistTheSimpleWay(list, otherList) {
  return _.flatten(_.zip(list, otherList));
}

console.log(ziplist(list1, list2));

console.log(ziplistTheSimpleWay(list1, list2));
