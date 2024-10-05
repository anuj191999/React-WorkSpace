const createDiv=function(){
    const div=document.createElement('div');
    const statement=document.createTextNode('Anuj Tracking App');

    div.append(statement);
    document.body.appendChild(div);
};

createDiv();