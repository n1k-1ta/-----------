    // Функция для добавления новой формы
    function addForm() {
        var formsContainer = document.getElementById('forms_container');
        var newForm = document.createElement('form');
        newForm.className = 'main_form';
        var label = document.createElement('label');
        label.setAttribute('for', 'deputy_editor');
        label.className = 'label_subtitle';
        label.textContent = 'Заместители председателя';
        var input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'deputy_editor');
        var deleteButton = document.createElement('button');
        deleteButton.className = 'delete_button';
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = function() {
            removeForm(this);
        };

        newForm.appendChild(label);
        newForm.appendChild(input);
        newForm.appendChild(deleteButton);

        formsContainer.appendChild(newForm);
}

      // Функция для удаления формы
    function removeForm(button) {
        var form = button.parentNode;
        form.parentNode.removeChild(form);
}

// Добавление новой формы для второго типа
function addMemberForm() {
    var formsContainer = document.getElementById('forms_container');
    var newForm = document.createElement('form');
    newForm.className = 'main_form';
    var label = document.createElement('label');
    label.setAttribute('for', 'member');
    label.className = 'label_subtitle';
    label.textContent = 'Члены организационного комитета';
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'member');
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete_button';
    deleteButton.textContent = 'Удалить';
    deleteButton.onclick = function() {
        removeForm(this);
    };

    newForm.appendChild(label);
    newForm.appendChild(input);
    newForm.appendChild(deleteButton);

    formsContainer.appendChild(newForm);
}

// Удаление формы второго типа
function removeForm(button) {
    var form = button.parentNode;
    form.parentNode.removeChild(form);
}