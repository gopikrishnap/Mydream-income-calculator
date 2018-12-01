$m.juci.addDataset("investTypes", [{
    "type": "Fixed Deposit"
}, {
    "type": "Mutual Funds"
}, {
    "type": "Insurance"
}, {
    "type": "Provident Fund"
}, {
    "type": "Others"
}]);
$m.juci.addDataset("retirement_result", false);
var productDetails = {
    "productone": "Reliance Nippon Life Increasing Income Insurance Plan",
    "producttwo": "Reliance Nippon Life Smart Savings Insurance Plan"
};

$m.juci.addDataset("productname_retirement", productDetails);
$m.juci.addDataset("productname_retirement1",[{
        "title": "Reliance Nippon Life Increasing Income Insurance Plan",
        "content": "With time you would aspire for a bigger house, an expensive car, admission in the best school and a good higher education for your children. Your savings need to power these dreams of tomorrow.",
        "subContent":"Regular monthly income that increases every year",
        "productCode": 137
    },{
            "title": "Reliance Nippon Life Smart Savings Insurance Plan",
            "content": "A Plan that automatically changes your investment profile with changing life-stage",
             "subContent":"Automatically adjust to your risk appetite, by balancing between equity and debt through a systematic assest allocation strategy",
            "productCode": 163      
        }]);

$m.juci.addDataset("retireassumption", "Assumption: Rate of Inflation = 8%, Expected rate of return on Retirement Corpus = 5%, Expected rate of return on Savings = 10% ");

//$m.juci.addDataset("retire1",true);
//$m.juci.addDataset("retire2",false);

$m.juci.addDataset("retbck1",false);
$m.juci.addDataset("retbck",false);
$m.juci.addDataset("taxbck1", false);
$m.juci.addDataset("taxbck", false);
$m.juci.addDataset("exitret", false);


function formatInvestType(e) {
    return e.type;
}

function CompareInvestType(i1, i2) {
    return i1.type == i2.type;
}

function retireCalculate(event) {
	var isValid = validation(event);
    if (isValid.status) {
    	Calculation.retirementCalculate(event);
    } else {
        $m.alert(isValid.Message);
        return;
    }
}

function validation(obj) {
    var result = {}
    var data = obj.data;
    if (data.age >= data.retireage) {
        result.status = false;
        result.Message = "Retirement Age(" + data.retireage + ") cannot be greater than or Equal to Current Age(" + data.age + ")";
    } else {
        result.status = true;
    }
    return result;
}

function parseIntValue(value) {
    var data = value ? value.split(",").join("") : 0;
    return parseInt(data);
}


function retcheck(){
	var retcheck = $m.juci.dataset("retirementCalculator");
	if(retcheck.age >= retcheck.retireage){
		$m.alert("Current age cannot be greater than or equal to retirement age")
	}
	
}



$m.onReady(function(){
	// Code to execute when the page is ready
 $m.juci.dataset("retire1",true);
 $m.juci.dataset("retire2",false);
 

});
function proceedr1(){
	var a =  b;
	var exit = $m.juci.dataset("retpref");
	var reage = $m.juci.getControl("rcage").value();
	var k = $m.juci.getControl("rrage").value();
	var reannual = $m.juci.getControl("ral").value();
	var re2 = /[0-9\,?]{1}/
		if(reage == "" || k == "" || reannual == ""){
		$m.toast("Please enter the fields");
		}
		else if(!re2.test(reannual)){
			$m.alert("Please enter the valid amount");
		}
    	else{
		if(parseInt(reage) >= parseInt(k)){
		$m.alert("Current age cannot be greater than or equal to retirement age")
                    	}
	else{
        $m.juci.dataset("retire1",false);
        $m.juci.dataset("retire2",true);
        if(exit === true){
	       $m.juci.dataset("taxbck1", false);
           $m.juci.dataset("taxbck", true);
           $m.juci.dataset("exitret", false);
           $m.juci.dataset("retirement_result",true);
           $m.juci.dataset("retpref",true);
	    }else{
	       $m.juci.dataset("taxbck1", true);
           $m.juci.dataset("taxbck", false);
           $m.juci.dataset("retirement_result",false);
           $m.juci.dataset("retpref",false);
	    }
	}
		}
	
}


function exitr(){
$m.juci.dataset("calculatorName", "");
$m.juci.dataset("retirementCalculator","");
$m.open("com.cloudpact.mowbly.home", "/system/resourceHome.html", null);    
$m.juci.dataset("retirement_result",false);

}

function backr(){
	$m.juci.dataset("retire1",true);
	$m.juci.dataset("retire2",false);
	$m.juci.dataset("taxbck", false);
    $m.juci.dataset("retirement_result",false);
}


function investmenttype(event){
	        juci.findById("ret1").addClass("retsel1");
		    juci.findById("ret1").removeClass("childsel");
}
function exitret(){
	$m.juci.dataset("retpref",false);
 $m.juci.dataset("isCalculator",true);
	   $m.juci.findById("hlv_calculator").hide();
        $m.juci.findById("tax_calculator").hide();
        $m.juci.findById("retirement_calculator").hide();
        $m.juci.findById("child_calculator").hide();
        $m.juci.findById("fhs_calculator").hide();
}
