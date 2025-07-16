import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/productos.service';
import { Producto } from '../../models/producto.modelds';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cardbuscador',
  imports: [RouterModule],
  templateUrl: './cardbuscador.component.html',
  styleUrl: './cardbuscador.component.css'
})
export class CardbuscadorComponent implements OnInit {
  productos: Producto[] = [];
  termino: string = '';

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.productos = this.productoService.buscarProductos(this.termino);
    });
  }
}
