import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardproducto-tarjeta',
  imports: [],
  templateUrl: './cardproducto-tarjeta.component.html',
  styleUrl: './cardproducto-tarjeta.component.css'
})
export class CardproductoTarjetaComponent implements OnInit {
  @Input() producto: any = {};
  @Input() index: number = 0;
  @Output() productoSeleccionado: EventEmitter<number>;
  constructor(private router: Router) {
    this.productoSeleccionado = new EventEmitter();
  }
  ngOnInit(): void {
  }
  verProducto() {
    this.router.navigate(['/producto', this.index]);
  }
}
