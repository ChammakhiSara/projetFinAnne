import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../services/User-service.service';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})

export class GestionUsersComponent implements OnInit {

  submitted = false;
  idEdit: any = 0;
  idDelete: any = 0;
  users: any;
  index: number;
  agencesList: any = ['Tunis', 'Sousse', 'Sfax'];

  /*  initialisation des entrées du formulaire add  */
  addUsersForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    agence: new FormControl('', [Validators.required]),
    nomUser: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  /*  initialisation des entrées du formulaire edit */
  editUsersForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    agence: new FormControl('', [Validators.required]),
    nomUser: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private service: UserServiceService) { }

  ngOnInit(): void {
    let response = this.service.getUsers();
    response.subscribe((data) => this.users = data);
  }

  /* fonction click addUser */
  addUser() {
    this.submitted = true;
    if (this.addUsersForm.invalid) {
      return;
    }
    else {
      let user = this.addUsersForm.value;
      console.log(user);
      let response = this.service.addUser(user);
      let msg: any;
      response.subscribe((data) => msg = data);

      console.log("retour" + msg);
      //recharger la page
      alert("User ajouté avec succés");
      window.location.reload();
    }
  }

  // copy des données à modifer dans le form du modification
  moveDataToModifForm(index: any) {
    let currentUser = this.users[index];
    console.log(this.users[index].id);
    this.idEdit = this.users[index].id;
    //  mettre les valeurs de l'objet < currentUser > dans les champs du formulaire edit 
    this.editUsersForm.patchValue(currentUser);
  }

  /* fonction click editUser */
  editUser(idEdit) {
    console.log(idEdit);
    let use = this.editUsersForm.value;
    let response = this.service.modifUser(idEdit, use);
    let msg;
    response.subscribe((data) => msg = data);
    alert("Utilisateur modifié avec succés");
    window.location.reload();
  }

  // Send ID to deleteForm 
  moveIDToDeleteForm(index) {
    this.idDelete = this.users[index].id;
    console.log(this.idDelete);
  }

  /* fonction click deleteUser */
  deleteUser(id) {
    let response = this.service.deleteUser(id);
    response.subscribe((data) => this.users = data);
    console.log(id);
    alert("Utilisateur supprimé avec succés");
    window.location.reload();
  }



}
