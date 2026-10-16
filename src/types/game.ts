// Dice si un juego se puede jugar o todavía no.
export type GameStatus = 'available' | 'coming-soon';

// Describe un juego del arcade.
// El hub usa estos datos para dibujar la tarjeta.
export interface Game {
  id: string; // Nombre único del juego. Ejemplo: 'snake-retro'
  title: string; // Nombre que se ve en la tarjeta
  controls: string; // Cómo se juega. Ejemplo: 'Teclado (Flechas / WASD)'
  image: string; // Ruta de la imagen de la tarjeta
  icon?: string; // Icono opcional (el ? significa que puede faltar)
  href: string; // Ruta de la página del juego
  status: GameStatus; // Si se puede jugar o no
}