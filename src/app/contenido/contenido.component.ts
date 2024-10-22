import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {
  productos: Producto[] = [];

  
  crearProducto(nombre: string, descripcion: string, precio: number, imagen: string) {
    const nuevoProducto: Producto = { nombre, descripcion, precio, imagen };
    this.productos.push(nuevoProducto);
    alert('Producto creado exitosamente');
  }
}