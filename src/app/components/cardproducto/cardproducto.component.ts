import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Producto } from '../../models/producto.modelds';
import { ProductoService } from '../../services/productos.service';

@Component({
  selector: 'app-cardproducto',
  imports: [RouterLink],
  templateUrl: './cardproducto.component.html',
  styleUrl: './cardproducto.component.css'
})
export class CardproductoComponent implements OnInit {
  producto: any = {};
  constructor(private activateRoute: ActivatedRoute, private _productoServices: ProductoService) {

  }
  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id') || '0';
    this.producto = this._productoServices.getProducto(parseInt(id));
  }

}
