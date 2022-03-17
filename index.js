let inpNewTask = $("#inpNewTask");
let btnAdd = $("#btnAdd");
let btnReset = $("#btnReset");
let btnSort = $("#btnSort");
let btnRemove = $("#btnRemove");
let ulTasks = $("#ulTasks");

function addItem() {

    let listItem = $('<li>', {'class': 'list-group-item', text: inpNewTask.val()})

    listItem.click(() => {
        listItem.toggleClass('done')
    })

 
    ulTasks.append(listItem)

    inpNewTask.val('')

    
    toggleInputButtons()
}

function clearDone() {
    $('#ulTasks .done').remove()


    toggleInputButtons()
}

function sortTask() {
    $('#ulTasks .done').appendTo(ulTasks)
}

function toggleInputButtons() {
    btnReset.prop('disabled', inpNewTask.val() == '')
    btnAdd.prop('disabled', inpNewTask.val() == '')
    btnSort.prop('disabled', ulTasks.children().length < 1)
    btnRemove.prop('disabled', ulTasks.children().length < 1)
}


inpNewTask.keypress((key) => {
    if (key.which == 13) addItem()
})

inpNewTask.on('input', toggleInputButtons)

btnAdd.click(() => addItem());

btnReset.click(() => {
    inpNewTask.val('')
    toggleInputButtons()
})

btnRemove.click(() => clearDone())

btnSort.click(() => sortTask());