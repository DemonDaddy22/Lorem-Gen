import './App.scss';
import Description from './components/Description';
import Generator from './components/Generator';
import Header from './components/Header';

function App() {
    return (
        <div className='App'>
            <Header label='Lorem Gen' />
            <Description label='Quickly generate lorem ipsum text to bootstrap your content!' />
            <Generator />
        </div>
    );
}

export default App;
