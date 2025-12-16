# Phaser Implementation Plan

## Goal
Build a Pacman clone using **Phaser 3**.

## Phase 1: Project Setup
- [ ] Create `index.html` with Phaser 3 loaded (CDN or local).
- [ ] Create `js/main.js` for game config.
- [ ] Create directory structure: `assets/images`, `assets/maps`.

## Phase 2: Core Gameplay Loop (The "Game" Scene)
- [ ] **Map**: Create a tilemap (using an array or JSON).
  - Use `Phaser.Tilemaps`.
  - Define "Wall" and "Dot" layers.
- [ ] **Player (Pacman)**:
  - Add Sprite 'pacman'.
  - Enable Arcade Physics.
  - Implement 4-directional movement (grid-aligned preferred).
  - Add "chomp" animation.
- [ ] **Collisions**:
  - Pacman vs Walls (Block movement).
  - Pacman vs Dots (Overlap -> Eat -> Score).

## Phase 3: Ghosts
- [ ] Create `Ghost` class extending `Phaser.Physics.Arcade.Sprite`.
- [ ] Implement basic AI:
  - Random valid turn at intersections.
  - Simple "target" tracking (optional for v1).
- [ ] Collision:
  - Pacman vs Ghost -> Game Over / Life lost.

## Phase 4: Polish & UI
- [ ] **Start Screen**: Simple scene with "Press Space to Start".
- [ ] **HUD**: Score text, High Score.
- [ ] **Audio**: Waka-waka sound, siren, death sound.
- [ ] **Win Condition**: When all dots cleared -> Next Level / Win screen.
