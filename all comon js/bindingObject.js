/**
 * bindingObject.js
 * @author CloudPact Technologies
 * @description : This script is used defining datasets.
 **/

var bindingObject = {
	"PDC_Customer_Details" : {
		"Txn_Id":"",
		"OTH_UNIQUE_Id":"",
		"Device_Id":"",
		"Device_Name":"",
		"Data_Source":"",
		"BI_REFNUMBER":"",
		"Application_Number":"",
		"Application_Date":"",
		"LA_Aadharno":"",
		"LA_Salutation":"",
		"LA_Name":"",
		"LA_Check_Premium": "",
		"LA_FatherName":"",
		"LA_Gender":"M",
		"LA_DOB":"",
		"LA_MaritalStatus":"",
		"LA_Education":"",
		"LA_Education_OTH":"",
		"LA_AnnualIncome":"",
		"LA_INCOMESOURCE":"",
		"LA_INSURANCEPURPOSE":"",
		"LA_BankAccountNumber":"",
		"LA_Bank":"",
		"LA_Branch":"",
		"LA_BANKACCPROOF":"",
		"LA_IFSCCode":"",
		"LA_Nationality":"Indian",
		"LA_Nationality_OTH":"",
		"LA_EMPLOYEECODE":"",
		"LA_Occupation":"",
		"LA_Occupation_OTH":"",
		"LA_JOBDESC":"",
		"LA_IsRelianceEmp": "N",
		"LA_EcsOption":"N",
		"LA_AddressProof":"",
		"LA_IdentityProof":"",
		"LA_AgeProof":"",
		"LA_IncomeProof":"",
		"LA_PANCardNumber":"",
		"LA_CO":"",
		"LA_AddressLine1":"",
		"LA_AddressLine2":"",
		"LA_AddressLine3":"",
		"LA_City":"",
		"LA_State":"",
		"LA_Pincode":"",
		"LA_Mobileno":"",
		"LA_EmailId":"",
		"LA_LandLineno":"",
		"LA_Perm_Add_Indicator":"Y",
		"LA_Prem_AddressLine1":"",
		"LA_Prem_AddressLine2":"",
		"LA_Prem_AddressLine3":"",
		"LA_Prem_City":"",
		"LA_Prem_State":"",
		"LA_Prem_Pincode":"",
		"LA_SpouseName":"",
		"KYC_Identifier":"",
		"LA_Citizenship":"Indian",
		"LA_MotherName":"",
		"LA_ResidentialStatus":"Resident Individual",
		"LA_OccupationType":"",
		"LA_OccupationSubOptions":"",
		"LA_IDProof":"",
		"LA_ExpiryDate":"",
		"LA_IdentificationNumber":"",
		"PR_OccupationSubOptions":"",
		"PR_IdentificationNumber":"",
		"PR_IDProof":"",
		"PR_ExpiryDate":"",
		"IS_LA_PR_SAME":"Y",
		"NOM_PR_SAME":"Y",
		"NOM_Salutation_1":"",
		"NOM_Name_1":"",
		"NOM_Gender_1":"",
		"NOM_DOB_1":"",
		"NOM_LA_Relationship_1":"",
		"NOM_AddressProof_1":"",
		"NOM_IdentityProof_1":"",
		"NOM_LA_AddressSame_1":"",
		"NOM_AddressLine1_1":"",
		"NOM_AddressLine2_1":"",
		"NOM_AddressLine3_1":"",
		"NOM_City_1":"",
		"NOM_State_1":"",
		"NOM_Pincode_1":"",
		"NOM_Mobileno_1":"",
		"NOM_EmailId_1":"",
		"NOM_LandLineno_1":"",
		"Parent_Application_Number":"",
		"PR_Aadharno":"",
		"PR_Salutation":"",
		"PR_Name":"",
		"PR_FatherName":"",
		"PR_Gender":"M",
		"PR_DOB":"",
		"PR_MaritalStatus":"",
		"PR_Education":"",
		"PR_Education_OTH":"",
		"PR_AnnualIncome":"",
		"PR_INCOMESOURCE":"",
		"PR_INSURANCEPURPOSE":"",
		"PR_BankAccountNumber":"",
		"PR_Bank":"",
		"PR_Branch":"",
		"PR_BANKACCPROOF":"",
		"PR_IFSCCode":"",
		"PR_Nationality":"Indian",
		"PR_Nationality_OTH":"",
		"PR_IsRelianceEmp": "N",
		"PR_EMPLOYEECODE":"",
		"PR_Occupation":"",
		"PR_Occupation_OTH":"",
		"PR_JOBDESC":"",
		"PR_AddressProof":"",
		"PR_IdentityProof":"",
		"PR_AgeProof":"",
		"PR_IncomeProof":"",
		"PR_PANCardNumber":"",
		"PR_LA_Relationship":"",
		"PR_CO":"",
		"PR_LA_AddressSame": "Y",
		"PR_AddressLine1":"",
		"PR_AddressLine2":"",
		"PR_AddressLine3":"",
		"PR_City":"",
		"PR_State":"",
		"PR_Pincode":"",
		"PR_Mobileno":"",
		"PR_EmailId":"",
		"PR_LandLineno":"",
		"PR_Perm_Add_Indicator":"",
		"PR_Prem_AddressLine1":"",
		"PR_Prem_AddressLine2":"",
		"PR_Prem_AddressLine3":"",
		"PR_Prem_City":"",
		"PR_Prem_State":"",
		"PR_Prem_Pincode":"",
		"PR_MotherName":"",
		"PR_SpouseName":"",
		"PR_Citizenship":"Indian",
		"PR_OccupationType":"",
		"NOM_Salutation":"",
		"NOM_Name":"",
		"NOM_Gender":"M",
		"NOM_DOB": "",
		"NOM_LA_Relationship":"",
		"NOM_AddressProof":"",
		"NOM_IdentityProof":"",
		"NOM_LA_AddressSame":"Y",
		"NOM_AddressLine1":"",
		"NOM_AddressLine2":"",
		"NOM_AddressLine3":"",
		"NOM_City":"",
		"NOM_State":"",
		"NOM_Pincode":"",
		"NOM_Mobileno":"",
		"NOM_EmailId":"",
		"NOM_LandLineno":"",
		"NOM_LA_NomineeSame":"Y",
		"LA_MaritalStatusOther":"",
		"PR_MaritalStatusOther":"",
		"marital_others":"false",
		"PR_ResidentialStatus":"Resident Individual",
		/* Commented for now as no database fields available
		"NOM_Salutation_P2":"", //Added Nominee binding for plan2 starting
		"NOM_Name_P2":"",
		"NOM_GenderP2":"M",
		"NOM_DOB_P2": "",
		"NOM_LA_Relationship_P2":"",
		"NOM_AddressLine1_P2":"",
		"NOM_AddressLine2_P2":"",
		"NOM_AddressLine3_P2":"",
		"NOM_City_P2":"",
		"NOM_State_P2":"",
		"NOM_Pincode_P2":"",
		"NOM_Mobileno_P2":"",
		"NOM_EmailId_P2":"",
		"NOM_LandLineno_P2":"", //Added Nominee binding for plan2 ending
		"ADD_Nom":"N", */
		/*
		"NOM_Gender_N2":"",  //Added binding for another nominee starting
		"NOM_Salutation_N2":"",
		"NOM_Name_N2":"",
		"NOM_DOB_N2":"",
		"NOM_LA_Relationship_N2":"",
		"NOM_Mobileno_N2":"",
		"NOM_EmailId_N2":"", //Added binding for another nominee ending
		"NOM_LA_AddressSame_N2":"Y", //Address details binding for second(another) Nominee starting
		"NOM_AddressLine1_N2":"",
		"NOM_AddressLine2_N2":"",
		"NOM_AddressLine3_N2":"",
		"NOM_State_N2":"",
		"NOM_City_N2":"",
		"NOM_Pincode_N2":"",
		"NOM_LandLineno_N2":"", //Address details binding for second(another) Nominee ending
		"NOM_LA_NomineeSame_P2":"Y", //TODO
		*/
		"APP_Salutation":"",
		"APP_Name":"",
		"APP_Gender":"M",
		"APP_DOB":"",
		"APP_NOM_Relationship":"",
		"APP_NOM_AddressSame":"Y",
		"APP_AddressLine1":"",
		"APP_AddressLine2":"",
		"APP_AddressLine3":"",
		"APP_City":"",
		"APP_State":"",
		"APP_Pincode":"",
		"APP_Mobileno":"",
		"APP_EmailId":"",
		"APP_LandLineno":"",
		"ADD_APP":"N",
		"LA_ECSFORM_YN":"",
		"LA_PHOTOID":"",
		"PR_ECSFORM_YN":"Y",
		"Child_DOB":"",
		"Child_Name":"",
		"Child_Proposar_Relation":"",
		"Child_Gender":"",
		"MICR_Code": "",
		"DOCS_UPLOADED":"",
		"Login_By":"",
		"Advisor_Code":"",
		"Advisor_Name":"",
		"Advisor_Place":"",
		"Txn_Date":"",
		"AnnuityPayout_Option":"",
		"Annuity_Payout_Mode":"",
		"Life_Annuity_Guarenteed_For":"",
		"Annuity_Payments_By":"",
		"UCIUCIC_No":"",
		"LEAD_REF_No":"",
		"SP_ID":"",
		"PIVC_Video_YN":"N",
		"LA_EKYC_Aadhar_YN":"N",
		"PR_EKYC_Aadhar_YN":"N",
		"Super_Track_Login":"",
		"LA_Employee_Designation":"",
		"LA_Company_Name":"",
		"PR_Employee_Designation":"",
		"PR_Company_Name":"",
		"FLS_SAP_Code":"",
		"Branch_Code":"",
		"Partner_Employee_Code":"",
		"Branch_Name":"",
		"typeOfDocumentValue":"",
		"IsPolicyOwner_YN":"N",
		"ZBH_Approval_YN":"N",
		"PAN_Acknowledgement_no":"",
		"Agricultural_Income":"",
		"NonAgricultural_Income":"",
		"typeOfIncomeValue":"",
		"typeOfIncomeValue1":"",
		"PR_typeOfDocumentValue":"",
		"PR_typeOfIncomeValue":"",
		"PR_Agricultural_Income":"",
		"PR_typeOfIncomeValue1":"",
		"PR_NonAgricultural_Income":"",
		"PR_PAN_Acknowledgement_no":""
	},

	"PDC_FAMILYHISTORY_Details" : {
		"Txn_Id"					:	"",
		"Application_Number"		:	"",
		"FHID_LA_PRPOSER"			:	"",
		"FHID_FAMILEMEMBER"			:	"",
		"FHID_CAUSEOFDEATH"			:	"",
		"FHID_CURRENTAGEIFALIVE"	:	"",
		"FHID_DEATHAGEIFDECEASED"	:	"",
		"FH_AGEATDIAGNOSIS"			:	"",
		"IS_FAMILYMEMEMBERALIVE"	:	""
	},

	"PDC_EXISITINGPOLICIES_Details" : {
		"Txn_Id":"",
		"Application_Number":"",
		"DETAILS_LA_PROPOSER":"",
		"COMPANYNAME":"",
		"CONTRACT_PROPOSALNO":"",
		"BASIC_SUM_ASSURED":"",
		"SUM_ASSURED_URIDER":"",
		"RISK_COMMENCE_DATE":"",
		"Present_Status":"",
		"Row_No":"" 
	},

	"PDC_LifeStyle_Details" : {
		"Txn_Id":"",
		"Application_Number":"",
		"FHistory_FamilyDied_YN":"N",
		"Existing_LifeInsurance_Cover_YN":"N",
		"ParentInsuranceDetails_SA":"",
		"NameoftheHusbandParent":"",
		"TotalSAontheHusband":"",
		"QsLS_26_HazardousOccupation_YN":"N",
		"QsLS_26_HazardousOccupation_Remarks":"",
		"QsLS_27_TravelOutsideIndia_YN":"N",
		"QsLS_27_TravelOutsideIndia_Country":"",
		"QsLS_27_TravelOutsideIndia_Purpose":"",
		"QsLS_27_TravelOutsideIndia_Duration":"",
		"QsLS_28a_Smoke_YN":"N",
		"QsLS_28a_Smoke_Remarks":"",
		"QsLS_28a_Smoke_Cigarettes_YN":"N",
		"QsLS_28a_Smoke_Cigarettes_Qty":"",
		"QsLS_28a_Smoke_Cigarettes_Duration":"",
		"QsLS_28a_Smoke_ECigarettes_YN":"N",
		"QsLS_28a_Smoke_ECigarettes_Qty":"",
		"QsLS_28a_Smoke_ECigarettes_Duration":"",
		"QsLS_28a_Smoke_Beedi_YN":"N",
		"QsLS_28a_Smoke_Beedi_Qty":"",
		"QsLS_28a_Smoke_Beedi_Duration":"",
		"QsLS_28a_Smoke_Chew_YN":"N",
		"QsLS_28a_Smoke_Chew_Qty":"",
		"QsLS_28a_Smoke_Chew_Duration":"",
		"QsLS_28a_Smoke_Gutka_YN":"N",
		"QsLS_28a_Smoke_Gutka_Qty":"",
		"QsLS_28a_Smoke_Gutka_Duration":"",
		"QsLS_28a_Smoke_OTH_YN":"N",
		"QsLS_28a_Smoke_OTH_Duration":"",
		"QsLS_28a_Smoke_OTH_QTY":"",
		"QsLS_28b_Alcohol_Consume_YN":"N",
		"QsLS_28b_Alcohol_Remarks":"",
		"QsLS_28b_Alcohol_Beer_YN":"N",
		"QsLS_28b_Alcohol_Beer_Qty":"",
		"QsLS_28b_Alcohol_Beer_Duration":"",
		"QsLS_28b_Alcohol_Wine_YN":"N",
		"QsLS_28b_Alcohol_Wine_Qty":"",
		"QsLS_28b_Alcohol_Wine_Duration":"",
		"QsLS_28b_Alcohol_HardLiquor_YN":"N",
		"QsLS_28b_Alcohol_HardLiquor_Qty":"",
		"QsLS_28b_Alcohol_HardLiquor_Duration":"",
		"QsLS_28b_Alcohol_OTH_YN":"N",
		"QsLS_28b_Alcohol_OTH_Duration":"",
		"QsLS_28b_Alcohol_OTH_QTY":"",
		"QsLS_29_Height_Feet":"",
		"QsLS_29_Height_Inches":"",
		"QsLS_29_Weight_Kg":"",
		"QsLS_29_Height_CM":"",
		"QsLS_30_Medication_Drug_YN":"N",
		"QsLS_30_Medication_Drug_Remarks":"",
		"QsLS_31_CongenitalBirthDefect_YN":"N",
		"QsLS_31_CongenitalBirthDefect_Remarks":"",
		"QsLS_32_MedicalAilgment_YN":"N",
		"QsLS_32_MedicalAilgment_Remarks":"",
		"QsLS_33_SurgeryPlanned_YN":"N",
		"QsLS_33_SurgeryPlanned_Remarks":"",
		"QsLS_34_SufferedDrugsAlcohol_YN":"N",
		"QsLS_34_SufferedDrugsAlcohol_Remarks":"",
		"QsLS_35_Pregnant_YN":"N",
		"QsLS_35_Pregnant_Remarks":"",
		"QsLS_35_Pregnant_ExpDeliveryDT":"",
		"QsLS_35_Pregnant_Duration":"",
		"PoliticallyExposedPerson_YN":"N",
		"Receive_Electronic_Communication_YN":"Y",
		"EInsurance_Free":"Y",//New Field added for (page:declartions view)convert policy into e-policy with the free e-insurance account with CAMS Insurance Repository
		"Ins_Repository_YN":"N",
		"Ins_Repository_Type":"",
		"Ins_Repository_AccountNumber":"",
		"Ins_Account_YN":"N",
		"Undergo_Medical_YN":"Y",
		"Authorize_RLIC_Calls_YN":"Y",
		"Witness_Name":"",
		"Witness_MobileNO":"",
		"Witness_Date":new Date(),
		"Witness_Address_Line1":"",
		"Witness_Address_Line2":"",
		"Witness_Address_Line3":"",
		"Witness_Address_City":"",
		"Witness_Address_State":"",
		"Witness_Address_PinCode":"",
		"Vernacular_declaration_YN":"N",
		"Declarant_Name":"",
		"Declarant_Place":"",
		"Declarant_Date":"",
		"CFReport_1_Met_PR_LA_YN":"Y",
		"CFReport_2_Relatedto_LA_YN":"N",
		"CFReport_2_Relatedto_LARelationship":"",
		"CFReport_3_LADisability_YN":"N",
		"CFReport_3_LADisability_Remarks":"",
		"CFReport_4_FinancialStanding_YN":"Y",
		"CFReport_4_FinancialStanding_Income":"",
		"CFReport_5_IncomeVerified_YN":"Y",
		"CFReport_5_IncomeVerified_Type":"",
		"CFReport_6_AgeProofVerified_YN":"Y",
		"CFReport_7_LAGoodHealth_YN":"Y",
		"CFReport_7_LAGoodHealth_Remarks":"",
		"CFReport_8_LongKnown_Years":"",
		"CFReport_8_LongKnown_Mnths":"",
		"SM_FLS_MobileNo":"",
		"Txn_Date":"",
		"idvalue":"",
		"Authorize_YN":"",
		"FATCA_YN":"N",
		"Residence_Tax_outside_India_YN":"",     
        "Country_of_Birth":"",       
        "Place_of_birth":"",   
        "Nationality":"",       
        "Address":"",       
        "Pincode":"",       
        "LA_PR_NAME":"",       
        "Place":"",       
        "PDC_Completion_Date":"",
        "Country_countries_of_TaxResidency":"",
        "Address_jurisdiction_TaxResidence":"",
        "TIN_Functional_equivalent_Number":"",
        "TIN_Functional_equivalentNo_IssuingCountry":"",
        "Validity_docevidence_provided":"",
        "ConsentReceived_YN":"N"
	},
	
	"PDC_Confidential_Details" : {
		"Conf_meet":"Y",
		"Conf_relation":"N",
		"Conf_relation_detail":"",
		"Conf_disablity":"N",
		"Conf_disability":"",
		"Conf_satisfy":"Y",
		"Conf_income":"",
		"Conf_Income_verify":"Y",
		"Conf_income_proof":"",
		"Conf_Age_verify":"Y",
		"Conf_Good_Health":"Y",
		"Conf_health_details":"",
		"Conf_years":"",
		"Conf_months":"",
		"Conf_mobile":""
	},

	"PDC_Payment_Details" : {
		"Txn_Id":"",
		"Application_Number":"",
		"Row_No":"",
		"Payment_Type":"",
		"Amount_Paid":"",
		"Cheque_No":"",
		"Cheque_Date":"",
		"Bank_Name":"",
		"Bank_Branch":"",
		"PAYMENTDATE":"",
		"PAYMENTSTATUS":"",
		"WEBTOKENNO":"",
		"BANKCODE":"",
		"RECEIPTNUMBER":"",
		"Txn_Date":"",
		"Transaction_Payment_No":""
	},

	"PDC_Plan_Details" : {
		"Txn_Id":"",
		"Application_Number":"",
		"Application_Dt":"",
		"Advisor_Code":"",
		"Advisor_Name":"",
		"ProductCode":"",
		"PLanCode":"",
		"CombinationOFProducts":"",
		"Total_InstPremium":"",
		"PolicyTerm":"",
		"PremiumPayingTerm":"",
		"SumAssured":"",
		"InstallmentPremium":"",
		"RiderName_1":"",
		"COVERAGECODEFORRIDER_1":"",
		"PolicyTerm_1":"",
		"PremiumPayingTerm_1":"",
		"SumAssured_1":"",
		"InstallmentPremium_1":"",
		"RiderName_2":"",
		"COVERAGECODEFORRIDER_2":"",
		"PolicyTerm_2":"",
		"PremiumPayingTerm_2":"",
		"SumAssured_2":"",
		"InstallmentPremium_2":"",
		"RiderName_3":"",
		"COVERAGECODEFORRIDER_3":"",
		"PolicyTerm_3":"",
		"PremiumPayingTerm_3":"",
		"SumAssured_3":"",
		"InstallmentPremium_3":"",
		"RiderName_4":"",
		"COVERAGECODEFORRIDER_4":"",
		"PolicyTerm_4":"",
		"PremiumPayingTerm_4":"",
		"SumAssured_4":"",
		"InstallmentPremium_4":"",
		"RiderName_5":"",
		"COVERAGECODEFORRIDER_5":"",
		"PolicyTerm_5":"",
		"PremiumPayingTerm_5":"",
		"SumAssured_5":"",
		"InstallmentPremium_5":"",
		"RiderName_6":"",
		"COVERAGECODEFORRIDER_6":"",
		"PolicyTerm_6":"",
		"PremiumPayingTerm_6":"",
		"SumAssured_6":"",
		"InstallmentPremium_6":"",
		"RiderName_7":"",
		"COVERAGECODEFORRIDER_7":"",
		"PolicyTerm_7":"",
		"PremiumPayingTerm_7":"",
		"SumAssured_7":"",
		"InstallmentPremium_7":"",
		"LifeCorporateBond_Fund1":"",
		"LifeMoneyMarket_Fund1":"",
		"LifeEquity_Fund3":"",
		"LifeBalanced_Fund1":"",
		"LifePureEquity_Fund2":"",
		"PensionSmart_Fund1":"",
		"Systematic_TransaferPlan":"",
		"Premium_Payment_type":"",
		"Death_BenifitOption":"",
		"Premium_Frequency":"",
		"Mode_Deposit":"",
		"BI_XML":"",
		"Txn_Date":""
	},

	"PDC_Image_Details" : {
		"Txn_Id":"",
		"Application_Number":"",
		"DocumentTypeCode":"",
		"ImagePath":"",
		"ImageName":"",
		"ImageDoc":"",
		"UploadDate":"",
		"Status":"",
		"Txn_Date":""
	},

	"Lookup_Values" : {
		"LookupValues_Id":"",
		"Lookup_Id":"",
		"Value_Id":"",
		"Value_Name":"",
		"Value_Formatted_Name":"",
		"Value_Status":"",
		"Default_Value":"",
		"LARefCode":""
	},

	"Lookup_Master": {
		"Lookup_MstID":"",
		"Lookup_Id":"",
		"Lookup_Label":"",
		"Status":""
	},

	"familyHistory" : {
	    illnessConditions:"N",
	    diseaseDetailsTable : [] //Object of type - diseaseDetailsObject
	},

	"lifeInsurance" : {
		"insurancePolicyHeld":"N",
		lifeInsuranceTable : [], //Object of type lifeInsuranceObject
		"parentsInsurance": "",
		"nameOfTheHusbandOrParent": "",
		"totalSAOnLifeOfHusbandOrParent": ""
	},
	"saveRunnerActivity":{
			 "Aadhar_Number":"",								
			 "Aadhar_YN":"",									
			 "Added_By":"",																	
			 "Authenticate_By":"",							
			 "Care_Of_Person":"",								
			 "City":"",										
			 "ClientID":"",									
			 "Contact_No":"",									
			 "Customer_Name":"",								
			 "Customer_Photo":"",								
		     "DOB":"",										
			 "Details_Approved":"",							
			 "Device_Date":"",								
			 "Device_ModelName":"",							
			 "Device_ModelNo":"",								
			 "Device_PN":"",									
			 "District":"",									
			 "EKYC_XML":"",									
			 "Email_ID":"",									
			 "Entry_Stage":"",								
			 "Gender":"",										
			 "House_Identifier":"",							
			 "Landmark":"",									
			 "Locality":"",									
			 "Met_NotMet":"",									
			 "NotMet":"",				 						
			 "Pincode":"",									
			 "Policy_Number":"",								
			 "PostOffice_Name":"",																
			 "Runner_Sapcode":"",								
			 "SAPCode":"",									
			 "Source_From":"",								
			 "State":"",										
			 "Street_Name":"",								
			 "Sub_District":"",								
			 "Remarks":"",			 						
			 "Latitude":"",
			 "Longitude":"",									
			 "Lat_Long_Address":"",							
			 "Renewal_Premium":"",
			 "Policy_Status":"",	
	},
	"saveCandidateForm":{
		"Aadhar_Number":"",
		"Address_1":"",
		"Address_2":"",
		"Address_3":"",
		"Authentication_Mode":"",
		"CONDITIONAL_OPERATOR":"",
		"Candidate_Name":"",
		"Candidate_Type":"",
		"Case_number":"",
		"City":"",
		"Created_By":"",
		"Date_Of_Birth":"",
		"Department":"",
		"Email_Id":"",
		"Gender":"",
		"Interviewer_FL":"",
		"Interviewer_SL":"",
		"Mobile_Number":"",
		"PAN_Number":"",
		"PhotoImgPath":"",
		"Pincode":"",
		"SU_Code":"",
		"State":"",
		"State_of_Posting":"",
		"isEKYCAddress_same":""
	},
	"HLVCalculate" : {
		"age" : "",
		"married" : "",
		"retireage" : "",
		"monthlyincome":"",
		"monthlyexpensive":"",
		"valueofsvnginvstmnt":"",
		"insurance":"",
		"loans":""
	},
	"RetirementCalculate" : {
		"age" : "",
		"retireage" : "",
		"annualincome":"",
		"monthlyexpensive":"",
		"investtype":"",
		"currentsaving":""
	},
	"TaxCalculator" : {
		"age" : "",
		"annualincome":"",
		"employeetype":"",
		"selfannualsalary":"",
		"incomeformothersource":"",
		"investment":"",
		"healthinsurancepremium":"",
		"hiradebt":"",
		"interesthomeloan":"",
		"interesteducation":"",
		"interesttta":"",
		"otherdeduction":""
	}
};

var childObject = {
	"childone" : {
		"display" : false,
		"name" : "",
		"age" : "",
		"savings" : "",
		"designation" : "",
		"costestimation" : "",
		"ageEst" : ""
	},
	"childtwo" : {
		"display" : false,
		"name" : "",
		"age" : "",
		"savings" : "",
		"designation" : "",
		"costestimation" : "",
		"ageEst" : ""
	},
	"childthree" : {
		"display" : false,
		"name" : "",
		"age" : "",
		"savings" : "",
		"designation" : "",
		"costestimation" : "",
		"ageEst" : ""
	},
	"childfour" : {
		"display" : false,
		"name" : "",
		"age" : "",
		"savings" : "",
		"designation" : "",
		"costestimation" : "",
		"ageEst" : ""
	}
 }
 
var output = {
	"hlvResult" : {
	    "Expenses": "",
	    "HlvValus": "",
	    "Income": "",
	    "Insurance_Gap": "",
	    "Loan": "",
	    "Message": "",
	    "Saving": "",
	    "Status": ""
	},
	"retirementResult" : {
		"AmountreqEveMonth"  : "",
		"MonthlySaving" : "",
		"RetirementCorpus" : ""
	},
	"TaxResult" : {
		"NetTaxPayable" : "",
		"TaxableIncome" : ""
	},
	"ChildResult" : {
	    "FirstChildSaveAmount": "",
	    "FourthChildAmountvalue": "",
	    "FourthChildInfo": "",
	    "FourthChildSaveAmount": "",
	    "FristChildAmountvalue": "",
	    "FristChildInfo": "",
	    "Message": "",
	    "SecondChildAmountvalue": "",
	    "SecondChildInfo": "",
	    "SecondChildSaveAmount": "",
	    "Status": "",
	    "ThreeChildAmountvalue": "",
	    "ThreeChildInfo": "",
	    "ThreeChildSaveAmount": ""
	}
}
/* Calculator Bindinng */

$m.juci.addDataset("hlvcalculate",bindingObject.HLVCalculate);
$m.juci.addDataset("fhscalculate",bindingObject.FHSCalculator);
$m.juci.addDataset("retirementCalculator",bindingObject.RetirementCalculate);
$m.juci.addDataset("taxCalculator",bindingObject.TaxCalculator);
$m.juci.addDataset("marriedoptions",[{"value":"Yes"},{"value":"No"}]);
$m.juci.addDataset("noofchildren",[{"value":"1"},{"value":"2"},{"value":"3"},{"value":"4"}]);
$m.juci.addDataset("hlvresult",output.hlvResult);
$m.juci.addDataset("taxResult",output.TaxResult);
$m.juci.addDataset("retirementResult",output.retirementResult);
$m.juci.addDataset("childResult",output.ChildResult);
$m.juci.addDataset("childcalculate",childObject);
$m.juci.addDataset("child","");

/* Calculator Bindinng */

$m.juci.addDataset("saveRunnerForm",bindingObject.saveRunnerActivity)
$m.juci.addDataset("eInsurance","N");
$m.juci.addDataset("ePolicy","N");
$m.juci.addDataset("personalForm",bindingObject.PDC_Customer_Details);
$m.juci.addDataset("proposForm",bindingObject.PDC_Customer_Details);
$m.juci.addDataset("nomineeOrAppointeeDetailsForm",bindingObject.PDC_Customer_Details);
$m.juci.addDataset("cfrSectionForm",bindingObject.PDC_LifeStyle_Details);
$m.juci.addDataset("vernacularOrUneducatedForm",bindingObject.PDC_LifeStyle_Details);
$m.juci.addDataset("signatureForm",bindingObject.PDC_LifeStyle_Details);
$m.juci.addDataset("familyHistoryForm",bindingObject.familyHistory);
$m.juci.addDataset("lifeInsuranceForm",bindingObject.lifeInsurance);
$m.juci.addDataset("lifeStyleQuestionsForm",bindingObject.PDC_LifeStyle_Details);
$m.juci.addDataset("planDetailsForm",bindingObject.PDC_Plan_Details);
$m.juci.addDataset("confidentialForm",bindingObject.PDC_Confidential_Details);
$m.juci.addDataset("newCandidateForm",bindingObject.saveCandidateForm);
$m.juci.addDataset("newLeadForm","");
$m.juci.addDataset("tamilContent",false);
$m.juci.addDataset("languages","");
$m.juci.addDataset("hindiContent",false);
$m.juci.addDataset("englishContent",true);
$m.juci.addDataset("teluguContent",false);
$m.juci.addDataset("marathiContent",false);
$m.juci.addDataset("languageContent",true);
$m.juci.addDataset("selfieEmpData",true);
$m.juci.addDataset("questions",false);
$m.juci.addDataset("isProducts",false);
$m.juci.addDataset("isNotProducts",false);
$m.juci.addDataset("planContent",false);
$m.juci.addDataset("lifePlannerContent","");
$m.juci.dataset("main_PlanName","");
$m.juci.dataset("main_SumAssured","");
$m.juci.dataset("main_PolicyTerm","");
$m.juci.dataset("main_InstallmentPremium_ST","");
$m.juci.dataset("main_PremiumPayingTerm","");

$m.juci.addDataset("cancer_lifePlannerContent","");
$m.juci.dataset("cancer_PlanName","");
$m.juci.dataset("cancer_SumAssured","");
$m.juci.dataset("cancer_PolicyTerm","");
$m.juci.dataset("cancer_InstallmentPremium_ST","");
$m.juci.dataset("cancer_PremiumPayingTerm","");
$m.juci.dataset("comboplan",false);
$m.juci.addDataset("finalContent",false);
$m.juci.addDataset("bonusContent","");
$m.juci.addDataset("benefitsContent","");
$m.juci.addDataset("videoPath","");
$m.juci.addDataset("englishContent","");
$m.juci.addDataset("screenContent","");
$m.juci.addDataset("confirm","");
$m.juci.addDataset("isAgree","");
$m.juci.addDataset("isConfirm","");
$m.juci.addDataset("plansContent","");
$m.juci.addDataset("correctPlanContent","");
$m.juci.addDataset("firstScreenDisagreeContent","");
$m.juci.addDataset("no","");
$m.juci.addDataset("name","");
$m.juci.addDataset("dob","");
$m.juci.addDataset("address","");
$m.juci.addDataset("mobile","");
$m.juci.addDataset("emailid","");
$m.juci.addDataset("occupation","");
$m.juci.addDataset("lifeassuredetails",{"LA_Name": "","LA_DOB":"","LA_AddressLine1":"","LA_AddressLine3":"","LA_AddressLine2":"","LA_EMPLOYEECODE":"","LA_Mobileno":"","LA_EmailId":"","LA_Occupation":"","name":"","dob":"","address":"","mobile":"","emailid":"","occupation":"","AddressLine1":"Address Line 1: ","AddressLine3":"Address Line 3:","AddressLine2":"Address Line 2:"});
$m.juci.addDataset("questionaries",{"medication":"","medicalAlignments":"","surgery":"","medicationAnswer":"","alignmentAnswer":"","surgeryAnswer":""});
$m.juci.addDataset("customerData",{"nomineeSalutation":"","nomineeName":"","nomineeEmail":"","nomineeMobileNo":"","calender":""});

$m.juci.addDataset("morningEvents",[]);
$m.juci.addDataset("afternoonEvents",[]);
$m.juci.addDataset("midAfternoonEvents",[]);
$m.juci.addDataset("eveningEvents",[]);
$m.juci.addDataset("dayMorningEvents",[]);
$m.juci.addDataset("dayAfternoonEvents",[]);
$m.juci.addDataset("dayMidAfternoonEvents",[]);
$m.juci.addDataset("dayEveningEvents",[]);
$m.juci.addDataset("monthName","");
$m.juci.addDataset("fullYear","");
$m.juci.addDataset("eventData",false);
$m.juci.addDataset("dayname","");
$m.juci.addDataset("runnerActivity",{"search":""});
$m.juci.addDataset("searchHistory",[]);
$m.juci.addDataset("searchDetails",{"RenewalAmount":"","DateOfBirth":"","PolicyStatus":""});
$m.juci.addDataset("weekDayMorningEvents",[]);
$m.juci.addDataset("WeekDayAfternoonEvents",[]);
$m.juci.addDataset("weekDayMidAfternoonEvents",[]);
$m.juci.addDataset("WeekDayEveningEvents",[]);
$m.juci.addDataset("upcomingEvents",true);
$m.juci.addDataset("monthEvents",false);
$m.juci.addDataset("weekEvents",false);
$m.juci.addDataset("dayEvents",false);
$m.juci.addDataset("monthMorningEvents",[]);
$m.juci.addDataset("monthAfternoonEvents",[]);
$m.juci.addDataset("monthMidAfternoonEvents",[]);
$m.juci.addDataset("monthEveningEvents",[]);

