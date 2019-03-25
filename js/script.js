var fields = {
    field_1: ["firstName", "text", "Іван"],
    field_2: ["lastName", "text", "Шевченко"],
    field_3: ["birthday", "date", "1993-07-22"],
    field_4: ["position", "text", "Front-end"],
    field_5: ["experience", "number", "2"],
};
var my_form = document.querySelector('.my_form');

for (var key in fields) {
    var new_div = document.createElement('div');
    var new_input = document.createElement('input');

    new_input.setAttribute('name', fields[key][0]);
    new_input.setAttribute('type', fields[key][1]);
    new_input.value = fields[key][2];

    new_div.appendChild(new_input);
    my_form.appendChild(new_div);
}
