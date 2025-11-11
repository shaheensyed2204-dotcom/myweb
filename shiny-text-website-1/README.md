# Shiny Text Website

This project implements a shiny text animation using React. The `ShinyText` component allows you to display text with a shimmering effect, which can be customized through props.

## Project Structure

```
shiny-text-website
├── public
│   └── index.html
├── src
│   ├── index.js
│   ├── App.js
│   ├── components
│   │   ├── ShinyText.jsx
│   │   └── ShinyText.css
│   └── styles
│       └── index.css
├── package.json
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd shiny-text-website
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To use the `ShinyText` component, import it into your desired component file (e.g., `App.js`) and include it in your JSX:

```jsx
import ShinyText from './components/ShinyText';

function App() {
  return (
    <div>
      <ShinyText 
        text="Just some shiny text!" 
        disabled={false} 
        speed={3} 
        className='custom-class' 
      />
    </div>
  );
}

export default App;
```

### Props

The `ShinyText` component accepts the following props:

- `text`: The text to display.
- `disabled`: A boolean to disable the animation (default is `false`).
- `speed`: The speed of the animation in seconds (default is `5`).
- `className`: Additional CSS classes to apply.

## CSS Styles

The shiny text effect is defined in `ShinyText.css`. You can customize the styles as needed to fit your design preferences.

## License

This project is licensed under the MIT License.