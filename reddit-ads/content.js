setInterval(function() {
    if ($("[data-before-content=advertisement]") !== null) {
        $("[data-before-content=advertisement]").remove();
    }    
    for (let span of document.getElementsByTagName("span")) {
        if (span.innerText.toLowerCase() === 'promoted') {
            span.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
        }
    }
}, 3000);