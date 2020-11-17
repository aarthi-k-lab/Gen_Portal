
function addRow(){
    var stepTab = document.getElementById('test_steps');
    var rowCnt = stepTab.rows.length;
    var colCnt = stepTab.rows[0].cells.length;    
    var stepid="step"+rowCnt;
    var tr = stepTab.insertRow(rowCnt);
    tr.setAttribute("id",stepid);
    tr.setAttribute("name",stepid);
    var id=["step","description","prompt","reply_with","reply_type","delete"+rowCnt];
    var ele;
    for(var c=0; c<colCnt; c++){
        var td = document.createElement('td');
        td = tr.insertCell(c);
        if(c===0)
        {
            var ele = document.createElement('input');
            ele.setAttribute("type","text");
            ele.setAttribute("placeholder",rowCnt);
            ele.style.textAlign="center"
        }
        else if(c===4)
        {
             ele=document.createElement("select");  
            var opt=document.createElement("option");
            opt.setAttribute("value","none");
            opt.innerText="";
            ele.appendChild(opt);         
            var opt1=document.createElement("option");
            const newLocal = "dtmf";
            opt1.setAttribute("value",newLocal);
            opt1.innerText="dtmf";
            ele.appendChild(opt1);
            var opt2=document.createElement("option");
            const newLocal_1 = "voice";
            opt2.setAttribute("value",newLocal_1);
            opt2.innerText="voice";
            ele.appendChild(opt2);           
        }
        else if(c===5)
        {
            ele=document.createElement("button");
            ele.setAttribute("type","button")
            ele.innerText="Delete";
            ele.setAttribute("onclick","deleteCrntRow("+id[c]+")");
        }
        else
        {
             ele = document.createElement('textarea');
        }
        ele.setAttribute("id",id[c]);
        ele.setAttribute("name",id[c]);
        ele.setAttribute("class",id[c])
        td.appendChild(ele);
    }
}

function deleteCrntRow(id)
{
    let tableBase=document.getElementById("test_steps");
    let rowToBeDeleted=id.id.substring(6);
    tableBase.deleteRow(rowToBeDeleted);
    let steps=document.getElementsByClassName("step");
    let buttons=document.querySelectorAll("td button");
    for(let i=0;i<steps.length;i++)
    {
        steps[i].setAttribute("placeholder",i+1);
        buttons[i].setAttribute("id","delete"+(i+1));
        buttons[i].setAttribute("name","delete"+(i+1));
        buttons[i].setAttribute("class","delete"+(i+1));
        buttons[i].setAttribute("onclick","deleteCrntRow(delete"+(i+1)+")");
    }

}


$(function() {
    $('#create_testcase').click(function() {
        $('#sb-right').show();
        return false;
    });        
});

// var request=new XMLHttpRequest();
// request.open("GET","https://restcountries.eu/rest/v2/all",true);
// request.send();
// var str="";
// request.onload=function()
// {
//     var data=JSON.parse(this.response);
//     for(var item of data)
//     {
//         str+=item["name"]+":"+item["flag"]+"\n";
//     }
//     var ele = document.getElementById("flags");
//     ele.textContent=str;
// }
function d(){
modal.style.display = "block";
var data=[{"expected text": "'hello welcome to genesys'", "transcribed text ": "hello welcome to genesis", "confidence": 0.9476495726495727, "status": "passed"},{"expected text": "Thanks for your input ", "transcribed text ": "thanks for your input", "confidence": 0.9285714285714285, "status": "passed"},{"expected text": "we will get back", "transcribed text ": "we will get back", "confidence": 0.9629629629629629, "status": "passed"}];  
var parsedData=JSON.parse(JSON.stringify(data));
var headings=["Expected Text", "Transcribed Text", "Confidence", "Status"];
console.log(parsedData);
var table=document.getElementById("dyna-table");
var tr=document.createElement("tr");
for(let i=0;i<headings.length;i++)
{
    var th=document.createElement("th");
    th.innerHTML=headings[i];
    tr.appendChild(th);    
}
table.appendChild(tr);
let passCnt=0;
for(let i of parsedData)
{
    tr=document.createElement("tr");
    var td1=document.createElement("td");
    td1.innerText=i["expected text"];
    tr.appendChild(td1);
    var td2=document.createElement("td");
    td2.innerText=i["transcribed text "];
    tr.appendChild(td2);
    var td3=document.createElement("td");
    td3.innerText=i["confidence"];
    tr.appendChild(td3);
    var td4=document.createElement("td");
    td4.innerText=i["status"];
    tr.appendChild(td4);
    table.appendChild(tr);

    if(i["status"]=="passed")
        passCnt++;
}

var results = document.getElementById("results");
var res = (passCnt==parsedData.length)?"Passed":"Failed"
results.innerHTML= "Testcase : "+res;

var stats = document.getElementById("stats");
var fail = parsedData.length-passCnt;
var total = parsedData.length
//stats.innerHTML= "Total no. of testcase : "+total+"<br>No. of Passed Testcase : "+ passCnt + "<br>No. of Failed Testcase : " + fail+"<br><br>";

}

var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  var table=document.getElementById("dyna-table");
  var rowCount = table.rows.length;
  
    for (var i = rowCount; i >0; i--) {
    table.deleteRow(0);
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    var table=document.getElementById("dyna-table");
    var rowCount = table.rows.length;
    for (var i = rowCount; i >0; i--) {
        table.deleteRow(0);
    }
  }
}
