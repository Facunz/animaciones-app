import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="details-container">
      <h2>Detalles del Videojuego</h2>
      <div class="game-info">
        <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop&crop=center" alt="Detalles del Juego">
        <div class="info-text">
          <h3>ddd</h3>
          <p>Un clásico de Nintendo donde Mario debe rescatar a la Princesa Peach de las garras de Bowser.</p>
          <p>Género: Plataformas</p>
          <p>Año: 1985</p>
        </div>
      </div>
      <button (click)="onClose()" class="back-btn">Volver</button>
    </div>
  `,
  styles: [`
    .details-container {
      padding: 30px;
      background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%);
      border-radius: 15px;
      color: white;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      max-width: 800px;
      margin: 0 auto;
    }
    
    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2em;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
    
    .game-info {
      display: flex;
      align-items: center;
      gap: 30px;
      margin-bottom: 30px;
    }
    
    img {
      width: 300px;
      height: 200px;
      border-radius: 10px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      object-fit: cover;
    }
    
    .info-text {
      flex: 1;
    }
    
    .info-text h3 {
      font-size: 1.5em;
      margin-bottom: 15px;
    }
    
    .info-text p {
      margin-bottom: 10px;
      line-height: 1.5;
    }
    
    .back-btn {
      background: linear-gradient(135deg, #ff6b6b 0%, #556270 100%);
      color: white;
      border: none;
      padding: 12px 25px;
      border-radius: 50px;
      font-size: 1em;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      display: block;
      margin: 0 auto;
    }
    
    .back-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }
  `]
})
export class DetailsComponent {
  constructor(private router: Router) {}
  
  onClose() {
    this.router.navigate(['/']);
  }
}
