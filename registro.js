var tablaElementos = document.getElementById('tabla-elementos');

var txtTitulo = document.getElementById('titulo');
var txtDescripcion = document.getElementById('descripción');
var ddlTipo = document.getElementById('tipo');

var btnAgregar = document.getElementById('agregar');

var datos = [];

function btnEditar_Click(event){
    txtTitulo.value = this.elemento.titulo;
    txtDescripcion.value = this.elemento.descripcion;
    ddlTipo.value = this.elemento.tipo;
}

function btnAgregar_Click(event){
    var titulo = txtTitulo.value || '';
    var descripcion = txtTitulo || '';
    var tipo = ddlTipo.value || '';
}

if(!titulo || !titulo.trim().lenght){
    alert('debe ingresar un titulo');
    return;
}

if(!descripcion || !descripcion.trim().lenght){
    alert('debe ingresar una descripcion');
    return;
}

txtTitulo.value='';
txtDescripcion = '';

txtTitulo.focus();

var item = {
    titulo: titulo.trim(),
    descripcion: descripcion.trim(),
    tipo: tipo,
    fecha: new Date()
}

datos.push(item);

//tablaElementos.innerHTML ='';

while (tablaElementos.childElementCount > 0){
    tablaElementos.removeChild(tablaElementos.firstElementChild);
    
}