cl_winner = (year) => {
  switch (year) {
    case 2017:
      console.log('Real Madrid');
      break;
    case 2018:
      console.log('Liverpool');
      break;
    case 2019:
      console.log('Bayern Munich');
      break;
    case 2020:
      console.log('Chelsea');
      break;
    case 2021:
      console.log('Real Madrid');
      break;
    default:
      console.log('Data not available');
  }
};

// cl_winner = function (string) {
//   return string === 'RMA';
// };

module.exports = cl_winner;
