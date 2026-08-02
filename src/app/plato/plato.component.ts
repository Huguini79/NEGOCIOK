import { Component, signal} from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component(
    {
        selector: 'app-plato',
        imports: [ReactiveFormsModule],
        templateUrl: 'plato.html',
        styleUrl: '../app.css'
    }
)

export class Plato 
{
    imagenPlato = signal('');
    formulario = new FormGroup({
        nombrePlato: new FormControl(''),
        precioPlato: new FormControl('')
    })
    Cambio(event: Event)
    {
        const target = event.target as HTMLInputElement; /* Cogemos el evento entero, para después ver los archivos */
        const file_reader = new FileReader(); /* FileReader() */

        if (target.files && target.files[0]) /* Comprobamos si existe el archivo */
        {
            const file = target.files[0]; /* Seleccionamos el primer archivo */

            /* Una vez el archivo haya sido seleccionado y se haya leído todo su contenido, se va a ejecutar esta función */
            file_reader.onload = () =>
            {
                this.imagenPlato.set(file_reader.result as string);
            }

            file_reader.readAsDataURL(file); /* Hacer que el file reader lea el archivo seleccionado */
        }

    }

    Enviar()
    {
        let platos = JSON.parse(localStorage.getItem('platos') ?? '[]');
        platos.push(
            {
                nombrePlato: this.formulario.get('nombrePlato')?.value, 
                precioPlato: this.formulario.get('precioPlato')?.value, 
                imagenPlato: this.imagenPlato()
            }
        );
        localStorage.setItem('platos', JSON.stringify(platos));
        this.formulario.reset();
    }
}