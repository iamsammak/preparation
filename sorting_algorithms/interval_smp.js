// Interval Scheduling maximization problem

// Greedy polynominal solution
function schedule(times) {
  let output = [];
  let set = new Set(times);

  while (set.size > 0) {
    // Find time that finishes first
    let earliestFinish = [null, Infinity];

    set.forEach(time => {
      if (time[1] < earliestFinish[1]) {
        earliestFinish = time;
      }
    });

    // We found the optimal time slot!
    output.push(earliestFinish);

    // Remove optimal time slot and all intersecting slots form set
    set.forEach(time => {
      let start = time[0];
      let end = time[1];
      let selectedStart = earliestFinish[0];
      let selectedEnd = earliestFinish[1];

      // overlap if starts between start and finish
      if ((start >= selectedStart && start < selectedEnd)
        //  or ends between start and finish...
        || (end > selectedStart && end <= selectedEnd)
        // or starts before and ends after
        || (start <= selectedStart && end >= selectedEnd)) {
        set.delete(time);
        }
    });
  }

  return output;
}
