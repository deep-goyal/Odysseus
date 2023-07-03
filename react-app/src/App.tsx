import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="/Users/deeeep/Desktop/React Stuff/react-app/src/styles.css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@200;300;500&display=swap"
        rel="stylesheet"
      />
      <title>Odysseus</title>
      <body>
        <NavBar />
        <h1 className="supertitle">Odysseus</h1>
        <div className="content">
          <h1 className="subtitles"></h1>
        </div>
      </body>
    </>
  );
}

export default App;
