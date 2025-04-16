import { Component, signal } from '@angular/core';
import { IKnowLedge } from '../../interface/knowledge';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.css'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowLedge[]>([

    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de HTML5',
    },

    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de CSS3',
    },

    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Ícone de conhecimento de TypeScript'
    },

    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de Angular',
    },

    {
      src: 'assets/icons/knowledge/csharp.svg',
      alt: 'Ícone de conhecimento de CSharp'
    },

    {
      src: 'assets/icons/knowledge/dotnet.svg',
      alt: 'Ícone de conhecimento de DotNet'
    },

    {
      src: 'assets/icons/knowledge/git.svg',
      alt: 'Ícone de conhecimento de GIT'
    }
  ])

}
