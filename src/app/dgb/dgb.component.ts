import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dgb',
  templateUrl: './dgb.component.html',
  styleUrls: ['./dgb.component.css']
})
export class DgbComponent implements OnInit {
  breadcrumb = 'Inicio';
  mostrarAlerta: boolean = false;
  folio: string = '';  // Variable para almacenar el valor del folio

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const route = this.activatedRoute.root;
        this.breadcrumb = this.getBreadcrumb(route);
      });
  }

  // Lógica para buscar el folio
  buscarFolio(folio: string): void {
    if (folio && folio.trim() !== '') {
      console.log(`Buscando folio: ${folio}`);
      this.mostrarAlerta = false;  // Ocultar alerta si el folio está presente

      // Redirigir a la página de resultados, pasando el folio como parámetro
      this.router.navigate(['/resultado-folio', folio]);
    } else {
      this.mostrarAlerta = true;  // Mostrar alerta si el folio está vacío
      
      // Ocultar la alerta después de 3 segundos (3000 ms)
      setTimeout(() => {
        this.mostrarAlerta = false;
      }, 3000);
    }
  }

  // Lógica para restablecer el formulario
  restablecerFormulario(): void {
    this.folio = '';  // Limpiar el valor del folio
    this.mostrarAlerta = false;  // Ocultar alerta cuando se restablece
  }

  private getBreadcrumb(route: ActivatedRoute): string {
    let breadcrumb = '';
    route.children.forEach(child => {
      if (child.snapshot.data['breadcrumb']) {
        breadcrumb = child.snapshot.data['breadcrumb'];
      }
    });
    return breadcrumb || 'Inicio';
  }
}
