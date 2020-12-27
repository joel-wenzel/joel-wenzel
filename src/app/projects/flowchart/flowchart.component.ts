import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFlowchart, NgFlowchartCanvasDirective } from '@joelwenzel/ng-flowchart';

@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.scss']
})
export class FlowchartComponent implements OnInit {

  selectedPalette = 'standard';

  @ViewChild(NgFlowchartCanvasDirective)
  chart: NgFlowchartCanvasDirective;

  @ViewChild('standardTemplate', { static: true })
  standardTemplate: TemplateRef<any>;

  @ViewChild('routerTemplate', { static: true })
  routerTemplate: TemplateRef<any>;

  @ViewChild('routeTemplate')
  routeTemplate: TemplateRef<any>;

  palettes = [
  ]

  operations = [];

  showMenu = false;

  callbacks: NgFlowchart.Callbacks;

  options: NgFlowchart.Options = null;

  constructor(private route: ActivatedRoute, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        let param = params['palette'] || 'standard';
        this.selectedPalette = param;
      });

    this.callbacks = {
      canAddStep: this.canAddStep.bind(this)
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.palettes = [
        {
          id: 'standard',
          name: 'Standard',
          enabled: true,
          stackBlitz: 'https://stackblitz.com/edit/ng-flowchart-standard?file=src/app/app.component.html',
          operations: [
            {
              data: {
                name: 'Filter',
                icon: 'filter_alt',
                color: '#e17055',
                content: 'Only todays orders'
              },
              template: this.standardTemplate
            },
            {
              data: {
                name: 'Variable',
                icon: 'calculate',
                color: '#00b894',
                content: 'Current date',
              },

              template: this.standardTemplate
            },
            {
              data: {
                name: 'Map',
                icon: 'translate',
                color: '#00cec9',
                content: 'Convert format',
              },

              template: this.standardTemplate
            },
            {
              data: {
                name: 'Rest',
                icon: 'calculate',
                color: '#ffeaa7',
                content: 'POST - Payload',
              },

              template: this.standardTemplate
            },
            {
              data: {
                name: 'Notify',
                icon: 'notifications',
                color: '#e84393',
                content: 'Dev Team',
              },

              template: this.standardTemplate
            }
          ]
        },

        {
          id: 'customrouting',
          name: 'Custom Routing',
          enabled: true,
          stackBlitz: 'https://stackblitz.com/edit/ng-flowchart-customrouting?file=src/app/app.component.html',
          operations: [
            {
              data: {
                name: 'Router',
                icon: 'mediation',
                color: '#a29bfe',
              },

              template: this.routerTemplate
            },
            {
              data: {
                name: 'Some Action',
                icon: 'build',
                color: '#fdcb6e',
                content: 'Do Something',
              },

              template: this.standardTemplate
            },
          ]
        }

      ];
      this.onPaletteChange();
    })

  }

  canAddStep(dropCandidate: NgFlowchart.DropEvent) {
    if (dropCandidate.adjacent?.getData().name == 'Router' && dropCandidate.position == 'BELOW') {
      if (dropCandidate.step.getData().name !== 'Route') {
        this.snackbar.open('Only Route steps can be children of the Router. Click the "Add Route" button', null, {
          duration: 5000
        });
        return false;
      }
    }
    return true;
  }

  onDeleteClicked(id: string, recursive: boolean = false) {
    this.chart.getFlow().getStep(id).delete(recursive);
  }

  get stackBlitzLink() {
    return this.palettes.find(pal => pal.id === this.selectedPalette).stackBlitz;
  }

  onPaletteChange() {
    const palette = this.palettes.find(pal => pal.id == this.selectedPalette);
    this.operations = palette.operations;
    this.router.navigate([],
      {
        relativeTo: this.route,
        queryParams: {
          palette: this.selectedPalette
        },
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });

    if (this.chart.getFlow().getRoot()) {
      this.chart.getFlow().clear();
    }




  }

  onAddRoute(id) {
    this.chart.getFlow().getStep(id).addChild(this.routeTemplate, {
      asSibling: true,
      data: {
        name: 'Route',
        route: {
          name: null,
          condition: null
        }

      }
    })
  }

  onEditRoute(id) {
    let routeData = this.chart.getFlow().getStep(id).getData();
    let dateStr = (Date.now() + "");
    routeData.route.name = dateStr.substr(dateStr.length - 4, 4);
  }

  downloadSource() {
    let json = this.chart.getFlowJSON();

    this.download('FlowSource.json', json);
  }

  clearCanvas() {
    if (this.chart.getFlow().getRoot()) {
      this.chart.getFlow().clear();
    }
  }

  download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

}
