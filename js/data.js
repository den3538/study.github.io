var array = [
[9,6,2,5,8],
[5,4,1,2,5],
[2,1,1,1,2],
[4,1,5,6,4],
[3,5,4,5,1],
[5,6,4,4,2],
[1,3,1,3,5],
];
	var otklon = [
[0,0,0,0,0],
[5,4,1,2,5],
[2,1,1,1,2],
[4,1,5,6,4],
[3,5,4,5,1],
[5,6,4,4,2],
[1,3,1,3,5],
];
	var schet = [
[0,0,0,0,0],
[5,4,1,2,5],
[2,1,1,1,2],
[4,1,5,6,4],
[3,5,4,5,1],
[5,6,4,4,2],
[1,3,1,3,5],
];
	var risk = [
[0,0,0,0,0],
[5,4,1,2,5],
[2,1,1,1,2],
[4,1,5,6,4],
[3,5,4,5,1],
[5,6,4,4,2],
[1,3,1,3,5],
];

//Pi
var Pit = Array(0.25,0.4,0.05,0.1,0.2);
//disper
var dispersion = Array(0,0,0,0,0,0,0);
//semidisper
var semidispersion = Array(0,0,0,0,0,0,0);
//valda
var valda = Array(0,0,0,0,0,0,0);
//sevidj
var sevidj = Array(0,0,0,0,0,0,0);
//variations
var variations = Array(0,0,0,0,0,0,0);
//max
var max = Array(0,0,0,0,0,0,0);
//gur_1	
var gur_1 = Array(0,0,0,0,0,0,0);
//gur_2
var gur_2 = Array(0,0,0,0,0,0,0);

//average
	var average = Array(0,0,0,0,0);

	for (var i = 0; i < array.length; i++) {
				for (var j = 0; j < array[i].length+2; j++) {
				if(i<5)
				average[i] += array[j][i]/array.length;
				}
		}

//otklon
	for (var i = 0; i < array.length; i++) {
				for (var j = 0; j < array[i].length; j++) {
				otklon[i][j] = (array[i][j]-average[j]).toFixed(2); 
				}
		}

//schet
			for (var i = 0; i < otklon.length; i++) {
				for (var j = 0; j < otklon[i].length; j++) {
					schet[i][j] = otklon[i][j]>0 ? 0 : 1;
				}
		}

//max
	var max = Array(0,0,0,0,0);
	for (var i = 0; i < array.length; i++) {
				for (var j = 0; j < array[i].length+2; j++) {
				if(i<5)
					max[i] = max[i]<array[j][i] ? array[j][i]: max[i];
			}
		}

//risk
	for (var i = 0; i < array.length; i++) {
				for (var j = 0; j < array[i].length; j++) {
				risk[i][j] = (max[j]-array[i][j]).toFixed(0); 
				}
		}
