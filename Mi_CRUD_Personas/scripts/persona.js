class Persona{
    static id_contador = 0;

    constructor(nombre, edad, color, oficio, mascota, hobbie, pais){
        this._id = ++Persona.id_contador;
        this._nombre = nombre;
        this._edad = edad;
        this._color = color;
        this._oficio = oficio;
        this._mascota = mascota;
        this._hobbie = hobbie;
        this._pais = pais;
    }

    getId(){
        return this._id;
    }

    getNombre(){
        return this._nombre;
    }

    getEdad(){
        return this._edad;
    }

    getColor(){
        return this._color;
    }

    getOficio(){
        return this._oficio;
    }

    getMascota(){
        return this._mascota;
    }

    getHobbie(){
        return this._hobbie;
    }

    getPais(){
        return this._pais;
    }


    setNombre(nombre){
        this._nombre = nombre;
    }

    setEdad(edad){
        this._edad = edad;
    }

    setColor(color){
        this._color = color;
    }

    setOficio(oficio){
        this._oficio = oficio;
    }

    setMascota(mascota){
        this._mascota = mascota;
    }

    setHobbie(hobbie){
        this._hobbie = hobbie;
    }

    setPais(pais){
        this._pais = pais;
    }

    toString(){
        return `La persona #${this._id} con el nombre: ${this._nombre} de edad de ${this._edad}
        cuyo país de nacimiento es: ${this._pais}, tiene el cabello de color ${this._color}, es 
        ${this._oficio} de profesión, le gusta ${this._hobbie} y tiene ${this._mascota} como mascota`
    }
}