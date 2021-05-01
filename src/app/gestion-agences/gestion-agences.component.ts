import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AgenceServiceService } from '../services/agence-service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-agences',
  templateUrl: './gestion-agences.component.html',
  styleUrls: ['./gestion-agences.component.css']
})

export class GestionAgencesComponent implements OnInit {

  submitted = false;
  idEdit: any = 0;
  idDelete: any = 0;
  agences: any;
  index: number;

  /*  initialisation des entrées du formulaire add  */
  addAgencesForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required])
  });

  /*  initialisation des entrées du formulaire edit */
  editAgencesForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required])
  });

  constructor(private service: AgenceServiceService, private router : Router) { }

  ngOnInit(): void {
    let response = this.service.getAgences();
    response.subscribe((data) => this.agences = data);
    
  }

  /* fonction click addAgence */
  addAgence() {
    this.submitted = true;
    if (this.addAgencesForm.invalid) {
      return;
    }
    else {
      let agence = this.addAgencesForm.value;      
      let response = this.service.addAgence(agence);      
      response.subscribe(
        data=>{
          alert("Agence ajouté avec succés");
           // refresh component
          this.ngOnInit()
        },
        error=>{
          alert("Une erreur s'est produite veuillez réessayer")
        }
      );
       
      
    }
  }

  // copy des données à modifer dans le form du modification
  moveDataToModifForm(index: any) {
    let currentAgence = this.agences[index];
    console.log(this.agences[index].id);
    this.idEdit = this.agences[index].id;
    //  mettre les valeurs de l'objet < currentAgence > dans les champs du formulaire edit 
    this.editAgencesForm.patchValue(currentAgence);

   
  }
  
  /* fonction click editAgence */
  editAgence(idEdit) {
    
    console.log(idEdit);
    let agen = this.editAgencesForm.value;
    let response = this.service.modifAgence(idEdit, agen);
    
    response.subscribe(
      data=>{
        alert("Agence modifié avec succés");
         // refresh component
        this.ngOnInit()
      },
      error=>{
        alert("Une erreur s'est produite veuillez réessayer")
      }
    );
   
  }

  // Send ID to deleteForm 
  moveIDToDeleteForm(index) {
    this.idDelete = this.agences[index].id;
    console.log(this.idDelete);
  }

  /* fonction click deleteAgence */
  deleteAgence(id) {
    let response = this.service.deleteAgence(id);
    response.subscribe(
      data=>{
        alert("Agence supprimé avec succés");
         // refresh component
        this.ngOnInit()
      },
      error=>{
        alert("Une erreur s'est produite veuillez réessayer")
      }

    );
    
  }




}
