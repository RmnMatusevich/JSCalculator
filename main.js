let insert = (num) => {
    document.form.textview.value = document.form.textview.value + num;
}

let clean = () => {
    document.form.textview.value = "";
}

let back = () => {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1)
}

let equal = () => {
    let exp=document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}