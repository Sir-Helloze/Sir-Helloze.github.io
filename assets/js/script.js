function newElement(){
    var inputValue = document.getElementById('nameTask').value;
    var inputValue2 = document.getElementById('newTask').value;
    var inputValue3 = document.getElementById('timeTask').value;
    
    

    if (inputValue && inputValue2 && inputValue3){
        const object = {
            name: inputValue,
            discr: inputValue2,
            time: inputValue3
        }
        localStorage.setItem('todos', JSON.stringify(object));

        
        document.getElementById('nameTask').value = '';
        document.getElementById('newTask').value = '';
        document.getElementById('timeTask').value = '';

        if (object !=0 ){
            console.log(object);
            var out = '';
            out +=`<div class="task"><ul><li><p>${object.name}</p><button class="load" onclick="load()">load</button></li><ul><li><p>${object.discr} --- ${object.time} H </p></li></ul></ul></div>`;
            $('#list').html(out);
            localStorage.setItem('save1', document.getElementById('list').innerHTML);
            
        }
    }
    else{
        alert("error")
    }
    toSave()
}
function toSave(){
    var save = localStorage.getItem('save1');
    document.getElementById('list').innerHTML = save;
    
}
toSave()
function load(){
    localStorage.getItem('todos', object);
    var outSub = '';
    out +=`<tr><td><input type="text" placeholder="Old Task" id="oldTask" value="${object.discr}"></td><td><input id="timeTask" value="${object.time}"></td><td><button id="delTask">delete</button></td></tr>`;
    $('#subTask').html(outSub);
}

    