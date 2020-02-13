define(["sap/designstudio/sdk/component", "css!../css/component.css"], function(Component, css) {
Component.subclass("ch.bit.crb360.infobox.Infobox", function() {

	/***********************************************************************/
	/********* ch.bit.crb360.infobox        v 1.1.0.0.20190612 *************/
	/***********************************************************************/
	
	
    var meta_data = null;
    var data_ist_obl_data = null;
    var data_obl_data = null;
    var data_ist_data = null;
    var data_erw_data = null;
    var data_va_erw_data = null;
    var data_kredit_a_data = null;
    var data_kredit_p_data = null;
    var data_fehlbetr_a_data = null;
    var data_fehlbetr_p_data = null;
    var data_fehlbetr_a_m1_data = null;
    var data_databar2add = null;
    var data_databar3add = null;
    var titlekeyfigure_data = "";
    var titlebar1_data = "";
    var titlebar2_data = "";
    var titlebar3_data = "";
    var showbars_data = false;
    var signs_data = null;
    var that = this;
    var dath = null;
    var datw = null;                       
    var cntColumns = 0;
    var cntRows = 0;
    var txtColumnTitel = "";
    var txtRowTitel = "";
    var defColumnsHasDimension = false;
    var defRowsHasDimension = false;
    var defHTMLScript = "";
    var jqTable;
    
    this.init = function() {
//             this.$().addClass("");
    };
    
    this.afterUpdate = function() {                        
                        that.calculateContainerSize(function() {
                            renderTable();
                        });
    };

    this.onresize = function () {
                        that.calculateContainerSize(function() {
                            renderTable();
                        });
    }
    
    function renderTable() {
               
//             var dath = that.$().height();
//             var datw = that.$().width();
       
       var datDim1 = 0;
       var datDim2 = 0;
       var datDim3 = 0;
       var datKey = "";
       var datText = "";
       
       that.$().empty();
       
//             data_data = getAnySetColumn_Data();                    
       if (data_fehlbetr_a_data && data_fehlbetr_a_data.formattedData && data_fehlbetr_a_data.data.length > 0) {
                   
//                         var html =        "<table class=\"Box\" cellspacing=\"0px\" width=\"100%\">";
           var html =        "<table class=\"Box\" cellspacing=\"0px\" width=\"100%\" >";
           var htmltemp = "";
           var datMembertxt = "";
           var datMemberSelection = "";
           var datLevel = "0"
           var defCSS = "";
           var infoheight = dath * 0.2;
           var defValueTop = 0;
           var defValueCompare = 0;
           var defValueTopText = "";
           var datBoxLabel = "";
           
           if (signs_data == "AR") {
                       
                       defValueTop = data_fehlbetr_a_data.data[0];
                       defValueTopText = data_fehlbetr_a_data.formattedData[0];
                       defValueCompare = data_fehlbetr_a_m1_data.data[0];
                       
                       if (defValueTop > defValueCompare) {
                                   defCSS = "isNegativArrow";
                                   defTrafficLight = ""; //m
                       } else 
                       if (defValueTop < defValueCompare) {
                                   defCSS = "isPositivArrow";
                                   defTrafficLight = ""; //k
                       } else {
                                   defCSS = "isNeutralArrow";
                                   defTrafficLight = ""; //g
                       }
           } else 
           if (signs_data == "TL") {
                       
                       defValueTop = data_fehlbetr_a_data.data[0];
                       defValueTopText = data_fehlbetr_a_data.formattedData[0];
                       
                       if (data_fehlbetr_a_data.data[0] < 0) {
                                   defCSS = "isNegativTL";
                                   defTrafficLight = ""; // u                                                          
                       } else {
                                   defCSS = "isPositivTL";
                                   defTrafficLight = "";     //l                                                         
                       }
           } else {
                       defValueTop = data_fehlbetr_a_data.data[0];
                       defValueTopText = data_fehlbetr_a_data.formattedData[0];
                       defCSS = "";
                       defTrafficLight = "";     
           }
           
           // Prüft ob Überschrift automatisch ermittelt werden soll
           if (titlekeyfigure_data === undefined || titlekeyfigure_data === "") {
               if (defValueTop < 0) {
                           datBoxLabel = valuelabelnegativ_data;
               } else {
                           datBoxLabel = valuelabelpositiv_data
               }

           } else {
               datBoxLabel = titlekeyfigure_data;
           }

           // Schreibt Header Überschriften
           html +=            "<tr>";
//                         html +=                                "<td width=\"100%\" class=\"sdkfontChart1\" height=\"20%\"><b>" + data_fehlbetr_a_data.formattedData[0].replace(" CHF", "") + "</b> <text class=\""+defCSS+"\">l</text></td>";
           html +=                        "<td class=\"sdkfontChart1\" width=\"" + datw + "\" height=\"" + infoheight + "\"><b>" + defValueTopText.replace(" CHF", "") + "</b> <text class=\""+defCSS+"\">" + defTrafficLight + "</text></td>";
           html +=            "</tr>";
           html +=            "<tr>";
//                         html +=                                "<td width=\"100%\" class=\"sdkfontChart2\" height=\"20%\">" + titlekeyfigure_data + "</td>";
           html +=                "<td class=\"sdkfontChart2\" width=\"" + datw + "\" height=\"" + infoheight + "\">" + datBoxLabel + "</td>";
           html +=            "</tr>";
           

           html += "</table>";
           if (showbars_data == true) {
                       html += "<table  class=\"Box\" cellspacing=\"0px\">";
                       html +=            "<tr>";
                       html +=            "<td><div style=\"overflow: hidden;\">" + funCreateChart(data_ist_obl_data, data_ist_data, data_obl_data, data_erw_data, data_va_erw_data, 0, dath, datw) + "</div></td>";
                       html +=      "</tr>";
                       html +=            "</table>";   
           }
           that.jqTable = $(html);
           that.$().append(that.jqTable); 
       }
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
    
    function funCreateChart(data_ist_obl_data, data_ist_data, data_obl_data, data_erw_data, data_va_erw_data, i, h, b) {
               // Values for Chart

               var datArray = [];
               var defBar1 = 0;
               var defBar1txt = "";
               var defBar2 = 0;
               var defBar2txt = "";
               var defBar3 = 0;
               var defBar3txt = "";
               var defBarMultiplikator = 0.3;
               var chartheight = dath * 0.6;
               var html = "";
               var defBarWidth = datw - 40;
               
               // Holt den maximalen Wert aller Balken
               var varIstOblmax = Math.max.apply(null, data_ist_obl_data.data);
               var varVAERWmax = Math.max.apply(null, data_va_erw_data.data);
               var varERWmax = Math.max.apply(null, data_erw_data.data);
               
               var varMaxValue = Math.max.apply(null, [varIstOblmax, varVAERWmax, varERWmax]);
               
               // Validiert Daten für den Chart
               var datIstObl = funCheckData(data_ist_obl_data.data[i]);
               var datVAErw = funCheckData(data_va_erw_data.data[i]);
               var datErw = funCheckData(data_erw_data.data[i]);
               var datIst = 0;
               var datObl = 0;
                             
               // Beziehen formatierter Daten
               var datOblF = '';
               var datIstF = '';
               var datIstOblF = data_ist_obl_data.formattedData[i].replace(" CHF", "");
               var datVAErwF = data_va_erw_data.formattedData[i].replace(" CHF", "");
               var datErwF = data_erw_data.formattedData[i].replace("CHF", "");
               var datBar2Ext = null;
               var datBar3Ext = null;
               
               if (data_databar2add != undefined && data_databar2add != "") {
            	   datBar2Ext = data_databar2add.formattedData[i].replace(" CHF", "");
               }
               
               if (data_databar3add != undefined && data_databar3add != "") {
            	   datBar3Ext = data_databar3add.formattedData[i].replace(" CHF", "");
               }
               
               if (data_ist_data == undefined || data_ist_data == '') {
            	   datIst = 0;
                   datIstF = '';
               } else {
            	   datIst = funCheckData(data_ist_data.data[i]);
            	   datIstF = data_ist_data.formattedData[i].replace(" CHF", "");
               }
               if (data_obl_data == undefined || data_obl_data == '') {
            	   datObl = 0;
            	   datOblF = '';
               } else {
            	   datObl = funCheckData(data_obl_data.data[i]);
            	   datOblF = data_obl_data.formattedData[i].replace(" CHF", "");
               }
               
               // Definiert grösse des Balken
               defBar1 = defBarWidth * funDivideZeroCheck(datIstObl, varMaxValue) * defBarMultiplikator;
               defBar2 = defBarWidth * funDivideZeroCheck(datVAErw, varMaxValue) * defBarMultiplikator;
               defBar3 = defBarWidth * funDivideZeroCheck(datErw, varMaxValue) * defBarMultiplikator;
               
               if (defBar1 < 0) { defBar1 = 0; }
               if (defBar2 < 0) { defBar2 = 0; }
               if (defBar3 < 0) { defBar3 = 0; }
               
               // Text Bar 1
               if (datIstOblF == "") {
                           defBar1txt = "";
               } else {
            	   
            	   defBar1txt = datIstOblF;
            	   
            	   if (datIstF != "" || datOblF != "") {
                           defBar1txt += " (";
                           
                           if (datIstF != "") { 
                        	   if (titlebar1_data == 'IST') {
                        		   defBar1txt += datIstF + " %";
                        	   } else {
                        		   defBar1txt += datIstF;
                        	   }
                           } else {
                        	   defBar1txt += " ";
                           }
                           
                           // Prozentzahl soll nur angezeigt werden, wenn auch wirklich Werte vorhanden sind
                           if (datOblF != "") {
                        	   defBar1txt += ", " + datOblF + ")";
                           } else {
                        	   defBar1txt += ")"; 
                           }
            	   }
               }
               
               if (datBar2Ext != null) {
            	   defBar2txt = datVAErwF + " (" + datBar2Ext + " %)";
               } else {
            	   defBar2txt = datVAErwF;
               }
               
               if (datBar3Ext != null) {
            	   defBar3txt = datErwF + " (" + datBar3Ext + " %)";
               } else {
            	   defBar3txt = datErwF;
               }
               
               // Define Array for Chart
//             datArray = [datIstObl, datVAErw, datErw];
               
//if (datIstObl == 0 && datVAErw == 0 && datErw == 0) {
//                         html =              "<svg height=\"60%\" width=\"100%\">";
                           html =              "<svg height=\""+chartheight+"\">";
//                         html +=                                   "<g transform=\"translate(100,5)\"></g>";
                           html +=                                   "<g transform=\"translate(35,5)\">";
                           html +=                                               "<text text-anchor=\"end\" dy=\".35em\" stroke=\"none\" y=\"10\" class=\"TrippleBar\">" + titlebar1_data + "</text>";
                           html +=                                               "<text text-anchor=\"end\" dy=\".35em\" stroke=\"none\" y=\"25\" class=\"TrippleBar\">" + titlebar2_data + "</text>";
                           html +=                                               "<text text-anchor=\"end\" dy=\".35em\" stroke=\"none\" y=\"40\" class=\"TrippleBar\">" + titlebar3_data + "</text>";
                           html +=                                   "</g>";
                           html +=                                   "<g transform=\"translate(40,5)\">";
                           html +=                                               "<rect fill=\""+colorbar1_data+"\" stroke=\"white\" width=\"" + defBar1 + "px\" height=\"12px\" y=\"4\" lineWidth=\"100\"></rect>";
                           html +=                                               "<rect fill=\""+colorbar2_data+"\" stroke=\"white\" width=\"" + defBar2 + "px\" height=\"12px\" y=\"19\"></rect>";
                           html +=                                               "<rect fill=\""+colorbar3_data+"\" stroke=\"white\" width=\"" + defBar3 + "px\" height=\"12px\" y=\"34\"></rect>";
                           //html +=                                             "<text stroke=\"none\" fill=\"black\" text-anchor=\"start\" dy=\".35em\" dx=\"3\" y=\"10\" x=\"" + (defBar1 / 2)  + "%\">" + data_ist_obl_data.formattedData[i].replace("CHF", "")  + "</text>";
                           html +=                                               "<text stroke=\"none\" fill=\"black\" text-anchor=\"start\" dy=\".35em\" dx=\"3\" y=\"10\" x=\"" + defBar1 + "px\" class=\"textvalues\">" + defBar1txt + "</text>";
                           html +=                                               "<text stroke=\"none\" fill=\"black\" text-anchor=\"start\" dy=\".35em\" dx=\"3\" y=\"25\" x=\"" + defBar2 + "px\" class=\"textvalues\">" + defBar2txt + "</text>";
                           html +=                                               "<text stroke=\"none\" fill=\"black\" text-anchor=\"start\" dy=\".35em\" dx=\"3\" y=\"40\" x=\"" + defBar3 + "px\" class=\"textvalues\">" + defBar3txt + "</text>";
                           html +=                                               "<line style=\"stroke: rgb(204, 204, 204);\" y2=\"48\" y1=\"2\"></line>";
                           html +=                                   "</g>";
                           html +=                       "</svg>";
//             } else {
//                         html = "<svg/>";
//             }           
               return html;
    }
    
    // called from Additional Properties Sheet JavaScript file

    this.getMetadataAsString = function() {
               return JSON.stringify(this.metadata());
    };

    // property setter/getter functions

this.calculateContainerSize = function(next) {
// Gets the id of the control container
var id = this.$()
    .attr('id');

/**
* Checks the size and if undefined or just to small then check it again in 500 milliseconds
* @param id string
* @param next function
*/
function checkSizeTimer(id, next) {
    var $container = $('#' + id);
    if($container.height() > 1 && $container.width() > 1) {
                datw = $container.width();
                dath = $container.height();
        next();
    } else {
        setTimeout(function() {
            checkSizeTimer(id, next);
        }, 500); //at 500 miliseconds
    }
}

// Starts loop until we got the absolute size of our control container
checkSizeTimer(id, next);
};                 
    
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
    
    this.datafehlbetram1 = function(value) {
               if (value === undefined) {
                           return data_fehlbetr_a_m1_data;
               } else {
                           data_fehlbetr_a_m1_data = value;
                           return this;
               }                                  
    }
    
    this.databar2add = function(value) {
               if (value === undefined) {
                           return data_databar2add;
               } else {
                           data_databar2add = value;
                           return this;
               }                                  
    }

    this.databar3add = function(value) {
               if (value === undefined) {
                           return data_databar3add;
               } else {
            	   		   data_databar3add = value;
                           return this;
               }
    };

    this.titlekeyfigure = function(value) {
    			if (value === undefined) {
    						return titlekeyfigure_data;
    			} else {
    				titlekeyfigure_data = value;
    				return this;
    			}
    };
    
    this.valuelabelnegativ = function(value) {
               if (value === undefined) {
                           return valuelabelnegativ_data;
               } else {
                                                valuelabelnegativ_data = value;
                           return this;
               }
    };

    this.valuelabelpositiv = function(value) {
               if (value === undefined) {
                           return valuelabelpositiv_data;
               } else {
                           valuelabelpositiv_data = value;
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

    this.colorbar1 = function(value) {
	    if (value === undefined) {
            return colorbar1_data;
	    } else {
			colorbar1_data = value;
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

    this.colorbar2 = function(value) {
	    if (value === undefined) {
            return colorbar2_data;
	    } else {
			colorbar2_data = value;
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

    this.colorbar3 = function(value) {
	    if (value === undefined) {
            return colorbar3_data;
	    } else {
			colorbar3_data = value;
            return this;
	    }
    };
    
    this.showbars = function(value) {
               if (value === undefined) {
                           return showbars_data;
               } else {
                           showbars_data = value;
                           return this;
               }
    };

    this.signs = function(value) {
               if (value === undefined) {
                           return signs_data;
               } else {
                           signs_data = value;
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
