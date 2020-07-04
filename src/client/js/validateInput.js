function valid(){
    let result;
    document.querySelectorAll('form').forEach(form => {
        document.querySelectorAll('input').forEach(input => {
            input.classList.remove('required-input');
            if(!input.value){
                console.log(`${input.name} has no value`);
                input.placeholder = input.name + ' required';
                input.classList.add('required-input');
                result = false;
            }
        })
    })
    return result
}

export {
    valid
}