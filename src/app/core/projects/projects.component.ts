import { Component } from '@angular/core';
import { ProjectService } from 'src/app/shared/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects:any = {};

  constructor(private projectService:ProjectService){}

  ngOnInit(){
    this.projectService.getProjects().subscribe(data =>{
      this.projects = data
    })
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  
}
