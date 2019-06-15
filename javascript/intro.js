class Clock {
  constructor() {
    let date = new Date ();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    this.printTime();
    this._tick = this._tick.bind(this);
    setInterval(this._tick, 1000);
  }

  printTime() {
    let time = `${this.hours} : ${this.minutes} : ${this.seconds}`;
    console.log(time);
  }

  _tick() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours += 1;
    }
    if (this.hours === 24) {
      this.hours = 0;
    }
    this.printTime();
  }
}

// const clock = new Clock();

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  let num;
  if (numsLeft > 0) {
    reader.question('Please enter a number: ', (res) => {
      num = parseInt(res);
      numsLeft -= 1;
      sum += num;
      console.log(sum);
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps = true) {
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, i = 0, madeAnySwaps, outerBubbleSortLoop);
    } else {
      sortCompletionCallback();
    }
  }
}

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?`, (res) => {
    if (res === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  madeAnySwaps = false;
  if (i == arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], isGreaterThan => {
      if (isGreaterThan === true) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
        i++;
        innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
      } else {
        i++;
        innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
      }
    });
  }
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

