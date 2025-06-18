import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { trigger, transition, style, animate, query, animateChild, group, state, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // Fade In / Fade Out (Aparecer / Desvanecer)
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('in => out', animate('1000ms ease-in')),
      transition('out => in', animate('200ms ease-out'))
    ]),

    // Slide In / Slide Out (Deslizar Dentro / Fuera)
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(-10)' })),
      state('out', style({ transform: 'translateX(100px)' })),
      transition('in => out', animate('100ms ease-in')),
      transition('out => in', animate('1000ms ease-out'))
    ]),

    // Expand/Collapse (Expandir/Contraer)
    trigger('expandCollapse', [
      state('expanded', style({ transform: 'scale(1)' })),
      state('collapsed', style({ transform: 'scale(0.1)' })),
      transition('expanded => collapsed', animate('300ms ease-in')),
      transition('collapsed => expanded', animate('300ms ease-out'))
    ]),

    // List Stagger (Escalonado) - bounce effect (efecto rebote)
    trigger('listStagger', [
      state('normal', style({ transform: 'translateY(10)' })),
      state('bounced', style({ transform: 'translateY(-90px)' })),
      transition('normal => bounced', animate('10000ms ease-out', keyframes([
        style({ transform: 'translateY(-10)', offset: 0 }),
        style({ transform: 'translateY(-90px)', offset: 0.3 }),
        style({ transform: 'translateY(-50px)', offset: 1 })
      ]))),
      transition('bounced => normal', animate('300ms ease-in'))
    ]),

    // Rotate (Rotar)
    trigger('rotate', [
      state('normal', style({ transform: 'rotate(1deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('normal => rotated', animate('400ms ease-in')),
      transition('rotated => normal', animate('400ms ease-out'))
    ]),

    // Zoom In/Out (Acercar/Alejar)
    trigger('zoomInOut', [
      state('normal', style({ transform: 'scale(1)' })),
      state('zoomed', style({ transform: 'scale(1.2)' })),
      transition('normal => zoomed', animate('350ms ease-in')),
      transition('zoomed => normal', animate('350ms ease-out'))
    ]),

    // Flip (Voltear en eje Y)
    trigger('flip', [
      state('normal', style({ transform: 'rotateY(60deg)' })),
      state('flipped', style({ transform: 'rotateY(360deg)' })),
      transition('normal => flipped', animate('600ms ease-in-out')),
      transition('flipped => normal', animate('1000ms ease-in-out'))
    ]),

    // Shake (Temblar) - al error (en error)
    trigger('shake', [
      state('normal', style({ transform: 'translateX(0)' })),
      state('shaking', style({ transform: 'translateX(0)' })),
      transition('normal => shaking', animate('1000ms ease-in-out', keyframes([
        style({ transform: 'translateX(0)', offset: 0 }),
        style({ transform: 'translateX(-10px)', offset: 0.1 }),
        style({ transform: 'translateX(10px)', offset: 0.2 }),
        style({ transform: 'translateX(-10px)', offset: 0.3 }),
        style({ transform: 'translateX(10px)', offset: 0.4 }),
        style({ transform: 'translateX(-10px)', offset: 0.5 }),
        style({ transform: 'translateX(10px)', offset: 0.6 }),
        style({ transform: 'translateX(500px)', offset: 0.7 }),
        style({ transform: 'translateX(10px)', offset: 0.8 }),
        style({ transform: 'translateX(-400px)', offset: 0.9 }),
        style({ transform: 'translateX(0)', offset: 1 })
      ]))),
      transition('shaking => normal', animate('500ms ease-out'))
    ]),

    // Pulse (Pulsar) - latido o rebote sutil (latido o rebote sutil)
    trigger('pulse', [
      state('normal', style({ transform: 'scale(1)' })),
      state('pulsing', style({ transform: 'scale(1)' })),
      transition('normal => pulsing', animate('1000ms ease-in-out', keyframes([
        style({ transform: 'scale(1)', offset: 0 }),
        style({ transform: 'scale(1.6)', offset: 0.25 }),
        style({ transform: 'scale(0.1)', offset: 0.5 }),
        style({ transform: 'scale(1.9)', offset: 0.75 }),
        style({ transform: 'scale(1)', offset: 1 })
      ]))),
      transition('pulsing => normal', animate('20000ms ease-out'))
    ]),

    // Transicion entre ventanas (Transition between windows) - slide from left to right (deslizar de izquierda a derecha)
    trigger('slideTransition', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 0.3 }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ]),

    // Animaciones entre rutas - Transición entre componentes principales
    //El elemento aparece en pantalla → :enter
    //El elemento desaparece del DOM → :leave
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ left: '100%', opacity: 0 })
        ], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [
            animate('5000ms ease-out', style({ left: '-100%', opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            animate('1500ms ease-out', style({ left: '0%', opacity: 1 }))
          ], { optional: true })
        ]),
        query(':enter', animateChild(), { optional: true }),
      ])
    ])
  ]
})
export class AppComponent {
  fadeState = 'out';
  slideState = 'in';
  expandState = 'expanded';
  staggerState = 'bounced';
  rotateState = 'rotated';
  zoomState = 'zoomed';
  flipState = 'normal';
  shakeState = 'normal';
  pulseState = 'normal';
  showView = true;

  constructor(private router: Router) { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  // Metodos para manejar mouse events
  onMouseEnter(animation: string) {
    switch (animation) {
      case 'fade':
        this.fadeState = 'out';
        break;
      case 'slide':
        this.slideState = 'out';
        break;
      case 'expand':
        this.expandState = 'collapsed';
        break;
      case 'stagger':
        this.staggerState = 'bounced';
        break;
      case 'rotate':
        this.rotateState = 'rotated';
        break;
      case 'zoom':
        this.zoomState = 'zoomed';
        break;
      case 'flip':
        this.flipState = 'flipped';
        break;
      case 'shake':
        this.shakeState = 'shaking';
        break;
      case 'pulse':
        this.pulseState = 'pulsing';
        break;
    }
  }

  onMouseLeave(animation: string) {
    switch (animation) {
      case 'fade':
        this.fadeState = 'in';
        break;
      case 'slide':
        this.slideState = 'in';
        break;
      case 'expand':
        this.expandState = 'expanded';
        break;
      case 'stagger':
        this.staggerState = 'normal';
        break;
      case 'rotate':
        this.rotateState = 'normal';
        break;
      case 'zoom':
        this.zoomState = 'normal';
        break;
      case 'flip':
        this.flipState = 'normal';
        break;
      case 'shake':
        this.shakeState = 'normal';
        break;
      case 'pulse':
        this.pulseState = 'normal';
        break;
    }
  }

  // Metodo para cambiar entre ventanas
  toggleView() {
    this.showView = !this.showView;
  }

  // Metodo para navegar a la pegina de detalles
  navigateToDetails() {
    this.router.navigate(['/details']);
  }
}
