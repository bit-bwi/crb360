define(["sap/designstudio/sdk/component", "css!../css/component.css"], function(Component, css) {
	Component.subclass("ch.bit.crb360.vmprocurementtable.vmprocurementtable", function() {

	/***********************************************************************/
	/****** ch.bit.crb360.vmprocurementtable      v 1.1.0.0.20190612 *******/
	/***********************************************************************/
		
		var that = this;
	    var dim1pos = undefined;
	    var dim1bpos = undefined;
	    var dim1cpos = undefined;
	    var dim1dpos = undefined;
	    var dim2pos = undefined;
	    var dim3pos = undefined;
	    var dim4pos = undefined;
	    var dim5pos = undefined;
	    var dim6pos = undefined;
	    var dim7pos = undefined;
	    var dim8pos = undefined;
	    var dim9pos = undefined;
	    var dim10pos = undefined;
	    var dim11pos = undefined;
	    var dim2extrapos = undefined;
	    var dim3extrapos = undefined;
	    var dim4extrapos = undefined;
	    var dim5extrapos = undefined;
	    var dim6extrapos = undefined;
	    var dim7extrapos = undefined;
	    var dim8extrapos = undefined;
	    var dim9extrapos = undefined;
	    var dim10extrapos = undefined;
	    var dim11extrapos = undefined;
	    var dim1typ = undefined;
	    var dim1btyp = undefined;
	    var dim1ctyp = undefined;
	    var dim2typ = undefined;
	    var dim3typ = undefined;
	    var dim4typ = undefined;
	    var dim5typ = undefined;
	    var dim6typ = undefined;
	    var dim7typ = undefined;
	    var dim8typ = undefined;
	    var dim9typ = undefined;
	    var dim10typ = undefined;
	    var dim11typ = undefined;
	    
		var jqTable;
		
		this.init = function() {
			this.$().addClass("TableFrame");
		};
		
		this.afterUpdate = function() {			
			var datDim1 = 0;
			var datDim2 = 0;
			var datDim3 = 0;
			var datKey = "";
			var datText = "";
			
			that.$().empty();
			
			if (data_data && data_data.formattedData && data_data.data.length > 0) {
				var htmltemp = "";
				var datMembertxt = "";
				var datMemberSelection = "";
				var datLevel = "0"
				var defCSS = "";
				var defLevel = 0;
				var defValue = 0;
				var defHeader = [];
				var defScrollCSS = "ScrollTableFrame";
				var html = "";
				
				if (	titleheader1_data != "" || titleheader2_data != "" || titleheader3_data != "" || titleheader4_data != "" || titleheader5_data != "" || 
						titleheader1sub_data != "" || titleheader2sub_data != "" || titleheader3sub_data != "" || titleheader4sub_data != "" || titleheader5sub_data != "") {	
					
					// Schreibt Header Überschriften
					html +=	"<div class=\"FixedTableFrame\">";
					html +=		"<div id=\"iktscroll\">";
					html += 		"<table class=\"TableGrid\" cellspacing=\"0px\" width=\"100%\" border=\"0\">";
					html +=				"<thead>"; // Für Drucklösung relevant
					html += 				"<tr>";
					html +=						"<td width=\""+ dim1size_data +"%\" align=\"left\">" + titleheader1_data + "</td>";
					html +=						"<td width=\""+ dim2size_data +"%\" align=\"left\">" + titleheader2_data + "</td>";
					html +=						"<td width=\""+ dim3size_data +"%\" align=\"left\">" + titleheader3_data + "</td>";
					html +=						"<td width=\""+ dim4size_data +"%\" align=\"left\">" + titleheader4_data + "</td>";
					html +=						"<td width=\""+ dim5size_data +"%\" align=\"left\">" + titleheader5_data + "</td>";
					html +=						"<td width=\""+ dim6size_data +"%\" align=\"left\">" + titleheader6_data + "</td>";
					html +=						"<td width=\""+ dim7size_data +"%\" align=\"left\">" + titleheader7_data + "</td>";
					html +=						"<td width=\""+ dim8size_data +"%\" align=\"left\">" + titleheader8_data + "</td>";
					html +=						"<td width=\""+ dim9size_data +"%\" align=\"left\">" + titleheader9_data + "</td>";
					html +=						"<td width=\""+ dim10size_data +"%\" align=\"left\">" + titleheader10_data + "</td>";
					html +=						"<td width=\""+ dim11size_data +"%\" align=\"left\">" + titleheader11_data + "</td>";
					html +=					"</tr>";
					html +=	    			"<tr>";
					html +=						"<td align=\"left\">" + titleheader1sub_data + "</td>";
					html +=						"<td align=\"left\">" + titleheader2sub_data + "</td>";
					html +=						"<td align=\"left\">" + titleheader3sub_data + "</td>";
					html +=						"<td align=\"left\">" + titleheader4sub_data + "</td>";
					html +=						"<td align=\"left\">" + titleheader5sub_data + "</td>";
					html +=						"<td align=\"left\">" + titleheader6sub_data + "</td>";
					html +=						"<td align=\"left\">" + titleheader7sub_data + "</td>";
					html +=						"<td align=\"left\">" + titleheader8sub_data + "</td>";
					html +=						"<td align=\"left\">" + titleheader9sub_data + "</td>";
					html +=						"<td align=\"left\">" + titleheader10sub_data + "</td>";
					html +=						"<td align=\"left\">" + titleheader11sub_data + "</td>";
					html +=					"</tr>";
					html +=	    			"<tr>";
					html +=						"<td class=\"CellBorder\" align=\"left\">" + titleheader1sub2_data + "</td>";
					html +=						"<td class=\"CellBorder\" align=\"left\">" + titleheader2sub2_data + "</td>";
					html +=						"<td class=\"CellBorder\" align=\"left\">" + titleheader3sub2_data + "</td>";
					html +=						"<td class=\"CellBorder\" align=\"left\">" + titleheader4sub2_data + "</td>";
					html +=						"<td class=\"CellBorder\" align=\"left\">" + titleheader5sub2_data + "</td>";
					html +=						"<td class=\"CellBorder\" align=\"left\">" + titleheader6sub2_data + "</td>";
					html +=						"<td class=\"CellBorder\" align=\"left\">" + titleheader7sub2_data + "</td>";
					html +=						"<td class=\"CellBorder\" align=\"left\">" + titleheader8sub2_data + "</td>";
					html +=						"<td class=\"CellBorder\" align=\"left\">" + titleheader9sub2_data + "</td>";
					html +=						"<td class=\"CellBorder\" align=\"left\">" + titleheader10sub2_data + "</td>";
					html +=						"<td class=\"CellBorder\" align=\"left\">" + titleheader11sub2_data + "</td>";
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
					case dim1nameb_data:
						dim1bpos = idrows;
						dim1btyp = 'd';
						break;
					case dim1namec_data:
						dim1cpos = idrows;
						dim1ctyp = 'd';
						break;
					case dim1named_data:
						dim1dpos = idrows;
						dim1dtyp = 'd';
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
					case dim9name_data:
						dim9pos = idrows;
						dim9typ = 'd';
						break;
					case dim10name_data:
						dim10pos = idrows;
						dim10typ = 'd';
						break;
					case dim11name_data:
						dim11pos = idrows;
						dim11typ = 'd';
						break;
					case dim2extraname_data:
						dim2extrapos = idrows;
						break;
					case dim3extraname_data:
						dim3extrapos = idrows;
						break;
					case dim4extraname_data:
						dim4extrapos = idrows;
						break;
					case dim5extraname_data:
						dim5extrapos = idrows;
						break;
					case dim6extraname_data:
						dim6extrapos = idrows;
						break;
					case dim7extraname_data:
						dim7extrapos = idrows;
						break;
					case dim8extraname_data:
						dim8extrapos = idrows;
						break;
					case dim9extraname_data:
						dim9extrapos = idrows;
						break;
					case dim10extraname_data:
						dim10extrapos = idrows;
						break;
					case dim11extraname_data:
						dim11extrapos = idrows;
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
					case dim1nameb_data:
						dim1bpos = idrows;
						dim1btyp = 'f';
						break;
					case dim1namec_data:
						dim1cpos = idrows;
						dim1ctyp = 'f';
						break;
					case dim1named_data:
						dim1dpos = idrows;
						dim1dtyp = 'f';
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
					case dim9name_data:
						dim9pos = idrows;
						dim9typ = 'f';
						break;
					case dim10name_data:
						dim10pos = idrows;
						dim10typ = 'f';
						break;
					case dim11name_data:
						dim11pos = idrows;
						dim11typ = 'f';
						break;
					}
				}
				
				var facts = {
						dim: [dim1name_data,  dim2name_data,dim3name_data, dim4name_data, dim5name_data, dim6name_data, dim7name_data, dim8name_data, dim9name_data, dim10name_data, dim11name_data],
						extra: [undefined, dim2extrapos, dim3extrapos, dim4extrapos, dim5extrapos, dim6extrapos, dim7extrapos, dim8extrapos, dim9extrapos, dim10extrapos, dim11extrapos],
						typ: [dim1typ, dim2typ, dim3typ, dim4typ, dim5typ, dim6typ, dim7typ, dim8typ, dim9typ, dim10typ, dim11typ],
						pos: [dim1pos, dim2pos, dim3pos, dim4pos, dim5pos, dim6pos, dim7pos, dim8pos, dim9pos, dim10pos, dim11pos],
						size: [dim1size_data, dim2size_data, dim3size_data, dim4size_data, dim5size_data, dim6size_data, dim7size_data, dim8size_data, dim9size_data, dim10size_data, dim11size_data]
				};

				var factvalues = [];
				for (var irows = 0; irows < facts.dim.length; irows++) {
					if (facts.typ[irows] == 'f') {
						var factpos = 0;
						for (var sirows = 0; sirows < data_data.dimensions[0].members.length; sirows++) {
							if (data_data.dimensions[0].members[sirows].key == facts.dim[irows]) {
								factpos = sirows;
							}
						}
						
						var tmpfct = [];
						var rowc = 0;
						for (var dirows = 0; dirows < data_data.tuples.length; dirows++) {
							if (data_data.tuples[dirows][0] == factpos) {
								tmpfct.push(dirows);
							}
						} 
						factvalues[facts.pos[irows]] = tmpfct;
					}
				}

				var hier = {
						dim: [dim1name_data, dim1nameb_data],
						typ: [dim1typ, dim1btyp, dim1ctyp],
						pos: [dim1pos, dim1bpos, dim1cpos],
						size: [dim1size_data, dim1size_data, dim1size_data]
				};	
				
				// write it to a HTML statement
				var lastdim1 = undefined;
				var newdim1 = undefined;
				var lastdim1b = undefined;
				var newdim1b = undefined;
				var lastdim1c = undefined;
				var newdim1c = undefined;
				
			    for (var irows = 0; irows < data_data.axis_rows.length; irows++) {
			    	htmltemp += "<tr>";	
			    	newdim1 = funGetDimData(data_data, dim1size_data, dim1pos, irows, "0");
			    	newdim1b = funGetDimData(data_data, dim1size_data, dim1bpos, irows, "0");
			    	newdim1c = funGetDimData(data_data, dim1size_data, dim1cpos, irows, "0");
			    	dim1typ = funGetDimTyp(data_data, dim1pos, irows);
			    	dim1btyp = funGetDimTyp(data_data, dim1bpos, irows);
			    	dim1ctyp = funGetDimTyp(data_data, dim1cpos, irows);

			    	var typ = "";
			    	var lvl = "";
			    	if (conditionactive_data) {
			    		if (dim1typ == "RESULT") { 
			    			typ = "ca";
			    			lvl = "1";
			    		} else if (lastdim1b != newdim1b) {
			    			typ = "cb";
			    			lvl = "2";
			    		} else if (lastdim1c != newdim1c) {
			    			typ = "cc";
			    			lvl = "3";
			    		} else {
			    			typ = "cd";
			    			lvl = "4";
			    		}
			    	} else {
			    		if (dim1typ == "RESULT") {
			    			typ = "a";
			    			lvl = "1";
			    		} else  if (dim1btyp == "RESULT") {
			    			typ = "b";
			    			lvl = "2";
			    		} else if (dim1ctyp == "RESULT") {
			    			typ = "c";
			    			lvl = "3";
			    		} else {
			    			typ = "d";
			    			lvl = "4";
			    		}
			    	}
		    		
		    		for (var dcol = 0; dcol <= facts.dim.length; dcol ++) {
		    			if (dcol == 0) {
		    				switch(typ) {
		    				case "ca" :
		    					htmltemp += "<td width=\""+ facts.size[dcol] +"%\" style=\"width: "+ facts.size[dcol] +"%;\" class=\"CellBorder\"><b>" + funGetDimHierData(data_data, hier.size[dcol], dim1pos, irows, "1") + "</b></td>";
		    					lastdim1 = newdim1;
		    					break;
		    				case "cb" :
		    					if (lastdim1 != newdim1) {
		    						htmltemp += "<td colspan=\"10\" class=\"CellBorder\"><b>" + funGetDimHierData(data_data, hier.size[dcol], dim1pos, irows, "2") + "</b></td></tr><tr>";
		    						lastdim1 = newdim1;
		    					}
		    					htmltemp += "<td width=\""+ facts.size[dcol] +"%\" style=\"width: "+ facts.size[dcol] +"%;\" class=\"CellBorder\">" + funGetDimHierData(data_data, hier.size[dcol], dim1bpos, irows, "3") + "</td>";
		    					lastdim1b = newdim1b;
		    					break;
		    				case "cc" :
		    					htmltemp += "<td width=\""+ facts.size[dcol] +"%\" style=\"width: "+ facts.size[dcol] +"%;\" class=\"CellBorder\">" + funGetDimHierData(data_data, hier.size[dcol], dim1cpos, irows, "4") + funGetDimHierData(data_data, hier.size[dcol], dim1dpos, irows, "4") + "</td>";
		    					lastdim1c = newdim1c;
		    					break;
		    				case "a" :
		    					htmltemp += "<td width=\""+ facts.size[dcol] +"%\" style=\"width: "+ facts.size[dcol] +"%;\" class=\"CellBorder\"><b>" + funGetDimHierData(data_data, hier.size[dcol], dim1pos, irows, "1") + "</b></td>";
		    					lastdim1 = newdim1;
		    					break;   					
		    				case "b" :
		    					htmltemp += "<td width=\""+ facts.size[dcol] +"%\" style=\"width: "+ facts.size[dcol] +"%;\" class=\"CellBorder\"><b>" + funGetDimHierData(data_data, hier.size[dcol], dim1pos, irows, "2") + "</b></td>";
		    					lastdim1b = newdim1b;
		    					break;
		    				case "c" : 
		    					htmltemp += "<td width=\""+ facts.size[dcol] +"%\" style=\"width: "+ facts.size[dcol] +"%;\" class=\"CellBorder\">" + funGetDimHierData(data_data, hier.size[dcol], dim1bpos, irows, "3") + "</td>";
		    					lastdim1c = newdim1c;
		    					break;
		    				default :
		    					htmltemp += "<td width=\""+ facts.size[dcol] +"%\" style=\"width: "+ facts.size[dcol] +"%;\" class=\"CellBorder\">" + funGetDimHierData(data_data, hier.size[dcol], dim1cpos, irows, "4") + funGetDimHierData(data_data, hier.size[dcol], dim1dpos, irows, "4") + "</td>";
	    						lastdim1c = newdim1c;
		    					break;
		    				}
		    			} else {
		    				if (facts.dim[dcol] != undefined && facts.dim[dcol] != "") {
		    					if ((facts.typ[dcol] != undefined && facts.typ[dcol] == 'd') && (lvl == "1" || lvl == "2")) {
	    							htmltemp += "<td width=\""+ facts.size[dcol] +"%\" style=\"width: "+ facts.size[dcol] +"%;\" class=\"CellBorder\"><b>" + funGetDimData(data_data, facts.size[dcol], facts.pos[dcol], irows, lvl) + "</b></td>";
		    					} else if (facts.typ[dcol] != undefined && facts.typ[dcol] == 'd') {
		    						if (facts.extra[dcol]) {
		    							if (funGetDimKey(data_data, facts.size[dcol], facts.extra[dcol], irows) === "J") {
		    								htmltemp += "<td width=\""+ facts.size[dcol] +"%\" style=\"width: "+ facts.size[dcol] +"%;\" class=\"CellBorder\">" + funGetDimData(data_data, facts.size[dcol], facts.pos[dcol], irows, "4") + "</td>";
		    							} else if (funGetDimKey(data_data, facts.size[dcol], facts.extra[dcol], irows) === "N") {
		    								htmltemp += "<td width=\""+ facts.size[dcol] +"%\" style=\"width: "+ facts.size[dcol] +"%;\" class=\"CellBorder FactNegativ\"></td>";
		    							} else {
		    								htmltemp += "<td width=\""+ facts.size[dcol] +"%\" style=\"width: "+ facts.size[dcol] +"%;\" class=\"CellBorder\">" + funGetDimData(data_data, facts.size[dcol], facts.pos[dcol], irows, "4") + "</td>";
		    							}
		    						} else {
		    							if (funGetDimKey(data_data, facts.size[dcol], facts.pos[dcol], irows) === "J") {
		    								htmltemp += "<td width=\""+ facts.size[dcol] +"%\" style=\"width: "+ facts.size[dcol] +"%;\" class=\"CellBorder FactPositiv\"></td>";
		    							} else if (funGetDimKey(data_data, facts.size[dcol], facts.pos[dcol], irows) === "N") {
		    								htmltemp += "<td width=\""+ facts.size[dcol] +"%\" style=\"width: "+ facts.size[dcol] +"%;\" class=\"CellBorder FactNegativ\"></td>";
		    							} else {
		    								htmltemp += "<td width=\""+ facts.size[dcol] +"%\" style=\"width: "+ facts.size[dcol] +"%;\" class=\"CellBorder\">" + funGetDimData(data_data, facts.size[dcol], facts.pos[dcol], irows, "4") + "</td>";
		    							}
		    						}
		    					} else if ((facts.typ[dcol] != undefined && facts.typ[dcol] == 'f') && (lvl == "1" || lvl == "2")) {
		    						htmltemp += "<td width=\""+ facts.size[dcol] +"%\" style=\"width: "+ facts.size[dcol] +"%;\" class=\"CellBorder\"><b>" + funGetFctData(data_data, factvalues, facts.pos[dcol], irows) + "</b></td>";
		    					} else if (facts.typ[dcol] != undefined && facts.typ[dcol] == 'f') {
		    						htmltemp += "<td width=\""+ facts.size[dcol] +"%\" style=\"width: "+ facts.size[dcol] +"%;\" class=\"CellBorder\">" + funGetFctData(data_data, factvalues, facts.pos[dcol], irows) + "</td>";	
		    					}
		    				}
		    			}
	    			}
			    	htmltemp += "</tr>";
			    }
				html += 	htmltemp;
				html += 	"</tbody>";
				html += 	"</table>";
				html +=		"</div>";
			
				that.jqTable = $(html);
				that.$().append(that.jqTable);	
			}
		};

		function funGetDimData (data, dimsize, dimpos, n, typ) {
			var value = "";
			if (dimpos != undefined) {
				if (data.dimensions[dimpos].members[data.axis_rows[n][dimpos]] != undefined ) {
					value += data.dimensions[dimpos].members[data.axis_rows[n][dimpos]].text.replace("#","").replace("Ergebnis","");
				} else {
					value += "";
				}
			}
			
			return value;
		}
		
		function funGetDimKey (data, dimsize, dimpos, n) {
			var value = "";
			if (dimpos != undefined) {
				if (data.dimensions[dimpos].members[data.axis_rows[n][dimpos]] != undefined ) {
					value += data.dimensions[dimpos].members[data.axis_rows[n][dimpos]].key;
				} else {
					value += "";
				}
			}
			
			return value;
		}
		
		function funGetDimHierData (data, dimsize, dimpos, n, typ) {
			var value = "";
			if (typ == "1") {
				value = "";
			} else if (typ == "2") {
				value = ">"+"&nbsp;";
			} else if (typ == "3") {
				value = "&nbsp;"+">"+"&nbsp;";
			} else if (typ == "4") {
				value = "&nbsp;"+"&nbsp;"+"&nbsp;";
			}
			
			if (dimpos != undefined) {
				if (data.dimensions[dimpos].members[data.axis_rows[n][dimpos]] != undefined ) {
					value += data.dimensions[dimpos].members[data.axis_rows[n][dimpos]].text.replace("#","").replace("Ergebnis","");
				} else {
					value += "";
				}
			}
			
			return value;
		}
			
		function funGetFctData (data, factvalues, dimpos, n) {
			var html = "";
			if (factvalues[dimpos] != undefined) {
				html = data.formattedData[factvalues[dimpos][n]].replace("#","").replace("CHF","");	
			}		 
			
			return html;
		}
			
		function funGetDimTyp (data, dimpos, n) {
			var value = '';
			if (data.dimensions[dimpos].members[data.axis_rows[n][dimpos]].type != undefined) {
				value = data.dimensions[dimpos].members[data.axis_rows[n][dimpos]].type;
			}
			
			return value;
		}
		
		// property setter/getter functions
		this.data = function(value) {
			if (value === undefined) {
				return data_data;
			} else {
				data_data = value;
				return this;
			}
		};

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
				titleheader10sub_data = value;
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


		this.titleheader1sub2 = function(value) {
			if (value === undefined) {
				return titleheader1sub2_data;
			} else {
				titleheader1sub2_data = value;
				return this;
			}
		};
		
		this.titleheader2sub2 = function(value) {
			if (value === undefined) {
				return titleheader2sub2_data;
			} else {
				titleheader2sub2_data = value;
				return this;
			}
		};
		
		this.titleheader3sub2 = function(value) {
			if (value === undefined) {
				return titleheader3sub2_data;
			} else {
				titleheader3sub2_data = value;
				return this;
			}
		};
		
		this.titleheader4sub2 = function(value) {
			if (value === undefined) {
				return titleheader4sub2_data;
			} else {
				titleheader4sub2_data = value;
				return this;
			}
		};
		
		this.titleheader5sub2 = function(value) {
			if (value === undefined) {
				return titleheader5sub2_data;
			} else {
				titleheader5sub2_data = value;
				return this;
			}
		};
		
		this.titleheader6sub2 = function(value) {
			if (value === undefined) {
				return titleheader6sub2_data;
			} else {
				titleheader6sub2_data = value;
				return this;
			}
		};
		
		this.titleheader7sub2 = function(value) {
			if (value === undefined) {
				return titleheader7sub2_data;
			} else {
				titleheader7sub2_data = value;
				return this;
			}
		};
		
		this.titleheader8sub2 = function(value) {
			if (value === undefined) {
				return titleheader8sub2_data;
			} else {
				titleheader8sub2_data = value;
				return this;
			}
		};
		
		this.titleheader9sub2 = function(value) {
			if (value === undefined) {
				return titleheader9sub2_data;
			} else {
				titleheader9sub2_data = value;
				return this;
			}
		};
		
		this.titleheader10sub2 = function(value) {
			if (value === undefined) {
				return titleheader10sub2_data;
			} else {
				titleheader10sub2_data = value;
				return this;
			}
		};
		
		this.titleheader11sub2 = function(value) {
			if (value === undefined) {
				return titleheader11sub2_data;
			} else {
				titleheader11sub2_data = value;
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
		};
		
		this.dim1nameb = function(value) {
			if (value === undefined) {
				return dim1nameb_data;
			} else {
				dim1nameb_data = value;
				return this;
			}
		};
		
		this.dim1namec = function(value) {
			if (value === undefined) {
				return dim1namec_data;
			} else {
				dim1namec_data = value;
				return this;
			}
		};
		
		this.dim1named = function(value) {
			if (value === undefined) {
				return dim1named_data;
			} else {
				dim1named_data = value;
				return this;
			}
		};
		
		this.dim2name = function(value) {
			if (value === undefined) {
				return dim2name_data;
			} else {
				dim2name_data = value;
				return this;
			}
		};
		
		this.dim3name = function(value) {
			if (value === undefined) {
				return dim3name_data;
			} else {
				dim3name_data = value;
				return this;
			}
		};
		
		this.dim4name = function(value) {
			if (value === undefined) {
				return dim4name_data;
			} else {
				dim4name_data = value;
				return this;
			}
		};
		
		this.dim5name = function(value) {
			if (value === undefined) {
				return dim5name_data;
			} else {
				dim5name_data = value;
				return this;
			}
		};
		
		this.dim6name = function(value) {
			if (value === undefined) {
				return dim6name_data;
			} else {
				dim6name_data = value;
				return this;
			}
		};
		
		this.dim7name = function(value) {
			if (value === undefined) {
				return dim7name_data;
			} else {
				dim7name_data = value;
				return this;
			}
		};
		
		this.dim8name = function(value) {
			if (value === undefined) {
				return dim8name_data;
			} else {
				dim8name_data = value;
				return this;
			}
		};
		
		this.dim9name = function(value) {
			if (value === undefined) {
				return dim9name_data;
			} else {
				dim9name_data = value;
				return this;
			}
		};
		
		this.dim10name = function(value) {
			if (value === undefined) {
				return dim10name_data;
			} else {
				dim10name_data = value;
				return this;
			}
		};
		
		this.dim11name = function(value) {
			if (value === undefined) {
				return dim11name_data;
			} else {
				dim11name_data = value;
				return this;
			}
		};
		
		this.dim2extraname = function(value) {
			if (value === undefined) {
				return dim2extraname_data;
			} else {
				dim2extraname_data = value;
				return this;
			}
		};
		
		this.dim3extraname = function(value) {
			if (value === undefined) {
				return dim3extraname_data;
			} else {
				dim3extraname_data = value;
				return this;
			}
		};
		
		this.dim4extraname = function(value) {
			if (value === undefined) {
				return dim4extraname_data;
			} else {
				dim4extraname_data = value;
				return this;
			}
		};
		
		this.dim5extraname = function(value) {
			if (value === undefined) {
				return dim5extraname_data;
			} else {
				dim5extraname_data = value;
				return this;
			}
		};
		
		this.dim6extraname = function(value) {
			if (value === undefined) {
				return dim6extraname_data;
			} else {
				dim6extraname_data = value;
				return this;
			}
		};
		
		this.dim7extraname = function(value) {
			if (value === undefined) {
				return dim7extraname_data;
			} else {
				dim7extraname_data = value;
				return this;
			}
		};
		
		this.dim8extraname = function(value) {
			if (value === undefined) {
				return dim8extraname_data;
			} else {
				dim8extraname_data = value;
				return this;
			}
		};
		
		this.dim9extraname = function(value) {
			if (value === undefined) {
				return dim9extraname_data;
			} else {
				dim9extraname_data = value;
				return this;
			}
		};
		
		this.dim10extraname = function(value) {
			if (value === undefined) {
				return dim10extraname_data;
			} else {
				dim10extraname_data = value;
				return this;
			}
		};
		
		this.dim11extraname = function(value) {
			if (value === undefined) {
				return dim11extraname_data;
			} else {
				dim11extraname_data = value;
				return this;
			}
		};

		this.dim1size = function(value) {
			if (value === undefined) {
				return dim1size_data;
			} else {
				dim1size_data = value;
				return this;
			}
		};
		
		this.dim2size = function(value) {
			if (value === undefined) {
				return dim2size_data;
			} else {
				dim2size_data = value;
				return this;
			}
		};
		
		this.dim3size = function(value) {
			if (value === undefined) {
				return dim3size_data;
			} else {
				dim3size_data = value;
				return this;
			}
		};
		
		this.dim4size = function(value) {
			if (value === undefined) {
				return dim4size_data;
			} else {
				dim4size_data = value;
				return this;
			}
		};
		
		this.dim5size = function(value) {
			if (value === undefined) {
				return dim5size_data;
			} else {
				dim5size_data = value;
				return this;
			}
		};
		
		this.dim6size = function(value) {
			if (value === undefined) {
				return dim6size_data;
			} else {
				dim6size_data = value;
				return this;
			}
		};
		
		this.dim7size = function(value) {
			if (value === undefined) {
				return dim7size_data;
			} else {
				dim7size_data = value;
				return this;
			}
		};
		
		this.dim8size = function(value) {
			if (value === undefined) {
				return dim8size_data;
			} else {
				dim8size_data = value;
				return this;
			}
		};
		
		this.dim9size = function(value) {
			if (value === undefined) {
				return dim9size_data;
			} else {
				dim9size_data = value;
				return this;
			}
		};
		
		this.dim10size = function(value) {
			if (value === undefined) {
				return dim10size_data;
			} else {
				dim10size_data = value;
				return this;
			}
		};
		
		this.dim11size = function(value) {
			if (value === undefined) {
				return dim11size_data;
			} else {
				dim11size_data = value;
				return this;
			}
		};
		
		this.conditionactive = function(value) {
			if (value === undefined) {
				return conditionactive_data;
			} else {
				conditionactive_data = value;
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
