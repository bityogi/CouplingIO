const fs = require('fs');

export default () => {
  const contents = fs.readyFileSync('../../misc/data/coupons.json');
  return JSON.parse(contents);
}
