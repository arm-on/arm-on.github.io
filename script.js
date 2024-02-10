
var Persian = /[آ-ی]/;

content = document.getElementById('content').innerHTML;
lines = content.split('\n');
line_types = [];
new_content = '';
for (const [index, line] of lines.entries()) {
if (line.startsWith('# ')) {
    line_types.push('h1');
} else if (line.startsWith('## ')) {
    line_types.push('h2');
} else if (line.startsWith('### ')) {
    line_types.push('h3');
} else if (line.startsWith('| ')) {
    line_types.push('row');
} else if (line.startsWith('|--')) {
    line_types.push('border');
} else if (line.startsWith('- ')) {
    line_types.push('bullet');
} else {
    line_types.push('nochange');
}
} 

for (const [index, line_type] of line_types.entries()) {
if (line_type == 'border'){
    if (line_types[index-1] == 'row'){
    line_types[index] = 'border-end';
    } else{
    line_types[index] = 'border-begin';
    }
}
if (line_type == 'row' && (index == line_types.length-1)){
    line_types[index] = 'last-row';
} else if(line_type == 'row' && line_types[index+1]=='nochange'){
    line_types[index] = 'last-row';
} else if(line_type == 'row' && line_types[index-1]=='border-end'){
    line_types[index] = 'first-row';
}
}

for (const [index, line_type] of line_types.entries()) {
if (line_type == 'row' && line_types[index-1]=='border-begin' && line_types[index+1]=='border-end'){
    line_types[index] = 'header';
}
}

new_content = ''
for (const [index, line] of lines.entries()) {
if (line_types[index] == 'h1'){
    new_content += '<h1 class="heading">' + lines[index].replace('#','') + '</h1>';
} else if (line_types[index] == 'h2'){
    new_content += '<h2 class="heading">' + lines[index].replace('##', '') + '</h2>';
} else if (line_types[index] == 'h3'){
    new_content += '<h3 class="heading">' + lines[index].replace('###', '') + '</h3>';
} else if (line_types[index] == 'bullet'){
    new_content += '<li>' + lines[index].replace('-', '') + '</li>';
} else if (line_types[index] == 'nochange'){
    new_content += '<p>' + lines[index] + '</p>';
}

if (line_types[index] == 'header'){
    new_content += '<div class="table-responsive"><table class="table table-striped"><tr>';
    cols = lines[index].split('|');
    cols.shift();
    cols.pop();
    for (const [index, col] of cols.entries()) {
    persian = false;
    if(Persian.test(col[0])){
        persian = true;
    }
    if (persian == false){
        new_content += '<th style="direction:ltr !important; text-align:right !important">' + col.replace('!','') + '</th>';
    }else{
        new_content += '<th style="direction:rtl">' + col.replace('!','').replace('.','') + '</th>';
    }
    }
    new_content += '</tr>'
}
if (line_types[index] == 'last-row'){
    cols = lines[index].split('|');
    cols.shift();
    cols.pop();
    new_content += '<tr>';
    for (const [index, col] of cols.entries()) {
    persian = false;
    if(Persian.test(col[0])){
        persian = true;
    }
    if (persian == false){
        new_content += '<td style="direction:ltr !important; text-align:right !important">' + col.replace('!','') + '</td>';
    }else{
        new_content += '<td style="direction:rtl">' + col.replace('!','').replace('.','') + '</td>';
    }
    }
    new_content += '</tr></div></table>';
}
if (line_types[index] == 'row'){
    cols = lines[index].split('|');
    cols.shift();
    cols.pop();
    new_content += '<tr>';
    for (const [index, col] of cols.entries()) {
        persian = false;
        if(Persian.test(col[0])){
        persian = true;
        }
        if (persian == false){
        new_content += '<td style="direction:ltr !important; text-align:right !important">' + col.replace('!','') + '</td>';
        }else{
        new_content += '<td style="direction:rtl">' + col.replace('!','').replace('.','') + '</td>';
        }
    }
}
}
document.getElementById('content').innerHTML = new_content;
document.getElementById('content').style.display = 'block';