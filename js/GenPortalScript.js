
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