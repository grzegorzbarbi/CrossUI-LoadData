xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_json")
                .setQueryURL("Data/data.json")
                .setProxyType("AJAX")
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_xml")
                .setQueryURL("Data/data.xml")
                .setProxyType("AJAX")
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"ctl_panel9")
                .setDock("none")
                .setLeft("2.2857142857142856em")
                .setTop("2.2857142857142856em")
                .setWidth("55.833333333333336em")
                .setHeight("37.333333333333336em")
                .setCaption("JSON & XML")
            );
            
            host.ctl_panel9.append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane7")
                .setDock("fill")
            );
            
            host.ctl_pane7.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"ctl_buttonviews1")
                .setItems([
                    {
                        "id" : "json",
                        "caption" : "Load data from JSON"
                    },
                    {
                        "id" : "xml",
                        "caption" : "Load data from XML"
                    }
                ])
                .setBarSize("2.3333333333333335em")
                .setValue("json")
                .onIniPanelView([
                    {
                        "desc" : "read json",
                        "type" : "control",
                        "target" : "api_json",
                        "args" : [ ],
                        "method" : "invoke",
                        "conditions" : [
                            {
                                "left" : "{args[1].id}",
                                "symbol" : "=",
                                "right" : "json"
                            }
                        ],
                        "onOK" : 0,
                        "onKO" : 1
                    },
                    {
                        "desc" : "set json",
                        "type" : "control",
                        "target" : "treegrid1",
                        "args" : [
                            {
                            },
                            {
                                "header" : "{temp.okData.header}",
                                "rows" : "{temp.okData.rows}"
                            }
                        ],
                        "method" : "setProperties",
                        "conditions" : [
                            {
                                "left" : "{args[1].id}",
                                "symbol" : "=",
                                "right" : "json"
                            },
                            {
                                "left" : "{temp.okData}",
                                "symbol" : "non-empty",
                                "right" : ""
                            }
                        ]
                    },
                    {
                        "desc" : "read xml",
                        "type" : "control",
                        "target" : "api_xml",
                        "args" : [ ],
                        "method" : "invoke",
                        "conditions" : [
                            {
                                "left" : "{args[1].id}",
                                "symbol" : "=",
                                "right" : "xml"
                            }
                        ],
                        "onOK" : 0,
                        "onKO" : 1
                    },
                    {
                        "desc" : "set xml",
                        "type" : "control",
                        "target" : "treegrid2",
                        "args" : [
                            {
                            },
                            {
                                "rows" : "{temp.okData.rows}",
                                "header" : "{temp.okData.header}"
                            }
                        ],
                        "method" : "setProperties",
                        "conditions" : [
                            {
                                "left" : "{args[1].id}",
                                "symbol" : "=",
                                "right" : "xml"
                            },
                            {
                                "left" : "{temp.okData}",
                                "symbol" : "non-empty",
                                "right" : ""
                            }
                        ]
                    }
                ])
            );
            
            host.ctl_buttonviews1.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"treegrid2")
                .setRowHandler(false)
                .setColHidable(true)
                .setColMovable(true),
                "xml"
            );
            
            host.ctl_buttonviews1.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"treegrid1")
                .setRowHandler(false)
                .setColHidable(true)
                .setColMovable(true),
                "json"
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"sbutton1")
                .setLeft("22.857142857142858em")
                .setTop("41.904761904761905em")
                .setWidth("13.333333333333334em")
                .setCaption("Make Grid Editable")
                .onClick([
                    {
                        "desc" : "for grid2",
                        "type" : "control",
                        "target" : "treegrid2",
                        "args" : [
                            {
                                "editable" : true
                            },
                            {
                            }
                        ],
                        "method" : "setProperties",
                        "event" : 1
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});