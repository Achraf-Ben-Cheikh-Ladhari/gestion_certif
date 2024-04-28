import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-createformation',
  templateUrl: './createformation.component.html',
  styleUrls: ['./createformation.component.css']
})
export class CreateformationComponent implements OnInit {
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  err = undefined;
  formation: any = {
    titre: '',
    description: '',
    duree: '',
    lieu: '',
    objectifs: [],
    ressources: [],
    formateur: '',
    employes: [],
    status:''
  };

  users: any;
  usersFormateur: any[] = [];
  usersEmployes: any[] = [];
  obj: any = '';
  resource: any;
  id: any;
  constructor(private _auth: AuthService, private router: Router, private act: ActivatedRoute, private formationRoute: FormationService) { }

  ngOnInit(): void {

    this.id=this.act.snapshot.paramMap.get('id');
    if (this.id != undefined){
      this.formationRoute.getFormationById(this.id).subscribe(res=>{
        this.formation=res
      })
    }

    this._auth.getAll().subscribe(res => {
      this.users = res;

      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].role === 'formateur') {
          this.usersFormateur.push(this.users[i]);
        } else if (this.users[i].role === 'employe') {
          this.usersEmployes.push(this.users[i]);
        }
      }
    });
  }
  isUserSelected(user: any): boolean {
    return this.usersFormateur.includes(user._id);
}
  modify() {
    this.formationRoute.update(this.id,this.formation).subscribe(res=>{
      this.router.navigate(['/formation'])
    })
  }
  ajout() {
    console.log(this.formation);
    
    this.formationRoute.create(this.formation)
      .subscribe(
        res => {
          this.router.navigate(['/formation']);
        }, err => {
          this.err = err;
        }
      )
    //console.log(this.formation);

  }
  toggleUser(user: any, event: MatCheckboxChange) {
    if (event.checked && !this.formation.employes.includes(user._id)) {
      this.formation.employes.push(user._id); // Add formation
    } else if (!event.checked) {
      const index = this.formation.employes.indexOf(user._id);
      if (index !== -1) {
        this.formation.employes.splice(index, 1); // Remove formation if already present
      }
    }
    // console.log(this.formation.formations);
  }

}
