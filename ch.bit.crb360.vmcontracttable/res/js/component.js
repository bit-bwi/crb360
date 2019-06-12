define(["sap/designstudio/sdk/component", "css!../css/component.css"], function(Component, css) {
	Component.subclass("ch.bit.crb360.vmcontracttable.vmcontracttable", function() {

	/***********************************************************************/
	/********* ch.bit.crb360.vmcontracttable      v 1.1.0.0.20190612 **********/
	/***********************************************************************/
		
		var that = this;
		var titleheader1_data = "";
		var titleheader2_data = "";
		var titleheader3_data = "";
		var titleheader4_data = "";
		var titleheader5_data = "";
		var titleheader6_data = "";
		var titleheader7_data = "";
		var titleheader8_data = "";
		var titleheader1sub_data = "";
		var titleheader2sub_data = "";
		var titleheader3sub_data = "";
		var titleheader4sub_data = "";
		var titleheader5sub_data = "";
		var titleheader6sub_data = "";
		var titleheader7sub_data = "";
		var titleheader8sub_data = "";
		var dim1name_data = "";
		var dim1nameb_data = "";
	    var dim2name_data = "";
	    var dim3name_data = "";
	    var dim4name_data = "";
	    var dim5name_data = "";
	    var dim6name_data = "";
	    var dim7name_data = "";
	    var dim8name_data = "";
	    var dim1pos = undefined;
	    var dim1bpos = undefined;
	    var dim2pos = undefined;
	    var dim3pos = undefined;
	    var dim4pos = undefined;
	    var dim5pos = undefined;
	    var dim6pos = undefined;
	    var dim7pos = undefined;
	    var dim8pos = undefined;
	    var dim1typ = undefined;
	    var dim1btyp = undefined;
	    var dim2typ = undefined;
	    var dim3typ = undefined;
	    var dim4typ = undefined;
	    var dim5typ = undefined;
	    var dim6typ = undefined;
	    var dim7typ = undefined;
	    var dim8typ = undefined;
	    
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
				html +=						"<td width=\""+ dim1size_data +"%\" align=\"left\"><b>" + titleheader1_data + "</b></td>";
				html +=						"<td width=\""+ dim2size_data +"%\" align=\"left\"><b>" + titleheader2_data + "</b></td>";
				html +=						"<td width=\""+ dim3size_data +"%\" align=\"left\"><b>" + titleheader3_data + "</b></td>";
				html +=						"<td width=\""+ dim4size_data +"%\" align=\"left\"><b>" + titleheader4_data + "</b></td>";
				html +=						"<td width=\""+ dim5size_data +"%\" align=\"left\"><b>" + titleheader5_data + "</b></td>";
				html +=						"<td width=\""+ dim6size_data +"%\" align=\"left\"><b>" + titleheader6_data + "</b></td>";
				html +=						"<td width=\""+ dim7size_data +"%\" align=\"left\"><b>" + titleheader7_data + "</b></td>";
				html +=						"<td width=\""+ dim8size_data +"%\" align=\"left\"><b>" + titleheader8_data + "</b></td>";
				html +=					"</tr>";
				html +=	    			"<tr>";
				html +=						"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader1sub_data + "</b></td>";
				html +=						"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader2sub_data + "</b></td>";
				html +=						"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader3sub_data + "</b></td>";
				html +=						"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader4sub_data + "</b></td>";
				html +=						"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader5sub_data + "</b></td>";
				html +=						"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader6sub_data + "</b></td>";
				html +=						"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader7sub_data + "</b></td>";
				html +=						"<td class=\"CellBorder\" align=\"left\"><b>" + titleheader8sub_data + "</b></td>";
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
				}
			}
			
			var facts = {
							dim: [dim1name_data, dim1nameb_data, dim2name_data,dim3name_data, dim4name_data, dim5name_data, dim6name_data, dim7name_data, dim8name_data],
							typ: [dim1typ, dim1btyp, dim2typ, dim3typ, dim4typ, dim5typ, dim6typ, dim7typ, dim8typ],
							pos: [dim1pos, dim1bpos, dim2pos, dim3pos, dim4pos, dim5pos, dim6pos, dim7pos, dim8pos]
						};		

			var factvalues = [];
			var maxvalues = [];
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
					maxvalues[facts.pos[irows]] = funGetMaxValue (data_data, tmpfct);
				}
				
			}
			
			// write it to a HTML statement
			var lastdim1 = undefined;
			var newdim1 = undefined;
			
		    for (var irows = 0; irows < data_data.axis_rows.length; irows++) {
		    	htmltemp += "<tr>";	
		    	newdim1 = funGetDimData(data_data, dim1size_data, dim1pos, irows);
		    	dim1typ = funGetDimTyp(data_data, dim1pos, irows);
		    	dim1btyp = funGetDimTyp(data_data, dim1bpos, irows);

	    		var s = "";
	    		if (dim1typ == "RESULT") {
	    			s = "boldfirst";
	    		} else  if (newdim1 != lastdim1) {
	    			if (dim1btyp != "RESULT") {
	    				s = "normal";
	    			} else {
	    				s = "bold";
	    			}
	    		} else {
	    			s = "normal";
	    		}

		    	if (dim1pos != undefined) {

			    	if (dim1typ == "RESULT") {
			    		htmltemp += funGetHtmlDimData(data_data, dim1size_data, dim1pos, irows, s);
			    	} else if (newdim1 != lastdim1) {
		    			htmltemp += funGetHtmlDimData(data_data, dim1size_data, dim1pos, irows, "boldh");
		    			if (dim1btyp != "RESULT") {
			    			htmltemp += "<td  class=\"CellBorder\"><table width=\"100%\"><tr><td width=\"100%\"><table width=\"100%\"><tr><td width=\"100%\">&nbsp;</td></tr></table></td></tr></table></td><td class=\"CellBorder\"></td><td class=\"CellBorder\">&nbsp;</td><td class=\"CellBorder\"></td><td class=\"CellBorder\"></td><td class=\"CellBorder\"></td><td class=\"CellBorder\"></td>";
			    			htmltemp += "</tr>";
					    	htmltemp += "<tr>";	
		    			   	htmltemp += funGetHtmlDimData(data_data, dim1size_data, dim1bpos, irows, s);
		    			}
			    	} else {
			    		htmltemp += funGetHtmlDimData(data_data, dim1size_data, dim1bpos, irows, s);
			    	}
		    	}
		    	
		    		if (dim2pos != undefined) {
			    		if (dim2typ == 'd') {
			    			htmltemp += funGetHtmlDimData(data_data, dim2size_data, dim2pos, irows, s);
			    		} else if (dim2typ == 'f') {
			    			htmltemp += funGetFctData(data_data, factvalues, dim2size_data, dim2pos, irows, s);
			    		}
			    	}
			    	if (dim3pos != undefined) {
				    	if (dim3typ == 'd') {
			    			htmltemp += funGetHtmlDimData(data_data, dim3size_data, dim3pos, irows, s);
			    		}  else if (dim3typ == 'f') {
			    			htmltemp += funGetFctData(data_data, factvalues, dim3size_data, dim3pos, irows, s);
			    		}
			    	}
			    	if (dim4pos != undefined) {
				    	if (dim4typ == 'd') {
			    			htmltemp += funGetHtmlDimData(data_data, dim4size_data, dim4pos, irows, s);
			    		} else if (dim4typ == 'f') {
			    			htmltemp += funGetFctData(data_data, factvalues, dim4size_data, dim4pos, irows, s);
			    		}
			    	}
			    	if (dim5pos != undefined) {
				    	if (dim5typ == 'd') {
			    			htmltemp += funGetHtmlDimData(data_data, dim5size_data, dim5pos, irows, s);
			    		} else if (dim5typ == 'f') {
//				    			htmltemp += funGetFctData(data_data, factvalues, dim5size_data, dim5pos, irows);
			    			htmltemp += funCreateBar(data_data, factvalues, maxvalues[dim5pos], dim5size_data, dim5pos, irows, s)
			    		}
			    	}
			    	if (dim6pos != undefined) {
				      	if (dim6typ == 'd') {
			    			htmltemp += funGetHtmlDimData(data_data, dim6size_data, dim6pos, irows, s);
			    		}  else if (dim6typ == 'f') {
//				    			htmltemp += funGetFctData(data_data, factvalues, dim6size_data, dim6pos, irows);
			    			htmltemp += funCreateBar(data_data, factvalues, maxvalues[dim6pos], dim6size_data, dim6pos, irows, s)
			    		}
			    	}
			    	if (dim7pos != undefined) {
				    	if (dim7typ == 'd') {
			    			htmltemp += funGetHtmlDimData(data_data, dim7size_data, dim7pos, irows, s);
				    	} else if (dim7typ == 'f') {
			    			htmltemp += funGetFctData(data_data, factvalues, dim7size_data, dim7pos, irows, s);
			    		}
			    	}
			    	if (dim8pos != undefined) {
				    	if (dim8typ == 'd') {
			    			htmltemp += funGetHtmlDimData(data_data, dim8size_data, dim8pos, irows, s);
			    		}  else if (dim8typ == 'f') {
			    			htmltemp += funGetFctData(data_data, factvalues, dim8size_data, dim8pos, irows, s);
			    		}
			    	}
			    	lastdim1 = newdim1;
		    	}
		    	
		    	htmltemp += "</tr>";
		    	
		    	html += htmltemp;
				html += 	"</tbody>";      
				html += 	"</table>";  
				html +=		"</div>";
				that.jqTable = $(html);
				that.$().append(that.jqTable);
		    }
		};
	    
		function funGetHtmlDimData (data, dimsize, dimpos, n, style) {
			var html = "";
			var v = "";
			if (dimpos == 1 || (dimpos != 1 && data.dimensions[dimpos].members[data.axis_rows[n][dimpos]].type == undefined)) {
				v = data.dimensions[dimpos].members[data.axis_rows[n][dimpos]].text.replace("#","");
			}				
			if (style == "boldfirst") {
				html = "<td width=\""+ dimsize +"%\" style=\"width: "+ dimsize +"%;\" class=\"CellBorder\"><b>" + v + "</b></td>";
			} else if (style == "boldh") {
				html = "<td width=\""+ dimsize +"%\" style=\"width: "+ dimsize +"%;\" class=\"CellBorder\"><b>"+ "&nbsp;>" + v + "</b></td>";
			} else if (style == "normal") {
				html = "<td width=\""+ dimsize +"%\" style=\"width: "+ dimsize +"%;\" class=\"CellBorder\">" +"&nbsp;"+"&nbsp;"+ v + "</td>";
			} else if (style == "normalval") {
				html = "<td width=\""+ dimsize +"%\" style=\"width: "+ dimsize +"%;\" class=\"CellBorder\">" + v + "</td>";
			} else if (style == "bold") {
				html = "<td width=\""+ dimsize +"%\" style=\"width: "+ dimsize +"%;\" class=\"CellBorder\"><b>" + v + "</b></td>";
			}
		
			return html;
		}
	
		function funGetDimData (data, dimsize, dimpos, n) {
			var value = data.dimensions[dimpos].members[data.axis_rows[n][dimpos]].text.replace("#","");
			return value;
		}
		
		function funGetFctData (data, factvalues, dimsize, dimpos, n, style) {
			var html = "";
			if (style == "bold" || style == "boldfirst") {
				html = "<td width=\""+ dimsize +"%\" style=\"width: "+ dimsize +"%;\" class=\"CellBorder\"><b>" + data.formattedData[factvalues[dimpos][n]].replace("#","").replace("CHF",""); + "</b></td>";
			} else {
				html = "<td width=\""+ dimsize +"%\" style=\"width: "+ dimsize +"%;\" class=\"CellBorder\">" + data.formattedData[factvalues[dimpos][n]].replace("#","").replace("CHF",""); + "</td>";
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
		
		function funGetMaxValue (data, facts) {
			var v = [];
			var val = 0;
			for (var irows = 0; irows < facts.length; irows++) {
				v.push(data.data[facts[irows]]);
			}
			
			val = Math.max.apply(null, v);
			
			return val;
		}
		
		function funCreateBar (data, factvalues, maxvalue, dimsize, dimpos, n, style) {
			
			var v = data.data[factvalues[dimpos][n]];
			var vf = data.formattedData[factvalues[dimpos][n]];
			var w = Math.abs(100/maxvalue*v);
			var nw = 0;
			
			if (Math.abs(w) > 100) {
				nw = 0;
				w = 50;
			} else {
				nw = 100-(w/2);
				w = w/2;
			}			
			
			w = Math.round(w);
			nw = Math.round(nw);				
			
			var html = "<td width=\""+ dimsize +"%\" style=\"width: "+ dimsize +"%;\" class=\"CellBorder\">";
			
			if (v != null) {
				if (v < 0) {
					if (style == "bold" || style == "boldfirst") {
						html += "<table width=\"100%\" style=\"table-layout: fixed;\"><tr><td width=\"50%\"><table width=\"100%\" style=\"table-layout: fixed\"><tr><td width=\""+ nw +"%\" style=\"padding-right:2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: right;\"><b>" + vf.replace("CHF","").replace("%","") + "</b></td>";
						html += "<td width=\""+ w +"%\" bgcolor=\"red\"></td></tr></table></td><td width=\"50%\"></td></tr></table>";
					} else {
						html += "<table width=\"100%\" style=\"table-layout: fixed;\"><tr><td width=\"50%\"><table width=\"100%\" style=\"table-layout: fixed\"><tr><td width=\""+ nw +"%\" style=\"padding-right:2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: right;\">" + vf.replace("CHF","").replace("%","") + "</td>";
						html += "<td width=\""+ w +"%\" bgcolor=\"red\"></td></tr></table></td><td width=\"50%\"></td></tr></table>";
					}
				} else {
					if (style == "bold" || style ==  "boldfirst") {
						html += "<table width=\"100%\" style=\"table-layout: fixed;\"><tr><td width=\"50%\"></td><td width=\"50%\"><table width=\"100%\" style=\"table-layout: fixed;\"><tr><td width=\""+ w +"%\" bgcolor=\"green\"></td>";
						html += "<td width=\""+ nw +"%\" style=\"padding-left:2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: left;\"><b>" + vf.replace("CHF","").replace("%","") + "</b></td></tr></table></td></tr></table>";					
					} else {
						html += "<table width=\"100%\" style=\"table-layout: fixed;\"><tr><td width=\"50%\"></td><td width=\"50%\"><table width=\"100%\" style=\"table-layout: fixed;\"><tr><td width=\""+ w +"%\" bgcolor=\"green\"></td>";
						html += "<td width=\""+ nw +"%\" style=\"padding-left:2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: left;\">" + vf.replace("CHF","").replace("%","") + "</td></tr></table></td></tr></table>";
					}
				}
			}
			
			html += "</td>";
			
			return html;
				
		}
		
		// called from Additional Properties Sheet JavaScript file
	
		this.getMetadataAsString = function() {
			return JSON.stringify(this.metadata());
		};
	
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
