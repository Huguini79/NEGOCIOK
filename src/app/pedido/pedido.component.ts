import { Component, OnInit } from '@angular/core'

@Component(
  {
    selector: 'app-pedido',
    templateUrl: 'pedido.html',
    styleUrl: '../app.css'
  }
)

export class Pedido {
  platos: any = [];
  total = 0;
  ngOnInit()
  {
    this.rellenarLista();
  }

  rellenarLista()
  {
    let platos_localStorage = JSON.parse(localStorage.getItem('platos') ?? '[]');
    this.platos = platos_localStorage;
  }

  Anadir(plato: any)
  {
    this.total += plato.precioPlato;
    let textarea = document.getElementById('platos_seleccionados') as HTMLInputElement;

    textarea.value += `Plato seleccionado: ${plato.nombrePlato} de ${plato.precioPlato} €\n`;
  }
}
