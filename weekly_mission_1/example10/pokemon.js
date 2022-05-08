class Pokemon {
  constructor(nombre){
    this.nombre =nombre;
  }

  sayHello(){
    console.log(`Mi pokemon ${this.nombre} te saluda!!!`);
  }
}

export default Pokemon;