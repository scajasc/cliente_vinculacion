import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { EntityService } from 'src/app/providers/entity/entity.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    constructor(
        public restEntity: EntityService
    ) {

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

}
