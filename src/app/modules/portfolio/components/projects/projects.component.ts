import { Component, signal } from '@angular/core';
import { arrayProjectsInterface } from '../../interface/projects';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<arrayProjectsInterface[]>([
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt: 'Logo do projeto Lista de Tarefas',
      width: '100px',
      heigth: '51px',
      description: '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links: [
        {
          name: "conheça o projeto",
          href: "https://kaioquaresmadesouza.netlify.app/"
        }
      ]
    }
  ]);
}
