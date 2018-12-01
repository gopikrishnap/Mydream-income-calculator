(function(){
	var calculatorUtils = {
	"futureValue" : function (pv, freq, rate, periods) {
		return (pv * Math.pow(1 + (rate / 100 / freq), periods));
	},
	"otherValues" : function(){
		return 'Happy Coding !!';
	}
	};
	
	function testData(){
		return 'I Love JS';
	}
	window.calculatorUtils = calculatorUtils;
})();
