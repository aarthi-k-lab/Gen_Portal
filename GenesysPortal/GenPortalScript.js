var linkVariables=document.querySelector(".sidebar a");
linkVariables.addEventListener("dblclick",openDirectory);

function openDirectory()
{
    
}

function addRow(){
    var stepTab = document.getElementById('test_steps');
    var rowCnt = stepTab.rows.length;
    var colCnt = stepTab.rows[0].cells.length;    
    var stepid="step"+rowCnt;
    var tr = stepTab.insertRow(rowCnt);
    tr.setAttribute("id",stepid);
    tr.setAttribute("name",stepid);
    var id=["step","description","prompt","reply_with","reply_type"];
    for(var c=0; c<colCnt; c++){
        var td = document.createElement('td');
        td = tr.insertCell(c);
        var ele = document.createElement('input');
        ele.setAttribute('type','text');
        ele.setAttribute('value','');
        ele.setAttribute("id",id[c]);
        ele.setAttribute("name",id[c]);
        td.appendChild(ele);
    }
}

