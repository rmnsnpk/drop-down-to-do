function add() {
    let item = document.createElement('div');
    item.className = "task";
    if (!document.getElementById('name').value) {
        return false;
    }
    item.innerHTML = document.getElementById('name').value;
    document.getElementById('name').value = "";
    item.onclick = lineThrough;
    form.after(item);
    let delBtn = document.createElement('div');
    delBtn.className = 'can';
    delBtn.onclick = del;
    item.append(delBtn);
    return false;
}



function lineThrough() {
    if (this.className.includes("done")) {
        this.classList.remove("done");
    } else {
        this.classList.add("done");
    }

}

function del() {
    this.parentNode.classList.add("deleted");
    event.stopPropagation();
}


function allView() {
    let all = document.querySelectorAll(".task");
    all.forEach(elem => {
        elem.style.display = 'block';
    });
    return false;
}

function deletedView() {
    let all = document.querySelectorAll(".task");
    all.forEach(elem => {
        if (elem.className.includes('deleted')) {
            elem.style.display = 'block';
        } else {
            elem.style.display = 'none';
        }
    });
}

function doneView() {
    let all = document.querySelectorAll(".task");
    all.forEach(elem => {
        if (elem.className.includes('done')) {
            elem.style.display = 'block';
            elem.style.textDecoration = 'line-trough';
        } else {
            elem.style.display = 'none';
        }
    });
}

function inProgressView() {
    let all = document.querySelectorAll(".task");
    all.forEach(elem => {
        if (!elem.className.includes('done') && !elem.className.includes('deleted')) {
            elem.style.display = 'block';
        } else {
            elem.style.display = 'none';
        }
    });
}

submit.onclick = add;

allBtn = document.getElementById("all");
allBtn.onclick = allView;
deleteBtn = document.getElementById("delete");
deleteBtn.onclick = deletedView;
doneBtn = document.getElementById("done");
doneBtn.onclick = doneView;
inProgressBtn = document.getElementById("in_progress")
inProgressBtn.onclick = inProgressView;