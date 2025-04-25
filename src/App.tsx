import React, { useEffect, useState } from 'react';
import './App.css';
import WebcamDetection from './components/WebcamDetection';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <section id="demos" className={isVisible ? '' : 'invisible'}>
        <WebcamDetection />
      </section>
      
      <footer>
        <p className="footer-text">
          이 데모는 MediaPipe FaceLandmarker를 사용하여 실시간으로 얼굴의 주요 특징점을 감지합니다.
          모든 처리는 브라우저에서 로컬로 이루어지며, 얼굴 데이터는 외부로 전송되지 않습니다.
        </p>
      </footer>
    </div>
  );
}

export default App;
