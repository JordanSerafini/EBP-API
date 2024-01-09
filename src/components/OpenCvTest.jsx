import React, { useEffect } from 'react';
import { useOpenCv } from 'opencv-react';

function OpenCvTest() {
  const { loaded, cv } = useOpenCv();

  useEffect(() => {
    if (cv) {
      console.log('OpenCV est prêt à être utilisé.');
      // Ici, vous pouvez commencer à utiliser les fonctionnalités d'OpenCV
    }
  }, [cv]);

  if (!loaded) return <div>Chargement d'OpenCV...</div>;

  return (
    <div>
      <p>OpenCV est prêt!</p>
      {/* Insérez ici les éléments de l'interface utilisateur pour interagir avec OpenCV */}
    </div>
  );
}

export default OpenCvTest;
