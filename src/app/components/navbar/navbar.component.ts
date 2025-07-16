import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  terminoBusqueda: string = '';

  constructor(private router: Router) {}

  buscarProducto() {
    if (this.terminoBusqueda.trim()) {
      this.router.navigate(['/buscar', this.terminoBusqueda.trim()]);
      this.terminoBusqueda = '';
    }
  }
}
