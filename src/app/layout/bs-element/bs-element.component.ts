import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CoordinatorService } from 'src/app/providers/coordinator/coordinator.service';

@Component({
    selector: 'app-bs-element',
    templateUrl: './bs-element.component.html',
    styleUrls: ['./bs-element.component.scss'],
    animations: [routerTransition()]
})
export class BsElementComponent implements OnInit {
    //variables que vamos a usar
    coordinatorData = {
        person: {
            name: "",
            lastname: "",
            dni: "",
            age : "",
            address : "",
            cellphone : "",
             email : ""
        },
        coordinator: {

        }
    }

    constructor(
        public restCoordinator : CoordinatorService
    ) {

    }

    ngOnInit() {
        
    }

    addCoordinator() {
        this.restCoordinator.addCoordinador(this.coordinatorData).subscribe((result) => {
            console.log(result);
          }, (err) => {
            console.log(err);
          });
    }
}
