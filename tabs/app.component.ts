import { Component } from '@angular/core';


interface Tab {
  title: string;
  active: boolean;
  iconClass: string;
  content: string;
}

@Component({
  selector: 'app-root',
  template: `
  <div class="tabs">
    <ul class="tab-group">
      <li (click)="selectTab(i)" *ngFor="let tab of tabs; let i=index" class="tab" [class.active]="tab.active">
        <i class="icon {{tab.iconClass}}"></i>{{tab.title}}
      </li>
    </ul>
    <div class="tab-content-group">
      <ng-container *ngFor="let tab of tabs">
        <div *ngIf="tab.active" class="tab-content" [innerHTML]="tab.content"></div>
      </ng-container>
    </div>
  </div>
  `,

  styles: [`
  .tabs {
    min-width: 320px;
    max-width: 800px;
    padding: 50px;
    margin: 50px auto;
    background: #fff;
    border-radius: 4px;
  }

  .tab {
    display: inline-block;
    margin: 0 0 -1px;
    padding: 15px 25px;
    text-align: center;
    color: #555;
    border: 1px solid transparent;
    cursor: pointer;
  }

  .icon {
    margin-right: 10px;
  }

  .tab.active {
    border: 1px solid #ddd;
    border-top: 2px solid #f44336;
    border-bottom: 1px solid #fff;
  }

  .tab-content {
    /* display: none; */
    padding: 20px;
    border: 1px solid #ddd;
    line-height: 1.6rem;
  }
  `]
})
export class AppComponent {
  tabs: Tab[] = [
    {
      title: 'HTML',
      active: false,
      iconClass: 'fab fa-html5',
      content: `<strong> HTML(HyperText Markup Language)</strong> is the most basic building block of the Web.
        It describes and defines the content of a webpage along with the basic layout of the webpage.
        Other technologies besides HTML are generally used to describe a web page's
        appearance/presentation(CSS) or functionality/ behavior(JavaScript).`
    },
    {
      title: 'CSS',
      active: false,
      iconClass: 'fab fa-css3',
      content: `<strong>Cascading Style Sheets(CSS)</strong> is a stylesheet language used to describe
        the presentation of a document written in HTML or XML (including XML dialects
        such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen,
        on paper, in speech, or on other media.`
    },
    {
      title: 'JavaScript',
      active: true,
      iconClass: 'fab fa-js-square',
      content: `<strong>JavaScript(JS)</strong> is a lightweight interpreted or JIT-compiled programming
        language with first-class functions. While it is most well-known as the scripting
        language for Web pages, many non-browser environments also use it, such as Node.js,
        Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm,
        dynamic language, supporting object-oriented, imperative, and declarative
        (e.g. functional programming) styles.`
    }
  ];

  // selectTab(index: number) {
  //   // console.log(index);
  //   this.tabs.forEach((tab, i) => {
  //     index === i ? (tab.active = true) : (tab.active = false);
  //   });
  // }

  selectTab(index: number) {
    this.tabs.map((tab, i) => {
      index === i ? (tab.active = true) : (tab.active = false);
    });
  }
}
