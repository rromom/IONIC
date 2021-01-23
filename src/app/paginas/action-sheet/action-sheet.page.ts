import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  carpeta: Carpetas[] = [
    {
      name: 'Ejercicios',
      icon: 'barbell-outline'
    },
    {
      name: 'Fotos',
      icon: 'images-outline'
    },
    {
      name: 'Documentos',
      icon: 'documents-outline'
    }
  ];

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Borrar Recurso');
        }
      }, {
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          console.log('Compartir Recurso');
        }
      }, {
        text: 'Reproducir',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Reproduciendo Recurso');
        }
      }, {
        text: 'Favorito',
        icon: 'heart',
        handler: () => {
          console.log('Agregar Recurso a Favoritos');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar Operacion');
        }
      }]
    });
    await actionSheet.present();
  }
}

interface Carpetas{
  name: string;
  icon: string;
}
