import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PersonService } from 'src/app/providers/person/person.service';
import { ProjectService } from 'src/app/providers/project/project.service';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [routerTransition()],

})
export class GridComponent implements OnInit {
    constructor(
        public restPeople: PersonService,
        public restProject: ProjectService
    ) {

    }
    data = {
        project:
        {
            student_id: "",
            coordinator_id: "",
            tutor_id: "",
            theme: "",
            hours: "",
            start_date: "",
            end_date: "",
            route_file: "asdasdasd"
        }
    }

    students:any = [];
    tutors:any = [];
    coordinators:any = [];

    opcionSeleccionado: string  = '0';
    verSeleccion: string        = '';


    ngOnInit() {
        this.getCoordinators();
        this.getStudents();
        this.getTutors();
    }

    getStudents() {
        this.students = [];
        this.restPeople.getStudents().subscribe((data: {}) => {
            console.log(data);
            this.students = data;
        });
    }

    getTutors() {
        this.tutors = [];
        this.restPeople.getTutors().subscribe((data: {}) => {
            console.log(data);
            this.tutors = data;
        });
    }

    getCoordinators() {
        this.coordinators = [];
        this.restPeople.getCoordinators().subscribe((data: {}) => {
            console.log(data);
            this.coordinators = data;
        });
    }

    addProject(id_student, id_tutor, id_coordinator){
        this.data.project.student_id = id_student;
        this.data.project.coordinator_id = id_coordinator;
        this.data.project.tutor_id = id_tutor;

        this.restProject.addProject(this.data).subscribe((result) => {
            console.log(result);
        }, (err) => {
            console.log(err);
        });

    }

    
}


