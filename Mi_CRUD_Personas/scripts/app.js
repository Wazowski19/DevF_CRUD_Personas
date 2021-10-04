var basePersonas = [];

function addPersona(e){
    
    nombre = document.getElementById("nombre").value;
    edad = document.getElementById("edad").value;
    color = document.getElementById("color").value;
    oficio = document.getElementById("oficio").value;
    mascota = document.getElementById("mascota").value;
    hobbie = document.getElementById("hobbie").value;
    pais = document.getElementById("pais").value;
    if(nombre != "" && edad != "" && color !="" && oficio != "" && mascota != "" && hobbie != "" && pais != ""){
        e.preventDefault();
        personaNueva = new Persona(nombre, edad, color, oficio, mascota, hobbie, pais);
        basePersonas.push(personaNueva);
        readPersona(event);
    }
    
}

function modifyPersona(e){
    e.preventDefault();
    id = document.getElementById("idUpdate").value;
    for(person of basePersonas){
        if(parseInt(person.getId()) == parseInt(id)){
            document.getElementById("nombre").value = person.getNombre();
            document.getElementById("edad").value = person.getEdad();
            document.getElementById("color").value = person.getColor();
            document.getElementById("oficio").value = person.getOficio();
            document.getElementById("mascota").value = person.getMascota();
            document.getElementById("hobbie").value = person.getHobbie();
            document.getElementById("pais").value = person.getPais();
        }
    }
    
}

function updatePersona(e){
    id = document.getElementById("idUpdate").value;
    nombre = document.getElementById("nombre").value;
    edad = document.getElementById("edad").value;
    color = document.getElementById("color").value;
    oficio = document.getElementById("oficio").value;
    mascota = document.getElementById("mascota").value;
    hobbie = document.getElementById("hobbie").value;
    pais = document.getElementById("pais").value;
    if(nombre != "" && edad != "" && color !="" && oficio != "" && mascota != "" && hobbie != "" && pais != ""){
        e.preventDefault();
        for(person of basePersonas){
            if(parseInt(person.getId()) == parseInt(id)){
                person.setNombre(nombre);
                person.setEdad(edad);
                person.setColor(color);
                person.setOficio(oficio);
                person.setMascota(mascota);
                person.setHobbie(hobbie);
                person.setPais(pais);
            }
        }
        readPersona(event);
    }
}

function readPersona(e){
    e.preventDefault();
    tabla = document.getElementById("tabla").value;
    tabla = `<tr class="text-center">
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Color de cabello</th>
                <th>Oficio</th>
                <th>Mascota</th>
                <th>Hobbie</th>
                <th>País</th>
            </tr>`
    for(person of basePersonas){
        tabla += `<tr class="text-center">
                    <td>${person.getId()}</td>
                    <td>${person.getNombre()}</td>
                    <td>${person.getEdad()}</td>
                    <td>${person.getColor()}</td>
                    <td>${person.getOficio()}</td>
                    <td>${person.getMascota()}</td>
                    <td>${person.getHobbie()}</td>
                    <td>${person.getPais()}</td>
                    <td> <button id="del" onclick="deletePerson(event,${person.getId()})"><i class="fa fa-times" aria-hidden="true"></i></button></td>
                </tr>`
        console.log(person.toString())
    }
    document.getElementById("tabla").innerHTML = tabla;
}

function deletePerson(e,id){
    e.preventDefault();
    for(let i=0; i<basePersonas.length; i++){
        if(basePersonas[i].getId() == id){
            basePersonas.splice(i,1);
        }
    }
    readPersona(event);
}


