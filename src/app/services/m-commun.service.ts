import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MCommunService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}
  projectURL = 'http://localhost:8090/projects';
  getAllProjects() {
    return this.http.get(this.projectURL);
  }
  addProject(project: any) {
    return this.http.post(
      'http://localhost:8090/projects/create',
      project,
      this.httpOptions
    );
  }
  deleteProject(name: any) {
    return this.http.delete(`${this.projectURL}/delete/${name}`);
  }
  // getProjectByName(project: any) {
  //   return this.http.get(`${this.projectURL}/byName/${project.name}`);
  // }

  // updateProject(project: any) {
  //   return this.http.put(
  //     `${this.projectURL}/update/${project.name}`,
  //     project,
  //     this.httpOptions
  //   );
  // }
  getProjectByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.projectURL}/byName/${name}`);
  }

  updateProject(project: any): Observable<any> {
    return this.http.put<any>(
      `${this.projectURL}/update/${project.name}`, // Assuming your API supports this endpoint
      project,
      this.httpOptions
    );
  }
}
