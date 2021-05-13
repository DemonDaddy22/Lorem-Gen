import './App.scss';
import Description from './components/Description';
import Generator from './components/Generator';
import Header from './components/Header';

function App() {
    return (
        <div className='App'>
            <Header label='Lorem Gen' />
            <Description>
                <div className='description'>
                    Quickly generate lorem ipsum text to bootstrap your content!
                    <br />
                    It's <em className='pitch'>fast</em>, <em className='pitch'>meaningless</em> and{' '}
                    <em className='pitch'>not-so-boring</em>!
                </div>
            </Description>
            <Generator />
        </div>
    );
}

export default App;
