import { OpenCvProvider } from 'opencv-react';
import OpenCvTest from './components/OpenCvTest'; // Assurez-vous que le chemin d'importation est correct

function App() {
  return (
    <OpenCvProvider openCvPath="https://docs.opencv.org/master/opencv.js" onLoad={() => console.log('OpenCV Loaded')}>
      <OpenCvTest />
    </OpenCvProvider>
  );
}

export default App;
