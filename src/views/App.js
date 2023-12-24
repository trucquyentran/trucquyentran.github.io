import logo from './logo.svg';
import './App.css';
import Mycomponent from './Example/1';

function App ()
{
    return (
        <div className="App" >
            <header className="App-header" >
                <img src={ logo } className="App-logo" alt="logo" />
                {/* <p>Helo word quyen nè</p> */}
                <Mycomponent></Mycomponent>
                {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Learn React </a> */}

            </header>
            

        </div>
    );
}
export default App;