'use client';
import { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

const Confetti = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({ height: 0, width: 0 });
  useEffect(()=> {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  return ( 
    <ReactConfetti
      width={size.width}
      height={size.height}
      gravity={0.1}
      recycle={false}
      numberOfPieces={size.width / 5}
    />
  );
}
 
export default Confetti;