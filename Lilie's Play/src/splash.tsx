import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('SplashScreen mounted');
    const timer = setTimeout(() => {
      console.log('Navigating to /landing');
      navigate('/landing');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      
      <div className="loader"></div>
    </div>
  );
}
