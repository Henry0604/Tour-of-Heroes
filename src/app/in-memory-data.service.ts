import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Saitama', power: 'No Limits', alterEgo: 'Calvo con Capa', life:1000000, attack:1000000, def:1000000 },
      { id: 2, name: 'Tatsumaki', power: 'Psicoquinesis', alterEgo: 'Tornado del Terror', life:50000, attack:50000, def:50000},
      { id: 3, name: 'Dr. Bofoi', power: 'Advanced Technology', alterEgo: 'Metal Knight', life:8000, attack:4500, def:2000},
      { id: 4, name: 'King', power: 'Motor King', alterEgo: 'El hombre más fuerte de la Tierra', life:7000, attack:7000, def:7000},
      { id: 5, name: 'Kamikaze', power: 'Esgrima', alterEgo: 'Atomic Samurai', life:7000, attack:3500, def:2506},
      { id: 7, name: 'Genos', power: 'Mechanical Body', alterEgo: 'Cyborg Demoníaco', life:3500, attack:2500, def:1500},
      { id: 6, name: 'Bad', power: 'Superhuman Strength ', alterEgo: 'Metal Bat', life:5000, attack:4500, def:3500},
      { id: 9, name: 'Fubuki', power: 'Psicoquinesis', alterEgo: 'Ventisca del Infierno', life:3000, attack:2600, def:1600 },
      { id: 8, name: 'Handsome', power: 'Immense Strength', alterEgo: 'Amai Mask', life:4000, attack:3500, def:1520 }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}