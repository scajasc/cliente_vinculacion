import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { EntityService } from 'src/app/providers/entity/entity.service';
import { AgreementService } from 'src/app/providers/agreement/agreement.service';
import { PersonService } from 'src/app/providers/person/person.service';
import { ProjectService } from 'src/app/providers/project/project.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    constructor
        (
            public restEntity: EntityService,
            public restAgreement: AgreementService,
            public restPerson: PersonService,
            public restProject: ProjectService
        ) {

    }

    projects: any = [];
    entities: any = [];
    students: any = [];
    agreements: any = [];

    ngOnInit() {
        this.getEntities();
        this.getProjects();
        this.getAgreements();
        this.getStudents();
    }

    getEntities() {
        this.entities = [];
        this.restEntity.getEntities().subscribe((data: {}) => {
            console.log(data);
            this.entities = data;
        });
    }

    getProjects() {
        this.projects = [];
        this.restProject.getProjects().subscribe((data: {}) => {
            console.log(data);
            this.projects = data;
        });
    }

    getAgreements() {
        this.agreements = [];
        this.restAgreement.getAgreements().subscribe((data: {}) => {
            console.log(data);
            this.agreements = data;
        });
    }

    getStudents() {
        this.students = [];
        this.restPerson.getStudents().subscribe((data: {}) => {
            console.log(data);
            this.students = data;
        });
    }
}
