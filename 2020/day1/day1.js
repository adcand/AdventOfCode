const nums = require("./input");

let n = 0;

!(function sum1() {
  for (num of nums) {
    let r = nums[n] + num;

    if (r === 2020) {
      console.log(nums[n] * num);
      return;
    }

    // Part two

    // if (r < 2020) {
    //   for (nu of nums) {
    //     if (r + nu === 2020) {
    //       console.log(nums[n] * num * nu);
    //       return;
    //     }
    //   }
    // }

    if (num === nums[nums.length - 1] && n < nums.length) {
      n++;
      sum1();
    }
  }
})();
