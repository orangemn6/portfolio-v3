jQuery(document).ready(function($) {

(function() {
        var hidden = "hidden";
        var oldtitle = document.title;
        var currenttitle;

        // Standards based on browsers:
        if (hidden in document)
            document.addEventListener("visibilitychange", onchange);
        else if ((hidden = "mozHidden") in document)
            document.addEventListener("mozvisibilitychange", onchange);
        else if ((hidden = "webkitHidden") in document)
            document.addEventListener("webkitvisibilitychange", onchange);
        else if ((hidden = "msHidden") in document)
            document.addEventListener("msvisibilitychange", onchange);
        // IE 9 and lower:
        else if ("onfocusin" in document)
            document.onfocusin = document.onfocusout = onchange;
        // All others:
        else
            window.onpageshow = window.onpagehide
                = window.onfocus = window.onblur = onchange;

       //if tab change happens set status to either hidden or visible
        function onchange (evt) {
            var v = "visible", h = "hidden",
                evtMap = {   //check events and set status based on event type
                    focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h
                };

            evt = evt || window.event;
            if (evt.type in evtMap) {  // check the title
                currenttitle = oldtitle;
                $(document).attr('title', currenttitle);
            }
            else { // We are in hidden state so create unique title
                currenttitle = this[hidden] ? "Hey come back here!" : oldtitle; //update to whatever you want
                $(document).attr('title', currenttitle);
            }

        }

        // set the initial state (but only if browser supports the Page Visibility API)
        if( document[hidden] !== undefined )
            onchange({type: document[hidden] ? "blur" : "focus"});
    })();
});
