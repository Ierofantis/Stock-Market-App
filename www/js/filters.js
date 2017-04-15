angular.module('Test.filters', [])

.filter("shrinkNumber", function($filter) {
<<<<<<< HEAD
        return function(number, fractionSize) {

            if (number === null) return null;
            if (number === 0) return "0";

            if (!fractionSize || fractionSize < 0)
                fractionSize = 1;

            var abs = Math.abs(number);
            var rounder = Math.pow(10, fractionSize);
            var isNegative = number < 0;
            var key = '';
            var powers = [
                { key: "Q", value: Math.pow(10, 15) },
                { key: "T", value: Math.pow(10, 12) },
                { key: "B", value: Math.pow(10, 9) },
                { key: "M", value: Math.pow(10, 6) },
                { key: "K", value: 1000 }
            ];

            for (var i = 0; i < powers.length; i++) {

                var reduced = abs / powers[i].value;

                reduced = Math.round(reduced * rounder) / rounder;

                if (reduced >= 1) {
                    abs = reduced;
                    key = powers[i].key;
                    break;
                }
            }
            if (number >= 1000) {
                return bs + key
            } else if (number <= -100) {
                return '-' + abs + key;
            } else {
                return $filter('number')(((isNegative ? '-' : '') + abs + key), 3);
            }
        };
    }) // Tim Jones megaNumber gist β€” https://gist.github.com/timgit/7bc5896f5297301afb02
=======
  return function(number, fractionSize) {

    if(number === null) return null;
    if(number === 0) return "0";

    if(!fractionSize || fractionSize < 0)
        fractionSize = 1;

    var abs = Math.abs(number);
    var rounder = Math.pow(10,fractionSize);
    var isNegative = number < 0;
    var key = '';
    var powers = [
        {key: "Q", value: Math.pow(10,15)},
        {key: "T", value: Math.pow(10,12)},
        {key: "B", value: Math.pow(10,9)},
        {key: "M", value: Math.pow(10,6)},
        {key: "K", value: 1000}
    ];

    for(var i = 0; i < powers.length; i++) {

        var reduced = abs / powers[i].value;

        reduced = Math.round(reduced * rounder) / rounder;

        if(reduced >= 1){
            abs = reduced;
            key = powers[i].key;
            break;
        }
    }
    if(number >=1000){
    	return bs+key
    }
    else if(number <= -100){
    	return '-' +abs + key;
    }
    else
   { return $filter('number')(((isNegative ? '-' : '') + abs + key),3);
   }
  };
}) // Tim Jones megaNumber gist β€” https://gist.github.com/timgit/7bc5896f5297301afb02
>>>>>>> afca636919232fb151c9a7dae89796d4d07f49bf
