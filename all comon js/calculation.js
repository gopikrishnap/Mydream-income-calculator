(function(){
	
	function HLVCalculate(){
		var hlvvalue = $m.juci.dataset("hlvcalculate")
    //	var	loginCode = $m.getUserAccount().customProperties.Login_Code;
		var data = {
	//		"Added_By":loginCode,
		  "Age": hlvvalue.age != ""? hlvvalue.age.toString() : hlvvalue.age,
		  "InsurenceCover": hlvvalue.insurance != ""? hlvvalue.insurance.toString() : "0",
		  "MonthlyExp": hlvvalue.monthlyexpensive != ""? hlvvalue.monthlyexpensive.toString() : "0",
		  "MonthlyIncome": hlvvalue.monthlyincome != ""? hlvvalue.monthlyincome.toString() : "0",
		  "OutstandingLoan": hlvvalue.loans != ""? hlvvalue.loans.toString() : "0",
		  "RetireAge": hlvvalue.retireage != ""? hlvvalue.retireage.toString() : hlvvalue.retireage,
		  "Saving": hlvvalue.valueofsvnginvstmnt != ""? hlvvalue.valueofsvnginvstmnt.toString() : "0",
		  "Source_From":"Tab"
		}
		var service = new ServiceLibrary();
		service.calculatorCommon(function(response){
			if(response.Status == "Y"){
				$m.juci.dataset("result",true);
				response.Expenses = parseIntValue(response.Expenses);
				response.HlvValus = parseIntValue(response.HlvValus);
				response.Income = parseIntValue(response.Income);
				response.Loan = parseIntValue(response.Loan);
				response.Saving = parseIntValue(response.Saving);
				response.Insurance_Gap = parseIntValue(response.Insurance_Gap);
				var result = $m.juci.dataset("hlvresult");
				result = response;
				$m.juci.dataset("hlvresult",result);
				$m.juci.dataset("hlvbck",true);
				$m.juci.dataset("hlvbck1",false);
			    $m.juci.dataset("hlvpref",true);
            	$m.toast(response.Message);
            	$m.juci.dataset("productname1", [{
        "title": "Reliance Nippon Life Term Plan",
        "content": "For tailor-made, comprehensive and affordable coverage that will help you secure your financial future and the future of your family, invest in Reliance Term Plan.",
        "subContent":response.Insurance_Gap,
        "productCode": 107
    }]);
           	}
           	 else{
				$m.juci.dataset("result",false);
				$m.alert(response.Message);
				$m.logError("HLV Calculator failed due to : " + JSON.stringify(response));
				$m.juci.dataset("hlvpref",false);
				return;
				
			}
		},data,"HLV");
		
	}
	
	function TAXCalculate(event){
		var taxvalue = $m.juci.dataset("taxCalculator");
	//	var	loginCode = $m.getUserAccount().customProperties.Login_Code;
		var data = {
	//		"Added_By":loginCode,
			"Age":taxvalue.age != ""? taxvalue.age.toString() : taxvalue.age,
			"AnnualIncome":taxvalue.annualincome != ""? taxvalue.annualincome.toString() : "0",
			"EmployeeType":taxvalue.employeetype != ""? taxvalue.employeetype.type != ""? taxvalue.employeetype.type.toString() : taxvalue.employeetype.type : "",
			"HealthInsurance":taxvalue.healthinsurancepremium != ""? taxvalue.healthinsurancepremium.toString() : "0",
			"HraDeduction":taxvalue.hiradebt != ""? taxvalue.hiradebt.toString() : taxvalue.hiradebt,
			"IncomeFormOtherSource":taxvalue.incomeformothersource != ""? taxvalue.incomeformothersource.toString() : "0",
			"IncomeFromInterest":taxvalue.interesttta != ""? taxvalue.interesttta.toString() : "0",
			"InterestOnHomeLoan":taxvalue.interesthomeloan != ""? taxvalue.interesthomeloan.toString() : "0",
			"InterestOnEducationLoan":taxvalue.interesteducation != ""? taxvalue.interesteducation.toString() : "0",
			"Investments80c":taxvalue.investment != ""? taxvalue.investment.toString() : "0",
			"OtherDeductions":taxvalue.otherdeduction != ""? taxvalue.otherdeduction.toString() : "0",
			"SelfAnnualSalary":taxvalue.selfannualsalary != ""? taxvalue.selfannualsalary.toString() : "0",
			"Source_From":"Tab"
		}
		var service = new ServiceLibrary();
		service.calculatorCommon(function(response){
			if(response.Status == "Y"){
				$m.juci.dataset("tax_result",true);
				$m.juci.dataset("retbck1", false);
			    $m.juci.dataset("retbck", true);
				response.NetTaxPayable = parseIntValue(response.NetTaxPayable);
				response.TaxableIncome = parseIntValue(response.TaxableIncome);
				var result = $m.juci.dataset("taxResult");
				result = response;
				$m.juci.dataset("taxResult",result);
				$m.juci.dataset("taxpref",true);
            	$m.toast(response.Message);
			}else{
				$m.juci.dataset("tax_result",false);
				$m.alert(response.Message);
				$m.logError("Tax Calculator failed due to : " + JSON.stringify(response));
					$m.juci.dataset("taxpref",false);
				return;
			}
		},data,"TaxCalc");
	}
	
	function RetirementCalculate(event){
		var retirementvalue = $m.juci.dataset("retirementCalculator")
		retirementvalue.monthlyexpensive =  $m.juci.getControl("monthexpo").value();
	    $m.juci.dataset("retirementCalculator",retirementvalue);
		var	loginCode = $m.getUserAccount().customProperties.Login_Code;
		var data = {
		"Added_By":loginCode,
		"Age": retirementvalue.age.toString(),
		"CurrentSaving": retirementvalue.currentsaving.toString(),
		"MonthlyExp": retirementvalue.monthlyexpensive.toString(),
		"RetirementAge": retirementvalue.retireage.toString(),
		"Source_From":"Tab"
		}
		var service = new ServiceLibrary();
		service.calculatorCommon(function(response){
			if(response.Status == "Y"){
				$m.juci.dataset("retirement_result",true);
			    $m.juci.dataset("taxbck",true);
				$m.juci.dataset("taxbck1",false);
				response.AmountreqEveMonth = parseIntValue(response.AmountreqEveMonth);
				response.MonthlySaving = parseIntValue(response.MonthlySaving);
				response.RetirementCorpus = parseIntValue(response.RetirementCorpus);
				var result = $m.juci.dataset("retirementResult");
				result = response;
				$m.juci.dataset("retirementResult",result);
				 $m.juci.dataset("retpref",true);
            	$m.toast(response.Message);
			}else{
				$m.juci.dataset("retirement_result",false);
				$m.alert(response.Message);
				$m.logError("Retirement Calculator failed due to : " + JSON.stringify(response));
				 $m.juci.dataset("retpref",false);
				return;
			}
		},data,"RetirementCalc");
	}
	
		var Coverage_Level;
	function FHSCalculate1(event){
		var fhsvalue = $m.juci.dataset("fhsform");
		var	loginCode = $m.getUserAccount().customProperties.Login_Code;
		var data = {
			"Added_By":loginCode,
			"AnnualIncome":fhsvalue.annualIncome !== ""? fhsvalue.annualIncome.toString() : "0",
			"AnnualIncome_Spouse":fhsvalue.spouseAL !== ""? fhsvalue.spouseAL.toString() : "0",
			"ChildrenAges":fhsvalue.childrenages !== ""? fhsvalue.childrenages.toString() : "",
			"DOB":fhsvalue.dob,
			"DOB_Spouse":fhsvalue.spouseDob,
			"Have_DependentParents":fhsvalue.parents !== ""? fhsvalue.parents.type !== ""? fhsvalue.parents.type.toString() : fhsvalue.parents.type : "",
			"HouseholdExpenses":fhsvalue.monthlyexpense !== ""? fhsvalue.monthlyexpense.toString() : "0",
			"No_Of_Children":fhsvalue.no_of_children !== ""? fhsvalue.no_of_children : 0,
			"SavingsPerMonth":fhsvalue.savingInves !== ""? fhsvalue.savingInves.toString() : "0",
			"SumAssured":fhsvalue.insuranceCover !== ""? fhsvalue.insuranceCover.toString() : "0",
			"SumAssured_Spouse":fhsvalue.spouseInsuranceCover !== ""? fhsvalue.spouseInsuranceCover.toString() : "0",
			"TotalOutstandingLoan":fhsvalue.totaloutstandingloan !== ""? fhsvalue.totaloutstandingloan.toString() : "0",
			"TotalSavings":fhsvalue.totalsavings !== ""? fhsvalue.totalsavings.toString() : "0",
			"Source_From":"Tab"
		};
		
		var service = new ServiceLibrary();
		service.calculatorCommon(function(response){
			if(response.Status == "Y"){
		$m.juci.dataset("Ques12",response.AmountForQ10);
		$m.juci.dataset("Ques11",response.AmountForQ11);
		$m.juci.dataset("fhs1",false);
		$m.juci.dataset("fhs2",false);
		$m.juci.dataset("fhs3",false);
		$m.juci.dataset("fhs4",false);
		$m.juci.dataset("fhs5",true);
		 Coverage_Level = response.CoverageLevel;    
		$m.toast(response.Message);
			}else{
				$m.alert(response.Message);
				$m.logError("Finacial Calculator failed due to : " + JSON.stringify(response));
				return;
			}
		},data,"FinancialHealth1");
		
	}
	
	
	function FHSCalculate2(event){
		var fhsvalue = $m.juci.dataset("fhsform");
		var	loginCode = $m.getUserAccount().customProperties.Login_Code;
		var data = {
			"Added_By":loginCode,
			"AnnualIncome":fhsvalue.annualIncome !== ""? fhsvalue.annualIncome.toString() : "0",
			"AnnualIncome_Spouse":fhsvalue.spouseAL !== ""? fhsvalue.spouseAL.toString() : "0",
			"ChildrenAges":fhsvalue.childrenages !== ""? fhsvalue.childrenages.toString() : "0",
			"DOB":fhsvalue.dob,
			"DOB_Spouse":fhsvalue.spouseDob,
			"Q10Answer":fhsvalue.savingChild.value,
		    "Q11Answer":fhsvalue.savingRetire.value,
		    "CoverageLevel":Coverage_Level,
		    "Have_DependentParents":fhsvalue.parents !== ""? fhsvalue.parents.type !== ""? fhsvalue.parents.type.toString() : fhsvalue.parents.type : "",
			"HouseholdExpenses":fhsvalue.monthlyexpense !== ""? fhsvalue.monthlyexpense.toString() : "0",
			"No_Of_Children":fhsvalue.no_of_children,
			"SavingsPerMonth":fhsvalue.savingInves !== ""? fhsvalue.savingInves.toString() : "0",
			"SumAssured":fhsvalue.insuranceCover !== ""? fhsvalue.insuranceCover.toString() : "0",
			"SumAssured_Spouse":fhsvalue.spouseInsuranceCover !== ""? fhsvalue.spouseInsuranceCover.toString() : "0",
			"TotalOutstandingLoan":fhsvalue.totaloutstandingloan !== ""? fhsvalue.totaloutstandingloan.toString() : "0",
			"TotalSavings":fhsvalue.totalsavings !== ""? fhsvalue.totalsavings.toString() : "0",
			"Source_From":"Tab"
		};
		
		var service = new ServiceLibrary();
		service.calculatorCommon(function(response){
			if(response.Status == "Y"){
				var result = {};
				response.FinancialHealth2_Response.OverallScore = parseIntValue(response.FinancialHealth2_Response.OverallScore);
				response.FinancialHealth2_Response.InsuranceScore = parseIntValue(response.FinancialHealth2_Response.InsuranceScore);
				response.FinancialHealth2_Response.ChildGoals = parseIntValue(response.FinancialHealth2_Response.ChildGoals);
				response.FinancialHealth2_Response.RetirementGoals = parseIntValue(response.FinancialHealth2_Response.RetirementGoals);
				response.FinancialHealth2_Response.DebtScore = parseIntValue(response.FinancialHealth2_Response.DebtScore);
				response.FinancialHealth2_Response.SavingScore = parseIntValue(response.FinancialHealth2_Response.SavingScore);	
				$m.juci.dataset("overallscore",response.FinancialHealth2_Response.OverallScore);
				$m.juci.dataset("Insscore",response.FinancialHealth2_Response.InsuranceScore);
				$m.juci.dataset("childscore",response.FinancialHealth2_Response.ChildGoals);
				$m.juci.dataset("retirescore",response.FinancialHealth2_Response.RetirementGoals);
				$m.juci.dataset("loanscore",response.FinancialHealth2_Response.DebtScore);
				$m.juci.dataset("savingsscore",response.FinancialHealth2_Response.SavingScore);
				$m.juci.dataset("fhsresult",true);
			    $m.juci.dataset("fhsbck",true);
				$m.juci.dataset("fhsbck1",false);
				$m.juci.dataset("fhspref",true);
				
				
			if(response.FinancialHealth2_Response.OverallScore <= 25){
		        $m.juci.dataset("overalltext","worst");
		    }
		    else if(response.FinancialHealth2_Response.OverallScore >= 75){
	        	$m.juci.dataset("overalltext","Good");
	    	}
	    	else if(response.FinancialHealth2_Response.OverallScore == 100){
	    			$m.juci.dataset("overalltext","Good");
	    	}
	    	
	    	if(response.FinancialHealth2_Response.InsuranceScore <= 25){
		        $m.juci.dataset("Instext","worst");
		    }
		    else if(response.FinancialHealth2_Response.InsuranceScore >= 75){
	        	$m.juci.dataset("Instext","Good");
	    	}
	    	 else if(response.FinancialHealth2_Response.InsuranceScore == 100){
	        	$m.juci.dataset("Instext","Good");
	    	}
	    	
	    	if(response.FinancialHealth2_Response.ChildGoals <= 25){
		        $m.juci.dataset("childtext","worst");
		    }
		    else if(response.FinancialHealth2_Response.ChildGoals >= 75){
	        	$m.juci.dataset("childtext","Good");
	    	} 
	    	else if(response.FinancialHealth2_Response.ChildGoals == 100){
	        	$m.juci.dataset("childtext","Good");
	    	}
	    	
	    	if(response.FinancialHealth2_Response.RetirementGoals <= 25){
		        $m.juci.dataset("retiretext","worst");
		    }
		    else if(response.FinancialHealth2_Response.RetirementGoals >= 75){
	        	$m.juci.dataset("retiretext","Good");
	    	}
	    	else if(response.FinancialHealth2_Response.RetirementGoals == 100){
	        	$m.juci.dataset("retiretext","Good");
	    	}
	    	
	    	if(response.FinancialHealth2_Response.DebtScore <= 25){
		        $m.juci.dataset("loantext","worst");
		    }
		    else if(response.FinancialHealth2_Response.DebtScore >= 75){
	        	$m.juci.dataset("loantext","Good");
	    	}
	    	 else if(response.FinancialHealth2_Response.DebtScore == 100){
	        	$m.juci.dataset("loantext","Good");
	    	}
	    	if(response.FinancialHealth2_Response.SavingScore <= 25){
		        $m.juci.dataset("savingstext","worst");
		    }
		    else if(response.FinancialHealth2_Response.SavingScore >= 75){
	        	$m.juci.dataset("savingstext","Good");
	    	} 
	    	else if(response.FinancialHealth2_Response.SavingScore == 100){
	        	$m.juci.dataset("savingstext","Good");
	    	}
				$m.juci.dataset("fhsresult",true);
            	$m.toast(response.Message);
			}else{
				$m.alert(response.Message);
				$m.logError("Finacial Calculator failed due to : " + JSON.stringify(response));
				$m.juci.dataset("fhspref",false);
				return;
			}
		},data,"FinancialHealth2");
		
	}
	
	function childMerging(child,quantity){
		var childvalue = $m.juci.dataset("childcalculate");
		var	loginCode = $m.getUserAccount().customProperties.Login_Code;
		var child_data = {
			"Added_By":loginCode,
			"Age":childvalue[child].age ? childvalue[child].age.toString() : childvalue[child].age,
			"AgeMoneyrReq": childvalue[child].ageEst ? childvalue[child].ageEst.toString() : childvalue[child].ageEst,
			"ChildNo":quantity,
			"CurrentCost":childvalue[child].costestimation ? childvalue[child].costestimation.toString() : childvalue[child].costestimation,
			"Name":childvalue[child].name ? childvalue[child].name.toString() : childvalue[child].name,
			"Opt":childvalue[child].designation ? childvalue[child].designation.value ? childvalue[child].designation.value.toString() : childvalue[child].designation.value : "",
			"Saving":childvalue[child].savings ? childvalue[child].savings.toString() : childvalue[child].savings,
			"Source_From":"Tab"
		}
		return child_data;
	}
	
	function ChildCalculate(evnt){
		
		
		
		
		
		var quantity = juci.dataset("quantity");
		var request = {"Child_1":"","Child_2":"","Child_3":"","Child_4":"","Quantity":quantity.value}
		if(quantity.value == "1"){
			request.Child_1 = childMerging("childone","1");
		}else
		if(quantity.value == "2"){
			request.Child_1 = childMerging("childone","1");
			request.Child_2 = childMerging("childtwo","2");
		}else
		if(quantity.value == "3"){
			request.Child_1 = childMerging("childone","1");
			request.Child_2 = childMerging("childtwo","2");
			request.Child_3 = childMerging("childthree","3");
		}else
		if(quantity.value == "4"){
			request.Child_1 = childMerging("childone","1");
			request.Child_2 = childMerging("childtwo","2");
			request.Child_3 = childMerging("childthree","3");
			request.Child_4 = childMerging("childfour","4");
		}
		
		var h = $m.juci.dataset("childcalculate");
		
		var service = new ServiceLibrary();
		service.calculatorCommon(function(response){
			if(response.Status == "Y"){
				var quantity = juci.dataset("quantity");
				$m.juci.findById("resultone").show();
				$m.juci.findById("resulttwo").hide();
				$m.juci.findById("resultthree").hide();
				$m.juci.findById("resultfour").hide();
				if(quantity.value == "1"){
					var tabs = $m.juci.dataset("childtabs");
					tabs = {"childone":true,"childtwo":false,"childthree":false,"childfour":false}; 
					$m.juci.dataset("childtabs",tabs);
				}else
				if(quantity.value == "2"){
					var tabs = $m.juci.dataset("childtabs");
					tabs = {"childone":true,"childtwo":true,"childthree":false,"childfour":false}; 
					$m.juci.dataset("childtabs",tabs);
				}else
				if(quantity.value == "3"){
					var tabs = $m.juci.dataset("childtabs");
					tabs = {"childone":true,"childtwo":true,"childthree":true,"childfour":false}; 
					$m.juci.dataset("childtabs",tabs);
				}else
				if(quantity.value == "4"){
					var tabs = $m.juci.dataset("childtabs");
					tabs = {"childone":true,"childtwo":true,"childthree":true,"childfour":true}; 
					$m.juci.dataset("childtabs",tabs);
				}
				$m.juci.dataset("child_result",true);
			
				response.FirstChildSaveAmount = response.FirstChildSaveAmount != null ? parseIntValue(response.FirstChildSaveAmount) : "0";
				response.FristChildAmountvalue = response.FristChildAmountvalue != null ? parseIntValue(response.FristChildAmountvalue) : "0";
				response.SecondChildSaveAmount = response.SecondChildSaveAmount != null ? parseIntValue(response.SecondChildSaveAmount) : "0";
				response.SecondChildAmountvalue = response.SecondChildAmountvalue != null ? parseIntValue(response.SecondChildAmountvalue) : "0";
				response.ThreeChildAmountvalue = response.ThreeChildAmountvalue != null ? parseIntValue(response.ThreeChildAmountvalue) : "0";
				response.ThreeChildSaveAmount = response.ThreeChildSaveAmount != null ? parseIntValue(response.ThreeChildSaveAmount) : "0";
				response.FourthChildAmountvalue = response.FourthChildAmountvalue != null ? parseIntValue(response.FourthChildAmountvalue) : "0";
				response.FourthChildSaveAmount = response.FourthChildSaveAmount != null ? parseIntValue(response.FourthChildSaveAmount) : "0";
				var result = $m.juci.dataset("childResult");
				result = response;
				$m.juci.dataset("childResult",result);
            	$m.toast(response.Message);
            	var cb = juci.findById("toggle").el.children;
				for(var k=0;k<cb.length;k++){
					if(utils.HasClassName(cb[k],"toggled")){
						utils.RemoveClassName(cb[k],"toggled");
					}
				}
				utils.AddClass(cb[0],"toggled");
			}else{
				$m.juci.dataset("child_result",false);
				$m.alert(response.Message);
				$m.logError("Children Education Calculator failed due to : " + JSON.stringify(response));
				return;
			}
		},request,"ChildEducation");
		
	}
	
	function parseIntValue(value){
		var data = value ? value.split(",").join("") : 0;
		return parseInt(data);
	}
	
	//PV(rate, number_of_periods, payment_amount, [future_value], [end_or_beginning])
	//Calculates the present value of an annuity investment based on constant-amount periodic payments and a constant interest rate.
	function PV(rate, periods, payment, future, type) {
		// Initialize type
		var type = (typeof type === 'undefined') ? 0 : type;
		
		// Evaluate rate and periods (TODO: replace with secure expression evaluator)
		rate = eval(rate);
		periods = eval(periods);
		
		// Return present value
		if (rate === 0) {
			return - payment * periods - future;
		} else {
			return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 +rate * type) - future) / Math.pow(1 + rate, periods);
		}
	}
	
	window.Calculation = {
		"hlvCalculate" : HLVCalculate,
		"taxCalculate" : TAXCalculate,
		"retirementCalculate" : RetirementCalculate,
		"childCalculate" : ChildCalculate,
		"fhsCalculate1":FHSCalculate1,
		"fhsCalculate2":FHSCalculate2
	}
})();