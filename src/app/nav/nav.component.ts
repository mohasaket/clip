import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAthenticated = false;
  constructor(public modal: ModalService, public auth: AuthService, private afAuth: AngularFireAuth) {
    // this.auth.isAuthenticate$.subscribe( status=> {
    //   this.isAthenticated=status
    // }
    // );
  }

  ngOnInit(): void {
  }
  modalOpen($event: Event) {
    $event.preventDefault()
    this.modal.toggleModal('auth');
  }
  async logout($event: Event) {
    $event.preventDefault()
    await this.afAuth.signOut()
  }
}
