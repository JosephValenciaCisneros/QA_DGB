import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado-folio',
  templateUrl: './resultado-folio.component.html',
  styleUrls: ['./resultado-folio.component.css']
})
export class ResultadoFolioComponent implements OnInit {
  folio: string = ''; // Folio recibido de la URL
  datosConsulta: any = {}; // Datos simulados de la consulta

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener el folio de la URL
    this.folio = this.route.snapshot.paramMap.get('folio') || '';
    
    // Simular la consulta de datos en base al folio
    this.simularConsulta();
  }

  // Método para simular la consulta
  simularConsulta(): void {
    if (this.folio) {
      // Datos simulados de la consulta, basados en el folio
      this.datosConsulta = {
        nombre: 'Héctor Antonio Rodríguez Barrera',
        tipoDocumento: 'Certificado Parcial de Estudios',
        folio: 'd4f442a',
        estudios: 'Bachillerato, con formación elemental para el trabajo',
        periodoEstudios: '22/03/2019 al 24/02/2024',
        formacionLaboral: '-',
        autoridadEmisora: 'Preparatoria Abierta',
        fechaRegistro: '15/11/2024 12:03',
        promedio: 7.1,
        promedioTexto: 'siete punto uno',
        estatusDocumento: 'Registrado'
      };
    }
  }
}
