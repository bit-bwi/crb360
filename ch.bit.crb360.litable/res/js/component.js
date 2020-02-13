define(["sap/designstudio/sdk/component", "css!../css/component.css"], function(Component, css) {
	Component.subclass("ch.bit.crb360.litable.LITable", function() {
		/*//Component.subclass("ch.bit.crb360.litable.LITable", function() {
// sap.designstudio.sdk.Component.subclass("ch.bit.crb360.litable.LITable", function() {	*/
	
	/***********************************************************************/
	/********* ch.bit.crb360.litable        v 1.1.0.0.20190612 *************/
	/***********************************************************************/
	
	var CSS_CLASS_DIV = "sapzencrosstab-TableDiv";
	var CSS_CLASS_TABLE = "sapzencrosstab-Crosstab";
	var CSS_CLASS_TR_HEADER = 'sapzencrosstab-HeaderRow sapzencrosstab-DimensionHeaderArea';
	var CSS_CLASS_TD_HEADER = "sapzencrosstab-HeaderCellFirstInRow sapzencrosstab-HeaderCellDefault";
	var CSS_CLASS_TD_DEFAULT = "sapzencrosstab-DataCellDefault";
	var column1_data = null;
	var column2_data = null;
	var column3_data = null;
	var column4_data = null;
	var column5_data = null;
	var column6_data = null;
	var meta_data = null;
	var defEinheitMember = null;
	var dimDimension0 = null;
	var dimDimension1 = null;
	var dimDimension2 = null;
	var couCols = 2;
	var textyes_data = null;
	var textno_data = null;
	var textfull_data = null;
	var textpartial_data = null;
	var textq_data = null;
	
	this.init = function() {
		this.$().addClass(CSS_CLASS_DIV);
//		this.$().css("overflow-y", "scroll");
		this.jqTable = $("<table class=\"" + CSS_CLASS_TABLE + "\" width=\"100%\" style=\"padding-right: 19px;\"/>");
//		this.jqTable = $("<table class=\"" + CSS_CLASS_TABLE + "\" width=\"100%\"/>");
		this.$().append(this.jqTable);
	};

	this.afterUpdate = function() {
		if (textyes_data == '') {textyes_data = 'Ja'; }
		if (textno_data == '') {textno_data = 'Nein'; }
		if (textfull_data == '') {textfull_data = 'Voll'; }
		if (textpartial_data == '') {textpartial_data = 'Teil'; }
		if (textq_data == '') {textq_data = 'Q'; }
		
		this.jqTable.empty();
		var column_data = getAnySetColumn_Data();
		if (column_data) {
			var jqHeader = $("<thead/>").appendTo(this.jqTable);
			var jqHeaderRow = $("<tr class=\"" + CSS_CLASS_TR_HEADER + "\"/>").appendTo(jqHeader);
			jqHeaderRow.append($("<td class=\"" + CSS_CLASS_TD_HEADER + "\" width=\"30%\" style=\"min-width: 480px;\"/>"));
			$("<td class=\"" + CSS_CLASS_TD_HEADER + "\" width=\"10%\" style=\"min-width: 100px;\">" + texteinheitli_data + "</td>").appendTo(jqHeaderRow);
			appendColumnHeaderCell(jqHeaderRow, column1_data);
			appendColumnHeaderCell(jqHeaderRow, column2_data);
			appendColumnHeaderCell(jqHeaderRow, column3_data);
			appendColumnHeaderCell(jqHeaderRow, column4_data);
			appendColumnHeaderCell(jqHeaderRow, column5_data);
			appendColumnHeaderCell(jqHeaderRow, column6_data);

			this.scDiv = $( "<div style=\"overflow-y: scroll; height: 93%;\">");
			this.$().append(this.scDiv);
			this.scTable = $("<table class=\"" + CSS_CLASS_TABLE + "\" width=\"100%\"/>").appendTo(this.scDiv);
			
			for (var i = 0; i < column_data.formattedData.length; i++) {
				var jqRow3 = $("<tr/>");
				this.scTable.append(jqRow3);
				
				var jqRow2 = $("<tr/>");
				this.scTable.append(jqRow2);
				
				var jqRow = $("<tr/>");
				this.scTable.append(jqRow);
				
				appendRowHeaderCell(jqRow, jqRow2, jqRow3, i);
				appendCell(jqRow, column1_data, i, false);
				appendCell(jqRow, column2_data, i, false);
				appendCell(jqRow, column3_data, i, false);
				appendCell(jqRow, column4_data, i, false);
				appendCell(jqRow, column5_data, i, false);
				appendCell(jqRow, column6_data, i, true);
			}
		}
	};

	function appendColumnHeaderCell(jqHeaderRow, column_data) {
		if (column_data && column_data.formattedData) {
			var headerText = "";
			for (var i = 0; i < column_data.selection.length; i++) {
				var selectionIndex = column_data.selection[i];
				if (selectionIndex != -1) {
					headerText += " " + meta_data.dimensions[i].members[selectionIndex].text;
				}
			}
			$("<td class=\"" + CSS_CLASS_TD_HEADER + "\" width=\"10%\">" + headerText + "</td>").appendTo(jqHeaderRow);
		}
	}

	function appendCell(jqRow, column_data, i, isStatus) {
		if (isStatus) {
			
			var defCSS = "";
			var defCSSValue = "";
			
			if (column_data.data[i] == 1) {
				defCSS = "isPositivTL";
			} else if (column_data.data[i] == 2) {
				defCSS = "isNeutralTL";
			} else if (column_data.data[i] == 3) {
				defCSS = "isNegativTL";
			}
			
			jqRow.append($("<td class=\"" + CSS_CLASS_TD_DEFAULT + " " + defCSS + "\" width=\"10%\">" + defCSSValue + "</td>"));	
			
		} else {
		
			if (column_data && column_data.formattedData && (i < column_data.formattedData.length)) {
				
				for (var d = 0; d < data_data.dimensions.length; d++) {
					if (data_data.dimensions[d].key == 'JECLILGKL') {
						dimDimension0 = d;
					} else if (data_data.dimensions[d].key == 'JECLIZIEL') {
						dimDimension1 = d;
					} else if (data_data.dimensions[d].key == 'JECLIMG') {
						dimDimension2 = d;
					} 
				}
				
				
				var dimMember1 = data_data.axis_rows[i][dimDimension1];
				var dimMember2 = data_data.axis_rows[i][dimDimension2];
				
				if (defEinheitMember == null) {
					for (var ei = 0; ei < data_data.dimensions[dimDimension2].attributes.length; ei++) {
						if (data_data.dimensions[dimDimension2].attributes[ei].key == 'JECLIEFOR') {
							defEinheitMember = ei;
							ei = data_data.dimensions[dimDimension2].attributes.length;
						}
					}
				}
				
				var dimEinheit = data_data.dimensions[dimDimension2].members[dimMember2].attributeMembers[defEinheitMember].key;
				var dimValue = column_data.data[i];
				var dimValueT = "";
				var cellText = "";
	
				if (dimValue != null) {
					if (dimEinheit == 'DATE') {
							var datDate = ExcelDateToJSDate(dimValue);
							var datDay = datDate.getDate();
							var datMonth = datDate.getMonth() + 1;
			
							cellText = datDay + "." + datMonth + ".";
					} else if (dimEinheit == 'CAT1') {
						if (dimValue == 1) {
							cellText = textyes_data;
						} else {
							cellText = textno_data;
						}
					} else if (dimEinheit == 'CAT2') {
						if (dimValue == 1) {
							cellText = textpartial_data;
						} else {
							cellText = textfull_data;
						}
					} else if (dimEinheit == 'QUART') {
							cellText = textq_data + dimValue;
					} else {
	
						var datDecimalsLength = dimEinheit.length;
						var datDecimals = dimEinheit.substring(datDecimalsLength-4,datDecimalsLength-3);
						var datScaling = 1;
						if (datDecimalsLength > 7) {
							var datScalingText = dimEinheit.substring(3,6);
							if (datScalingText == 'TSD') {
								datScaling = 1000;
							} else if (datScalingText == 'MIO') {
								datScaling = 1000000;
							} else if (datScalingText == 'MRD') {
								datScaling = 1000000000;
							}
						
							dimValue = dimValue / datScaling;
							dimValueT = dimValue.toFixed(6);
							dimValue = Number(dimValueT);
							
						}
						
						var datPart = dimValue.toString().split(".");
						datPart[0] = numberWithCommas(datPart[0]);
						
						var datPreValue = dimValue.toFixed(datDecimals).split(".");
						datPart[1] = datPreValue[1];
						
						if (datDecimals == "0" || dimEinheit == "") {
							cellText = datPart[0];
						} else {
							cellText = datPart.join(".");						
						}
					}
				} else {
					cellText = "";
				}
				
				jqRow.append($("<td class=\"" + CSS_CLASS_TD_DEFAULT + "\" width=\"10%\">" + cellText + "</td>"));
			}
		}
	}

	function numberWithCommas(x) {
	    var parts = x.toString().split(".");
	    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "'");
	    return parts.join(".");
	}

	function ExcelDateToJSDate(serial) {
		   var utc_days  = Math.floor(serial - 25569);
		   var utc_value = utc_days * 86400;                                        
		   var date_info = new Date(utc_value * 1000);

		   var fractional_day = serial - Math.floor(serial) + 0.0000001;

		   var total_seconds = Math.floor(86400 * fractional_day);

		   var seconds = total_seconds % 60;

		   total_seconds -= seconds;

		   var hours = Math.floor(total_seconds / (60 * 60));
		   var minutes = Math.floor(total_seconds / 60) % 60;

		   return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);
	}
	
	function appendRowHeaderCell(jqRow, jqRow2, jqRow3, i) {
		var column_data = getAnySetColumn_Data();
		if (meta_data && column_data && column_data.formattedData && (i < column_data.tuples.length)) {
			var tuple = column_data.tuples[i];
			var headerText = "";
			var datLGPrev = "";
			var datZielPrev = "";
			var datMGPrev = "";
			var datPreValueHeaderPrev = "";
			for (var j = 0; j < tuple.length; j++) {
				if (column_data.selection[j] == -1) {
					if (couCols == 2) {
						if (column1_data != "" && column1_data != undefined){
							couCols++;
						}
						if (column2_data != "" && column2_data != undefined){
							couCols++;
						}
						if (column3_data != "" && column3_data != undefined){
							couCols++;
						}
						if (column4_data != "" && column4_data != undefined){
							couCols++;
						}
						if (column5_data != "" && column5_data != undefined){
							couCols++;
						}
						if (column6_data != "" && column6_data != undefined){
							couCols++;
						}
					}
					
					if (i != 0) {
						var tuplePrev = column_data.tuples[i-1];
//						datPreValueHeaderPrev = meta_data.dimensions[j].members[tuplePrev[j]].text.split("|");						
					}
					
					if (meta_data.dimensions[j].key == 'JECLILGKL') {
						var datLG = meta_data.dimensions[j].members[tuple[j]].text.split("|");
						if (i != 0) {
							datLGPrev = meta_data.dimensions[j].members[tuplePrev[j]].text.split("|");
						}
						
						if (datLGPrev[0] != datLG[0]) {
							headerText = " " + datLG[0].substring(5,8) + ": " + datLG[1];
							jqRow3.append($("<td class=\"" + CSS_CLASS_TD_HEADER + "\" colspan=\"" + couCols + "\"><b>" + headerText + "</b></td><td></td>"));
						}
						
					} else if (meta_data.dimensions[j].key == 'JECLIZIEL') {
						var datZiel = meta_data.dimensions[j].members[tuple[j]].text.split("|");
						if (i != 0) {
							datZielPrev = meta_data.dimensions[j].members[tuplePrev[j]].text.split("|");
						}
						
						if (datZielPrev[0] != datZiel[0]) {
							headerText = "&nbsp;" +"&nbsp;" +"&nbsp;" + "&nbsp;" + datZiel[0] + ": " + datZiel[1];
							jqRow2.append($("<td class=\"" + CSS_CLASS_TD_HEADER + "\" colspan=\"" + couCols + "\"><b>" + headerText + "</b></td><td></td>"));
						}
						
					} else if (meta_data.dimensions[j].key == 'JECLIMG') {
						var datMG = meta_data.dimensions[j].members[tuple[j]].text.split("|");
						var datEinheitLI = data_data.dimensions[j].members[tuple[j]].attributeMembers[2].text
						if (i != 0) {
							datMGPrev = meta_data.dimensions[j].members[tuplePrev[j]].text.split("|");
						}
						
						headerText = "&nbsp;" + "&nbsp;" +"&nbsp;" +"&nbsp;" + "&nbsp;" + "&nbsp;" +"&nbsp; - " + datMG[0] + ": " + datMG[1];
						jqRow.append($("<td class=\"" + CSS_CLASS_TD_HEADER + "\"  width=\"30%\" style=\"min-width: 480px;\">" + headerText + "</td><td class=\"" + CSS_CLASS_TD_HEADER + "\" width=\"10%\" style=\"min-width: 100px; white-space: normal !important;\">" + datEinheitLI + "</td>"));

					}
		
						
					
//					var datPreValueHeader = meta_data.dimensions[j].members[tuple[j]].text.split("|");
//					
//					if (datPreValueHeader[0].length >= 4) {
//						if (datPreValueHeader[0] != datPreValueHeaderPrev[0]) {
//							headerText = " " + datPreValueHeader[0].substring(9,13) + ": " + datPreValueHeader[1];
//							jqRow2.append($("<td class=\"" + CSS_CLASS_TD_HEADER + "\" colspan=\"4\"><b>" + headerText + "</b></td>"));
//						}
//					} else {
//						headerText = "   " + datPreValueHeader[0] + ": " + datPreValueHeader[1];
//						jqRow.append($("<td class=\"" + CSS_CLASS_TD_HEADER + "\">- " + headerText + "</td>"));
//					}
				}
			}
//			headerText = headerText.replace("|", " "); // Delimiter used for multiple presentations
//			jqRow.append($("<td class=\"" + CSS_CLASS_TD_HEADER + "\">" + headerText + "</td>"));
		}
	}

//	function appendRowHeaderCell(jqRow, i) {
//		var column_data = getAnySetColumn_Data();
//		if (meta_data && column_data && column_data.formattedData && (i < column_data.tuples.length)) {
//			var tuple = column_data.tuples[i];
//			var headerText = "";
//			for (var j = 0; j < tuple.length; j++) {
//				if (column_data.selection[j] == -1) {
//					if (i != 0) {
//						var datPreValueHeaderPrev = meta_data.dimensions[j].members[tuple[j]].text.split("|");
//					}
//					var datPreValueHeader = meta_data.dimensions[j].members[tuple[j]].text.split("|");
//					
//					if (datPreValueHeader[0].length < 4) {
//						headerText += " " + datPreValueHeader[0] + ": " + datPreValueHeader[1];
//					} else {
//						headerText += " " + datPreValueHeader[0].substring(9,13) + ": " + datPreValueHeader[1];
//					}
//				}
//			}
//			headerText = headerText.replace("|", " "); // Delimiter used for multiple presentations
//			jqRow.append($("<td class=\"" + CSS_CLASS_TD_HEADER + "\">" + headerText + "</td>"));
//		}
//	}
//	
	function getAnySetColumn_Data() {
		if (column1_data && column1_data.formattedData) {
			return column1_data;
		} else if (column2_data && column2_data.formattedData) {
			return column2_data; 
		} else if (column3_data && column3_data.formattedData) {
			return column3_data;
		} else if (column4_data && column4_data.formattedData) {
			return column4_data;
		} else if (column5_data && column5_data.formattedData) {
			return column5_data;
		} else if (column6_data && column6_data.formattedData) {
			return column6_data;
		}
		return null;
	}

	// called from Additional Properties Sheet JavaScript file

	this.getMetadataAsString = function() {
		return JSON.stringify(this.metadata());
	};

	// property setter/getter functions

	this.column1 = function(value) {
		if (value === undefined) {
			return column1_data;
		} else {
			column1_data = value;
			return this;
		}
	};

	this.column2 = function(value) {
		if (value === undefined) {
			return column2_data;
		} else {
			column2_data = value;
			return this;
		}
	};

	this.column3 = function(value) {
		if (value === undefined) {
			return column3_data;
		} else {
			column3_data = value;
			return this;
		}
	};

	this.column4 = function(value) {
		if (value === undefined) {
			return column4_data;
		} else {
			column4_data = value;
			return this;
		}
	};

	this.column5 = function(value) {
		if (value === undefined) {
			return column5_data;
		} else {
			column5_data = value;
			return this;
		}
	};

	this.column6 = function(value) {
		if (value === undefined) {
			return column6_data;
		} else {
			column6_data = value;
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

	this.textyes = function(value) {
		if (value === undefined) {
			return textyes_data;
		} else {
			textyes_data = value;
			return this;
		}
	};

	this.textno = function(value) {
		if (value === undefined) {
			return textno_data;
		} else {
			textno_data = value;
			return this;
		}
	};

	this.textfull = function(value) {
		if (value === undefined) {
			return textfull_data;
		} else {
			textfull_data = value;
			return this;
		}
	};

	this.textpartial = function(value) {
		if (value === undefined) {
			return textpartial_data;
		} else {
			textpartial_data = value;
			return this;
		}
	};

	this.textq = function(value) {
		if (value === undefined) {
			return textq_data;
		} else {
			textq_data = value;
			return this;
		}
	};

	this.texteinheitli = function(value) {
		if (value === undefined) {
			return texteinheitli_data;
		} else {
			texteinheitli_data = value;
			return this;
		}
	};
	
	
	this.data = function(value) {
		if (value === undefined) {
			return data_data;
		} else {
			data_data = value;
			return this;
		}
	};
});

});
