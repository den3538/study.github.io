$(document).ready(function(){
		output2(otklon);
		output3(schet);
		output4(risk);
		maxi();
		disper();
		variations_func();

//beyes click
	$(".beyes").click(function(){
		res = beyes();
		output1(res);
		$(".beyes").fadeOut(1000, "linear");
	});
	$(".semi").click(function(){
		semidisper();
		$(".semi").fadeOut(1000, "linear");
	});
	$(".valda").click(function(){
		valdas();
		$(".valda").fadeOut(1000,"linear");
	})
	$(".sevidja").click(function(){
		sevidja();
		$(".sevidja").fadeOut(1000,"linear");
	})
	$(".gyr_1").click(function(){
		gurv_1();
		$(this).fadeOut(1000,"linear");
	})
	$(".gyr_2").click(function(){
		gurv_2();
		$(this).fadeOut(1000,"linear");
	})
});

//Valda
function valdas(){
	valda[0] = array[0][0];
		for (var i = 0; i < array.length; i++) {
			for (var j = 0; j < array[i].length; j++) {
							if (j==0) {
								valda[i]=array[i][0];
							}
				if (valda[i]>array[i][j]) {
					valda[i]=array[i][j]
					
				};
			}
			}	

			var html = "<div class = 'col-xs-6'><table class = 'table table-hover table-valda'><thead><tr><th>Valda/min</th></tr></thead><tbody>";
	for (var i = 0; i < valda.length; i++) {

		html+="<tr class = 'active'>";
			html+="<td>"+valda[i]+"</td>";
		html+="</tr>"
	}
	html+="</tbody></table></div>";
	$(".wrapper").append(html);
}

//max
function maxi(){
	max[0] = array[0][0];
		for (var i = 0; i < array.length; i++) {
			for (var j = 0; j < array[i].length; j++) {
							if (j==0) {
								max[i]=array[i][0];
							}
				if (max[i]<array[i][j]) {
					max[i]=array[i][j]
				}
			}
			}	
			var html = "<div class = 'col-xs-6'><table class = 'table table-hover table-max'><thead><tr><th>max</th></tr></thead><tbody>";
	for (var i = 0; i < max.length; i++) {

		html+="<tr class = 'active'>";
			html+="<td>"+max[i]+"</td>";
		html+="</tr>"
	}
	html+="</tbody></table></div>";
	$(".wrapper").append(html);
	}

	//gur_1
function gurv_1(){
			for (var i = 0; i < array.length; i++) {
				gur_1[i]=0.5*valda[i]+(1-0.5)*max[i];
			}	
			var html = "<div class = 'col-xs-6'><table class = 'table table-hover table-max'><thead><tr><th>Gurviza_1(0.5)</th></tr></thead><tbody>";
	for (var i = 0; i < gur_1.length; i++) {

		html+="<tr class = 'active'>";
			html+="<td>"+gur_1[i]+"</td>";
		html+="</tr>"
	}
	html+="</tbody></table></div>";
	$(".wrapper").append(html);
	}

	//gur_2
function gurv_2(){
			for (var i = 0; i < array.length; i++) {
				gur_2[i]=0.3*valda[i]+(1-0.3)*max[i];
			}	
			var html = "<div class = 'col-xs-6'><table class = 'table table-hover table-max'><thead><tr><th>Gurviza_2(0.3)</th></tr></thead><tbody>";
	for (var i = 0; i < gur_2.length; i++) {

		html+="<tr class = 'active'>";
			html+="<td>"+gur_2[i]+"</td>";
		html+="</tr>"
	}
	html+="</tbody></table></div>";
	$(".wrapper").append(html);
	}

//sevidja
function sevidja(){
	sevidj[0] = array[0][0];
		for (var i = 0; i < risk.length; i++) {
			for (var j = 0; j < risk[i].length; j++) {
							if (j==0) {
								sevidj[i]=risk[i][0];
							}
				if (sevidj[i]<risk[i][j]) {
					sevidj[i]=risk[i][j]
					
				};
			}
			}	

			var html = "<table class = 'table table-hover table-sevidj'><thead><tr><th>sevidja</th></tr></thead><tbody>";
	for (var i = 0; i < sevidj.length; i++) {

		html+="<tr class = 'active'>";
			html+="<td>"+sevidj[i]+"</td>";
		html+="</tr>"
	}
	html+="</tbody></table>";
	$(".wrapper").append(html);
}

//semidisper неверно
function semidisper(){
		for (var i = 0; i < otklon.length; i++) {
			for (var j = 0; j < otklon[i].length; j++) {
				if (schet[i][j]!=0) {

				semidispersion[i] += ((otklon[i][j]*otklon[i][j])*schet[i][j]*Pit[j])/(schet[i][j]*Pit[j]);
				/*alert("i="+i+"j="+j+"otklon="+otklon[i][j]+"schet="+schet[i][j]+"Pit="+Pit[j]+"semidispersion="+semidispersion[i]);*/
				}
			}
		}

		//output semidisper
		var html = "<table class = 'table table-hover table-semi'><thead><tr><th>SemiDisp</th></tr></thead><tbody>";
	for (var i = 0; i < semidispersion.length; i++) {

		html+="<tr class = 'active'>";
			html+="<td>"+semidispersion[i]+"</td>";
		html+="</tr>"
	}
	html+="</tbody></table>";
	$(".wrapper").append(html);
}

//dispersion
function disper(){
	for (var i = 0; i < array.length; i++) {
			for (var j = 0; j < array[i].length; j++) {
				dispersion[i] += otklon[i][j]*otklon[i][j]*Pit[j];
			}
		}
//output-dispersion

var html = "<thead><tr><th>Disp</th></tr></thead><tbody>";
	for (var i = 0; i < dispersion.length; i++) {

		html+="<tr class = 'active'>";
			html+="<td>"+dispersion[i]+"</td>";
		html+="</tr>"
	}
	html+="</tbody>";
	$(".table-disp").append(html);

}

//variations
function variations_func(){
	for (var i = 0; i < variations.length; i++) {
		variations[i]=Math.sqrt(dispersion[i])/5;
	}

//output-variations
var html = "<thead><tr><th>Var</th></tr></thead><tbody>";
	for (var i = 0; i < variations.length; i++) {

		html+="<tr class = 'active'>";
			html+="<td>"+variations[i]*100+"%</td>";
		html+="</tr>"
	}
	html+="</tbody>";
	$(".table-variations").append(html);
}


//beyes
function beyes() {
	var res = Array(0,0,0,0,0,0,0);
		for (var i = 0; i < array.length; i++) {
			for (var j = 0; j < array[i].length; j++) {
				res[i] += array[i][j]*Pit[j];
			}
		}
		return res;
}


function output1(arr){
	$(".wrapper .table-beyes").prepend("<thead><tr><th>Критерий Бейеса</th></tr></thead>")
	for (var i = 0; i < arr.length; i++) {
		$(".wrapper .table-beyes tbody").append("<tr class = 'active'><td>"+(arr[i]).toFixed(2)+"</td></tr>");
	}
		}

//otkl
function output2(arr){
	var html = "<thead><tr><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th><th>Q5</th></tr></thead><tbody>";
	for (var i = 0; i < arr.length; i++) {

		html+="<tr class = 'active'>";

		for (var j = 0; j < arr[i].length; j++) {
		html+="<td>"+arr[i][j]+"</td>";
		}

		html+="</tr>"
	}
	html+="</tbody>";
	$(".otkl-table").append(html);
}

//schet
function output3(arr){
		var html = "<thead><tr><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th><th>Q5</th></tr></thead><tbody>";
	for (var i = 0; i < arr.length; i++) {

		html+="<tr class = 'active'>";

		for (var j = 0; j < arr[i].length; j++) {
		html+="<td>"+arr[i][j]+"</td>";
		}

		html+="</tr>"
	}
	html+="</tbody>";
	$(".schet-table").append(html);
}

//risk
function output4(arr){
	var html = "<thead><tr><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th><th>Q5</th></tr></thead><tbody>";
	for (var i = 0; i < arr.length; i++) {

		html+="<tr class = 'active'>";

		for (var j = 0; j < arr[i].length; j++) {
		html+="<td>"+arr[i][j]+"</td>";
		}

		html+="</tr>"
	}
	html+="</tbody>";
	$(".risk-table").append(html);
}
//variations
