/**
 * Constants.js
 * @author CloudPact Technologies
 * @description : This script is used for validations,validation messages and opening pages.
 **/

var messages = {
	"NoNetworkConnectivity":"No Network/internet connection found, please check and try again",
	"ServerError":"Currently services are not responding,Please try again",
	"ServerMessage":"Server is not responding, please try again later",
	"ServiceMessage":"Host is unreachable, please try again later"
};

var currentAdvisorCode;
var clientdetails;
$m.juci.addDataset("goal","");
$m.juci.addDataset("profileDetail","");
$m.juci.addDataset("headerName","");

$m.onReady(function(){
	if($m.isAndroid()){
	// Code to execute for android}else{
	clientdetails = $m.getUserAccount().customProperties;
	var obj = {
		"name" : clientdetails.Login_Name,
		"id" : clientdetails.LA_Business_LoginCode,
		"area":clientdetails.Business_Type
	};
	$m.juci.dataset("profileDetail",obj);
	if(__mowbly__.Shell.UEX){
		var pagename = $m.pageName();
		__mowbly__.Shell.UEX.startScreen(pagename,function(res){console.log('UEX - Set Start Screen -'+ JSON.stringify(res))});
	}
} 
	else if($m.isIOS()){
		clientdetails = $m.getUserAccount().customProperties;
		var obj = {
			"name" : clientdetails.Login_Name,
			"id" : clientdetails.LA_Business_LoginCode,
			"area":clientdetails.Business_Type
		};
		$m.juci.dataset("profileDetail",obj);
	}
	var dbcallback = function(dbhelper) {
		var dbHelper = dbhelper;
	}
	utils.GetDbhelper(dbcallback);
});

$m.onResume(function(){
	var dbcallback = function(dbhelper) {
		var dbHelper = dbhelper;
	}
	try
	{
		utils.GetDbhelper(dbcallback);
	}
	catch(ex){
		console.log('Error onResume fn')
	}
	
});


var Constants = {
	"publicIP": "http://124.124.218.136/rlife2",
	"mdkey" : "rlife_md5_key"
};

var CONSTANTS={
	DBName	:	"RelLife"
};


var AdharPref = {	
	"LA_adharphoto":"LA_adharphoto",
	"PR_adharphoto":"PR_adharphoto"
};

var menu = false;
function openplus(event){
	if(menu === true){
		$m.juci.findById("menulist").hide();
		event.stopPropagation();
		menu = false;
	}else{
		$m.juci.findById("menulist").show();
		event.stopPropagation();
		menu = true;
	}
}

// Hide Menu
function hideMenu(){
	if($m.juci.findById("profilelist") || $m.juci.findById("menulist")){
	    if($m.juci.findById("profilelist").el.style.display === "block"){
	        $m.juci.findById("profilelist").hide();
	        $('#filter_scroll').removeClass('stick');
	        $('#sticky-anchor').height(0);
	    }
	       if($m.juci.findById("menulist").el.style.display === "block"){
	        $m.juci.findById("menulist").hide();
	        $('#filter_scroll').removeClass('stick');
	        $('#sticky-anchor').height(0);
	    }
	}
}

function onNotificationsClick(){
	$m.open("Alerts and Notifications", "/Call For Requirement/cfrNotifications.html");
}

function openResources(){
	$m.open("Resources", "/Resources/resourceHome.html");
}

function testVideo(){
	$m.open("testVideo", "/Applications/testVideo.html");
}
   
   
 var profile_content =false;
function openProfileContent(){
	 if(profile_content === true){
	  $m.juci.findById("profile-content").hide();
	 profile_content = false;
	 }
	else{
		$m.juci.findById("profile-content").show();
		profile_content = true;
		get_ADV();	   
	}	
}

function onUploadVideo(){
	$m.open("selfieVideo", "/Applications/selfieVideo.html");
}

function onExperCallClick(){
	$m.open("testbutton", "/Applications/testbutton.html");
}

 function get_ADV(){
	 currentUser = {"code":$m.getUsername(),"name":$m.getUserAccount().customProperties.Login_Name,"usertype":$m.getUserAccount().customProperties.User_Type};
	 var profile = {
		"name":currentUser.name,
		"id": currentUser.code,
		"area":"hyderabad"
	};
	$m.juci.dataset("profileDetail",profile);
	var goalSummary = {
		"target":"00.00 ",
		"acheived":"00.00 ",
		"pending":"00.00"
	};
	
	$m.juci.dataset("goal",goalSummary);	
 }

function openMenu(event){
  if($m.juci.findById("profilelist").el.style.display === "none"){
        $m.juci.findById("profilelist").show();
        	event.stopPropagation();
	}
	else{
		$m.juci.findById("profilelist").hide();
		event.stopPropagation();
		
	}
}


function opennotification(){
	$m.open("Alerts","/RlifeAssist/alerts.html");
}

function getDescription(obj){
	return obj.Description;
}

function openForceUpdate(){
	$m.open("com.cloudpact.mowbly.home","/system/home.html","ForceUpdate");
}

function openBiometricConsent(){
	$m.open("biometricConsent", "/Resources/biometricConsent.html");
}

function laComparator(a,b){
	return a['LA_CODE'] == b['LA_CODE'];	
}

function lAComparator(a,b){
	return a['Description'] == b['Description'];
}

function roleConfig(){
	utils.ConfigureRoles();
}

function pivcConfiguration(){
	utils.PIVCConfiguration();
}

// Harshitha
function authConfig(){
	utils.AuthConfiguration();
}

function digitalConsent(){
	utils.digitalConfig();
}

 var  Proposer_Male = [
    
    {
        "LA_CODE": "BR",
        "Description": "Brother to L.A"
    },  {
        "LA_CODE": "EM",
        "Description": "Employer to L.A"
    }, {
        "LA_CODE": "FA",
        "Description": "Father - to L.A"
    }, {
        "LA_CODE": "GA",
        "Description": "Grand Father"
    },
    {
        "LA_CODE": "GU",
        "Description": "Guardian"
    }, {
        "LA_CODE": "HO",
        "Description": "Husband to L.A"
    }, {
        "LA_CODE": "HU",
        "Description": "Hindu undivided family"
    },  {
        "LA_CODE": "OT",
        "Description": "Others"
    }, {
        "LA_CODE": "SE",
        "Description": "Self"
    }, {
        "LA_CODE": "SO",
        "Description": "Son"
    },  {
        "LA_CODE": "UN",
        "Description": "Uncle to L.A"
    }, 
    	
    	
    	];
    
   var  Proposer_Female = [
    	{
        "LA_CODE": "AU",
        "Description": "Aunt to L.A"
    },  {
        "LA_CODE": "DA",
        "Description": "Daughter"
    }, {
        "LA_CODE": "EM",
        "Description": "Employer to L.A"
    },   {
        "LA_CODE": "GM",
        "Description": "Grand mother to L.A"
    }, {
        "LA_CODE": "GU",
        "Description": "Guardian"
    },  {
        "LA_CODE": "HU",
        "Description": "Hindu undivided family"
    }, {
        "LA_CODE": "MO",
        "Description": "Mother to L.A"
    }, {
        "LA_CODE": "OT",
        "Description": "Others"
    }, {
        "LA_CODE": "SE",
        "Description": "Self"
    },  
    
    {    "LA_CODE": "SR",
        "Description": "Sister to L.A"
    },  {
        "LA_CODE": "WI",
        "Description": "Wife"
    }
    	
    	
    	];

var Utils = {
	GetValidationMessage:getValidationMessage,
	GetValidation:getValidation
};

var validationFailedMessage = {
	"Full Name"			:"Enter only alphabets",
	"Child Name"        :"Enter only alphabets",
	"Spouse Name"		:"Enter valid spouse name",
	"Mother Name"		:"Enter valid mother name",
	"KYC Identifier"	:"Enter valid KYC Identifier",
	"Marital Status Other":"Enter valid marital status",
	"LeadName"			:"Enter alphabets with 30 characters only",
	"Fathers Name"		:"Enter only alphabets with special char(.')",
	"Address Line1"		:"Enter valid address with 30 characters only",
	"Address Line2"		:"Enter valid address with 30 characters only",
	"Address Line3"		:"Enter valid address with 30 characters only",
	"Address"			:"Enter valid address with 30 characters only",
	"Aadhar"            :"Enter valid Aadhar",
	"Duration"			:"Enter valid duration",
	"Quantity Per Day"	:"Enter valid Quantity Per Day",
	"Enter E-Insurance Account Number":"Kindly enter correct EIA no",
	"Insurance Repository":"Insurance Repository is required",
	"Employee Designation":"Enter alphabets with 30 characters only",
	"Employee Name" : "Enter alphabets with 30 characters only",
	"Bank Name"			:"Enter only alphabets",
	"Branch"			: "Enter only alphabets",
	"Branch Name" 		: "Enter only alphabets",
	"Disease Suffering"	:"Enter only aplhabets",
	"Where"             :"Enter only aplhabets",
	"With Whom"         :"Enter only aplhabets",
	"Father Name" 		: "Enter valid name",
	"First Middle"      : "Enter valid name",
	"MICR_Code"			:"Kindly enter valid ECS/ACH/DD number to proceed ahead!!",
	"Basic Sum Assured"	:"Enter only Numbers",
	"Source of Income"	:"Enter only alphabets",
	"Nature Of Duties":"Enter only alphabets",
	"Annual Income"     :"Invalid Income amount",
	"Source Of Income":"Enter only alphabets",
	"Purpose Of Insurance":"Enter only alphabets",
	"Job Description":"Enter only alphabets",
	"City":"Enter only alphabets and minimum 3 characters",
	"Employee No" : "Enter valid employee no",
	"Bank Account No.":"Invalid bank account number",
	"Contract/Proposal No":"Invalid Contract/Proposal No",
	"IFSC Code":"Enter 4 alphanumeric followed by 0 and then 6 alphanumeric",
	"PAN Card No.":"Enter 5 Alphabets followed by 4 Digit Numeric followed by last 1 digit alpha",
	"PAN Acknowledgement No.":"Enter 15 digit alphanumeric number",
	"Bank Account Proof":"Bank account proof is required",
	"Address Proof":"Address proof is required",
	"Age Proof":"Age proof is required",
	"Identity Proof":"Identity  proof is required",
	"Occupation":"Enter only alphabets",
	"Job Description":"Enter only alphabets",
	"Cheque/DD No":"Enter valid Number",
	"Care Of":"Enter only alphabets",
	"Building/House No.":"Enter only alphabets",
	"Installment Premium":"Enter valid amount",
	"Installment Premium Amount" : "Amount must be greater than 100",
	"Pincode":"Enter valid pincode",
	"Mobile No.":"Enter valid mobile number",
	"SM/FLS Mobile No.":"Enter valid mobile number",
	//krishna
	"FLS Code" : "Invalid SAP Code",
	//krishna ends
	"Email Id":"Please enter valid Email-Id",
	"Landline No.":"Enter only 11 numbers followed by 0",
	"Photo":"Photo is required",
	"Proof of contactability":"Proof of contactability is required",
	"Nominee Name":"Enter only alphabets",
	"Relationship":"Enter only alphabets",
	"Appointee Name":"Enter only alphabets",
	"Relationship with Nominee":"Enter only alphabets",
	"Proposer Name":"Enter only alphabets",
	"Repository":"Enter only alphabets",
	"Witness Name":"Enter only alphabets",
	"Declarant Name":"Enter only alphabets",
	"Declarant Place":"Enter only alphabets",
	"Policy Term": "Enter only numbers",
	"Sum assured": "Enter only numbers and minimum 3 characters",
	"Installment Premium": "Enter valid amount",
	"Total Installment Premium": "Enter valid amount",
	"Current Age":"Enter valid age",
	"Child Age":"Enter valid age",
	"Age at Death":"Enter valid numbers",
	"Age Of Diagnosis":"Enter valid numbers",
	"LA Name":"Enter only alphabets",
	"Family Member":"Enter only alphabets",
	"Name":"Enter only alphabets",
	"Basic Sum":"Enter only numbers",
    "Question No":"Enter only valid question number",
    "Quantity":"Enter only numbers",
    "Pregnant months":"Enter valid month",
    "Weight":"Enter only numbers",
    "Years":"Enter only numbers",
    "Months":"Enter valid month",
    "Name of parent":"Enter only alphabets with special char(.') and minimum 3 characters",
    "Duration Of Visit" : "Enter valid duration",
    "Remarks" : "Enter valid remarks",
    "savings" :"Enter valid Amount",
    "Advisor Place" : "Enter only alphabets and minimum 3 characters",
    "UCIUCIC No." :"Enter valid Number",
	"Lead no." :"Enter valid Number",
	"SP_Id.":"Enter valid Number",
	"Aaadhaar":"Enter valid Number",
	"Client ID or Policy No" : "Enter Client Id or Policy no",
	"PAN Identification Number":"Enter 5 Alphabets followed by 4 Digit Numeric followed by last 1 digit alpha",
	"Voter Identification Number":"Enter 3 Alphabet followed by 7 Digit Numeric Identification number",
	"other Identification Number": "Enter valid Identification number",
	"Transaction Id": "Enter valid number",
	"Branch Code":"Enter Valid Branch Code",
	"Application Number": "Enter valid Application Number",
	"State": "Enter only alphabets",
	"Plane Name": "Enter only alphabets",
	"PremiumPayingTerm":"Enter only numbers"
};

function getNationality(nationaliy){
	var nat = nationaliy.Description;
	if(typeof nationaliy.Description === "function"){
		nat = nationaliy.Description();
	}
	return nat;
}

var firstElement = "";
function getValidationMessage(event,attribute){
	if(event.message === "Required"){
		event.message = attribute+' '+'is required';
	}	
	else{
		event.message = validationFailedMessage[attribute];
			if(attribute == "FLS Code"){
			var PDC_Customer_Details = $m.juci.dataset("personalForm");
			PDC_Customer_Details.FLS_SAP_Code = ""
			$m.juci.dataset("personalForm",PDC_Customer_Details);
        }
        
//       if(attribute == "First Middle"){
//       	    var first = $m.juci.getControl("firstmid").value();
//       	    var re = /^(?:(?:\b[a-zA-Z']+\b)[ ]*){1,3}$/;
//       	    if(!re.test(first)){
//       	    event.message = validationFailedMessage[attribute];
//       	    }
//           var spaceCount = (first.split(" ").length - 1);
//           var speccount = (first.split("'").length - 1);
//          console.log(speccount)
//          if( spaceCount >2 || speccount >1){
//          	event.message = validationFailedMessage[attribute];
//          }
//       }

	}
	var tabsArray = $('.tab');
	for(var i=0;i<tabsArray.length;i++){
	var currentElement = $(tabsArray[i]);
		if(!currentElement.hasClass('visible')){
			currentElement.addClass('visible');
		}
	}
	
	if(Utils.firstValidationFlg && Utils.firstFailedCtrl && Utils.firstFailedCtrl != event.control){
		return;
	}
	Utils.firstFailedCtrl = event.control;
	Utils.firstValidationFlg = true;
	
	setTimeout(function(){
		window.scrollTo(0,event.control.j.offset().top - 150);
	},100);
	$m.toast("Please enter all the fields");
}

function first(event,attribute){
	if(attribute == "First Middle"){
       	    var first = $m.juci.getControl("firstmid").value();
       	    var re = /^(?:(?:\b[a-zA-Z']+\b)[ ]*){1,3}$/;
       	    if(!re.test(first)){
       	   $m.alert("Please enter valid name");
       	   $m.juci.getControl("firstmid").value(" ");
       	    }
           var spaceCount = (first.split(" ").length - 1);
           var speccount = (first.split("'").length - 1);
          console.log(speccount)
          if( spaceCount >2 || speccount >1){
          	 $m.alert("Please enter valid name");
          	  $m.juci.getControl("firstmid").value(" ");
          }
       }
       
}

function clearAndSubmit(){
	Utils.firstFailedCtrl = null;
	Utils.firstValidationFlg = false;
	var pd = $m.juci.getControl("pdForm");
	pd.submit();
}

function openCallContact(){
	$m.open("Contacts","/Products/callContacts.html");
}

function getValidation(event,attribute){
	
	if(event.message === "Required"){
		event.message = attribute+' '+'is required';
	}	
	else{
		event.message = validationFailedMessage[attribute];
	}
}

function openEditLead(data){
	$m.open("new Lead","/Input Management/newlead.html",data.data);
}
function openAlterDemo(){
	$m.open("AlterScript Demo","/Products/alterscriptdemo.html");
}

function changeSalutationofNOM(event){
	var dataset = $m.juci.dataset("nomineeOrAppointeeDetailsForm");
	if(event.value == "F"){
		$m.juci.dataset("salutation", femaleSalutation);
		dataset.NOM_Salutation =  setValueFromOptions("salutation",{"LA_CODE":"MS"}, localLaComparator);
	}
	else if(event.value == "M"){
		$m.juci.dataset("salutation", maleSalutation);
		dataset.NOM_Salutation =  setValueFromOptions("salutation",{"LA_CODE":"MR"}, localLaComparator);
	};
	$m.juci.dataset("nomineeOrAppointeeDetailsForm", dataset);
}

function changeSalutationPersonal(gender){
	if(gender == "F"){
		$m.juci.dataset("personalsalutation", femaleSalutation);
	}
	else if(gender == "M"){
		$m.juci.dataset("personalsalutation", maleSalutation);
	};
}

function setValueFromOptions(optionsDsId, value, comparator){
	console.log("1"+JSON.stringify(optionsDsId));
	var optionsDs = $m.juci.getDataset(optionsDsId)();
		console.log("2"+JSON.stringify(optionsDs));
	var optionsLength = optionsDs.length;
		console.log("3"+optionsLength);
	var v;
	for(var i = 0; i < optionsLength; i++){
		if(comparator(optionsDs[i],value)){
			v = optionsDs[i];
			console.log("4"+JSON.stringify(v));
			break;
		}
	}
		console.log("5"+JSON.stringify(value));
	return v ? v : value;
}

function localLaComparator(a,b){
	return a['LA_CODE']() === b['LA_CODE'];
}

function formatDate(today){
	var date = new Date(today).toString("dd/MM/yyyy");
	
	if(date== "NaN/NaN/NaN"){
	return '-';
	}
	else{
	return date;
	}
}

function formatOccupation(occupation){
	var occupation = ko.mapping.toJS(occupation);
	return occupation.Description;
}

function getSymbol(amount){
	return "₹ "+amount;
}

//function clearAndSubmit(){
//	Utils.firstFailedCtrl = null;
//	Utils.firstValidationFlg = false;
//	var pd = $m.juci.getControl("pdForm");
//	pd.submit();
//}

function openDisclaimer(){
	$m.open("Disclaimer", "/Products/disclaimer.html");
}

function openTerms(){
	$m.open("Terms and Conditions", "/Products/terms.html");
}

function openLifePlanner(){
		$m.open("Life Planner","/Input Management/stageGraph.html");
}

function openPrivacy(){
	$m.open("Privacy", "/Products/privacy.html");	
}

function openDashboard(){
	$m.open("Dashboard", "/Dashboard/Dashboard.html");	
}

function openConfirmUpdate(){
	$m.open("Confirm Update", "/Applications/confirmUpdate.html");
}

function openNewLead(){
	$m.open("newlead", "/Input Management/newlead.html");
}

function openActivityPlanning(e){
	$m.open("Activity Planning", "/Input Management/activityPlanning.html",e.data);
}

function openActivityResult(e){
	utils.OpenPage("Activity Result", "/Input Management/activityResult.html",e.data);
}

function myDreamMyIncome() {
	$m.open("myDreamMyIncomeCalculator", "/Device Information/myDreamMyIncomeCalculator.html");
}

function openSelfieVideoRetrieval(){
	$m.open("UploadSelfieVideo", "/Applications/UploadSelfieVideo.html");
}

var menu = false;
function openProducts(){
	if(menu === true){
		$m.juci.findById("menulist").hide();
		event.stopPropagation();
		menu = false;
	}else{
		$m.juci.findById("menulist").show();
		event.stopPropagation();
		menu = true;
	}
}

function openProposal(){
	var userType = gettype();
	if(userType == "AGSM"){
		$m.confirm({
			"title": "Confirm",
			"message": "Super Express gives you the benefits of instant e-KYC and PIVC Waiver. Would you like to login through Super Express",
			"buttons": [{
				"label": "Yes"
			}, {
				"label": "No"
			}]
		}, function(index) {
			// Code to execute when the confirm dialog dismisses
			if (index == 0) {
				// Yes
				$m.open("Input Management","/Input Management/inputManagement.html");
			} else if (index == 1) {
				$m.removePref("useAs");
				$m.open("Products","/Products/Products.html");
			}
		});
	} else {
		$m.removePref("useAs");
		$m.open("Products","/Products/Products.html");
	}
}

function openProducts(){
	confirmUser();
}

function openCallService(){
	callService();
}

function openCallService1(){
	callService1();
}


function openLead(){
	$m.open("new Lead","/Input Management/newlead.html");
}

function openPlanning(){
	$m.open("Planning","/Input Management/activityPlanning.html","Exisiting Advisor");
}

function openBMChannel(){
	$m.open("BM channel report","/Products/bmChannelReport.html");
}

function openSyncContacts(){
	$m.open("Sync Personal Contacts","/Sync Personal Contacts/syncContacts.html");
}

function openSync(){
	$m.open("Sync","/Applications/sync.html");
}
function openbiometrric(){
	$m.open("biometricConsent","/Resources/biometricConsent.html");
}

function openLogs(){
	$m.open("Logs","/Products/logs.html");
}

function openDataRetrieve(){
	$m.open("Data Retrieve","/Products/dataretrieve.html");
}

function openHelpDesk(){
	$m.open("Help Desk","/Products/helpdesk.html");
}
function openVersion(){
	$m.open("Version", "/system/updateInfo.html");	
}

function openCalculator(){
	$m.open("Calculator", "/Renewals/calculator.html");
}

function openDeviceCompatibility(){
	$m.open("deviceCompatibility","/Products/deviceCompatibility.html");
}

function openVideoRetrieval(){
	$m.open("videoRetrieval","/Applications/videoRetrieval.html");
}
function openPIVC(){
	$m.open("optionalPIVC","/Call For Requirement/optionalPIVC.html");
}


function openWhatsapp(){
	$m.open("Whats app demo","/Applications/Whatsappdemo.html");
}

function openBiometricConsent(){
	$m.open("biometricConsent","/Applications/biometricConsent.html");
}

function getInputs(obj){
	if(obj.Description){
		obj = obj.Description;
		if(obj != "Joint call with BM"){
			obj = obj.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		}
		return obj;
	 }
 	else{
     	return obj;
	  }
}

function inputComparator(a,b){
	if(a && b)
	return a['Description'] == b['Description'];	
}

function inputComparatorNew(a,b){
	if(a['Description']){
		a['Description'] = a['Description'].replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}
	if(b['Description']){
		b['Description'] = b['Description'].replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}
	return a['Description'] == b['Description'];	
}

function getInputsSubValue(obj){
	if(obj.name){
		return obj.name;
	}
	else{
	return obj;
	}
}

function getInputDescription(obj) {
	if(obj.DESCRIPTION){
		return obj.DESCRIPTION;
	 }
 	else{
     	return obj;
	  }
}

function inputDescComparator(a,b) {
	return a['DESCRIPTION'] == b['DESCRIPTION'];
}

 function changeLabel(id, label,isMandatory){
	var element = $m.juci.getControl(id);
	var labelElement = element.label.el.getElementsByClassName("juci_label_text");
	if(isMandatory)
	labelElement[0].innerHTML = label+ "<span class='star'>*</span>";
	else
	labelElement[0].innerHTML = label;
}

function format(e){
	return e.name;
}

function inputSubComparator(a,b){
	if(a.name){
		return a['name'] == b['name'];	
	}else if (a){
		return a == b;
	}else{
		return "";
	}
	
}

$m.onLocationError(function(response){
		//$m.logInfo(response);
		$m.alert("Please enable GPS Location","GPS Message",function(){
				$m.close();
		});
});


(function(){
	window.Messages = {
		get: function(id, args){
			if(typeof args == "undefined"){
				args = [];
			}
			var msg = _messages[id];
			var numArgs = args.length;
			for(var i = 0; i < numArgs; i++){
				msg = msg.replace("?"+i, args[i]);
			}
			return msg;
		}
	};
})();
function doLogout(){
	var accountName = __mowbly__.Page.userName;
	$m.confirm(
		{
			"title": Messages.get("LogoutAccountTitle"),
			"message": Messages.get("LogoutAccountConfirm", [(accountName !== __mowbly__.TryNowUser.username ? accountName : __mowbly__.TryNowUser.name)]),
			"buttons": [
				{"label": Messages.get("Yes")},
				{"label": Messages.get("No")}
			]
		}, function(index) {
			if(index === 0){
				$m.showProgress(Messages.get("LogoutAccountProgress"));
				__mowbly__.Shell.AccountManager.deleteAccount(accountName);
			}
		}
	);
}

function redirectToAML(){
	$m.open("AML Training", "/Applications/amlTraning.html");
}

function gettype(){
	var currentUser = "";
		try{
			currentUser = {"code":$m.getUsername(),"name":$m.getUserAccount().customProperties.Login_Name,"usertype":$m.getUserAccount().customProperties.User_Type};	
		}catch(e){
			currentUser = {
				"usertype" : ""
			}
		}
	
	return currentUser.usertype;
}


//   function gettype(){
//   	     return "TPADV";
//   }
   
function mobileNoCheck(e){
	if(e.value.length < 10){
		$m.alert("Enter Valid Mobile Number");
		$m.juci.getControl("sm-mobile").value(null);
	}
}

function getTableInfo(tablename,callback){
	var query = "PRAGMA table_info("+tablename+")";
	dbHelper.db.executeSql(query,
		function(s){
			resultdata = s.rows
			callback(resultdata)
		},
		function(f){
			$m.logError("\n Could not fetch table information for table --- "+tablename + "-- Reason :"+JSON.stringify(f))
			callback([])
		}
	);
}


/**
 * @Method : Used to open visiting card of the user
 * 
 **/
 
function openVisitCard(){
	var userdata = $m.getUserAccount();
	if(userdata.customProperties.Visiting_Card.Name){
		var data = userdata.customProperties.Visiting_Card;
		openVisitingCardPage(data);
	}else{
		var url = Constants.publicIP +"/mowblyserver/sgetsucode/rellife/prod/RlifeAssist";
		var data = {
	        "code":$m.getUsername()
	    };
	    if($m.networkConnected()){
	    	$m.showProgress('Fetching required information...');
			$m.post(url,data,function(response){
				$m.hideProgress();
				if(response.code === 200){
					var data = JSON.parse(response.result.data).entities;
					if(data.Count == 0){
						$m.alert('Sorry, Visiting card not avaialable. Please contact support team.');
						return; 
					}
					openVisitingCardPage(data);	
				}else{
					$m.alert('Please try after sometime');
				}
			});	
	    }else{
				$m.alert('No internect connection. Please try after sometime');
	    }
	}
	
}

function openVisitingCardPage(data){
	var formdata = encodeURIComponent(JSON.stringify(data));
	var file = $m.file("visitcard.html");
	$m.getFilePath(file,function(res){
		var filepath = res.result;
		filepath = filepath.replace("/Documents","/Application");
		filepath = filepath.replace(/prod.*/g,"prod/Input Management/visitcard.html");
		filepath = "file://"+filepath+"?"+formdata;
		if($m.networkConnected()){
			$m.openChildBrowser("VISITING", filepath, {"navigation": false, "address": [],"patterns": []});	
		}
	});
}

/* SE2 changes */
function openSE2Lead(){
	$m.open("New Lead of SE2.0", "/SE2/senewlead.html");
}

function openSE2ActivityResult(e){
	$m.open("Activity Result of SE2.0", "/SE2/SEactivityResult.html",e.data);
}

function openSE2ActivityPlanning(e){
	$m.open("Activity Planning of SE2.0", "/SE2/SEactivityPlanning.html",e.data);
}

function openSE2EditLead(data){
	$m.open("Edit Lead of SE2.0","/SE2/senewlead.html",data.data);
}

function openSE2Planning(){
	$m.open("Planning of SE2.0","/SE2/SEactivityPlanning.html","Exisiting Advisor");
}


//manali added function
function openExpressLogin(e){
	$m.open("Authentication of SE2.0", "/SE2/seauthentication.html",e.data);
//	$m.open("SeAuthentication", "/SE2/seauthentication.html",e.data);
}


//manali ulopeneditlead
function ulopenEditLead(data){
		$m.open("New Lead of IPT","/IncomePlanner/ulnewlead.html",data.data);
}
/* NAST Update Lead changes */
function openULForm(data){
	$m.open("Edit Lead for IPT", "/IncomePlanner/UpdateLeadForm.html",data.data);
}

function getUserBasedPacks(){
	
var ModuleAccessPacks=[{
	"appid": 227,
	"_eid": 5855,
	"name": "SE2",
	"icon": "01.png",
	"policy": {
		"expire": 7955187742000,
		"force_update": true,
		"force_install": true,
		"o_modifiedon": 1509531721127,
		"features": {
			"Files": {
				"max_internal_filesystem_size": {
					"description": "Maximum pack size allowed in Bytes",
					"value": 10485760,
					"datatype": "long",
					"obligations": [0, 2, 3],
					"operator": "max"
				},
				"write_access": {
					"description": "Allow access to write files",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"max_cache_filesystem_size": {
					"description": "Maximum cache file size allowed in Bytes",
					"value": 10485760,
					"datatype": "long",
					"obligations": [0, 2, 3],
					"operator": "max"
				},
				"read_access": {
					"description": "Allow access to read files",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"sdcard_access": {
					"description": "Allow access to sdcard",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				}
			},
			"Camera": {
				"gallery_read_access": {
					"description": "Allow read access to gallery",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"write_image_to_sdcard": {
					"description": "Allow write access to sdcard",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"camera_access": {
					"description": "Allow access to camera",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"gallery_write_access": {
					"description": "Allow write access to gallery",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				}
			},
			"Preferences": {
				"max_preferences_size": {
					"description": "Maximum size of preferences allowed in Bytes",
					"value": 2097152,
					"datatype": "long",
					"obligations": [0, 2, 3],
					"operator": "max"
				}
			},
			"Message": {
				"max_sms": {
					"description": "Maximum number of sms allowed",
					"value": 100,
					"datatype": "long",
					"obligations": [0, 2, 3],
					"operator": "max"
				},
				"allow_email": {
					"description": "Allow access to email",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"allow_sms": {
					"description": "Allow access to sms",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				}
			},
			"Network": {
				"network_type": {
					"description": "Type of network allowed",
					"value": [0, 1, 2, 3],
					"datatype": "numericarray",
					"obligations": [0, 2, 3],
					"operator": "in"
				}
			},
			"Database": {
				"max_database_size": {
					"description": "Maximum size of database allowed in Bytes",
					"value": 10485760,
					"datatype": "long",
					"obligations": [0, 2, 3],
					"operator": "max"
				},
				"database_access": {
					"description": "Allow access to database",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				}
			},
			"Http": {
				"http_access": {
					"description": "Allow access to http calls",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"network_type": {
					"description": "Type of network allowed",
					"value": [0, 1, 2, 3],
					"datatype": "numericarray",
					"obligations": [0, 2, 3],
					"operator": "in"
				},
				"whitelisted_urls": {
					"description": "List of whitelisted URLs",
					"value": ["salesassistapp.reliancenipponlife.com", "easyplanner.reliancenipponlife.com", "rservices.reliancenipponlife.com", "customer.reliancenipponlife.com", "portalenv.reliancenipponlife.com", "ekyc.reliancenipponlife.com", "bizops.reliancenipponlife.com", "SAServices.Reliancenipponlife.com", "www.reliancenipponlife.com"],
					"datatype": "array",
					"obligations": [0, 2, 3],
					"operator": "in"
				},
				"protocols": {
					"description": "List of http protocols allowed",
					"value": [0, 1, 2, 3, 4],
					"datatype": "numericarray",
					"obligations": [0, 2, 3],
					"operator": "in"
				},
				"blacklisted_urls": {
					"description": "List of blacklisted URLs",
					"value": [],
					"datatype": "array",
					"obligations": [0, 2, 3],
					"operator": "notin"
				}
			},
			"Location": {
				"gps_access": {
					"description": "Allow access to GPS",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				}
			},
			"Contacts": {
				"read_contact": {
					"description": "Allow access to read contacts",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"delete_contact": {
					"description": "Allow access to delete contacts",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"write_contact": {
					"description": "Allow access to create and edit contacts",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				}
			}
		}
	},
	"homeUrl": "SEinputManagement.html",
	"status": 1,
	"space": "prod",
	"_createdon": 1541234490655,
	"_modifiedon": 1541264412579,
	"notifications": []
}, {
	"appid": 227,
	"_eid": 5893,
	"name": "IncomePlanner",
	"icon": "01.png",
	"policy": {
		"expire": 7955187742000,
		"force_update": true,
		"force_install": true,
		"o_modifiedon": 1509531721127,
		"features": {
			"Files": {
				"max_internal_filesystem_size": {
					"description": "Maximum pack size allowed in Bytes",
					"value": 10485760,
					"datatype": "long",
					"obligations": [0, 2, 3],
					"operator": "max"
				},
				"write_access": {
					"description": "Allow access to write files",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"max_cache_filesystem_size": {
					"description": "Maximum cache file size allowed in Bytes",
					"value": 10485760,
					"datatype": "long",
					"obligations": [0, 2, 3],
					"operator": "max"
				},
				"read_access": {
					"description": "Allow access to read files",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"sdcard_access": {
					"description": "Allow access to sdcard",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				}
			},
			"Camera": {
				"gallery_read_access": {
					"description": "Allow read access to gallery",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"write_image_to_sdcard": {
					"description": "Allow write access to sdcard",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"camera_access": {
					"description": "Allow access to camera",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"gallery_write_access": {
					"description": "Allow write access to gallery",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				}
			},
			"Preferences": {
				"max_preferences_size": {
					"description": "Maximum size of preferences allowed in Bytes",
					"value": 2097152,
					"datatype": "long",
					"obligations": [0, 2, 3],
					"operator": "max"
				}
			},
			"Message": {
				"max_sms": {
					"description": "Maximum number of sms allowed",
					"value": 100,
					"datatype": "long",
					"obligations": [0, 2, 3],
					"operator": "max"
				},
				"allow_email": {
					"description": "Allow access to email",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"allow_sms": {
					"description": "Allow access to sms",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				}
			},
			"Network": {
				"network_type": {
					"description": "Type of network allowed",
					"value": [0, 1, 2, 3],
					"datatype": "numericarray",
					"obligations": [0, 2, 3],
					"operator": "in"
				}
			},
			"Database": {
				"max_database_size": {
					"description": "Maximum size of database allowed in Bytes",
					"value": 10485760,
					"datatype": "long",
					"obligations": [0, 2, 3],
					"operator": "max"
				},
				"database_access": {
					"description": "Allow access to database",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				}
			},
			"Http": {
				"http_access": {
					"description": "Allow access to http calls",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"network_type": {
					"description": "Type of network allowed",
					"value": [0, 1, 2, 3],
					"datatype": "numericarray",
					"obligations": [0, 2, 3],
					"operator": "in"
				},
				"whitelisted_urls": {
					"description": "List of whitelisted URLs",
					"value": ["salesassistapp.reliancenipponlife.com", "easyplanner.reliancenipponlife.com", "rservices.reliancenipponlife.com", "customer.reliancenipponlife.com", "portalenv.reliancenipponlife.com", "ekyc.reliancenipponlife.com", "bizops.reliancenipponlife.com", "SAServices.Reliancenipponlife.com", "www.reliancenipponlife.com"],
					"datatype": "array",
					"obligations": [0, 2, 3],
					"operator": "in"
				},
				"protocols": {
					"description": "List of http protocols allowed",
					"value": [0, 1, 2, 3, 4],
					"datatype": "numericarray",
					"obligations": [0, 2, 3],
					"operator": "in"
				},
				"blacklisted_urls": {
					"description": "List of blacklisted URLs",
					"value": [],
					"datatype": "array",
					"obligations": [0, 2, 3],
					"operator": "notin"
				}
			},
			"Location": {
				"gps_access": {
					"description": "Allow access to GPS",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				}
			},
			"Contacts": {
				"read_contact": {
					"description": "Allow access to read contacts",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"delete_contact": {
					"description": "Allow access to delete contacts",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				},
				"write_contact": {
					"description": "Allow access to create and edit contacts",
					"value": true,
					"datatype": "boolean",
					"obligations": [0, 2, 3],
					"operator": "equal"
				}
			}
		}
	},
	"homeUrl": "incomeplanner.html",
	"status": 1,
	"space": "prod",
	"_createdon": 1541240484864,
	"_modifiedon": 1541270702215,
	"notifications": []
}]

return ModuleAccessPacks;
}


