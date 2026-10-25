import NavBar from './NavBar';
import About from './About';
import Experience from './Experience';

/**
 * App is the root component for the portfolio.
 *
 * A React component is a JavaScript function that returns JSX. JSX describes
 * what the interface should look like for the component's current data. React
 * then turns that description into DOM elements in the browser.
 *
 * Keeping page composition here lets index.js focus only on starting React.
 * As the portfolio grows, this component will remain the map of its major
 * sections while each child component owns one focused part of the page.
 */
function App() {
  return (
    <>
      {/* Components can be composed like custom HTML elements. React calls
          each component function and renders the JSX that it returns. */}
      <NavBar />

      {/* <main> gives browsers and assistive technology a semantic boundary
          around the page's primary content; it does not add visual styling. */}
      {/* tabIndex makes <main> programmatically focusable when the skip link is
          used, while -1 keeps it out of the normal Tab sequence. */}
      <main id="main-content" tabIndex="-1">
        <About />
        <Experience />
      </main>
    </>
  );
}

export default App;
