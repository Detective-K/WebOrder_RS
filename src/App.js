
//import '../src/App.css';

//const ExampleToast = ({ children }) => {
//  const [show, toggleShow] = useState(true);

//  return (
//    <Toast show={show} onClose={() => toggleShow(!show)}>
//      <Toast.Header>
//        <strong className="mr-auto">React-Bootstrap</strong>
//      </Toast.Header>
//      <Toast.Body>{children}</Toast.Body>
//    </Toast>
//  );
//};

//const App = () => {
//  <Container className="p-3">
//    <Jumbotron>
//      <h1 className="header">Welcome To React-Bootstrap</h1>
//      <ExampleToast>
//        We now have Toasts
//        <span role="img" aria-label="tada">
//          🎉
//        </span>
//      </ExampleToast>
//    </Jumbotron>
//  </Container>
//};

class App extends React.Component  {
 render() {
         return  (

    <p>
      This is a <a href="#" id="TooltipExample">tooltip</a> example.
    </p>

         );
 }
 
};


export default App;
