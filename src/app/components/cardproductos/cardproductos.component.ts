import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.modelds';
import { ProductoService } from '../../services/productos.service';
import { Router } from '@angular/router';
import { CardproductoTarjetaComponent } from "../cardproducto-tarjeta/cardproducto-tarjeta.component";

@Component({
  selector: 'app-cardproductos',
  imports: [CardproductoTarjetaComponent],
  templateUrl: './cardproductos.component.html',
  styleUrl: './cardproductos.component.css'
})
export class CardproductosComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private _serviceProducto: ProductoService, private router: Router) {
  }
  ngOnInit(): void {
    this.productos = this._serviceProducto.getProductos();
  }
  verProducto(idx: number) {
    this.router.navigate(['/producto', idx]);
  }
}
