
var array = [];
document.getElementById("but").addEventListener("click", function(e) {
    
    var textarea = document.getElementById("inp")
    
    var indexStart = textarea.value.indexOf("JSON = [") + 8;
    var indexEnd = textarea.value.indexOf("window.onload");
    var lastIndexEnd = textarea.value.lastIndexOf("}", indexEnd) + 1;
    
    textarea.value = textarea.value.substring(indexStart, lastIndexEnd);
    
    textarea.value = textarea.value.replace(/created/g, "date_added");
    textarea.value = textarea.value.replace(/name/g, "content");
    
    textarea.value = '{"children":['+textarea.value;
    textarea.value += '],"id":"0","subject":"","type":"folder"}';
    
    var object = jQuery.parseJSON(textarea.value);
    var obj = object.children
    
    goDeeper(obj);
    textarea.value = JSON.stringify(object);
});

function goDeeper(obj) {
    for(var i = 0; i < obj.length; i++) {
        obj[i].date_added /= 1000;
        obj[i].date_added += 11644473600;
        obj[i].date_added *= 1000000;
        obj[i].date_added = obj[i].date_added.toString();
        array.push(obj[i].date_added);
        if (obj[i].type == "folder") {
            obj[i]["subject"] = obj[i].content;
            goDeeper(obj[i].children);
        }
    }
}

document.getElementById("inp").addEventListener("click", function(e) {
    document.getElementById("inp").select();
})

var xmlhttp, text;
xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', 'example.txt', false);
xmlhttp.send();
document.getElementById("inp").value = xmlhttp.responseText;
//11644473600
