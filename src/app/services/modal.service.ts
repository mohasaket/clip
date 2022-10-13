import { Injectable } from '@angular/core';
interface IModals {
  id: string;
  visible: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModals[] = [];

  constructor() {}

  register(id: string) {
    this.modals.push({ id, visible: false });
    console.log(this.modals);
  }

  isModalOpen(id: string): boolean {
    return !!this.modals.find((e) => e.id===id)?.visible;
  }

  toggleModal(id:string) {
   const modal=this.modals.find((e) => e.id);
   if (modal) {
modal.visible=!modal.visible
   }
  }
}
