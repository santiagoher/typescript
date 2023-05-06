// Clase (molde del objeto)
class Camiseta  {
    
    // Propiedades (caracteristicas del objeto
    // el public significa que al momento de instanciar la clase voy a tener disponible algunas propiedades para modificarlas
    
    public color: string;
    public modelo: string;
    public marca: String;
    public talla: string;
    public precio: number;

}

var camiseta = new Camiseta()
camiseta.color = "Rojo";
camiseta.modelo = "Manga Larga";
camiseta.marca = "nike";
camiseta.talla = "L";
camiseta.precio = 10;

console.log(camiseta)

