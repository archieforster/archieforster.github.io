let pageStack = []

function RedirectTo(inputPagename){
        // Add page to stack
        pageStack.push(inputPagename)
        // Navigate to page
        window.location.pathname = "/" + inputPagename   
    }

function NavigateBack(){
    // Get previous page from stack
    pagename = pageStack.pop()
    // If no previous page, return to index
    if (pagename == undefined){
        window.location.pathname = "/index"
    }else{
        // Else navigate to previous page 
        window.location.pathname = "/" + pagename
    }
}