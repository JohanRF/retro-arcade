# SPEC.DESIGN.md — Retro Arcade
**Versión:** 1.0  
**Estado:** Sistema visual inicial  
**Propósito:** Definir una identidad visual coherente y reutilizable para Retro Arcade.
**Fuente de verdad:** Si un valor de una tabla de este documento difiere del bloque `:root` de la sección 12, manda la sección 12.
---

## 1. Objetivo del diseño

Retro Arcade es un hub de minijuegos clásicos con inspiración en las salas arcade y los videojuegos de los años 80 y 90. Debe sentirse retro, energético y reconocible, pero con una interfaz moderna, legible y fácil de ampliar.

El diseño debe equilibrar:

- **Nostalgia arcade:** fondos oscuros, colores luminosos, contraste y detalles inspirados en pantallas CRT y máquinas recreativas.
- **Usabilidad actual:** jerarquía visual clara, navegación comprensible, textos legibles y controles accesibles.
- **Modularidad:** los componentes compartidos deben verse y comportarse de forma consistente en la página principal y en los distintos juegos.
- **Mantenibilidad:** los valores visuales deben centralizarse en tokens CSS, no repetirse arbitrariamente en cada selector.

Este documento define el lenguaje visual, no la arquitectura funcional ni las reglas específicas de cada juego.

## 2. Dirección visual

### Concepto

**“Arcade retro, interfaz moderna”.**

Usar una base oscura inspirada en gabinetes arcade, con superficies diferenciadas y acentos neón. El resultado debe ser limpio y controlado: los efectos luminosos resaltan elementos importantes, no todo al mismo tiempo.

### Principios

1. **Contraste primero:** los textos y controles deben distinguirse claramente del fondo.
2. **Neón con moderación:** reservar los colores más intensos para acciones, estados activos, puntuaciones y detalles importantes.
3. **Jerarquía consistente:** títulos, subtítulos, etiquetas y texto normal deben tener tamaños y pesos previsibles.
4. **Componentes reutilizables:** botones, tarjetas, paneles y modales deben compartir las mismas reglas visuales.
5. **Animación funcional:** las transiciones deben dar respuesta a la interacción, sin distraer ni ralentizar el uso.
6. **Responsive desde el inicio:** la interfaz debe funcionar en móvil, tablet y escritorio.
7. **Los juegos conservan su identidad:** cada juego puede tener un color de acento propio, sin romper el sistema global.

## 3. Paleta de colores

Estos son los valores iniciales recomendados. Deben centralizarse en `:root` y consumirse mediante variables; evita repetir valores hexadecimales directamente por toda la hoja de estilos.

| Token | Uso | En la versión 1 |
|---|---|---|
| `--color-bg` | Fondo principal | `bgDark` |
| `--color-bg-elevated` | Fondo de la imagen de la tarjeta | fondo de `.tileImage` |
| `--color-surface` | Tarjetas, paneles y modal | `bgCard` |
| `--color-surface-hover` | Superficie al pasar el cursor | `bgCardHover` |
| `--color-border` | Bordes discretos | blanco al 10% |
| `--color-text` | Texto principal | `textLight` |
| `--color-text-muted` | Texto secundario | `textMuted` |
| `--color-primary` | Acento principal (cian neón) | `neonCyan` |
| `--color-primary-hover` | Hover del acento principal | `#66f7ff` |
| `--color-secondary` | Amarillo: récords, iconos del menú y reloj | `neonYellow` |
| `--color-accent` | Rosa: GAME OVER y cierre del modal | `neonPink` |
| `--color-success` | Verde: marcador y estado online | `neonGreen` |
| `--color-disabled` | Elementos bloqueados | `textMuted` |

Sin definir por ahora: `--color-text-subtle`, `--color-warning` y `--color-danger`.

### Reglas de uso

- El fondo principal debe ser oscuro y estable; no usar gradientes intensos como fondo de todas las secciones.
- `--color-primary` es el acento global predeterminado.
- El violeta y el magenta son complementarios. Evitar que compitan todos con la misma intensidad.
- El color por sí solo no debe comunicar estados: combinarlo con texto, iconos o indicadores.
- Comprobar contraste suficiente para texto y controles, especialmente en texto pequeño.
- No aplicar glow a todos los textos. Reservarlo para títulos destacados, foco, estados activos o elementos emblemáticos.

## 4. Tipografía

La tipografía debe transmitir una estética de videojuego sin sacrificar la lectura.

### Familias recomendadas

- **Display / títulos:** `Press Start 2P`, con alternativa `monospace`. Solo para textos cortos: nombre de la marca, títulos y etiquetas arcade. Es difícil de leer en bloques largos.
- **Texto de interfaz:** `VT323`, con alternativa `monospace`. Para texto, botones y marcadores del juego.
- **Puntuaciones o cifras:** usar una fuente monoespaciada como `ui-monospace, SFMono-Regular, Consolas, monospace`, para alinear números.

En Next.js las fuentes de Google se cargan con `next/font/google` (se descargan en el build y se sirven desde tu propio dominio), no con una etiqueta `<link>`. Los iconos son Font Awesome.

### Escala tipográfica inicial

| Token | Valor inicial | Uso |
|---|---|---|
| `--font-size-xs` | `0.75rem` | Metadatos y etiquetas pequeñas |
| `--font-size-sm` | `0.875rem` | Texto secundario |
| `--font-size-md` | `1rem` | Texto base |
| `--font-size-lg` | `1.125rem` | Texto destacado |
| `--font-size-xl` | `1.5rem` | Subtítulos de sección |
| `--font-size-2xl` | `2rem` | Encabezados principales |
| `--font-size-3xl` | `clamp(2.25rem, 5vw, 3.5rem)` | Hero o título principal |

### Reglas tipográficas

- `Press Start 2P` y `VT323` solo tienen peso `400`. No pedir negrita, porque el navegador la simula y se ve borrosa. La jerarquía se logra con tamaño y color.
- El texto de párrafo debe priorizar legibilidad y una altura de línea aproximada de `1.5`.
- Los títulos display pueden usar espaciado de letras ligeramente positivo, pero no exagerado.
- Evitar escribir bloques largos enteros en mayúsculas.
- No usar la fuente display en descripciones extensas, instrucciones de juego o diálogos largos.

## 5. Espaciado y tamaños

Usar una escala consistente basada en múltiplos de 4 px. No introducir valores aleatorios salvo que exista una necesidad concreta del layout.

| Token | Valor inicial |
|---|---|
| `--space-1` | `0.25rem` |
| `--space-2` | `0.5rem` |
| `--space-3` | `0.75rem` |
| `--space-4` | `1rem` |
| `--space-5` | `1.25rem` |
| `--space-6` | `1.5rem` |
| `--space-8` | `2rem` |
| `--space-10` | `2.5rem` |
| `--space-12` | `3rem` |
| `--space-16` | `4rem` |

### Aplicación

- Usar espacios pequeños para separar elementos relacionados.
- Usar espacios medianos dentro de tarjetas y paneles.
- Usar espacios amplios entre secciones principales.
- Mantener un ancho de contenido legible y evitar que los párrafos ocupen toda la pantalla en escritorio.
- Preferir `gap` en layouts flexibles o grid en vez de depender de márgenes acumulados entre hijos.

## 6. Bordes, radios y elevación

### Tokens iniciales

| Token | Valor inicial | Uso |
|---|---|---|
| `--border-width` | `1px` | Bordes estándar |
| `--radius-sm` | `0.375rem` | Etiquetas y controles compactos |
| `--radius-md` | `0.75rem` | Botones y tarjetas |
| `--radius-lg` | `1rem` | Paneles y modales |
| `--radius-xl` | `1.5rem` | Contenedores destacados |
| `--radius-pill` | `999px` | Chips o controles deliberadamente redondeados |
| `--shadow-card` | `0 8px 24px rgb(0 0 0 / 25%)` | Tarjetas elevadas |
| `--shadow-modal` | `0 24px 80px rgb(0 0 0 / 45%)` | Ventanas modales |
| `--glow-primary` | `0 0 18px rgb(57 245 214 / 18%)` | Resplandor cian sutil |
| `--glow-secondary` | `0 0 18px rgb(139 92 246 / 20%)` | Resplandor violeta sutil |

### Reglas

- Los bordes deben ayudar a separar superficies, no crear una cuadrícula visual pesada.
- Reservar sombras para indicar elevación o destacar elementos.
- Los glows deben ser suaves y puntuales. No usar grandes halos en cada tarjeta.
- Mantener una familia de radios coherente. Evitar mezclar esquinas cuadradas, muy redondeadas y pill sin intención.
- En elementos de juego que imiten un gabinete o una pantalla retro puede usarse un tratamiento más cuadrado, siempre que se mantenga la consistencia general.

## 7. Movimiento y efectos

### Transiciones

- Transiciones de color, borde, sombra y transformación: aproximadamente `150–220ms`.
- Usar una curva de aceleración estándar como `ease` o `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- En hover, una tarjeta puede elevarse ligeramente (`translateY(-2px)` o `translateY(-4px)`), si el dispositivo admite hover.
- Evitar rebotes, parpadeos permanentes, escalados agresivos o animaciones que dificulten leer o seleccionar.

### Accesibilidad de movimiento

- Respetar `prefers-reduced-motion: reduce`.
- No depender de animaciones para comunicar información esencial.
- No hacer que elementos parpadeen rápidamente.
- En pantallas táctiles no depender exclusivamente de `:hover`; el estado y la acción deben seguir siendo claros.

## 8. Componentes compartidos

### 8.1 Botones

Estados mínimos: normal, hover, active, focus-visible y disabled.

- **Primario:** fondo o relleno con `--color-primary`, texto oscuro de alto contraste y énfasis claro.
- **Secundario:** superficie oscura, borde visible y texto principal.
- **Ghost:** fondo transparente; mostrar superficie o borde en hover/focus.
- **Peligro:** usar `--color-danger` solo para acciones destructivas o estados de error.

Reglas:
- Área interactiva recomendada de al menos `44 × 44px` en controles táctiles.
- Debe existir un indicador de foco visible con teclado.
- El estado disabled debe distinguirse sin depender únicamente de bajar la opacidad.
- No aplicar glow fuerte a todos los botones.

### 8.2 Tarjetas de juegos

Cada tarjeta debe presentar con claridad:

1. Arte, icono o imagen del juego.
2. Nombre del juego.
3. Descripción breve o género, si aporta valor.
4. Estado (disponible, próximamente, bloqueado), cuando corresponda.
5. Acción principal clara para abrir o iniciar el juego.

Reglas:
- Usar `--color-surface`, borde discreto y radio consistente.
- La imagen debe tener proporciones coherentes entre tarjetas y evitar deformaciones.
- La interacción hover debe ser sutil; el foco de teclado debe ser igual de reconocible.
- Las tarjetas bloqueadas o “próximamente” deben explicar su estado y no aparentar ser accionables si no lo son.
- La tarjeta completa solo debe ser clicable si la estructura semántica y la interacción resultan claras.

### 8.3 Navegación y cabecera

- Mantener el logotipo o nombre Retro Arcade como ancla visual.
- Priorizar navegación simple y pocas acciones principales.
- En móvil, evitar que la cabecera ocupe una proporción excesiva de la pantalla.
- Estados activos claros, con contraste y un indicador visual además del color cuando sea útil.

### 8.4 Paneles y secciones

- Utilizar fondos elevados para separar áreas funcionales del fondo global.
- Mantener el mismo padding interno en paneles del mismo tipo.
- Evitar envolver cada bloque de texto en una tarjeta: usar superficies cuando ayuden a establecer jerarquía.

### 8.5 Modales

- Fondo de diálogo elevado sobre una capa de fondo oscurecida.
- Título visible, contenido bien agrupado y acción de cierre fácil de localizar.
- Mantener el foco dentro del modal mientras esté abierto y devolverlo al elemento que lo abrió al cerrarse.
- Cerrar con `Escape` cuando corresponda y permitir cerrar mediante un control visible.
- En móvil, el contenido debe caber en el viewport y poder desplazarse si es necesario.

### 8.6 Puntuaciones, récords y Hall of Fame

- Usar cifras monoespaciadas cuando mejore la alineación.
- Diferenciar título, puntuación, jugador y fecha mediante jerarquía tipográfica.
- Los récords destacados pueden usar el acento principal, pero no llenar toda la interfaz de colores.
- Si las puntuaciones son locales, indicar el alcance de manera honesta; no presentar datos locales como una clasificación global.

### 8.7 Superficies de juego

- El área de juego debe distinguirse claramente del resto de la interfaz.
- Mantener los controles, la puntuación, el estado y las instrucciones cerca del área relevante.
- La legibilidad y la respuesta del juego tienen prioridad sobre los efectos decorativos.
- Cada juego puede definir un acento específico mediante tokens locales, por ejemplo `--game-accent`, sin cambiar los tokens globales.

## 9. Layout y responsive design

Los siguientes breakpoints son valores iniciales, no reglas inamovibles:

| Token | Valor |
|---|---|
| `--breakpoint-sm` | `480px` |
| `--breakpoint-md` | `768px` |
| `--breakpoint-lg` | `1024px` |
| `--breakpoint-xl` | `1280px` |

Nota: las custom properties CSS no pueden usarse directamente como condiciones de media query de forma interoperable. Estos valores sirven como referencia de diseño; escribe los breakpoints como valores literales en `@media` o centralízalos en la herramienta de build si se incorpora una.

### Reglas responsive

- **Móvil:** una columna cuando sea apropiado, controles táctiles cómodos, texto legible y navegación compacta.
- **Tablet:** usar grids de dos columnas cuando el contenido y el ancho lo permitan.
- **Escritorio:** aprovechar grids más amplios, manteniendo límites de ancho y jerarquía.
- No fijar alturas de tarjetas o paneles si pueden cortar contenido; usar `min-height` cuando sea suficiente.
- Evitar scroll horizontal involuntario.
- Las zonas de juego deben adaptarse al viewport sin deformar la proporción del tablero.
- Comprobar al menos un ancho móvil estrecho, un tablet y un escritorio amplio.

## 10. Accesibilidad visual e interacción

- Mantener contraste suficiente para texto, iconos funcionales y controles.
- No eliminar `outline` sin proporcionar una alternativa visible.
- Usar `:focus-visible` para los controles navegables por teclado.
- Los elementos interactivos deben tener estados distinguibles y etiquetas comprensibles.
- No usar color como único indicador de estado.
- Respetar `prefers-reduced-motion`.
- Los objetivos táctiles deben ser cómodos y estar separados para reducir pulsaciones accidentales.
- Los estados de error, éxito, carga y deshabilitado deben ser comprensibles también sin percibir el color.
- Revisar el contraste real una vez que los tokens estén aplicados; los valores de esta especificación son un punto de partida, no una certificación automática de accesibilidad.

## 11. Organización recomendada del CSS

Mantener el sistema visual separado de los estilos específicos de componentes.

Estructura orientativa (adaptarla al framework y al repositorio real):

```text
src/
  styles/
    tokens.css          # Variables globales y design tokens
    global.css          # Reset, body, tipografía base y reglas globales
    components.css      # Opcional: estilos compartidos de componentes
```

Si el proyecto utiliza CSS Modules, mantener los estilos locales junto a cada componente y reservar `tokens.css` para las variables compartidas. No crear archivos vacíos ni una estructura compleja antes de que exista una necesidad real.

### Reglas de implementación

- Definir los tokens globales en `:root`.
- Usar nombres semánticos (`--color-primary`, `--space-4`, `--radius-md`) en lugar de nombres ligados a un componente concreto.
- Evitar duplicar variables equivalentes o introducir variantes casi idénticas sin una razón.
- No definir todos los estilos de todos los componentes dentro de `:root`: ahí van valores reutilizables, no reglas de layout completas.
- Los estilos de un componente deben consumir tokens; los tokens no deben depender de un componente específico.
- Los juegos pueden añadir tokens propios con un prefijo claro, sin redefinir globalmente la paleta.
- No incorporar Tailwind por defecto: el sistema inicial se implementará con CSS y variables para comprender y controlar la base visual.
- No migrar todo el CSS antiguo de golpe. Comparar el comportamiento actual, extraer patrones reutilizables y migrar por componentes.

## 12. Ejemplo de `:root` inicial

Este bloque es una base de partida que Claude puede adaptar al CSS real del nuevo repositorio. No debe reemplazar automáticamente estilos existentes sin revisar primero su estructura.

```css
:root {
  /* Colors (valores reales de la versión 1) */
  --color-bg: #0a0a12;
  --color-bg-elevated: #0e0e1a;
  --color-surface: #141423;
  --color-surface-hover: #1c1c33;
  --color-border: rgba(255, 255, 255, 0.1);

  --color-text: #e0e6ed;
  --color-text-muted: #7a8b9e;

  --color-primary: #00f3ff;
  --color-primary-hover: #66f7ff;
  --color-secondary: #ffe600;
  --color-accent: #ff0055;

  --color-success: #00ff66;
  --color-disabled: #7a8b9e;

  /* Typography */
  --font-display: "Press Start 2P", monospace;
  --font-body: "VT323", monospace;
  --font-mono: ui-monospace, SFMono-Regular, Consolas, monospace;

  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2rem;
  --font-size-3xl: clamp(2.25rem, 5vw, 3.5rem);

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Radii (valores reales) */
  --radius-sm: 8px;      /* botón START */
  --radius-md: 10px;     /* botones del menú */
  --radius-lg: 14px;     /* tarjetas y modal */
  --radius-pill: 999px;  /* insignia y barra de detalles */

  /* Glow neón (valores reales) */
  --glow-primary: 0 0 10px rgba(0, 243, 255, 0.5), 0 0 20px rgba(0, 243, 255, 0.3);
  --glow-secondary: 0 0 10px rgba(255, 230, 0, 0.5), 0 0 20px rgba(255, 230, 0, 0.3);
  --glow-accent: 0 0 10px rgba(255, 0, 85, 0.5), 0 0 20px rgba(255, 0, 85, 0.3);
  --glow-active: 0 0 20px rgba(0, 243, 255, 0.8), 0 0 40px rgba(0, 243, 255, 0.4);

  /* Motion */
  --duration-normal: 300ms;
  --ease-standard: ease;

  /* Layout de la consola */
  --header-height: 75px;
  --footer-height: 85px;
  --tile-width: 260px;
  --tile-height: 320px;
}
```

## 13. Checklist para revisar un cambio visual

Antes de dar por terminado un componente o pantalla, comprobar:

- [ ] Usa tokens existentes cuando hay un valor equivalente.
- [ ] Mantiene la jerarquía tipográfica y el espaciado del sistema.
- [ ] Los estados normal, hover, active, focus y disabled están definidos cuando corresponda.
- [ ] Se puede utilizar con teclado y en pantalla táctil.
- [ ] No hay overflow horizontal en móvil.
- [ ] Los textos y controles mantienen contraste suficiente.
- [ ] Las animaciones son discretas y respetan `prefers-reduced-motion`.
- [ ] No se han introducido colores, sombras o radios duplicados sin justificación.
- [ ] Los estilos específicos de un juego no contaminan el resto de la aplicación.
- [ ] La pantalla sigue siendo comprensible si los efectos glow se eliminan.

## 14. Instrucciones para la IA que trabaje en este proyecto

Al trabajar en Retro Arcade:

1. Lee este archivo antes de proponer cambios visuales.
2. Inspecciona el CSS y la estructura reales del repositorio antes de modificar archivos.
3. El proyecto usa Next.js (App Router), React, TypeScript en modo estricto y pnpm. No se usa Tailwind. La versión 1 en JavaScript puro (repositorio `Retro-Arcade-JS`, tag `v1-vanilla-js`) es la referencia visual y funcional.
4. Si se solicita crear un `:root`, usa este documento como fuente de verdad y adapta los nombres solo cuando exista una razón clara.
5. No reemplaces la hoja de estilos completa sin explicar qué se conserva, qué cambia y por qué.
6. Implementa cambios pequeños y verificables; prioriza primero tokens y estilos globales, después componentes compartidos y finalmente detalles por juego.
7. Explica brevemente las decisiones para que la persona que mantiene el proyecto aprenda el sistema, en vez de limitarse a pegar código.
8. Si el diseño existente contradice este documento, señala la diferencia y propone una migración gradual en lugar de hacer un cambio masivo.
9. No añadas dependencias visuales o librerías de UI sin necesidad demostrable.
10. Mantén este archivo actualizado si se cambia deliberadamente la paleta, la tipografía, la escala de espaciado o las reglas generales.

---

## 15. Decisiones pendientes de validar

Esta especificación es una primera versión, no una afirmación de que todos los valores ya se hayan probado en la interfaz. Validar visualmente:

- La paleta sobre la página principal y al menos un juego.
- La carga de Orbitron e Inter o sus alternativas.
- El contraste de texto secundario y estados deshabilitados.
- El nivel de glow: reducirlo si compite con el contenido.
- Los breakpoints frente al layout real.
- La relación entre el acento global y los acentos particulares de cada juego.

**Criterio de aceptación:** la interfaz se reconoce como Retro Arcade, mantiene legibilidad y consistencia en distintas pantallas, y permite añadir nuevos juegos sin inventar un sistema visual diferente para cada uno.
