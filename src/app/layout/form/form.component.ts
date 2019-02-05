import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { EntityService } from 'src/app/providers/entity/entity.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    formularioEmp:FormGroup
   
    constructor(
        public restEntity: EntityService,
        private fb:FormBuilder
    ) {
        this.formularioEmp = fb.group({
            name:[null, Validators.required],
            address:[null, Validators.required],
            selectbasic:[null, Validators.required],
            email:[null, Validators.email],
            phone:[null, Validators.compose([Validators.required, Validators.maxLength(10)])]
        })

    }
    //variables
    data = {
        entity:
        {
            entity_type_id: 1,
            name: "",
            address: "",
            email: "",
            telephone: ""
        }
    }
    ngOnInit() {

    }

    addEntity() {
        this.restEntity.addEntity(this.data).subscribe((result) => {
            console.log(result);
        }, (err) => {
            console.log(err);
        });
    }

    public inputValidator(event: any) {
       
        const pattern = /^[a-zA-Z]*$/;           
        if (!pattern.test(event.target.value)) {
          event.target.value = event.target.value.replace(/[^a-zA-Z]/g, "");
          
    
        }
      }

}
