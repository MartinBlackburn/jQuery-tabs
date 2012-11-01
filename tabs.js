Tabs = function(tabs) 
{   
    //hide all but first tab
    tabs.find(".tabContent").not(":first").toggle();
    
    //add selected to first tab control
    tabs.find(".tabControls a").eq(0).addClass("selected");
    
    //change tab when pressed
    tabs.find(".tabControls a").click(function(event)
    {
        event.preventDefault();
        
        
    });
};

$(function() 
{
    $(".tabs").each(function()
    {
        new Tabs($(this));
    });
});