import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private modalController: ModalController) {}

  async dismissAllModals() {
    // Iterate until there are no more modals
    let topModal = await this.modalController.getTop();
    while (topModal) {
      await topModal.dismiss();
      topModal = await this.modalController.getTop();
    }
  }
}
