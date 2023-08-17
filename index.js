// let score = 0;
let wicket = 0;

var score = 0;
let ballWiseResult = [];
let hit = 0;

function addScore(num) {
  hit = num;
  rootElement.render(<App />);
  console.log(hit);
}

function addWicket() {
    hit = "W";
    rootElement.render(<App />);
}

const ScoreButtons = () => (
    <div>
    <button onClick={() => addScore(0)}>0</button>
    <button onClick={() => addScore(1)}>1</button>
    <button onClick={() => addScore(2)}>2</button>
    <button onClick={() => addScore(3)}>3</button>
    <button onClick={() => addScore(4)}>4</button>
    <button onClick={() => addScore(5)}>5</button>
    <button onClick={() => addScore(6)}>6</button>
    <button onClick={addWicket}>wicket</button>
  </div>
)

const Result = () => (
  <div>
    {ballWiseResult.map((res, index) => (
      <>
      {index % 6  === 0? <br /> : null}
      <span key={index}>{res == 0 ? <strong>.</strong> : res}</span>&nbsp;&nbsp;&nbsp;
      </>
    ))}
  </div>
)

function handleSubmit(event) {
  event.preventDefault();
}

const Form = () => (
  <form onSubmit={handleSubmit}>
    <input value={hit} />
    <input />
    <button>Submit</button>
  </form>
)

const App = () => (
  <>
    <h1>SCORE KEEPER</h1>
    <h2>
      SCORE: {score}/{wicket}
    </h2>
    <ScoreButtons />
    <br />
    <Form />
    <hr />
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
