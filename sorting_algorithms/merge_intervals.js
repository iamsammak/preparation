
// function merge(intervals) {
//
//         if (intervals == null || intervals.length <= 1)
//             return intervals;
//
//         // sort intervals by using self-defined Comparator
//         intervals.sort(function(startValue,endValue) {
//                 if(startValue[0] > endValue[0]) {
//                     return 1;
//                 } else if(startValue.start < endValue.start) {
//                     return -1;
//                 }
//                     return 0;
//             });
//
//         let result = [];
//
//         let prev = intervals[0];
//         for (let i = 1; i < intervals.length; i++) {
//             let curr = intervals[i];
//
//             if (prev[1] >= curr[0]) {
//                 // merged case
//                 // let merged = new Interval(prev.start, Math.max(prev.end, curr.end));
//                 let merged = (prev[0], Math.max(prev[1], curr[1]));
//                 prev = merged;
//             } else {
//                 result.push(prev);
//                 prev = curr;
//             }
//         }
//
//         result.push(prev);
//
//         return result;
// }


var Interval = function (s, e) {
    this.start = s;
    this.end = e;
}

function merge(intervals) {

        if (intervals == null || intervals.length <= 1)
            return intervals;

        // sort intervals by using self-defined Comparator
        intervals.sort(function(a,b) {
                if(a.start > b.start) {
                    return 1;
                } else if(a.start < b.start) {
                    return -1;
                }
                    return 0;
            });

        var result = [];

        var prev = intervals[0];
        for (var i = 1; i < intervals.length; i++) {
            var curr = intervals[i];

            if (prev.end >= curr.start) {
                // merged case
                var merged = new Interval(prev.start, Math.max(prev.end, curr.end));
                prev = merged;
            } else {
                result.push(prev);
                prev = curr;
            }
        }

        result.push(prev);

        return result;
}

var intevs = [new Interval(1,4), new Interval(3,5), new Interval(2,4), new Interval(7, 10)];
