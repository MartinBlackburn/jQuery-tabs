#jQuery tabs

A tabbed interface that allows switch content based on which tab has been pressed.

Without JavaScript there will be a list of anchor links that will move the page to the required content.  
With JavaScript enabled the links will show the required tab and hide the others.

##How it works
```html
<div class="tabs">
    <ul class="tabControls">
        <li><a href="#tab1">Tab 1</a></li>
        <li><a href="#tab2">Tab 2</a></li>
        <li><a href="#tab3">Tab 3</a></li>
    </ul>
    
    <div class="tabContent" id="tab1">
        Tab content
    </div>
    
    <div class="tabContent" id="tab2">
        Tab content
    </div>
    
    <div class="tabContent" id="tab3">
        Tab content
    </div>
</div> 
```

.tabs contains the links to each tab and all the tabs content.

.tabControls are the links to each tab. The href will point to a tabContent with the same ID.

.tabcontent holds the content for each tab, it needs an ID that matches the href of the link to it.

###Notes
The tabs was built using jQuery 1.8.2