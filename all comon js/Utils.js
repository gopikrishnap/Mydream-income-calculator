/**
 * Utils.js
 * @author CloudPact Technologies
 * @description : This script is used for calling the common function which we are using in project
 **/

(function() {
	$m.onResume(function() {
		scrollTop();
	});
	
	$m.onNetworkDisconnect(function(eventObject){
		// Code to execute when a network is disconnected
		$m.alert(messages.NoNetworkConnectivity);
		$m.hideProgress();
	});
	
	function prependRs(x) {
		if (typeof x === "function") {
			x = x();
		}
		x = roundTo2(x);
		var isNegative = false;
		if (x < 0) {
			x = x * -1;
			isNegative = true;
		}
		var prependAmount = "₹ " + (x ? rupeeFormat(x) : '0');
		if (isNegative) {
			prependAmount = "-" + prependAmount
		}
		return prependAmount;
	}

	function rupeeFormat(nStr) {
		nStr += '';
		var x = nStr.split('.');
		var x1 = x[0];
		var x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		var z = 0;
		var len = String(x1).length;
		var num = parseInt((len / 2) - 1, 10);

		while (rgx.test(x1)) {
			if (z > 0) {
				x1 = x1.replace(rgx, '$1' + ',' + '$2');
			} else {
				x1 = x1.replace(rgx, '$1' + ',' + '$2');
				rgx = /(\d+)(\d{2})/;
			}
			z++;
			num--;
			if (num === 0) {
				break;
			}
		}
		return x1 + x2;
	}

	function roundTo2(v) {
		return Math.round(v * 100) / 100;
	}

	function headerTitle(title) {
		var head = $m.juci.findByClass("juci_panel_title").all;
		juci.viewModel.applyBinding(head[0]);
		juci.dataset("headerName", title);
	}

	function getDbhelper(callback) {
		new window.DB(CONSTANTS.DBName, function(dbHelper) {
			window.dbHelper = dbHelper;
			callback(window.dbHelper);

		}, function(error) {
			$m.logError("Unable to open database due to -- " + JSON.stringify(error));
		});

	}

	function pojoselect(tablename, callback) {
		var dbhelpercallback = function(dbhelper) {
			if (dbhelper) {
				window[tablename].Select(function(res) {
					callback(res);
				}, function(res) {
					$m.alert("Error while Fecthing from database");
					$m.logError("Read failed -- " + JSON.stringify(res));
				});

			} else {
				$m.alert("Error while opening database");
			}
		};
		utils.GetDbhelper(dbhelpercallback);
	}

	function pojoselectwithfilter(tablename, callback, data) {
		var dbhelpercallback = function(dbhelper) {
			if (dbhelper) {
				window[tablename].SelectWithFilter(data, function(res) {
					callback(res);
				}, function(res) {
					$m.alert("Error while Fecthing from database");
					$m.logError("Read failed -- " + JSON.stringify(res));
				});

			} else {
				$m.alert("Error while opening database");
			}
		};
		utils.GetDbhelper(dbhelpercallback);
	}
	function pojoselectWithFilterFlag(tablename, callback, data) {
		var dbhelpercallback = function(dbhelper) {
			if (dbhelper) {
				window[tablename].SelectWithFilter(data, function(res) {
					callback(res);
				}, function(res) {
					$m.alert("Error while Fecthing from database");
					$m.logError("Read failed -- " + JSON.stringify(res));
				});

			} else {
				$m.alert("Error while opening database");
			}
		};
		utils.GetDbhelper(dbhelpercallback);
	}
	function pojoselectwithfilterLMS(tablename, callback, data) {
		var dbhelpercallback = function(dbhelper) {
			if (dbhelper) {
				window[tablename].SelectWithFilterLMS(data, function(res) {
					callback(res);
				}, function(res) {
					$m.alert("Error while Fecthing from database");
					$m.logError("Read failed -- " + JSON.stringify(res));
				});

			} else {
				$m.alert("Error while opening database");
			}
		};
		utils.GetDbhelper(dbhelpercallback);
	}
	
	function pojoselectWithAdvFilter(tablename, callback, data) {
		var dbhelpercallback = function(dbhelper) {
			if (dbhelper) {
				window[tablename].SelectWithFilterAdv(data, function(res) {
					callback(res);
				}, function(res) {
					$m.alert("Error while Fecthing from database");
					$m.logError("Read failed -- " + JSON.stringify(res));
				});

			} else {
				$m.alert("Error while opening database");
			}
		};
		utils.GetDbhelper(dbhelpercallback);
	}
	
	function pojoselectWithDateRangeFilter(tablename, callback, data1,data2) {
		var dbhelpercallback = function(dbhelper) {
			if (dbhelper) {
				window[tablename].SelectWithFilterDateRange(data1,data2, function(res) {
					callback(res);
				}, function(res) {
					$m.alert("Error while Fecthing from database");
					$m.logError("Read failed -- " + JSON.stringify(res));
				});

			} else {
				$m.alert("Error while opening database");
			}
		};
		utils.GetDbhelper(dbhelpercallback);
	}
	
	function pojoselectwithlead_Id(tablename, callback, data) {
		var dbhelpercallback = function(dbhelper) {
			if (dbhelper) {
				window[tablename].SelectWithLead_ID(data, function(res) {
					callback(res);
				}, function(res) {
					$m.alert("Error while Fecthing from database");
					$m.logError("Read failed -- " + JSON.stringify(res));
				});

			} else {
				$m.alert("Error while opening database");
			}
		};
		utils.GetDbhelper(dbhelpercallback);
	}

	function pojoupdatetable(tablename, callback, data, filter) {
		var dbhelpercallback = function(dbhelper) {
			if (dbhelper) {
				window[tablename].UpdateTable(data, filter, function(res) {
					callback(res);
				}, function(res) {
					$m.alert("Error while updating to database");
					$m.logError("Failed to update " + tablename + "--- " + JSON.stringify(res));
					$m.logInfo("Failed to Update");
				});

			} else {
				$m.alert("Error while opening database");
			}
		};
		utils.GetDbhelper(dbhelpercallback);
	}

	function pojoupdate(tablename, callback, tabledata) {
		var dbhelpercallback = function(dbhelper) {
			if (dbhelper) {
				tabledata.update(function(res) {
					callback(res);
				}, function(res) {
					$m.alert("Error while inserting to database");
					$m.logError("Failed to insert " + tablename + "--- " + JSON.stringify(res));
					$m.logInfo("Failed to insert");
				});

			}
		};
		utils.GetDbhelper(dbhelpercallback);
	}

	function pojoInsert(tablename, callback, tabledata) {
		tabledata.update(function(res) {
			callback(res);
		}, function(res) {
			$m.alert("Error while inserting to database");
			$m.logError("Failed to insert " + tablename + "--- " + JSON.stringify(res));
		});
	}
	
	function pojoInsertQuery(tablename, callback, tabledata) {
		tabledata.insert(function(res) {
			callback(res);
		}, function(res) {
			
			$m.alert("Error while inserting to database");
			$m.logError("Failed to insert " + tablename + "--- " + JSON.stringify(res));
		});
	}
	
	function pojoReplaceQuery(tablename, callback, tabledata) {
		tabledata.Replace(function(res) {
			callback(res);
		}, function(res) {
			$m.alert("Error while inserting to database");
			$m.logError("Failed to insert " + tablename + "--- " + JSON.stringify(res));
		});
	}

	function pojoremove(tablename, callback, tabledata) {
		var dbhelpercallback = function(dbhelper) {
			if (dbhelper) {
				tabledata.remove(function(res) {
					callback(res);
				}, function(res) {
					$m.alert("Error while deleting to database");
					$m.logError("Failed to delete " + tablename + "--- " + JSON.stringify(res));
				});

			} else {
				$m.alert("Error while opening database");
			}
		};
		utils.GetDbhelper(dbhelpercallback);
	}

	function pojoUpdateSync(tablename, data, filter, callback) {
		window[tablename].updateSync(data, function(res) {
			callback(res);
		}, function(res) {
			$m.alert("Error while updating to database");
			$m.logError("Failed to update " + tablename + "--- " + JSON.stringify(res));
		});

	}

	function pojoMultiReplace(tablename, data, callback) {
		window[tablename].multipleReplace(data, function(res) {
			callback(res);
		}, function(res) {
			$m.hideProgress();
			$m.alert("Error while inserting to database");
			$m.logError("Failed to insert " + tablename + "--- " + JSON.stringify(res));
		});
	}

	function getUserType() {
		var currentUser = {
			"code": "",
			"name": "",
			"usertype": ""
		};
		try {
			currentUser = {
				"code": $m.getUsername(),
				"name": $m.getUserAccount().customProperties.Login_Name,
				"usertype": $m.getUserAccount().customProperties.User_Type
			};
		} catch (e) {
			currentUser = {
				"usertype": ""
			}
		}
		return currentUser.usertype;
	}
	
	function getUserAccount() {
		var getUserAccountProperties = $m.getUserAccount().customProperties;
		return getUserAccountProperties;
	}

	function getLoginCode(){
		try{
			var Login_code = $m.getUserAccount().customProperties.Login_Code
		} catch(e){
			Login_code = "";
		}
		return Login_code;
	}

	function showDialog(id) {
		$m.juci.showDialog(id);
	}

	function hideDialog(id) {
		$m.juci.hideDialog(id);
	}

	function showPopup() {
		var popupClass = "popup";
		var popupElement = $m.juci.findByClass("popup");
		popupElement[0].show();
	}

	function hidePopup() {
		var popupClass = "popup";
		var popupElement = $m.juci.findByClass("popup");
		popupElement[0].hide();
	}
	function showProgress(content){
	   $m.showProgress(content);
	}
     
     function hideProgress(){
	   $m.hideProgress();
	}
	function openPage(pageName, pageUrl, data, progressmessage) {
		$m.open(pageName, pageUrl, data, {
			progressMsg: progressmessage
		});
	}

	function changeLabel(id, label,isMandatory){
		var element = $m.juci.getControl(id);
		var labelElement = element.label.el.getElementsByClassName("juci_label_text");
		if(isMandatory)
		labelElement[0].innerHTML = label+ "<span class='star'>*</span>";
		else
		labelElement[0].innerHTML = label;
	}
			
	function setProgress(index) {
		if (index != -1) {
			try {
				var progressElement = $m.juci.findByClass("progress_line");
				progressElement[0].el.style.width = (index / Constants.TotalPages) * 100 + "%";
			} catch (e) {

			}
		}
	}

	function getTimeStamp() {
		return new Date().getTime();
	}
	
	function getDateByTimeStamp(timestamp) {
		return new Date(timestamp);
	}
	
	function getTimeStampByDate(date) {
		 return new Date(date).getTime();
	}

	function getUsername() {
		var username = Utils.GetPref("userLoggedIn");
		if (!username) {
			return "10379";
		}
		username = username.split("__");
		return username[0];
	}

	function putPref(key, value) {
		$m.putPref(key, value);
		$m.savePref();
	}
	
	function removePref(key) {
		$m.removePref(key);
		$m.savePref();
	}

	function getPref(key) {
		return $m.getPref(key);
	}

	function setResult(key) {
		$m.setResult(key);
	}

	function closepage() {
		$m.close();
	}
	
	function getDeviceId(deviceCallback){
		$m.getDeviceId(deviceCallback);
	}

	function getLocation(time,boolean,callback) {
		$m.getLocation({
			"enableHighAccuracy":boolean,
			"timeout": time
		}, function(response) {
			if (response.code) {
				// Success
				latitude = response.result.position.coords.latitude;
				longitude = response.result.position.coords.longitude;
				if (callback) {
					callback(latitude,longitude);
				}
			} else if (response.error.message == "Request timed out") {
				// Error
				var errMsg = response.error.message;
				$m.alert("Please enable GPS Location", "GPS Message", function() {
					var callback = function(r){
						$m.hideProgress();
						if(r.code == 1){
							//$m.logInfo("success");	
						}
					};
					Framework.openExternal({"className":"","packageName":"com.android.settings","action":"android.settings.LOCATION_SOURCE_SETTINGS"},callback);
				});
			}
		});
	}

	function getAge(dob) {
		var today = new Date();
		var birthDate = new Date(dob);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}

	function getDate(date) {
		var dateString = "";

		if (typeof date === "string") {
			var dateSplit = date.split("/");
			date = dateSplit[1] + "/" + dateSplit[0] + "/" + dateSplit[2];
		}

		if (date) {
			dateString = new Date(date).toString("dd/MM/yyyy");
		} else {
			dateString = new Date().toString("dd/MM/yyyy");
		}
		return dateString;
	}
	
	function getDateByHyphen(date) {
		var dateString = "";

		if (typeof date === "string") {
			var dateSplit = date.split("/");
			date = dateSplit[1] + "-" + dateSplit[0] + "-" + dateSplit[2];
		}

		if (date) {
			dateString = new Date(date).toString("dd-MMM-yyyy");
		} else {
			dateString = new Date().toString("dd-MMM-yyyy");
		}
		return dateString;
	}


	function getRandomNum() {
		var min = 10000000;
		var max = 99999999;
		var num = Math.floor(Math.random() * (max - min + 1)) + min;
		return num;
	}

	function getSingleRandom() {
		var min = 0;
		var max = 9;
		var num = Math.floor(Math.random() * (max - min + 1)) + min;
		return num;
	}

	function setTimeStamp(date) {
		return new Date(date).getTime();
	}
	
	function getDateTime(){
		return new Date().toDateString();
	}
	
	function getTodaysDate(){
		return new Date();
	}
	
	function getTodaysTimeStamp(){
		return new Date().getMonth();
	}

	function getMinutes() {
		var startTime = new Date("01/01/2015").getTime();
		var currentTime = new Date().getTime();
		var timeDiff = currentTime - startTime;
		var numMin = Math.round(timeDiff / 60000).toString();
		var paddings = "0000000000000000";
		var requiredDigits = 7;
		var actuallDigits = requiredDigits - numMin.length;
		if (actuallDigits > 0) {
			numMin = paddings.substr(0, actuallDigits) + numMin;
		}
		return numMin;
	}



	function toUpperCase(name) {
		if (name) {
			name = name.replace(/\w+/g, function(txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			});
		}
		return name;
	}

	function scrollTop() {
		var pageBodyElem = document.getElementById("page-body");
		if (pageBodyElem) {
			pageBodyElem.scrollTop = 0;
		}
	}

	function getDateFormat(dateObj) {
		if (typeof dateObj == "function") {
			dateObj = dateObj();
		}
		if (dateObj) {
			var date = new Date(dateObj);
			return date.toString("yyyy-MM-dd HH:mm:ss");
		}
		return 0;
	}

	function getControl(id) {
		var control = $m.juci.getControl(id);
		return control;
	}
	
	function onclickListener(id,pageName,className){
		$m.juci.getControl(id).addListItemClick(pageName, this, className);
	}

	function fireRequest(requestName, requestContent, callback) {
		if (!callback) {
			callback = function() {};
		}
		var url = "";
		url = Constants.ServiceUrl;
		if (false) {
			if (!callback) {
				callback = function() {};
			}
			var url = "";
			if ($m.isWeb()) {
				url = Constants.ServiceUrl;
				url = url + "?data=" + JSON.stringify(requestContent);
			} else {
				url = Constants.ServiceUrl + "?uname=" + $m.httpRequest.getUsernamePlaceholder() + "&pwd=" + $m.httpRequest.getPasswordPlaceholder();
				url = url + "&data=" + JSON.stringify(requestContent);
			}
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
					var resultData = JSON.parse(xmlhttp.responseText);
					callback(resultData);
				}
			};
			xmlhttp.open("POST", url, true);
			xmlhttp.send();
		} else {
			requestContent = {
				"data": $m.isWeb() ? encodeURIComponent(JSON.stringify(requestContent)) : requestContent
			};
			$m.post(url, requestContent, function(response) {
				if (response.code == 200) {
					try {
						var result = JSON.parse(response.result.data);
						//$m.logInfo(requestName + " Success : Response " + JSON.stringify(response) + " Callback - " + callback);
					} catch (e) {
						result = response.result;
						$m.logError(requestName + " Failed : Response " + JSON.stringify(response));
					}
					callback(result);
				} else {
					$m.logError(requestName + " Failed : Response " + JSON.stringify(response) + "Message " + errMsg);
					var errMsg = response.error.message;
					if (response.code == 401) {
						if ($m.isWeb()) {
							window.reload();
						}
					}
					callback(null);
				}
			});
		}
	}

	function generateUUID() {
		var d = new Date().getTime();
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
		});
		return uuid;
	}


	function getDaysInMonth(month, year) {
		return new Date(year, month, 0).getDate();
	}

	function check(str) {
		var tmp = {};
		for (var i = str.length - 1; i >= 0; i--) {
			var c = str.charAt(i);
			if (c in tmp) {
				tmp[c] += 1;
			} else {
				tmp[c] = 1;
			}
		}
		var result = {};
		for (var c in tmp) {
			if (tmp.hasOwnProperty(c)) {
				if (tmp[c] > 1) {
					result[c] = tmp[c];
				}
			}
		}
		return result;
	}
	
	function generateId(){
		var randomId = 'UKC:'+""+new Date().getTime()+ getRandomNum();
		return randomId;	
	}
	
	function confirmBox(displaytText,yesCallback,noCallback){
		$m.confirm({
			"title": "Confirm",
			"message": displaytText,
			"buttons": [{
					"label": "Yes"
				},
				{
					"label": "No"
				}
			]
		}, function(index) {
			if (index == 0) {
				yesCallback();
			} else if (index == 1) {
				noCallback();
			}
		});
	}
var timeoutRef = "";
function startTimer(duration, display,callback) {
	var timer = duration;
	var minutes, seconds;
	timeoutRef = setInterval(function () {
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10);
		
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		
		display.textContent = minutes + ":" + seconds;
		if(display.textContent == "00:00"){
			callback("true");
			return;
		}
	
		if (--timer < 0) {
		timer = duration;
		}
	}, 1000);
}

function getFormattedDate(dateObj){
	if(dateObj.getDate() > 9){
		if(dateObj.getMonth() > 9){
			return (dateObj.getMonth()+1)+ "/" +dateObj.getDate()+ "/" +dateObj.getFullYear();
		} else {
			return "0"+(dateObj.getMonth()+1)+ "/" +dateObj.getDate()+ "/" +dateObj.getFullYear();
		}
	} else {
		if(dateObj.getMonth() > 9){
			return (dateObj.getMonth()+1)+ "/0" +dateObj.getDate()+ "/" +dateObj.getFullYear();
		} else {
			return "0"+(dateObj.getMonth()+1)+ "/0" +dateObj.getDate()+ "/" +dateObj.getFullYear();
		}
	}
}

function stopTimer() {
	clearInterval(timeoutRef);
}

	function checkObservable(data) {
		if (typeof data === "function") {
			data = ko.toJS(data);
		} else if (typeof data === "object") {
			data = ko.toJS(data);
		}
		return data;
	}

	function checkRepetition(str) {
		var repetedChar = check(str);
		var isValid = true;
		for (var key in repetedChar) {
			if (repetedChar[key] > 2) {
				var repitionStr = key + key + key;
				var isNumber = isNaN(parseInt(repitionStr));
				if (str.indexOf(repitionStr) != -1 && isNumber) {
					return false;
				}
			}
		}
		return isValid;
	}

	function checkEndsWith(value) {
		var lastChar = value.substring(value.length - 1);
		if (lastChar === " ") {
			return false;
		}
		return true;
	}
	
	function getDateString(){
		return new Date().toString("HH:mm");
	}
	
	function checkingNetworkSpeed(message,callback) {
		var networkSpeedcallback = function(res){
			utils.HideProgress();
			if(res.netSpeed.speed < 10){
				$m.alert("Your network bandwidth is very poor please try again later","Alert",function(){
					$m.close();
				});
			} else if (res.netSpeed.speed < 250) {
				$m.confirm({
					"title": "Confirm",
					"message": message,
					"buttons": [{
							"label": "Yes"
						},
						{
							"label": "No"
						}
					]
				}, function(index) {
					if (index == 0) {
						callback("True");
						console.log("true")
					} else if (index == 1) {
						$m.hideProgress();
					}
				});
			} else {
				callback("False");
				console.log("False");
			}
		};
		
		$m.onNetworkSpeedchange(networkSpeedcallback);	
	}
	
	var net;
	function newtorkUtils(){
		$m.getNetworkSpeed("http://124.124.218.136/supertrack");
	}
//CODE STARTS	
//	function checkingNetworkSpeed(message,callback) {
//		if(!newtorkUtils()){
//			var networkSpeedcallback = function(res){
//				utils.HideProgress();
//				if(res.netSpeed.speed < 10){
//					$m.alert("Your network bandwidth is very poor please try again later","Alert",function(){
//						$m.close();
//					});
//				} else if (res.netSpeed.speed < 250) {
//					$m.confirm({
//						"title": "Confirm",
//						"message": message,
//						"buttons": [{
//								"label": "Yes"
//							},
//							{
//								"label": "No"
//							}
//						]
//					}, function(index) {
//						if (index == 0) {
//							callback("True");
//							console.log("true")
//						} else if (index == 1) {
//							$m.hideProgress();
//						}
//					});
//				} else {
//					callback("False");
//					console.log("False");
//				}
//			};
//			$m.onNetworkSpeedchange(networkSpeedcallback);
//		}else{
//			callback("True");
//		}
//	}
//	
//	var net;
//	function newtorkUtils(){
//		var networkSpeed = getNetworkSpeedData();
//		if(networkSpeed.status == "success"){
//			if(networkSpeed.speed < 10){
//				$m.alert("Your network bandwidth is very poor please try again later","Alert",function(){
//					$m.close();
//				});
//			} else if (networkSpeed.speed < 250) {
//				var message = "Your Network bandwidth is below 250 kbps.It will take some time to sync the data.Do you want to Proceed?";
//				$m.confirm({
//					"title": "Confirm",
//					"message": message,
//					"buttons": [{
//							"label": "Yes"
//						},
//						{
//							"label": "No"
//						}
//					]
//				}, function(index) {
//					if (index == 0) {
//						console.log("True");
//					} else if (index == 1) {
//						$m.hideProgress();
//					}
//				});
//			} else {
//				$m.getNetworkSpeed("http://124.124.218.136/supertrack");
//				return true;
//			}
//		}else{
//			$m.alert(networkSpeed.Message);
//		}
//	}
//		function getNetworkSpeedData(){
//			var result = {}
//			var imageAddr =  "https://salesassist.reliancenipponlife.com/ComplianceDocs/For%20Advisors-05.jpg?n=" + Math.random() ;
//	        var startTime, endTime ; 
//	        var downloadSize = 750557 ;
//	        var download = new Image() ;
//	        
//	        download.onload = function() {
//			    endTime = (new Date()).getTime() ;
//			    result.status = "success";
//			    result.speed = showResults(); 
//		    }
//		    
//		    download.onerror = function(err, msg) {
//	            console.log("Invalid image, or error downloading");
//	            this.src = "https://i1.wp.com/www.socialnews.xyz/wp-content/uploads/2018/04/25/0e0df42468d9f126ed6d09d3deaf2e82.jpg?n="+ Math.random() ;
//	            downloadSize = 90033;
//	        }
//			startTime = (new Date()).getTime() ; 
//			if ($m.networkConnected()){		
//				download.src = imageAddr ;
//			}else{
//				result.status = "error";
//				result.Message = "No Internet connection";
//			};
//			return result;
//		}
//	
//	function showResults () { 
//		var duration = Math.round((endTime - startTime) / 1000) ; 
//		var bitsLoaded = downloadSize * 8 
//		var speedBps = Math.round(bitsLoaded / duration) 
//		var speedKbps = (speedBps / 1024).toFixed(2)
//		var speedMbps = (speedKbps / 1024).toFixed(2) 
//		return speedKbps;
//	}
// CODE ENDS
	
	function scrollToTop() {
	window.scrollTo(0, 0);
    }

	function getLanguage(lang_chosen) {
		//lang_chosen = e.value;
		preference = "English";
		if (lang_chosen == "Tamil") {
			preference = "Tamil";
		} else if (lang_chosen == "Telugu") {
			preference = "Telugu";
		} else if (lang_chosen == "Hindi") {
			preference = "Hindi";
		} else if (lang_chosen == "Marathi") {
			preference = "Marathi";
		}else if (lang_chosen == "Kannada") {
			preference = "Kannada";
		}
		$m.juci.dataset("juci_language", preference);
		utils.PutPref("language", preference);
	}
	
	function getDateFormatted(dateinput) {
		var date = new Date(dateinput);
		var dateString, month = "",
			dt = "";
		if (date.getMonth() < 9)
		month = '0' + (date.getMonth() + 1);
		else
		    month = date.getMonth() + 1;
		if (date.getDate() <= 9)
		    dt = '0' + (date.getDate());
		else
		    dt = date.getDate();
		dateString = date.getFullYear() + "-" + month + '-' + dt;
		return dateString;
	}
	
	function getPreviousDate(){
		var day = $m.juci.dataset("dayname");
		var month = $m.juci.dataset("monthName");
		var year = $m.juci.dataset("fullYear");
		var finalDate = day + "/" + month + "/" + year;
		var final = new Date(finalDate);
		var previousDate = new Date(final.getTime() - (24 * 60 * 60 * 1000));
		var previous_date = previousDate.getDate();
		var monName = previousDate.getMonthName();
		$m.juci.dataset("dayname",previous_date);
		$m.juci.dataset("monthName",monName);
		return previousDate;
	}
	
	function getNextWeekDates(){
		var curr = new Date; // get current date
		var first = curr.getDate(); // get Today
		var last = first + 7; // Add today with next 7 days
		
		var firstdayDate = new Date().toString('dd-MMM-yyyy');
		var firstday = new Date(firstdayDate);
		var lastday = new Date(curr.setDate(last));
		
		var fromDate = new Date(firstday).getTime();
		var toDate = new Date(lastday).getTime();
		return fromDate + '-' + toDate;
	}
	
	function setOrderAsc(a,b){
		if(a < b){
			return -1;
		}
		if(a > b){
			return 1;
		}
		else
			return 0;
	}

	function setOrderDesc(a,b){
		if(a > b){
			return -1;
		}
		if(a < b){
			return 1;
		}
		else
			return 0;
	}
	
	function openBiometric(aadharNo,callback){
		var ValidateBiometricCallback = function(res) {
			callback(res);
		};
		var fingerPrintCallback = function(res) {
			if(res.code == 1){
				var finalData = x2js.xml_str2json(res.result.PID_DATA);
				utils.PutPref("FingerprintData",finalData);
				var morphoInfo = utils.GetPref("MorphoDeviceInfo");
				utils.ShowProgress("Fetching Aadhaar Data..");
				AadharServices.ValidateBiometric(morphoInfo,finalData,ValidateBiometricCallback);
			} else {
				$m.alert(res.result);
				$m.logError("finger print callback failed due to : "+res);
			}	
		};
		var getMorphoDeviceCallback = function(res) {
			if(res.code == 1){
				utils.HideProgress();
				var finalRes = x2js.xml_str2json(res.result.DeviceInfo);
				utils.PutPref("MorphoDeviceInfo",finalRes);
				$m.initFingerCaptureInput(fingerPrintCallback);
			} else {
				utils.HideProgress();
				$m.alert(res.result);
				$m.logError("morpho device callback failed due to : "+res);
			}
		};
		var registerMorphoCallback = function () {
			utils.HideProgress();
			utils.ShowProgress("Capturing device data..");
			$m.getMorphoDeviceInfo(getMorphoDeviceCallback);
		};
		AadharServices.RegisterMorphoDevice(aadharNo,registerMorphoCallback);
	}
	
	function getNextDate(){
		var day = $m.juci.dataset("dayname");
		var month = $m.juci.dataset("monthName");
		var year = $m.juci.dataset("fullYear");
		var finalDate = day + "/" + month + "/" + year;
		var final = new Date(finalDate)
		var today = utils.GetTodaysDate();
		var tomorrowDate = new Date(final.getTime() + (24 * 60 * 60 * 1000));
		var next_date = tomorrowDate.getDate();
		var tomorrowMonth = tomorrowDate.getMonthName();
		$m.juci.dataset("dayname",next_date);
		$m.juci.dataset("monthName",tomorrowMonth);
		return tomorrowDate;
	}
	
	function getFormatedDate(date){
		var m_names = new Array("Jan", "Feb", "Mar", 
		"Apr", "May", "Jun", "Jul", "Aug", "Sep", 
		"Oct", "Nov", "Dec");
		
		var d = new Date();
		var curr_date = d.getDate();
		var curr_month = d.getMonth();
		var curr_year = d.getFullYear();
		 var formatedDate=curr_date + "-" + m_names[curr_month] + "-" + curr_year;
		 return formatedDate;
	}
	
	function configureRoles(){
		$m.showProgress("Configuring Roles...");
		console.log("Configuring Roles...");
		if(!$m.networkConnected()){
			$m.alert("No Internet connection");
			return;
		}
		var roleType = gettype();
		var url = "http://124.124.218.136/rlife2/mowblyserver/roleConfigurationServerScript/rellife/prod/RlifeAssist?roleName="+ roleType;
		console.log("ROLE_CONFIGURATION_URL",url);
		$m.get(url, function(response){
			console.log("ROLE_CONFIGURATION_RESP",response);
			if(response.code === 200){
				// Success
				$m.hideProgress();
				$m.putPref("rolesConfiguration",response.result.data);
				$m.savePref();
				mapAuthenticationRoles();
				mapPaymentRoles();
				mapAuthenticationProposalRoles();
				$m.toast("Role Configuration reuqest was successful");
			} else{
				// Error
				$m.hideProgress();
				$m.logError("Unable to fetch roles config due to -- " + JSON.stringify(response));
				var errMsg = response.error.message;
			}
		});
	}
	
	function pivcConfiguration(){
		$m.showProgress("Configuring PIVC...");
		console.log("Configuring Roles...");
		if(!$m.networkConnected()){
			$m.alert("No Internet connection");
			return;
		}
		var roleType = gettype();
		var url = "http://124.124.218.136/rlife2/mowblyserver/PIVCConfiguration/rellife/prod/RlifeAssist?roleName="+ roleType;
	
		$m.get(url, function(response){
			if(response.code === 200){
				// Success
				$m.hideProgress();
				var rolesConfig = response.result.data;
				var roles_config = JSON.parse(rolesConfig)
				$m.putPref("PIVCConfigurationObj",roles_config);
				$m.savePref();
			
			} else{
				// Error
				$m.hideProgress();
				$m.logError("Unable to fetch PIVC config due to -- " + JSON.stringify(response));
				var errMsg = response.error.message;
			}
		});
	}
	
//	Harshitha
function authConfiguration(){
		$m.showProgress("Configuring Authentication...");
		console.log("Configuring Authentication...");
		if(!$m.networkConnected()){
			$m.alert("No Internet connection");		
			return;
		}
		var roleType = gettype();
		console.log("getType",roleType);
		var url = "http://124.124.218.136/rlife2/mowblyserver/authConfigServerScript/rellife/prod/RlifeAssist?roleName="+roleType;
	
		$m.get(url, function(response){
			if(response.code === 200){
				// Success
				$m.hideProgress();
				var authConfig = response.result.data;
				var auth_config = JSON.parse(authConfig)
				$m.putPref("authConfigurationObj",auth_config);
				$m.savePref();
//				$m.alert("WadhKey: "+auth_config.wadh);
			
			} else{
				// Error
				$m.hideProgress();
				$m.logError("Unable to fetch auth config due to -- " + JSON.stringify(response));
				var errMsg = response.error.message;
			}
		});
}



	//mtwtest
function digitalConfig(){
		$m.showProgress("Configuring Digital Consent...");
		console.log("Configuring  Digital Consent...");
		if(!$m.networkConnected()){
			$m.alert("No Internet connection");
			return;
		}
		var roleType = gettype();
		var url = "http://124.124.218.136/rlife2/mowblyserver/Digitalconsentserverscript/rellife/prod/RlifeAssist?roleName="+ roleType;
		console.log("role",roleType)
		$m.get(url, function(response){
			if(response.code === 200){
				// Success
				$m.showProgress("Configuring Digital Consent...");
				var rolesConfig = response.result.data;
				var roles_config = JSON.parse(rolesConfig)
				$m.putPref("DigitalconsentConfigurationObj",roles_config);
				$m.savePref();
				$m.hideProgress();
				console.log("role",roleType)
			} else{
				// Error
				$m.hideProgress();
				$m.logError("Unable to Config digital due to -- " + JSON.stringify(response));
				var errMsg = response.error.message;
			}
		});
	}

	function changelabelname(data,ele,ele2,ele3){
		if(ele3){
			var text3 = "Current estimated cost of becoming a ";
		    text3 += data;
		    text3 += "<span class='star'>*</span>"
		    var control3 = $m.juci.getControl(ele3);
		    control3.setLabel(text3);
		}else{
			var text = "What would you like ";
		    text += data;
		    text += " to become?<span class='star'>*</span>"
		    var control = $m.juci.getControl(ele);
		    control.setLabel(text);
		    var text2 = "Your current savings for ";
		    text2 += data;
		    text2 += "'s education<span class='star'>*</span>"
		    var control2 = $m.juci.getControl(ele2);
		    control2.setLabel(text2);
		}
	}
		
//Added By Sneha	

	function getProduct(index)
	{
		var ProductName = "";
		try
		{
			if(index==0)
			{
				utils.PutPref("ProductName","protect");
			}
				else if(index==1)
			{
				utils.PutPref("ProductName","health");
			}
			
			else if(index==2)
			{
				utils.PutPref("ProductName","saving");
			} 
			else if(index==3)
			{
				utils.PutPref("ProductName","invest");
			} 
//			else if(index==3)
//			{
//				utils.PutPref("ProductName","health");
//			} 
			else if(index==4)
			{
				utils.PutPref("ProductName","retirement");
			} 
			else if(index==5)
			{
				utils.PutPref("ProductName","child");
			} 
			else if(index==6)
			{
				utils.PutPref("ProductName","solutions");
			}	
//	    	else if(index==6)
//			{
//				utils.PutPref("ProductName","health");
//			}
					
			ProductName = utils.GetPref("ProductName");
			console.log(ProductName);
			return ProductName;	
		}
		catch(e){
			console.log(ProductName);
			return ProductName;	
		}
	}

	function configureProd(){
		$m.showProgress("Configuring Products...");
		console.log("Configuring Products...");
		if(!$m.networkConnected()){
			$m.alert("No Internet connection");
			return;
		}
		var RlifeProductName = utils.GetPref("ProductName");
		var url = "http://124.124.218.136/rlife2/mowblyserver/ProductConfigure/rellife/prod/RlifeAssist?productName="+ RlifeProductName;
	
		$m.get(url, function(response){
			if(response.code === 200){
				// Success
				$m.hideProgress();
				$m.putPref("ProductConfiguration",response.result.data);
				$m.savePref();
				MapProductData();
				//$m.toast("Product Configuration reuqest was successful");
			} else{
				// Error
				$m.hideProgress();
				$m.logError("Unable to fetch product config due to -- " + JSON.stringify(response));
				var errMsg = response.error.message;
			}
		});
	}
	
	function MapProductData()
	{
		try
		
		{
		var ProductTitle =  utils.GetPref("ProductName");
		var ProductType = utils.GetPref("ProductConfiguration");	
		var ProductData = JSON.parse(ProductType);
		
			$m.juci.dataset("product",ProductData);
		

		
		
		}
		catch(e)
		{
			
		}
	
	}
	//Added By Sneha Ends
	
	
	
	function mapAuthenticationRoles(){
		var rolesConfig = utils.GetPref("rolesConfiguration");
		var authRoles = JSON.parse(rolesConfig);
		if(authRoles.AA.ActivityResult.B == "1"){
			$m.juci.dataset("biometricOptionCheck",true);
		} else {
			$m.juci.dataset("biometricOptionCheck",false);
		}
		
		if(authRoles.AA.ActivityResult.O == "1"){
			$m.juci.dataset("otpOptionCheck",true);
		} else {
			$m.juci.dataset("otpOptionCheck",false);
		}
}

function mapPaymentRoles(){
	var rolesConfig = utils.GetPref("rolesConfiguration");
	var authRoles = JSON.parse(rolesConfig);
	if(authRoles.PMT.C == "1"){
		$m.juci.dataset("checkOfflinePayment",true);
	} else {
		$m.juci.dataset("checkOfflinePayment",false);
	}
	
	if(authRoles.PMT.B == "1"){
		$m.juci.dataset("checkBankTransfer",true);
	} else {
		$m.juci.dataset("checkBankTransfer",false);
	}
	
	if(authRoles.PMT.O == "1"){
		$m.juci.dataset("checkOnlinePayment",true);
	} else {
		$m.juci.dataset("checkOnlinePayment",false);
	}
	
	if(authRoles.PMT.S == "1"){
		$m.juci.dataset("checkSendLink",true);
	} else {
		$m.juci.dataset("checkSendLink",false);
	}
}

function mapAuthenticationProposalRoles(){
	var rolesConfig = utils.GetPref("rolesConfiguration");
	var authRoles = JSON.parse(rolesConfig);
	if(authRoles.AA.Products.B == "1"){
		$m.juci.dataset("biometricProposalOptionCheck",true);
	} else {
		$m.juci.dataset("biometricProposalOptionCheck",false);
	}
	
	if(authRoles.AA.Products.O == "1"){
		$m.juci.dataset("otpOptionProposalCheck",true);
	} else {
		$m.juci.dataset("otpOptionProposalCheck",false);
	}
}
	
function removeClassName(element,className){
		var returnValue;
		if(typeof className == "undefined"){
			returnValue = element._removeClasses();
		}else{
			if(hasClassName(element,className)){
				var elClass = element.className;
				if(typeof(elClass) == "string"){
					elClass = elClass.search(className) === 0 ? elClass.replace(className, "") : elClass.replace(" "+className, "");
				}
				element.className = elClass;
				returnValue = className;
			}
		}
		return returnValue;
	}
function hasClassName(elem,className){
    var elClass = elem.className;
    var clazzes = elem.className.split(" ");
    for(var i = 0; i<clazzes.length; i++){
        if(clazzes[i] === className){
            return true;
        }
    }
    return false;
}

function addClass(elem,className){
    if(!hasClassName(elem,className)){
        var elClass = elem.className;
        if(elClass != ""){
            elem.className = elClass + " " + className;
        }else{
            elem.className = className;
        }
    }
    return elem;
}

function getPospectWarming(){
$m.showProgress("Fetching Prospects...");
		console.log("Fetching Prospects...");
		if(!$m.networkConnected()){
			$m.alert("No Internet connection");		
			return;
		}
		var roleType = gettype();
		console.log("getType",roleType);
		var url = "http://124.124.218.136/rlife2/mowblyserver/prospectWarmingServerScript/rellife/prod/RlifeAssist?roleName="+roleType;
	
		$m.get(url, function(response){
			if(response.code === 200){
				// Success
				$m.hideProgress();
				var dataProspectWarming = response.result.data;
				var arrProspectWarming = JSON.parse(dataProspectWarming);
				return arrProspectWarming;
			
			} else{
				// Error
				$m.hideProgress();
				$m.logError("Unable to fetch prospects due to -- " + JSON.stringify(response));
				var errMsg = response.error.message;
			}
		});
}

function getAdvisorListSE(){
    var advisor_list = [];
    SHData.SelectWithFilterAdv(["Adv_Emp_Code as code","Adv_Emp_Name as name"],$m.getUsername(),function(response){
        var advisorList = response.rows;
        $m.putPref("advisorsDetails",advisorList);
        $m.savePref();
        for(var i=0;i<advisorList.length;i++){
            advisor_list[i] = advisorList[i].name;
        }
        $m.putPref("advisorList",advisor_list);
        $m.savePref();
        //$m.toast("Synced  Hierarchy successfully!");
        //setUserDevice();
    })
}

function getAdvisorListCallback(){
	if(!$m.networkConnected()){
		$m.alert("No Internet connection");		
		return;
	}
	$m.showProgress("Fetching details...");
    url = Constants.publicIP +"/mowblyserver/sshdatasvc/rellife/prod/RlifeAssist";
	var data = {
	        "code":$m.getUserAccount().customProperties.Login_Code,
	        "codeCol":getColumnByUserTypeNew($m.getUserAccount().customProperties.User_Type),
	        "action":"get"
	    };
	$m.post(url, data, function(response){
		$m.hideProgress();
	    if(response.code == 200){
	        // Success	        
	        var result = response.result;
	        result = JSON.parse(response.result.data);
	        shRows = result.entities;
	        var advisor_list = [];
	        for(var i=0;i<shRows.length;i++){
	            advisor_list[i] = shRows[i].Adv_Emp_Name;
	        }
	        $m.putPref("advisorList",advisor_list);
	        $m.savePref();
	        
	        utils.PutPref("AdvisorsList",shRows);
	        
	        if(result.code == "103"){
//	            $m.juci.dataset("Sales_manager");
//	            processSHData();
	        }else{
	            //errorResponse(ERROR_3,response,'getData');
	            console.log("Error "+response);
	        }
	    }else if(response.code == 0){
	        //errorResponse(ERROR_0,response,'getData');
	        console.log("Error "+response);
	    }else{
	    	console.log("Error "+response);
	        //errorResponse(ERROR_500,response,'getData');
	    }
	    
	});
}

function getColumnByUserTypeNew(usertype){
    switch(usertype){
        case "ZM":
            return "ZM_Code";
            break;
            
        case "RM":
            return "RM_Code";
            break;
            
        case "BM":
            return "BM_Code";
            break;
            
        case "SM":
            return "SM_Code";
            break;
            
        case "ADV":
            return "Adv_Emp_Code";
            break;
        
        case "AM":
            return "AM_Code";
            break;
            
        case "TM":
            return "BM_Code";
            break;
        
        case "CDASM":
            return "SM_Code";
            break;
        case "CDAADV":
            return "SM_Code";
            break;
        case "TPSM":
            return "SM_Code";
            break;
        case "TPPR":
            return "SM_Code";
            break;  
        case "TPADV":
            return "Adv_Emp_Code";
            break;
        case "AGSM":
            return "SM_Code";
            break;
        case "AGPS":
            return "SM_Code";
            break;
        case "TPBOM":
            return "SM_Code";
            break;
        case "PRSM":
            return "SM_Code";
            break;
        case "CNSM":
            return "SM_Code";
            break;
        case "AGADV":
            return "Adv_Emp_Code";
            break;
        case "ENADV":
            return "Adv_Emp_Code";
            break;
    } 
}
function getIPAddress() {
  $.getJSON("https://jsonip.com?callback=?", function(data) {
  	$m.putPref("userIp",data.ip );
	$m.savePref();
    console.log("Your IP address is :- " + data.ip);
  });
};

/**Common utils**/
	window.utils = {
		"RemoveClassName":removeClassName,
		"HasClassName":hasClassName,
		"AddClass":addClass,
		"headerTitle": headerTitle,
		"PrependRs": prependRs,
		"ShowPopup": showPopup,
		"HidePopup": hidePopup,
		"ShowProgress": showProgress,
		"HideProgress": hideProgress,
		"OpenPage": openPage,
		"ShowDialog": showDialog,
		"HideDialog": hideDialog,
		"SetProgress": setProgress,
		"GetTimeStamp": getTimeStamp,
		"GetDateByTimeStamp":getDateByTimeStamp,
		"GetTimeStampByDate":getTimeStampByDate,
		"GetUsername": getUsername,
		"GetDbhelper": getDbhelper,
		"PutPref": putPref,
		"RemovePref":removePref,
		"GetControl": getControl,
		"GenerateUUID": generateUUID,
		"FireRequest": fireRequest,
		"CheckObservable": checkObservable,
		"GetPref": getPref,
		"GetAge": getAge,
		"GetDate": getDate,
		"GetLanguage": getLanguage,
		"ToUpperCase": toUpperCase,
		"CheckRepetition": checkRepetition,
		"CheckEndsWith": checkEndsWith,
		"SetTimeStamp": setTimeStamp,
		"ScrollTop": scrollTop,
		"PojoSelect": pojoselect,
		"PojoSelectWithFilter": pojoselectwithfilter,
		"PojoSelectwithLead_Id":pojoselectwithlead_Id,
		"PojoUpdateTable": pojoupdatetable,
		"PojoUpdate": pojoupdate,
		"PojoRemove": pojoremove,
		"PojoInsert": pojoInsert,
		"PojoUpdateSync": pojoUpdateSync,
		"PojoMultiReplace": pojoMultiReplace,
		"SetResult": setResult,
		"ClosePage": closepage,
		"CheckingNetworkSpeed": checkingNetworkSpeed,
		"GetLocation": getLocation,
		"GetUserType": getUserType,
		"NetworkUtils":newtorkUtils,
		"GetDateTime":getDateTime,
		"GetLoginCode":getLoginCode,
		"GetDateString":getDateString,
		"GetRandomNum" :getRandomNum,
		"GenerateId" :generateId,
		"StartTimer":startTimer,
		"ConfirmBox":confirmBox,
		"GetDeviceId":getDeviceId,
		"PojoInsertQuery":pojoInsertQuery,
		"PojoReplaceQuery":pojoReplaceQuery,
		"PojoSelectWithAdvFilter":pojoselectWithAdvFilter,
		"PojoSelectWithDateRangeFilter" : pojoselectWithDateRangeFilter,
		"PojoSelectWithFilterLMS" :pojoselectwithfilterLMS,
		"PojoSelectWithFilterFlag" :pojoselectWithFilterFlag,
		"GetDateByHyphen":getDateByHyphen,
		"GetDateFormatted":getDateFormatted,
		"StopTimer":stopTimer,
		"ScrollToTop":scrollToTop,
		"ChangeLabel":changeLabel,
		"GetFormattedDate":getFormattedDate,
		"GetTodaysDate":getTodaysDate,
		"GetTodaysTimeStamp":getTodaysTimeStamp,
		"getPreviousDate":getPreviousDate,
		"GetNextDate":getNextDate,
		"SetOrderAsc":setOrderAsc,
		"SetOrderDesc":setOrderDesc,
		"GetNextWeekDates":getNextWeekDates,
		"GetUserAccount":getUserAccount,
		"CallBiometric":openBiometric,
		"GetFormatedDate":getFormatedDate,
		"ConfigureRoles":configureRoles,
		"PIVCConfiguration":pivcConfiguration,
		"AuthConfiguration":authConfiguration,
		"digitalConfig":digitalConfig,
		"GetProduct":getProduct,//Added by Sneha
		"ConfigureProduct":configureProd,//Added by Sneha
		"ChangeLabelName":changelabelname,
		"GetProspectsWarming":getPospectWarming,
		"GetAdvisorListSE":getAdvisorListSE,
		"GetAdvisorListCallback":getAdvisorListCallback,
		"GetIpAddress":getIPAddress
	};
})();