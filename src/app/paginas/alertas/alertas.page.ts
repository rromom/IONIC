import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async cargar_aleta() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Informacion',
      subHeader: 'Pruebas',
      message: 'Realizando las pruebas respectivas sobre componeentes',
      buttons: [{
        text: 'Ok',
        cssClass: 'primary',
        handler: () => {
          console.log('onfirmar informacion ');
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirmar cancelacion: blah');
        }
      }
    ]
    });

    await alert.present();
  }

  async CargarFormulario(){
    const formulario = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Formulario',
      subHeader: 'Ingrese los datos solicitados',
      message: 'Sus datos seran requeridos para llenar su cita medica',
      inputs: [
        {
          name: 'txtname',
          type: 'text',
          placeholder: 'Ingrese su nombre'
        },
        {
          name: 'txtcedula',
          type: 'text',
          placeholder: 'Ingrese su numero de cedula'
        },
        {
          name: 'txtemail',
          type: 'email',
          placeholder: 'ingrese su correo'
        }
      ],
      buttons: [
        {
          text: 'Enviar',
          handler: () => {
            console.log('Confirma el envio');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelar Envio');
          }
        }
      ]
    });
    await formulario.present();
  }
}
