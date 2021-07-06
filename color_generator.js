function generateRandomColor() {
  const arrayofColor = [
    '#AA47BC',
    '#7A1FA2',
    '#78909C',
    '#465A65',
    '#EC407A',
    '#C2175B',
    '#5C6BC0',
    '#0288D1',
    '#00579C',
    '#0098A6',
    '#00887A',
    '#004C3F',
    '#689F39',
    '#33691E',
    '#33691E',
    '#8C6E63',
    '#7E57C2',
    '#512DA7',
    '#512DA7',
    '#EF6C00',
    '#F5511E',
    '#BF360C',
  ];
  const randomColor = Math.floor(Math.random() * arrayofColor.length);
  return arrayofColor[randomColor];
  //random color will be freshly served
}

module.exports = generateRandomColor;
