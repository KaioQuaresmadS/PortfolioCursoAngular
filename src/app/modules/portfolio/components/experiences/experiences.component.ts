import { Component, signal } from '@angular/core';
import { arrayExeperience } from '../../interface/exeperience';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<arrayExeperience[]>([
    {
      summary: {
        strong: 'FullStack - Freelancer',
        p: 'Sistema de estoque para estudo Mar 2025 - Presente'
      },
      text: '<p>Trabalhei na criação de um sistema de estoque, focado em organização e controle eficiente de produtos, utilizando Angular, .NET e SQL Server para garantir uma experiência intuitiva e um banco de dados robusto.</p>'

    },
    {
      summary: {
        strong: 'FullStack - Freelancer',
        p: 'Igreja local Dezembro 2024 - Mar 2025'
      },
      text: '<p>Atualmente, estou desenvolvendo um sistema para uma igreja local, com funcionalidades voltadas para gestão de membros, eventos e contribuições, aplicando tecnologias modernas para um fluxo de trabalho ágil e seguro.</p>'

    },
    {
      summary: {
        strong: 'FullStack - Freelancer',
        p: 'Agenda Digital Mar 2025 - Presente'
      },
      text: '<p>Além disso, estou estudando para criar uma agenda digital para um jardineiro, permitindo um controle simples e eficaz dos agendamentos, clientes e serviços prestados.</p>'

    },
  ])

}
