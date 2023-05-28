import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sqr-container',
  template: ` <ng-container>
    <div class="bg-sq-primary">
      <!-- Header -->
      <sqr-header></sqr-header>
      <main>
        <!-- Home section -->
        <sqr-home></sqr-home>

        <!-- About section -->
        <sqr-about></sqr-about>

        <!-- how to buy section -->
        <sqr-how-buy></sqr-how-buy>

        <!-- tokenomics section -->
        <sqr-tokenomics></sqr-tokenomics>

        <!-- roadmap section -->
        <sqr-roadmap></sqr-roadmap>

        <!-- contact section -->
        <sqr-contact></sqr-contact>
      </main>
      <!-- Footer -->
      <sqr-footer></sqr-footer>
    </div>
  </ng-container>  `,
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {}
