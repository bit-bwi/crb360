define(["sap/designstudio/sdk/component", "css!../css/component.css"], function(Component, css) {
Component.subclass("ch.bit.crb360.iktscorecard.IKTScoreCard", function() {

	/***********************************************************************/
	/********* ch.bit.crb360.iktscorecard      v 1.0.0.0.20180319 **********/
	/***********************************************************************/
	
		var meta_data = null;
		var data_data = null;
		var data_ist_obl_data = null;
		var data_obl_data = null;
		var data_ist_data = null;
		var data_erw_data = null;
		var data_va_erw_data = null;
		var data_fehlbetr_a_data = null;
		var data_fehlbetr_p_data = null;
		var data_volumen_data = null;
		var titleheader1_data = "";
		var titleheader2_data = "";
		var titleheader3_data = "";
		var titleheader4_data = "";
		var titleheader5_data = "";
		var titleheader6_data = "";
		var titleheader7_data = "";
		var titleheader8_data = "";
		var titleheader9_data = "";
		var titleheader10_data = "";
		var titleheader11_data = "";
		var titleheader12_data = "";
		var titleheader1sub_data = "";
		var titleheader2sub_data = "";
		var titleheader3sub_data = "";
		var titleheader4sub_data = "";
		var titleheader5sub_data = "";
		var titleheader6sub_data = "";
		var titleheader7sub_data = "";
		var titleheader8sub_data = "";
		var titleheader9sub_data = "";
		var titleheader10sub_data = "";
		var titleheader11sub_data = "";
		var titleheader12sub_data = "";
		var dim1name_data = "";
	    var dim2name_data = "";
	    var dim3name_data = "";
	    var dim4name_data = "";
	    var dim5name_data = "";
	    var dim6name_data = "";
	    var dim7name_data = "";
	    var dim8name_data = "";
	    var dim1visible_data = undefined;
	    var dim2visible_data = undefined;
	    var dim3visible_data = undefined;
	    var dim4visible_data = undefined;
	    var dim5visible_data = undefined;
	    var dim6visible_data = undefined;
	    var dim7visible_data = undefined;
	    var dim8visible_data = undefined;
	    var dimstvisible_data = undefined;
	    var showbarchart_data = undefined;
	    var dimstatusname_data = "";
	    var dimtrendname_data = "";
	    var dim1pos = undefined;
	    var dim2pos = undefined;
	    var dim3pos = undefined;
	    var dim4pos = undefined;
	    var dim5pos = undefined;
	    var dim6pos = undefined;
	    var dim7pos = undefined;
	    var dim8pos = undefined;
	    var dim1typ = undefined;
	    var dim2typ = undefined;
	    var dim3typ = undefined;
	    var dim4typ = undefined;
	    var dim5typ = undefined;
	    var dim6typ = undefined;
	    var dim7typ = undefined;
	    var dim8typ = undefined;
	    var dimstatuspos = undefined;
	    var dimtrendpos = undefined;
		var titlebar1_data = "";
	    var titlebar2_data = "";
	    var titlebar3_data = "";
		var showOnlyStatus_data = undefined;
		var dim1size_data = dim1size_data;
		var dim2size_data = dim2size_data;
		var dim3size_data = dim3size_data;
		var dim4size_data = dim4size_data;
		var dim5size_data = dim5size_data;
		var dim6size_data = dim6size_data;
		var dim7size_data = dim7size_data;
		var dim8size_data = dim8size_data;
		var dim9size_data = dim9size_data;
		var dim10size_data = dim10size_data;
		var dim11size_data = dim11size_data;
		var dim12size_data = dim12size_data;
		
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
				
				if (showOnlyStatus_data === false) {
					defScrollCSS = "LockTableFrame";
				} else if (data_ist_data.data.length == 1) {
					defScrollCSS = "LockTableFrame";
				}
				
				var html = "";
				
				if (	titleheader1_data != "" || titleheader2_data != "" || titleheader3_data != "" || titleheader4_data != "" || titleheader5_data != "" || 
						titleheader1sub_data != "" || titleheader2sub_data != "" || titleheader3sub_data != "" || titleheader4sub_data != "" || titleheader5sub_data != "") {	
					
					// Schreibt Header Überschriften
					html +=	"<div class=\"FixedTableFrame\">";
					html +=		"<div id=\"iktscroll\">";
					html += 		"<table class=\"TableGrid\" cellspacing=\"0px\" width=\"100%\" border=\"0\">";
					html +=				"<thead>"; // Für Drucklösung relevant
					html += 				"<tr>";
					if (dim1visible_data == true) {
					html +=						"<td width=\""+ dim1size_data +"%\" align=\"left\"><b>" + titleheader1_data + "</b></td>";
					}
					if (dim2visible_data == true) {
					html +=						"<td width=\""+ dim2size_data +"%\" align=\"left\"><b>" + titleheader2_data + "</b></td>";
					}
					if (dim3visible_data == true) {
					html +=						"<td width=\""+ dim3size_data +"%\" align=\"left\"><b>" + titleheader3_data + "</b></td>";
					}
					if (dim4visible_data == true) {
					html +=						"<td width=\""+ dim4size_data +"%\" align=\"left\"><b>" + titleheader4_data + "</b></td>";
					}
					if (dim5visible_data == true) {
					html +=						"<td width=\""+ dim5size_data +"%\" align=\"left\"><b>" + titleheader5_data + "</b></td>";
					}
					if (dim6visible_data == true) {
					html +=						"<td width=\""+ dim6size_data +"%\" align=\"left\"><b>" + titleheader6_data + "</b></td>";
					}
					if (dim7visible_data == true) {
					html +=						"<td width=\""+ dim7size_data +"%\" align=\"left\"><b>" + titleheader7_data + "</b></td>";
					}
					if (dim8visible_data == true) {
					html +=						"<td width=\""+ dim8size_data +"%\" align=\"left\"><b>" + titleheader8_data + "</b></td>";
					}
					if (dimstvisible_data == true) {
					html +=						"<td width=\""+ dim9size_data +"%\" align=\"left\"><b>" + titleheader9_data + "</b></td>";
					}
					html +=						"<td width=\""+ dim10size_data +"%\" align=\"left\"><b>" + titleheader10_data + "</b></td>";
					if (showbarchart_data == true) {
					html +=						"<td width=\""+ dim11size_data +"%\" align=\"left\"><b>" + titleheader11_data + "</b></td>";
					}
					html +=						"<td width=\""+ dim12size_data +"%\" align=\"center\"><b>" + titleheader12_data + "</b></td>";
					html +=					"</tr>";
					html +=	    			"<tr>";
					if (dim1visible_data == true) {
					html +=					"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader1sub_data + "</b></td>";
					}
					if (dim2visible_data == true) {
					html +=					"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader2sub_data + "</b></td>";
					}
					if (dim3visible_data == true) {
					html +=					"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader3sub_data + "</b></td>";
					}
					if (dim4visible_data == true) {
					html +=					"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader4sub_data + "</b></td>";
					}
					if (dim5visible_data == true) {
					html +=					"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader5sub_data + "</b></td>";
					}
					if (dim6visible_data == true) {
					html +=					"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader6sub_data + "</b></td>";
					}
					if (dim7visible_data == true) {
					html +=					"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader7sub_data + "</b></td>";
					}
					if (dim8visible_data == true) {
					html +=					"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader8sub_data + "</b></td>";
					}
					if (dimstvisible_data == true) {
					html +=					"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader9sub_data + "</b></td>";
					}
					html +=					"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader10sub_data + "</b></td>";
					if (showbarchart_data == true) {
					html +=					"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader11sub_data + "</b></td>";
					}
					html +=					"<td class=\"CellBorder\" align=\"center\"><b>" + titleheader12sub_data + "</b></td>";
					html +=					"</tr>";
					html +=				"</thead>";
					html +=			"</table>";
					html +=		"</div>";
					html +=	 "</div>";
				}
				
				html +=		"<div class=\""+defScrollCSS+"\">";
				html +=			"<table class=\"TableGrid\" cellspacing=\"0px\" width=\"100%\" border=\"0\">";
				html += 			"<tbody>";

				// Searchs for the position of each dimension in the data set
				for (var idrows = 0; idrows < data_data.dimensions.length; idrows++) {
					switch(data_data.dimensions[idrows].key) {
					case dim1name_data:
						dim1pos = idrows;
						dim1typ = 'd';
						break;
					case dim2name_data:
						dim2pos = idrows;
						dim2typ = 'd';
						break;
					case dim3name_data:
						dim3pos = idrows;
						dim3typ = 'd';
						break;
					case dim4name_data:
						dim4pos = idrows;
						dim4typ = 'd';
						break;
					case dim5name_data:
						dim5pos = idrows;
						dim5typ = 'd';
						break;
					case dim6name_data:
						dim6pos = idrows;
						dim6typ = 'd';
						break;
					case dim7name_data:
						dim7pos = idrows;
						dim7typ = 'd';
						break;
					case dim8name_data:
						dim8pos = idrows;
						dim8typ = 'd';
						break;
					case dimstatusname_data:
						dimstatuspos = idrows;
						break;
					case dimtrendname_data:
						dimtrendpos = idrows;
						break;
					}
				}
				
				// Searchs for the position of each key figure in the data set				
				for (var idrows = 0; idrows < data_data.dimensions[0].members.length; idrows++) {
					switch(data_data.dimensions[0].members[idrows].key) {
					case dim1name_data:
						dim1pos = idrows;
						dim1typ = 'f';
						break;
					case dim2name_data:
						dim2pos = idrows;
						dim2typ = 'f';
						break;
					case dim3name_data:
						dim3pos = idrows;
						dim3typ = 'f';
						break;
					case dim4name_data:
						dim4pos = idrows;
						dim4typ = 'f';
						break;
					case dim5name_data:
						dim5pos = idrows;
						dim5typ = 'f';
						break;
					case dim6name_data:
						dim6pos = idrows;
						dim6typ = 'f';
						break;
					case dim7name_data:
						dim7pos = idrows;
						dim7typ = 'f';
						break;
					case dim8name_data:
						dim8pos = idrows;
						dim8typ = 'f';
						break;
					case dimstatusname_data:
						dimstatuspos = idrows;
						break;
					case dimtrendname_data:
						dimtrendpos = idrows;
						break;
					}
				}
				
				var facts = {
								dim: [dim1name_data, dim2name_data,dim3name_data, dim4name_data, dim5name_data, dim6name_data, dim7name_data, dim8name_data],
								typ: [dim1typ, dim2typ, dim3typ, dim4typ, dim5typ, dim6typ, dim7typ, dim8typ]
							};		

				for (var irows = 0; irows < facts.dim.length; irows++) {
					if (facts.typ[irows] == 'f') {
						var factpos = 0;
						for (var sirows = 0; sirows < data_data.dimensions[0].members.length; sirows++) {
							if (data_data.dimensions[0].members[sirows].key == facts.dim[irows]) {
								factpos = sirows;
							}
						}
						
						var factvalues = []
						for (var dirows = 0; dirows < data_data.tuples.length; dirows++) {
							if (data_data.tuples[dirows][0] == factpos) {
								factvalues[factvalues.length] = dirows;
							}
						} 
					}
				}
				

								
				
				// write it to a HTML statement
			    for (var irows = 0; irows < data_ist_data.axis_rows.length; irows++) {
			    	htmltemp = "<tr>";	
			    	
			    	if (dim1pos != undefined && dim1visible_data != false) {
			    		if (dim1typ == 'd') {
			    			htmltemp += "<td width=\""+ dim1size_data +"%\" style=\"width: "+ dim1size_data +"%;\" class=\"CellBorder\">" + data_data.dimensions[dim1pos].members[data_data.axis_rows[irows][dim1pos]].text.replace("#","") + "</td>";
			    		} else if (dim1typ == 'f') {
			    			htmltemp += "<td width=\""+ dim1size_data +"%\" style=\"width: "+ dim1size_data +"%;\" class=\"CellBorder\">" + data_data.formattedData[factvalues[irows]] + "</td>";
			    		}
			    	}
			    	
					// exception for dim2name_data when dimension name is C7CVGUID__C7CVFKBCM - hard coded, we received the requirement too late
					if (dim2pos != undefined && dim2visible_data != false) {
						if (dim2name_data != 'C7CVGUID__C7CVFKBCM') { 
							if (dim2typ == 'd') {
								htmltemp += "<td width=\""+ dim2size_data +"%\" style=\"width: "+ dim2size_data +"%;\" class=\"CellBorder\">" + data_data.dimensions[dim2pos].members[data_data.axis_rows[irows][dim2pos]].text.replace("#","") + "</td>";
				    		} else if (dim2typ == 'f') {
				    			htmltemp += "<td width=\""+ dim2size_data +"%\" style=\"width: "+ dim2size_data +"%;\" class=\"CellBorder\">" + data_data.formattedData[factvalues[irows]] + "</td>";
				    		}
						} else {
							if (dim2typ == 'd') {
								if (data_data.dimensions[dim2pos].members[data_data.axis_rows[irows][dim2pos]].text.replace("#","") == '20') {
									htmltemp += "<td width=\""+ dim2size_data +"%\" style=\"width: "+ dim2size_data +"%;\" class=\"CellBorder\">X</td>";
								} else {
									htmltemp += "<td width=\""+ dim2size_data +"%\" style=\"width: "+ dim2size_data +"%;\" class=\"CellBorder\"></td>";
								}
				    		} else if (dim2typ == 'f') {
				    			htmltemp += "<td width=\""+ dim2size_data +"%\" style=\"width: "+ dim2size_data +"%;\" class=\"CellBorder\">" + data_data.formattedData[factvalues[irows]] + "</td>";
				    		}							
						}
			    	}
			    	
			    	if (dim3pos != undefined && dim3visible_data != false) {
			    		var res = '';
			    		if (data_data.dimensions[dim3pos].members[data_data.axis_rows[irows][dim3pos]].text==="1") { res = 'X'; } else { '' }
			    		if (dim3typ == 'd') {	
			    			htmltemp += "<td width=\""+ dim3size_data +"%\" style=\"width: "+ dim3size_data +"%;\" class=\"CellBorder\">" + res + "</td>";
			    		} else if (dim3typ == 'f') {
			    			htmltemp += "<td width=\""+ dim3size_data +"%\" style=\"width: "+ dim3size_data +"%;\" class=\"CellBorder\">" + data_data.formattedData[factvalues[irows]] + "</td>";
			    		}
			    	}
			    	
			    	if (dim4pos != undefined && dim4visible_data != false) {
			    		var res4 = '';
			    		if (data_data.dimensions[dim4pos].members[data_data.axis_rows[irows][dim4pos]].text==="1") { res4 = 'X'; } else { '' }
			    		if (dim4typ == 'd') {	
			    			htmltemp += "<td width=\""+ dim4size_data +"%\" style=\"width: "+ dim4size_data +"%;\" class=\"CellBorder\">" + res4 + "</td>";
				    	} else if (dim4typ == 'f') {
			    			htmltemp += "<td width=\""+ dim4size_data +"%\" style=\"width: "+ dim4size_data +"%;\" class=\"CellBorder\">" + data_data.formattedData[factvalues[irows]] + "</td>";
			    		}
			    	}
			    	
			    	if (dim5pos != undefined && dim5visible_data != false) {
			    		if (dim5typ == 'd') {	
			    			htmltemp += "<td width=\""+ dim5size_data +"%\" style=\"width: "+ dim5size_data +"%;\" class=\"CellBorder\">" + data_data.dimensions[dim5pos].members[data_data.axis_rows[irows][dim5pos]].text.replace("#","") + "</td>";
				    	} else if (dim5typ == 'f') {
			    			htmltemp += "<td width=\""+ dim5size_data +"%\" style=\"width: "+ dim5size_data +"%;\" class=\"CellBorder\">" + data_data.formattedData[factvalues[irows]] + "</td>";
			    		}
			    	}
			    	
			    	if (dim6pos != undefined && dim6visible_data != false) {
			    		if (dim6typ == 'd') {	
			    			htmltemp += "<td width=\""+ dim6size_data +"%\" style=\"width: "+ dim6size_data +"%;\" class=\"CellBorder\">" + data_data.dimensions[dim6pos].members[data_data.axis_rows[irows][dim6pos]].text.replace("#","") + "</td>";
				    	} else if (dim6typ == 'f') {
			    			htmltemp += "<td width=\""+ dim6size_data +"%\" style=\"width: "+ dim6size_data +"%;\" class=\"CellBorder\">" + data_data.formattedData[factvalues[irows]] + "</td>";
			    		}
			    	}
			    	
			    	if (dim7pos != undefined && dim7visible_data != false) {
			    		if (dim7typ == 'd') {		
			    			htmltemp += "<td width=\""+ dim7size_data +"%\" style=\"width: "+ dim7size_data +"%;\" class=\"CellBorder\">" + data_data.dimensions[dim7pos].members[data_data.axis_rows[irows][dim7pos]].text.replace("#","") + "</td>";
				    	} else if (dim7typ == 'f') {
			    			htmltemp += "<td width=\""+ dim7size_data +"%\" style=\"width: "+ dim7size_data +"%;\" class=\"CellBorder\">" + data_data.formattedData[factvalues[irows]] + "</td>";
			    		}
			    	}
			    	
			    	if (dim8pos != undefined && dim8visible_data != false) {
			    		if (dim8typ == 'd') {	
			    			htmltemp += "<td width=\""+ dim8size_data +"%\" style=\"width: "+ dim8size_data +"%;\" class=\"CellBorder\">" + data_data.dimensions[dim8pos].members[data_data.axis_rows[irows][dim8pos]].text.replace("#","") + "</td>";
				    	} else if (dim8typ == 'f') {
			    			htmltemp += "<td width=\""+ dim8size_data +"%\" style=\"width: "+ dim8size_data +"%;\" class=\"CellBorder\">" + data_data.formattedData[factvalues[irows]] + "</td>";
			    		}
			    	}
					
			    	if (dimstatuspos != undefined && dimtrendpos != undefined && dimstvisible_data != false) {
			    		var cssStatus = "";
			    		var cssTrend = "";
			    		
			    		switch(data_data.dimensions[dimstatuspos].members[data_data.axis_rows[irows][dimstatuspos]].key) {
			    		case "1": 
			    			cssStatus = "isPositivTL";
			    			break;
			    		case "2":
			    			cssStatus = "isNeutralTL";
			    			break;
			    		case "3":
			    			cssStatus = "isNegativTL";
			    			break;
			    		}
			    		
			    		switch(data_data.dimensions[dimtrendpos].members[data_data.axis_rows[irows][dimtrendpos]].key) {
			    		case "1": 
			    			cssTrend = "isPositivArrow";
			    			break;
			    		case "2":
			    			cssTrend = "isNeutralArrow";
			    			break;
			    		case "3":
			    			cssTrend = "isNegativArrow";
			    			break;
			    		}	
			    		
			    		htmltemp += "<td width=\""+ dim9size_data +"%\" style=\"width: "+ dim9size_data +"%;\" class=\"CellBorder\"><text class=\""+cssStatus+"\"> </text> <text class=\""+cssTrend+"\"> </text></td>";
			    	}
			    	
		    		htmltemp += "<td width=\""+ dim10size_data +"%\" style=\"width: "+ dim10size_data +"%;\" class=\"CellBorder\">" + funCreateChart(data_ist_obl_data, data_ist_data, data_obl_data, data_erw_data, data_va_erw_data, irows) + "</td>";
			    	if (showbarchart_data == true) {
			    		htmltemp += "<td widht=\""+ dim11size_data +"%\" style=\"width: "+ dim11size_data +"%;\" class=\"CellBorder\">" + funCreateStackedChart(data_rest_a_data, data_rest_p_data, data_va_erw_data, irows) + "</td>";
			    	}
		    		htmltemp += "<td width=\""+ dim12size_data +"%\" style=\"width: "+ dim12size_data +"%;\" class=\"CellBorder\">" + funCreateHorizontalChart(data_fehlbetr_a_data, data_fehlbetr_p_data, data_va_erw_data, irows) + "</td>";
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
						
		function funGetText (datMemberText, datLevel) {
			var defFinalText = "";
			
			// 09.06.2017 GST - Auf Stufe Dep kann mit dem Text nicht unterschieden werden, zu welcher VE er gehört. Daher wird der KORKS fix mitgeliefert
			if (datLevel == 1 || datLevel == 2) {
				defFinalText = datMemberText.substring(datMemberText.indexOf("|"),datMemberText.length).replace("|","");
			} else {
				if (isNumeric(datMemberText.substring(0, 4))) {
					defFinalText = datMemberText.substring(0, 4) + " - " +datMemberText.substring(datMemberText.indexOf("|"),datMemberText.length).replace("|","");
				} else {
					defFinalText = datMemberText.substring(datMemberText.indexOf("|"),datMemberText.length).replace("|","");
				}
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
		
		function funCreateStackedChart(data_rest_a_data, data_rest_p_data, data_va_erw_data, i) {
			// Values for Chart
			var datKreditAbs = 0;
			var datKreditAbsF = '';
			var datKreditPro = 0;
			var datKreditProF = '';
			var datIsNegativ = false;
			var datCSSRightBar = 'StackedBarRight';
			var html = "";
			
			// Check value of Data Ist Obl.
			if (data_rest_a_data.data[i] == undefined || data_rest_a_data.data[i] == null) {
				datKreditAbs = 0;
			} else {
				datKreditAbs = data_rest_a_data.data[i];
				datKreditAbsF = data_rest_a_data.formattedData[i];
			}
			
			// Check value of Data VA
			if (data_rest_p_data.data[i] == undefined || data_rest_p_data.data[i] == null) {
				datKreditPro = 0;
			} else {
				datKreditPro = data_rest_p_data.data[i];
				
				if (data_va_erw_data.data[i] == 0 ) {
					datKreditProF = "";
				} else {
					datKreditProF = ' (' + data_rest_p_data.formattedData[i] + ')';					
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
		
		this.dataresta = function(value) {
			if (value === undefined) {
				return data_rest_a_data;
			} else {
				data_rest_a_data = value;
				return this;
			}
		}
		
		this.datavol = function(value) {
			if (value === undefined) {
				return data_volumen_data;
			} else {
				data_volumen_data = value;
				return this;
			}
		}
		
		this.datarestp = function(value) {
			if (value === undefined) {
				return data_rest_p_data;
			} else {
				data_rest_p_data = value;
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
		
		this.titleheader6 = function(value) {
			if (value === undefined) {
				return titleheader6_data;
			} else {
				titleheader6_data = value;
				return this;
			}
		};
		
		this.titleheader7 = function(value) {
			if (value === undefined) {
				return titleheader7_data;
			} else {
				titleheader7_data = value;
				return this;
			}
		};
		
		this.titleheader8 = function(value) {
			if (value === undefined) {
				return titleheader8_data;
			} else {
				titleheader8_data = value;
				return this;
			}
		};
		
		this.titleheader9 = function(value) {
			if (value === undefined) {
				return titleheader9_data;
			} else {
				titleheader9_data = value;
				return this;
			}
		};
		
		this.titleheader10 = function(value) {
			if (value === undefined) {
				return titleheader10_data;
			} else {
				titleheader10_data = value;
				return this;
			}
		};
		
		this.titleheader11 = function(value) {
			if (value === undefined) {
				return titleheader11_data;
			} else {
				titleheader11_data = value;
				return this;
			}
		};
		
		this.titleheader12 = function(value) {
			if (value === undefined) {
				return titleheader12_data;
			} else {
				titleheader12_data = value;
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
		
		this.titleheader6sub = function(value) {
			if (value === undefined) {
				return titleheader6sub_data;
			} else {
				titleheader6sub_data = value;
				return this;
			}
		};
		
		this.titleheader7sub = function(value) {
			if (value === undefined) {
				return titleheader7sub_data;
			} else {
				titleheader7sub_data = value;
				return this;
			}
		};
		
		this.titleheader8sub = function(value) {
			if (value === undefined) {
				return titleheader8sub_data;
			} else {
				titleheader8sub_data = value;
				return this;
			}
		};
		
		this.titleheader9sub = function(value) {
			if (value === undefined) {
				return titleheader9sub_data;
			} else {
				titleheader9sub_data = value;
				return this;
			}
		};
		
		this.titleheader10sub = function(value) {
			if (value === undefined) {
				return titleheader10sub_data;
			} else {
				titleheader7sub_data = value;
				return this;
			}
		};
		
		this.titleheader11sub = function(value) {
			if (value === undefined) {
				return titleheader11sub_data;
			} else {
				titleheader11sub_data = value;
				return this;
			}
		};
		
		this.titleheader12sub = function(value) {
			if (value === undefined) {
				return titleheader12sub_data;
			} else {
				titleheader12sub_data = value;
				return this;
			}
		};
		
		this.dim1name = function(value) {
			if (value === undefined) {
				return dim1name_data;
			} else {
				dim1name_data = value;
				return this;
			}
		}
		
		this.dim2name = function(value) {
			if (value === undefined) {
				return dim2name_data;
			} else {
				dim2name_data = value;
				return this;
			}
		}
		
		this.dim3name = function(value) {
			if (value === undefined) {
				return dim3name_data;
			} else {
				dim3name_data = value;
				return this;
			}
		}
		
		this.dim4name = function(value) {
			if (value === undefined) {
				return dim4name_data;
			} else {
				dim4name_data = value;
				return this;
			}
		}
		
		this.dim5name = function(value) {
			if (value === undefined) {
				return dim5name_data;
			} else {
				dim5name_data = value;
				return this;
			}
		}
		
		this.dim6name = function(value) {
			if (value === undefined) {
				return dim6name_data;
			} else {
				dim6name_data = value;
				return this;
			}
		}
		
		this.dim7name = function(value) {
			if (value === undefined) {
				return dim7name_data;
			} else {
				dim7name_data = value;
				return this;
			}
		}
		
		this.dim8name = function(value) {
			if (value === undefined) {
				return dim8name_data;
			} else {
				dim8name_data = value;
				return this;
			}
		}
		
		this.dimstatusname = function(value) {
			if (value === undefined) {
				return dimstatusname_data;
			} else {
				dimstatusname_data = value;
				return this;
			}
		}
		
		this.dimtrendname = function(value) {
			if (value === undefined) {
				return dimtrendname_data;
			} else {
				dimtrendname_data = value;
				return this;
			}
		}
		
		this.dim1size = function(value) {
			if (value === undefined) {
				return dim1size_data;
			} else {
				dim1size_data = value;
				return this;
			}
		}
		
		this.dim2size = function(value) {
			if (value === undefined) {
				return dim2size_data;
			} else {
				dim2size_data = value;
				return this;
			}
		}
		
		this.dim3size = function(value) {
			if (value === undefined) {
				return dim3size_data;
			} else {
				dim3size_data = value;
				return this;
			}
		}
		
		this.dim4size = function(value) {
			if (value === undefined) {
				return dim4size_data;
			} else {
				dim4size_data = value;
				return this;
			}
		}
		
		this.dim5size = function(value) {
			if (value === undefined) {
				return dim5size_data;
			} else {
				dim5size_data = value;
				return this;
			}
		}
		
		this.dim6size = function(value) {
			if (value === undefined) {
				return dim6size_data;
			} else {
				dim6size_data = value;
				return this;
			}
		}
		
		this.dim7size = function(value) {
			if (value === undefined) {
				return dim7size_data;
			} else {
				dim7size_data = value;
				return this;
			}
		}
		
		this.dim8size = function(value) {
			if (value === undefined) {
				return dim8size_data;
			} else {
				dim8size_data = value;
				return this;
			}
		}
		
		this.dim9size = function(value) {
			if (value === undefined) {
				return dim9size_data;
			} else {
				dim9size_data = value;
				return this;
			}
		}
		
		this.dim10size = function(value) {
			if (value === undefined) {
				return dim10size_data;
			} else {
				dim10size_data = value;
				return this;
			}
		}
		
		this.dim11size = function(value) {
			if (value === undefined) {
				return dim11size_data;
			} else {
				dim11size_data = value;
				return this;
			}
		}
		
		this.dim12size = function(value) {
			if (value === undefined) {
				return dim12size_data;
			} else {
				dim12size_data = value;
				return this;
			}
		}
		
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
 
		this.showOnlyStatus = function(value) {
			if (value === undefined) {
				return showOnlyStatus_data;
			} else {
				showOnlyStatus_data = value;
				return this;
			}
		};
		 
		this.dim1visible = function(value) {
			if (value === undefined) {
				return dim1visible_data;
			} else {
				dim1visible_data = value;
				return this;
			}
		};
		 
		this.dim2visible = function(value) {
			if (value === undefined) {
				return dim2visible_data;
			} else {
				dim2visible_data = value;
				return this;
			}
		};
		 
		this.dim3visible = function(value) {
			if (value === undefined) {
				return dim3visible_data;
			} else {
				dim3visible_data = value;
				return this;
			}
		};
		 
		this.dim4visible = function(value) {
			if (value === undefined) {
				return dim4visible_data;
			} else {
				dim4visible_data = value;
				return this;
			}
		};
		 
		this.dim5visible = function(value) {
			if (value === undefined) {
				return dim5visible_data;
			} else {
				dim5visible_data = value;
				return this;
			}
		};
		 
		this.dim6visible = function(value) {
			if (value === undefined) {
				return dim6visible_data;
			} else {
				dim6visible_data = value;
				return this;
			}
		};
		 
		this.dim7visible = function(value) {
			if (value === undefined) {
				return dim7visible_data;
			} else {
				dim7visible_data = value;
				return this;
			}
		};
		 
		this.dim8visible = function(value) {
			if (value === undefined) {
				return dim8visible_data;
			} else {
				dim8visible_data = value;
				return this;
			}
		};
		 
		this.dim8visible = function(value) {
			if (value === undefined) {
				return dim8visible_data;
			} else {
				dim8visible_data = value;
				return this;
			}
		};
		
		this.dimstvisible = function(value) {
			if (value === undefined) {
				return dimstvisible_data;
			} else {
				dimstvisible_data = value;
				return this;
			}
		};
		
		this.showBarChart = function(value) {
			if (value === undefined) {
				return showbarchart_data;
			} else {
				showbarchart_data = value;
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
