import { Component, OnInit } from '@angular/core'

@Component
({
    selector: 'app-ver-platos',
    templateUrl: 'verplatos.html',
    styleUrl: '../app.css'
})

export class VerPlatos {
    platos_co: any = [];
    ngOnInit()
    {
        this.recargarPlatos();
    }

    recargarPlatos()
    {
        let platos = JSON.parse(localStorage.getItem('platos') ?? '[]');
        this.platos_co = platos;
    }

    Eliminar(plato: any)
    {
        let continuar = confirm(`¿Deseas eliminar el plato ${plato.nombrePlato} de ${plato.precioPlato} €?`);
        if (continuar)
        {
            this.platos_co = this.platos_co.filter((c: string) => c != plato);
            localStorage.setItem('platos', JSON.stringify(this.platos_co));
        }
    }
}