define(["sap/designstudio/sdk/component", "css!../css/component.css"], function(Component, css) {
Component.subclass("ch.bit.crb360.scorecard.ScoreCard", function() {

	/***********************************************************************/
	/********* ch.bit.crb360.scorecard      v 1.1.0.0.20190612 *************/
	/***********************************************************************/
	
		var meta_data = null;
		var data_data = null;
		var data_ist_obl_data = null;
		var data_obl_data = null;
		var data_ist_data = null;
		var data_erw_data = null;
		var data_va_erw_data = null;
		var data_kredit_a_data = null;
		var data_kredit_p_data = null;
		var data_fehlbetr_a_data = null;
		var data_fehlbetr_p_data = null;
		var titleheader1_data = "";
		var titleheader2_data = "";
		var titleheader3_data = "";
		var titleheader4_data = "";
		var titleheader5_data = "";
		var titleheader1sub_data = "";
		var titleheader2sub_data = "";
		var titleheader3sub_data = "";
		var titleheader4sub_data = "";
		var titleheader5sub_data = "";
	    var titlebar1_data = "";
	    var titlebar2_data = "";
	    var titlebar3_data = "";
		var shownr_data = true;
		var showdesc_data = true;
		var showcredit_data = true;
		var that = this;
		
		var cntColumns = 0;
		var cntRows = 0;
		var txtColumnTitel = "";
		var txtRowTitel = "";
		var defColumnsHasDimension = false;
		var defRowsHasDimension = false;
		var defHTMLScript = "";
		var jqTable;
		
		this.init = function() {
			this.$().addClass("TableFrame");
		};
		
		this.afterUpdate = function() {			
			
			setTimeout(renderTable, 500);
		
		};
	    
		function renderTable() {
			
			var dath = that.$().height();
			var datw = that.$().width();
			var dathRow = dath/14;
			
			var datDim1 = 0;
			var datDim2 = 0;
			var datDim3 = 0;
			var datKey = "";
			var datText = "";
			
			that.$().empty();
			
//			data_data = getAnySetColumn_Data();		
			if (data_ist_data && data_ist_data.formattedData && data_ist_data.data.length > 0) {
				
				var htmltemp = "";
				var datMembertxt = "";
				var datMemberSelection = "";
				var datLevel = "0"
				var defCSS = "";
				var defLevel = 0;
				var defValue = 0;
				var defHeader = [];
				var defScrollCSS = "ScrollTableFrame";
				
				if (shownr_data === false && showdesc_data === false && showcredit_data === false) {
					defScrollCSS = "LockTableFrame";
				} else if (data_ist_data.data.length == 1) {
					defScrollCSS = "LockTableFrame";
				}
				
				var html = "";
				
				if (	titleheader1_data != "" || titleheader2_data != "" || titleheader3_data != "" || titleheader4_data != "" || titleheader5_data != "" || 
						titleheader1sub_data != "" || titleheader2sub_data != "" || titleheader3sub_data != "" || titleheader4sub_data != "" || titleheader5sub_data != "") {	
					// Schreibt Header Überschriften
					html +=	"<div class=\"FixedTableFrame\">"
					html += 		"<table class=\"TableGrid\" cellspacing=\"0px\" width=\"100%\">";
					html +=				"<thead>";
					html += 				"<tr>"; // style=\"position:fixed;top:0;\"
					
					if (shownr_data == true) {
						html +=					"<th widht=\"10%\" align=\"left\"><b>" + titleheader1_data + "</b></td>";
					}
					
					if (showdesc_data == true) {
						html +=					"<th widht=\"15%\" align=\"left\"><b>" + titleheader2_data + "</b></td>";
					}
									
						html +=					"<th width=\"30%\" align=\"left\"><b>" + titleheader3_data + "</b></td>";
					
					if (showcredit_data == true) {
						html +=					"<th width=\"15%\" align=\"left\"><b>" + titleheader4_data + "</b></td>";
					}
					
						html +=					"<th width=\"30%\" align=\"center\"><b>" + titleheader5_data + "</b></td>";
					html +=			"</tr>";
					html +=	    	"<tr>";
					if (shownr_data == true) {
						html +=					"<th class=\"CellBorder\" align=\"left\">" + titleheader1sub_data + "</td>";
					}
					
					if (showdesc_data == true) {
						html +=					"<th class=\"CellBorder\" align=\"left\">" + titleheader2sub_data + "</td>";
					}
					
						html +=					"<th class=\"CellBorder\" align=\"left\">" + titleheader3sub_data + "</td>";
					
					if (showcredit_data == true) {
						html +=					"<th class=\"CellBorder\" align=\"left\">" + titleheader4sub_data + "</td>";
					}
						html +=					"<th class=\"CellBorder\" align=\"center\">" + titleheader5sub_data + "</td>";
					html +=					"</tr>";
					html +=				"</thead>";
					html +=			"</table>";
					html +=		"</div>";
				}
				html +=		"<div class=\""+defScrollCSS+"\">";
				html +=			"<table class=\"TableGrid\" cellspacing=\"0px\" width=\"100%\">";
				html += 			"<tbody>";
				defHeader = funGetHierarchy(data_ist_data);
		    
			    for (var irows = 0; irows < data_ist_data.axis_rows.length; irows++) {
			    	htmltemp = "<tr>";	
		    	
			    	if (defHeader[irows][2] == 1) {
		    			datKey = "<b>>" + "&nbsp;" + defHeader[irows][0] + "</b>";
		    			datText = defHeader[irows][1];
		    			datMemberSelection = defHeader[irows][0];
		    			datMembertxt = "<b>" + funGetText(datText, "", 1) + "</b>";
		    			datLevel = defHeader[irows][2];
		    			defCSS = "";			    		
			    	} else if (defHeader[irows][2] == 2) {
		    			datKey = "<b>" + "&nbsp;" + ">" + defHeader[irows][0] +  "</b>";
		    			datText = defHeader[irows][1];
		    			datMemberSelection = defHeader[irows][0];
		    			datMembertxt = "<b>" + funGetText(datText, "", 2) + "</b>";
		    			datLevel = defHeader[irows][2];
		    			defCSS = "";			    		
			    	} else if (defHeader[irows][2] == 3) {
		    			datText = defHeader[irows][1];
		    			datMemberSelection = defHeader[irows][0];
		    			datMembertxt = funGetText(datText, defHeader[irows][6], 3);
		    			datLevel = "3";
		    			if (defHeader[irows][2] == defHeader[irows][4]) {
		    				datKey = "&nbsp;" + "&nbsp;" + defHeader[irows][0].substring(4,99);
		    				defCSS = "islink";
		    			} else {
		    				datKey = "&nbsp;" + "&nbsp;" + defHeader[irows][0];
		    				defCSS = "";
		    			}
			    	} else if (defHeader[irows][2] == 4) {
		    			datText = defHeader[irows][1];
		    			datMemberSelection = defHeader[irows][3];
		    			datMembertxt = funGetText(datText , defHeader[irows][6], 4);
		    			datLevel = "4";
		    			if (defHeader[irows][2] == defHeader[irows][4]) {
		    				datKey = "&nbsp;" + "&nbsp;" + "&nbsp;" + defHeader[irows][0].substring(4,99);
		    				defCSS = "islink";
		    			} else {
		    				datKey = "&nbsp;" + "&nbsp;" + "&nbsp;" + defHeader[irows][0];
		    				defCSS = "";
		    			}			    		
			    	}			    	
			    	
			    	if (shownr_data == true) {
			    		htmltemp += "<td widht=\"10%\" style=\"width: 10%;\" class=\"CellBorder\" data-dim-" + datLevel + "=\"" + datMemberSelection + "\">" + datKey + "</td>";
			    	}
			    	
			    	if (showdesc_data == true) {
			    		htmltemp += "<td widht=\"15%\" style=\"width: 15%;\" class=\"CellBorder " + defCSS + "\" data-dim-" + datLevel + "=\"" + datMemberSelection + "\">" + datMembertxt + "</td>";
			    	}
			    	
//			    	if (defHeader[irows][5] == '0FM_AREA') {
//			    		htmltemp += "<td widht=\"30%\" style=\"width: 30%;\"  class=\"CellBorder\"></td>";
//			    		htmltemp += "<td widht=\"15%\" style=\"width: 15%;\"  class=\"CellBorder\"></td>";
//			    		htmltemp += "<td widht=\"30%\" style=\"width: 30%;\"  class=\"CellBorder\"></td>";
//			    	} else {
			    		htmltemp += "<td widht=\"30%\" style=\"width: 30%;\" class=\"CellBorder\">" + funCreateChart(data_ist_obl_data, data_ist_data, data_obl_data, data_erw_data, data_va_erw_data, irows) + "</td>";
				    	if (showcredit_data == true) {
				    		htmltemp += "<td widht=\"15%\" style=\"width: 15%;\" class=\"CellBorder\">" + funCreateStackedChart(data_kredit_a_data, data_kredit_p_data, data_va_erw_data, irows) + "</td>";
				    	}
				    	htmltemp += "<td widht=\"30%\" style=\"width: 30%;\" class=\"CellBorder\">" + funCreateHorizontalChart(data_fehlbetr_a_data, data_fehlbetr_p_data, data_va_erw_data, irows) + "</td>";
//			    	}
			    	htmltemp += "</tr>";
			    	
			    	html += htmltemp;
			    }
			
			html += 	"</tbody>";      
			html += 	"</table>";  
			html +=		"</div>";
			that.jqTable = $(html);
			that.jqTable.click(onCellClick);
			that.$().append(that.jqTable);	
			}
		}
		
		function onCellClick(e) {
			jQuery.each(e.target.attributes, function(index, value) {
				if (value.name.indexOf('data-dim-') === 0) { 
					onclickvalue_data = value.value;
					that.firePropertiesChangedAndEvent(["onclickvalue"], "onSelect");
				}
			});
		}
				
		function funGetHierarchy(data) {
			
			var defDimCount = data.axis_rows[0].length-1;
			var defFindKeyPos = null; 
			var defFinalTable = ["start"];
			
			
			for (var i = 0; i < data.axis_rows.length; i++) {
				for (var d = defDimCount; d >= 1; d--) {
					if (data.dimensions[d].members[data.axis_rows[i][d]].key != "SUMME") {
						if (data.dimensions[d].members[data.axis_rows[i][d]].type == "HIERARCHY_NODE") {
							defFindKeyPos = data.dimensions[d].members[data.axis_rows[i][d]].text.indexOf("|");
							defFinalTable[i] 	= [data.dimensions[d].members[data.axis_rows[i][d]].text.substring(0,defFindKeyPos)];
						} else {
							defFinalTable[i] 	= [data.dimensions[d].members[data.axis_rows[i][d]].key];
						}	
						defFinalTable[i][1] = data.dimensions[d].members[data.axis_rows[i][d]].text;
						defFinalTable[i][2] = d;
						defFinalTable[i][3] = data.axis_rows[i][d];
						defFinalTable[i][4] = defDimCount;
						defFinalTable[i][5] = data.dimensions[d].key;
						if (d == 3) {
							defFindKeyPos		= data_data.dimensions[d].members[data.axis_rows[i][d]].attributeMembers[0].text.indexOf("|");
							defFinalTable[i][6] = data_data.dimensions[d].members[data.axis_rows[i][d]].attributeMembers[0].text.substring(defFindKeyPos+1, 99);
						}
						d = 0;
					}
				}
			}
			
			return defFinalTable;
		}
		
		function funGetText (datMemberText, datVeText, datLevel) {
			var defFinalText = "";
			
			// 09.06.2017 GST - Auf Stufe Dep kann mit dem Text nicht unterschieden werden, zu welcher VE er gehört. Daher wird der KORKS fix mitgeliefert
			if (datLevel == 1 || datLevel == 2) {
				defFinalText = datMemberText.substring(datMemberText.indexOf("|"),datMemberText.length).replace("|","");
			} else {
//				if (isNumeric(datMemberText.substring(0, 4))) {
//					defFinalText = datMemberText.substring(0, 4) + " - " +datMemberText.substring(datMemberText.indexOf("|"),datMemberText.length).replace("|","");
//				} else {
//					defFinalText = datMemberText.substring(datMemberText.indexOf("|"),datMemberText.length).replace("|","");
//				}
				defFinalText = datVeText + " - " + datMemberText.substring(datMemberText.indexOf("|"),datMemberText.length).replace("|","");
			}
			return defFinalText;
		}
		
		function isNumeric(n) {
				return !isNaN(parseFloat(n)) && isFinite(n);
		}
		
		function funDivideZeroCheck(a, b) {
			var defResult = 0;
			
			if (b === 0) {
				return 0;
			} else {
				defResult = a / b;
				return defResult;
			}
		}
		
		function funCheckData (a) {
			var defOutput = 0;
			if (a == undefined || a == null) {
				defOutput = 0;
			} else {
				defOutput = a;
			}			
			return defOutput;
		}
		
		function funCreateChart(data_ist_obl_data, data_ist_data, data_obl_data, data_erw_data, data_va_erw_data, i) {
			// Values for Chart

			var datArray = [];
			var defBar1 = 0;
			var defBar1txt = "";
			var defBar2 = 0;
			var defBar2txt = "";
			var defBar3 = 0;
			var defBar3txt = "";
			var html = "";
			
			// Holt den maximalen Wert aller Balken
			var varIstOblmax = Math.max.apply(null, data_ist_obl_data.data);
			var varVAERWmax = Math.max.apply(null, data_va_erw_data.data);
			var varERWmax = Math.max.apply(null, data_erw_data.data);
			
			var varMaxValue = Math.max.apply(null, [varIstOblmax, varVAERWmax, varERWmax]);
			
			// Validiert Daten für den Chart
			var datIstObl = funCheckData(data_ist_obl_data.data[i]);
			var datIst = funCheckData(data_ist_data.data[i]);
			var datObl = funCheckData(data_obl_data.data[i]);
			var datVAErw = funCheckData(data_va_erw_data.data[i]);
			var datErw = funCheckData(data_erw_data.data[i]);
			
			// Beziehen formatierter Daten
			var datOblF = data_obl_data.formattedData[i].replace(" CHF", "");
			var datIstF = data_ist_data.formattedData[i].replace(" CHF", "");
			var datIstOblF = data_ist_obl_data.formattedData[i].replace(" CHF", "");
			var datVAErwF = data_va_erw_data.formattedData[i].replace(" CHF", "");
			var datErwF = data_erw_data.formattedData[i].replace("CHF", "");
			
			// Definiert grösse des Balken
			defBar1 = 100 * funDivideZeroCheck(datIstObl, varMaxValue);
			defBar2 = 100 * funDivideZeroCheck(datVAErw, varMaxValue);
			defBar3 = 100 * funDivideZeroCheck(datErw, varMaxValue);
			
			if (defBar1 < 0) { defBar1 = 0;	}
			if (defBar2 < 0) { defBar2 = 0; }
			if (defBar3 < 0) { defBar3 = 0;	}
			
			// Text Bar 1
			if (datIstOblF == "") {
				defBar1txt = "";
			} else {
				defBar1txt = datIstOblF + " (" + datIstF;
				
				// Prozentzahl soll nur angezeigt werden, wenn auch wirklich Werte vorhanden sind
				if (datOblF == null || datOblF == "") {
					defBar1txt += ")";
				} else {
					defBar1txt += ", " + datOblF + ")"; 
				} 
			}
			
			defBar2txt = datVAErwF;
			defBar3txt = datErwF;
			
			// Define Array for Chart
//			datArray = [datIstObl, datVAErw, datErw];
			
//			if (datIstObl != 0 && datVA != 0 && datErw != 0) {
				html =		"<svg height=\"60px\" width=\"100%\">";	
//				html +=			"<g transform=\"translate(100,5)\"></g>";
				html +=			"<g transform=\"translate(35,5)\">";
				html +=				"<text text-anchor=\"end\" dy=\".35em\" stroke=\"none\" y=\"10\" class=\"TrippleBar\">" + titlebar1_data + "</text>";
				html +=				"<text text-anchor=\"end\" dy=\".35em\" stroke=\"none\" y=\"25\" class=\"TrippleBar\">" + titlebar2_data + "</text>";
				html +=				"<text text-anchor=\"end\" dy=\".35em\" stroke=\"none\" y=\"40\" class=\"TrippleBar\">" + titlebar3_data + "</text>";
				html +=			"</g>";
				html +=			"<g transform=\"translate(40,5)\">";
				html +=				"<rect fill=\"#7F7F7F\" stroke=\"white\" width=\"" + defBar1 * 0.5 + "%\" height=\"12px\" y=\"4\" lineWidth=\"100\"></rect>";
				html +=				"<rect fill=\"#3366CC\" stroke=\"white\" width=\"" + defBar2 * 0.5 + "%\" height=\"12px\" y=\"19\"></rect>";
				html +=				"<rect fill=\"#ADC1EB\" stroke=\"white\" width=\"" + defBar3 * 0.5 + "%\" height=\"12px\" y=\"34\"></rect>";
				//html +=				"<text stroke=\"none\" fill=\"black\" text-anchor=\"start\" dy=\".35em\" dx=\"3\" y=\"10\" x=\"" + (defBar1 / 2)  + "%\">" + data_ist_obl_data.formattedData[i].replace("CHF", "")  + "</text>";
				html +=				"<text stroke=\"none\" fill=\"black\" text-anchor=\"start\" dy=\".35em\" dx=\"3\" y=\"10\" x=\"" + defBar1 * 0.5  + "%\">" + defBar1txt + "</text>";
				html +=				"<text stroke=\"none\" fill=\"black\" text-anchor=\"start\" dy=\".35em\" dx=\"3\" y=\"25\" x=\"" + defBar2 * 0.5  + "%\">" + defBar2txt + "</text>";
				html +=				"<text stroke=\"none\" fill=\"black\" text-anchor=\"start\" dy=\".35em\" dx=\"3\" y=\"40\" x=\"" + defBar3 * 0.5  + "%\">" + defBar3txt + "</text>";
				html +=				"<line style=\"stroke: rgb(204, 204, 204);\" y2=\"48\" y1=\"2\"></line>";
				html +=			"</g>";
				html +=		"</svg>";
//			} else {
//				html = "<svg/>";
//			}	
			return html;
		}
		
		function funCreateStackedChart(data_kredit_a_data, data_kredit_p_data, data_va_erw_data, i) {
			// Values for Chart
			var datKreditAbs = 0;
			var datKreditAbsF = '';
			var datKreditPro = 0;
			var datKreditProF = '';
			var datIsNegativ = false;
			var datCSSRightBar = 'StackedBarRight';
			var html = "";
			
			// Check value of Data Ist Obl.
			if (data_kredit_a_data.data[i] == undefined || data_kredit_a_data.data[i] == null) {
				datKreditAbs = 0;
			} else {
				datKreditAbs = data_kredit_a_data.data[i];
				datKreditAbsF = data_kredit_a_data.formattedData[i];
			}
			
			// Check value of Data VA
			if (data_kredit_p_data.data[i] == undefined || data_kredit_p_data.data[i] == null) {
				datKreditPro = 0;
			} else {
				datKreditPro = data_kredit_p_data.data[i];
				
				if (data_va_erw_data.data[i] == 0 ) {
					datKreditProF = "";
				} else {
					datKreditProF = ' (' + data_kredit_p_data.formattedData[i] + ')';					
				}
								
			}			
			
			// Check whether value is negativ
			if (datKreditAbs < 0) {
				datIsNegativ = true;
				datKreditPro = Math.abs(datKreditPro);
				datKreditAbs = Math.abs(datKreditAbs);
				datCSSRightBar = 'StackedBarRightNeg';
			}
			
			// Prüft ob %-Zahl grösser/kleiner 100 ist
			if (datKreditPro > 100) {
				datKreditPro = 100;
			} 
			
			var datBarMulti = 0.3;
			var datBarLengthLeft = (100-datKreditPro) * datBarMulti;
			var datBarLengthRight = datKreditPro * datBarMulti;
			var datBarLegend = 100 * (1-datBarMulti);
			
			if (datKreditAbsF.replace("CHF","") == "0.0 " && datKreditProF == "") {
				html = '<table height=\"20px\" width=\"100%\" class=\"StackedBarChart\" cellspacing=\"0px\" cellpadding=\"0px\">' +
							'<tr height=\"20px\">' +
								'<td height=\"20px\" width=\"100%\"></td>' +
							'</tr>' +
						'</table>';
			} else {				
		
				html = 	'<table height=\"20px\" width=\"100%\" class=\"StackedBarChart\" cellspacing=\"0px\" cellpadding=\"0px\">' +
							'<tr height=\"20px\">' +
								'<td height=\"20px\" width=\"' + datBarLengthLeft + '%\" class=\"StackedBarLeft\"></td>' + 
								'<td height=\"20px\" width=\"' + datBarLengthRight + '%\" class=\"' + datCSSRightBar + '\"></td>' +
								'<td height=\"20px\" width=\"' + datBarLegend + '%\" style=\"padding-left:5px\">' + datKreditAbsF.replace("CHF","") + datKreditProF + '</td>' +
							'</tr>' +
						'</table>';
			}
			
			return html;
		}
		
		function funCreateHorizontalChart (data_fehlbetr_a_data, data_fehlbetr_p_data, data_va_erw_data, i) {
			var html = '';
			var datFehlbetrAbs = 0;
			var datFehlbetrAbsF = '';
			var datFehlbetrPro = 0;
			var datFehlbetrProF = '';
			var datBarLeftLength = 0;
			var datBarRightLength = 0;
			var datBarLeftValue = '';
			var datBarLeftValueF = '';
			var datBarRightValue = '';
			var datBarRightValueF = '';
			var defValueAbs = false;
			var defValuePro = false;

			// Check value of Data Ist Obl.
			if (data_fehlbetr_a_data.data[i] == undefined || data_fehlbetr_a_data.data[i] == null) {
				datFehlbetrAbs = 0;
			} else {
				datFehlbetrAbs = data_fehlbetr_a_data.data[i];
				datFehlbetrAbsF = data_fehlbetr_a_data.formattedData[i];
				defValueAbs = true;
			}
			
			// Check value of Data VA
			if (data_fehlbetr_p_data.data[i] == undefined || data_fehlbetr_p_data.data[i] == null) {
				datFehlbetrPro = 0;
			} else {
				datFehlbetrPro = data_fehlbetr_p_data.data[i];
				
				if (data_va_erw_data.data[i] == 0) {
					datFehlbetrProF = '';
				} else {
					datFehlbetrProF = ' (' + data_fehlbetr_p_data.formattedData[i]  + ')';
				}
				defValuePro = true;
			}
			
			// Check whether value is negativ
			if (datFehlbetrAbs < 0) {
				datFehlbetrPro = Math.abs(datFehlbetrPro);
				datFehlbetrAbs = Math.abs(datFehlbetrAbs);
				
				if (datFehlbetrPro > 100) {
					datFehlbetrPro = 100;
				}
				
				datBarLeftLength = datFehlbetrPro * 0.3;
				datBarRightLength = 0;
				datBarLeftValue = datFehlbetrAbsF.replace("CHF","") + datFehlbetrProF;
			} else {
				
				if (datFehlbetrPro > 100) {
					datFehlbetrPro = 100;
				}
				
				datBarLeftLength = 0;
				datBarRightLength = datFehlbetrPro * 0.3;
				datBarRightValue = '' + datFehlbetrAbsF.replace("CHF","") + datFehlbetrProF;
			}
			
			if (defValueAbs === false && defValuePro === false) {
			html = '<table height=\"100%\" width=\"100%\" class=\"HorizontalBar\" cellspacing=\"0px\" cellpadding=\"0px\">' +
						'<tr height=\"100%\">' +
							'<td height=\"20px\" width=\"100%\"></td>' +
						'</tr>' +
					'</table>';
			} else {
			// Generierung Chart
			html = 	'<table height=\"100%\" width=\"100%\" class=\"HorizontalBar\" cellspacing=\"0px\" cellpadding=\"0px\">' +
						'<tr height=\"100%\">' +
							'<td height=\"20px\" width=\"50%\">' +
								'<table width=\"100%\" cellspacing=\"0px\" cellpadding=\"0px\">' +
									'<tr>' +
										'<td height=\"20px\" width=\"' + (100 - datBarLeftLength) + '%\" style=\"padding-right:5px; text-align: right;\">' + datBarLeftValue + '</td>' +
										'<td height=\"20px\" width=\"' + datBarLeftLength + '%\" class=\"HorizontalBarLeft\"></td>' +
									'</tr>' +
								'</table>' +
							'</td>' +
							'<td height=\"28px\" width=\"50%\" style=\"border-left: 1px solid rgb(127, 127, 127);\">' +
								'<table width=\"100%\" cellspacing=\"0px\" cellpadding=\"0px\">' +
									'<tr>' +
										'<td height=\"20px\" width=\"' + datBarRightLength + '%\" class=\"HorizontalBarRight\"></td>' +
										'<td height=\"20px\" width=\"' + (100 - datBarRightLength) + '%\" style=\"padding-left:5px\">' +  datBarRightValue + '</td>' +
									'</tr>' +
								'</table>' +
							'</td>' +
						'</tr>' +
					'</table>';	
			}

			
			
			return html;
		}
		
		// called from Additional Properties Sheet JavaScript file
	
		this.getMetadataAsString = function() {
			return JSON.stringify(this.metadata());
		};
	
		// property setter/getter functions
	
		this.dataistobl = function(value) {
			if (value === undefined) {
				return data_ist_obl_data;
			} else {
				data_ist_obl_data = value;
				return this;
			}
		};
		
		this.dataerw = function(value) {
			if (value === undefined) {
				return data_erw_data;
			} else {
				data_erw_data = value;
				return this;
			}
		};
		
		this.datavaerw = function(value) {
			if (value === undefined) {
				return data_va_erw_data;
			} else {
				data_va_erw_data = value;
				return this;
			}
		};
		
		this.dataobl = function(value) {
			if (value === undefined) {
				return data_obl_data;
			} else {
				data_obl_data = value;
				return this;
			}
		};
		
		this.dataist = function(value) {
			if (value === undefined) {
				return data_ist_data;
			} else {
				data_ist_data = value;
				return this;
			}
		};
		
		this.datakredita = function(value) {
			if (value === undefined) {
				return data_kredit_a_data;
			} else {
				data_kredit_a_data = value;
				return this;
			}
		};
		
		this.datakreditp = function(value) {
			if (value === undefined) {
				return data_kredit_p_data;
			} else {
				data_kredit_p_data = value;
				return this;
			}
		};
		
		this.datafehlbetra = function(value) {
			if (value === undefined) {
				return data_fehlbetr_a_data;
			} else {
				data_fehlbetr_a_data = value;
				return this;
			}
		}
		
		this.datafehlbetrp = function(value) {
			if (value === undefined) {
				return data_fehlbetr_p_data;
			} else {
				data_fehlbetr_p_data = value;
				return this;
			}
		}
		
		this.data = function(value) {
			if (value === undefined) {
				return data_data;
			} else {
				data_data = value;
				return this;
			}
		}

		this.titleheader1 = function(value) {
			if (value === undefined) {
				return titleheader1_data;
			} else {
				titleheader1_data = value;
				return this;
			}
		};

		this.titleheader2 = function(value) {
			if (value === undefined) {
				return titleheader2_data;
			} else {
				titleheader2_data = value;
				return this;
			}
		};

		this.titleheader3 = function(value) {
			if (value === undefined) {
				return titleheader3_data;
			} else {
				titleheader3_data = value;
				return this;
			}
		};

		this.titleheader4 = function(value) {
			if (value === undefined) {
				return titleheader4_data;
			} else {
				titleheader4_data = value;
				return this;
			}
		};
		
		this.titleheader5 = function(value) {
			if (value === undefined) {
				return titleheader5_data;
			} else {
				titleheader5_data = value;
				return this;
			}
		};
		
		this.titleheader1sub = function(value) {
			if (value === undefined) {
				return titleheader1sub_data;
			} else {
				titleheader1sub_data = value;
				return this;
			}
		};
		
		this.titleheader2sub = function(value) {
			if (value === undefined) {
				return titleheader2sub_data;
			} else {
				titleheader2sub_data = value;
				return this;
			}
		};
		
		this.titleheader3sub = function(value) {
			if (value === undefined) {
				return titleheader3sub_data;
			} else {
				titleheader3sub_data = value;
				return this;
			}
		};
		
		this.titleheader4sub = function(value) {
			if (value === undefined) {
				return titleheader4sub_data;
			} else {
				titleheader4sub_data = value;
				return this;
			}
		};
		
		this.titleheader5sub = function(value) {
			if (value === undefined) {
				return titleheader5sub_data;
			} else {
				titleheader5sub_data = value;
				return this;
			}
		};

	    this.titlebar1 = function(value) {
            if (value === undefined) {
                        return titlebar1_data;
            } else {
                        titlebar1_data = value;
                        return this;
            }
		 };
		
		 this.titlebar2 = function(value) {
		            if (value === undefined) {
		                        return titlebar2_data;
		            } else {
		                        titlebar2_data = value;
		                        return this;
		            }
		 };
		
		 this.titlebar3 = function(value) {
		            if (value === undefined) {
		                        return titlebar3_data;
		            } else {
		                        titlebar3_data = value;
		                        return this;
		            }
		 };
 
		this.showNr = function(value) {
			if (value === undefined) {
				return shownr_data;
			} else {
				shownr_data = value;
				return this;
			}
		};

		this.showDesc = function(value) {
			if (value === undefined) {
				return showdesc_data;
			} else {
				showdesc_data = value;
				return this;
			}
		};

		this.showCredit = function(value) {
			if (value === undefined) {
				return showcredit_data;
			} else {
				showcredit_data = value;
				return this;
			}
		};
				
		this.onclickvalue = function(value) {
			if (value === undefined) {
				return onclickvalue_data;
			} else {
				onclickvalue_data = value;
				return this;
			}
		};
		
		this.metadata = function(value) {
			if (value === undefined) {
				return meta_data;
			} else {
				meta_data = value;
				return this;
			}
		};
	});
});
