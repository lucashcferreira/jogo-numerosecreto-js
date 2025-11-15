# Copilot Instructions for jogo-nomesecreto-js

## Project Overview
This is a simple browser-based number guessing game built with vanilla JavaScript, HTML, and CSS. The user tries to guess a randomly generated number between 1 and 10. The UI is styled with custom backgrounds and images, and the game logic is contained in a single JS file.

## Key Files & Structure
- `app.js`: Main game logic. Handles number generation, user input, and UI updates.
- `index.html`: Main HTML entry point. Loads external fonts, styles, and JS. Contains the game UI structure.
- `style.css`: Custom styles for layout, backgrounds, and game visuals.
- `img/`: Contains images used for backgrounds and UI elements.

## Game Flow
- On page load, a secret number is generated (`gerarNumeroAleatorio`).
- The user enters a guess and clicks "Chutar".
- The game checks the guess and updates the UI with feedback (higher/lower/correct).
- The "Novo jogo" button is present but not yet implemented.

## Patterns & Conventions
- All DOM updates use the helper `exibirTextoNaTela(tag, texto)`.
- Game state is managed via local variables in `app.js`.
- No external JS frameworks or build tools are used; all logic is client-side and loaded via `<script src="app.js" defer>`.
- CSS uses custom backgrounds and overlays for a visually rich experience.
- Responsive design is partially supported via flexbox and viewport units.

## Developer Workflows
- No build or test scripts; edit files directly and refresh the browser to see changes.
- Debugging is done via browser DevTools.
- To add features (e.g., implement "Novo jogo"), update `app.js` and ensure UI changes are reflected in `index.html`.

## Integration Points
- Uses Google Fonts and ResponsiveVoice (via CDN) for enhanced UI and accessibility.
- All assets are local except for fonts and voice library.

## Project-Specific Advice
- Keep all game logic in `app.js` unless refactoring for scale.
- Use the provided helper for all UI text updates to ensure consistency.
- Reference images from the `img/` folder using relative paths in CSS and HTML.
- When adding new features, follow the existing pattern of direct DOM manipulation and event handling.

## Example: Adding a New Feature
To implement the "Novo jogo" button:
- Enable the button after a correct guess.
- Add a click handler to reset the game state and UI.
- Regenerate the secret number and clear the input field.

---

If any section is unclear or missing, please provide feedback for further refinement.

## Commit Message Policy
Always generate semantic commit messages in Portuguese when using Visual Studio or the Git extension in Visual Studio. Commit messages must always be semantic, clear, descriptive, and written in Portuguese.

Follow the semantic commit format strictly:
- `feat(screen1): mensagem` - for new features
- `fix(dashboard): mensagem` - for bug fixes
- `ci(copilot): mensagem` - for CI/CD changes
- `docs(): mensagem` - for documentation updates
- `style(): mensagem` - for code style changes
- `refactor(): mensagem` - for code refactoring
- `test(): mensagem` - for test additions or changes

Examples:
- `feat(): implementar botão novo jogo`
- `fix(): corrigir comparação de números`
- `ci(): adicionar workflow para testes`