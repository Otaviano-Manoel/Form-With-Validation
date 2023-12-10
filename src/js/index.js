form = document.querySelector('.form')
inputsForm = document.querySelectorAll('input');
menssegeForm = document.querySelector('.menssege');
alertsMenssege = document.querySelectorAll('.menssege-null');

form.addEventListener('submit', function (e) {
    isNull = false;
    inputsForm.forEach((element, index) => {
        isNull = IsNull(element, index);
    });

    isNull = IsNull(menssegeForm, 3);

    if (isNull) {
        e.preventDefault();
    }
})

function IsNull(element, indexAlertMenssege) {
    if (element.value === '') {
        element.classList.add('erro');
        alertsMenssege[indexAlertMenssege].classList.add('erro');
        element.classList.remove('checked');
        return true;
    }
    else {
        element.classList.remove('erro');
        alertsMenssege[indexAlertMenssege].classList.remove('erro');

        element.classList.add('checked');
    }
    return false;
}