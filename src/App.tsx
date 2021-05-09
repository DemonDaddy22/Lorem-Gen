import './App.scss';
import Description from './components/Description';
import Header from './components/Header';

function App() {
    return (
        <div className='App'>
            <Header label='Lorem Gen' />
            <Description label='Quickly generate lorem ipsum text to bootstrap your content!' />
        </div>
    );
}

export default App;
