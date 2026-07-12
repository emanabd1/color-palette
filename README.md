🎨 Color Palette Picker
A professional, interactive React application designed to help users pick and preview colors with ease. This project features dynamic color rendering, real-time validation, and a polished user interface.


---


🚀 Features
Interactive Palette: Select from a predefined set of colors with one-click functionality.

Custom HEX/Color Input: Users can input their own colors via HEX, RGB, or standard CSS color names.

Dynamic Preview: A responsive preview area that updates instantly based on selection.

Error Handling: Intelligent validation to catch and alert users of invalid color inputs.

"Empty" State: Professional UI feedback when no color is selected.

Keyboard Support: Press "Enter" to submit custom colors for a seamless workflow.


---


🛠️ Tech Stack
React (Vite): Frontend framework for a fast, component-based architecture.

Tailwind CSS: Utility-first styling for a clean, modern, and responsive design.

State Management: Built using React useState hooks for precise control over user interactions.
---


📂 Project Structure
App.jsx: The main orchestrator that manages state and validation logic.

components/ColorButton.jsx: A reusable component for the selectable color buttons.

components/ColorPreview.jsx: A modular component that renders the color visualizer and the "empty" state.


---


🖥️ How to Run
Clone the repository:

Bash
git clone https://github.com/emanabd1/color-palette.git
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev


---


💡 Engineering Decisions
CSS Validation: Instead of heavy libraries, I utilized new Option().style to leverage browser-native color validation, ensuring high performance.

Modular Architecture: Components were separated based on the "Separation of Concerns" principle to ensure the code remains maintainable and scalable.

UX-First Approach: Implemented auto-dismissing error notifications and visual feedback (like hover shadows and scaling) to create a premium user experience.
