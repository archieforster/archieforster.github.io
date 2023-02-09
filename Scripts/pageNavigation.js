let pageStack = []

function RedirectTo(inputPagename){
    // Backbutton implementation
    if (inputPagename == "BACK"){
        // Get previous page from stack
        pagename = pageStack.pop()
        // Redirect to page if exists
        if (pagename != undefined){
            window.location.pathname = "/" + pagename
        }

    }else{
        //Adds pagename to stack
        pageStack.push(inputPagename)
        //Redirects to page
        window.location.pathname = "/" + inputPagename   
    }
    
}