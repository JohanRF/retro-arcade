# Arquitectura: Retro Arcade

## Stack
Next.js (App Router), React, TypeScript (modo estricto), CSS con Design Tokens, pnpm, Vercel.
No se usa Tailwind: el proyecto usa CSS organizado.

## Decisiones

1. **Repositorio nuevo.** La versión 1 en JavaScript (`Retro-Arcade-JS`, tag `v1-vanilla-js`) queda como referencia y sigue publicada. Así no se mezcla JavaScript puro con Next.js y se ve la evolución del proyecto.

2. **Modelo `Game`.** Campos: `id`, `title`, `controls`, `image`, `icon` (opcional), `href` y `status` (`'available'` o `'coming-soon'`). Los datos solo tienen juegos reales; el hub rellena los huecos libres con tarjetas de candado.

3. **Modelo `Score`.** Campos: `name` y `score`. Cada juego guarda su top 10 en `localStorage` con la clave `retro-arcade:scores:<id del juego>`. El hub solo lee el primer puesto de cada juego y no guarda copias.

4. **Carpetas por funcionalidad.** `app/` para las rutas, `games/` para los módulos de juego (con `engine/` de reglas puras, sin React), y `components/`, `lib/`, `types/` y `styles/` para lo compartido.

5. **Componentes del hub.** `ArcadeHub` (Client Component) guarda `activeIndex` e `isRecordsOpen`. `Clock` guarda su propia hora. `GameCard`, `GameDetailsBar`, `QuickMenu` y `HallOfFameModal` reciben datos y acciones por props. No se usa librería de estado global porque hay pocos datos.

6. **Registro de juegos.** Una lista única que el hub lee. Para añadir un juego: crear su carpeta en `games/`, su ruta en `app/games/` y una línea en la lista.

7. **pnpm en lugar de npm.** En `pnpm-workspace.yaml`, `unrs-resolver` está en `false` (no se permite su script de instalación) y `pnpm lint` pasa.

8. **Scores en `localStorage`.** Un backend o base de datos se considerará solo si hay una necesidad real (ranking global, usuarios, scores entre dispositivos).