import ImageCarousel from './img';
import logo from './logo.svg';

function App() {
  const imageUrls = [
    'https://i.makeagif.com/media/6-19-2016/NV4xbE.gif',
    'https://media.tenor.com/MvuMbIfrRn0AAAAC/tarzan-jane.gif',
    'https://media.tenor.com/p0UOVEFu-uQAAAAd/tarzan-disney-hello.gif',
    'https://media.tenor.com/UPkTUrUPoqMAAAAd/tarzan-scream.gif'
      ];
  return (
    <div>
        <ImageCarousel images={imageUrls} />
    </div>
  );
}

export default App;
