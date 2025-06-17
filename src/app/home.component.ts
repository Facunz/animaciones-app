import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home-container">
      <h1>Animaciones Entre Componentes</h1>
      <div class="buttons-container">
        <a [routerLink]="['/details']" class="route-button details-button">Ver Detalles</a>
      </div>
      <p class="instructions">Haz clic en el botón "Ver Detalles" para navegar al componente de detalles con animación.</p>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 800px;
      margin: 50px auto;
      text-align: center;
      padding: 30px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      color: white;
    }
    
    h1 {
      font-size: 2.5em;
      margin-bottom: 30px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
    
    .buttons-container {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .route-button {
      background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
      color: white;
      border: none;
      padding: 15px 30px;
      border-radius: 50px;
      font-size: 1.1em;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-decoration: none;
    }
    
    .details-button {
      background: linear-gradient(135deg, #fd1d1d 0%, #833ab4 100%);
    }
    
    .route-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
    }
    
    .instructions {
      font-size: 1.1em;
      line-height: 1.5;
      margin-top: 20px;
    }
  `]
})
export class HomeComponent {
}
