import React from 'react';

const BackgroundBubble = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative w-full h-full mb-28">
      <div className="absolute w-full h-full z-0 top-0 left-0">
        <div className={`w-[400px] h-[400px] left-1/4 absolute bg-primary rounded-full opacity-20 blur-3xl`} />
        <div className={`w-[600px] h-[600px] left-1/2 absolute bg-primary rounded-full opacity-20 blur-3xl`} />
        <div className={`w-[500px] h-[500px] left-1/3 top-1/3 absolute bg-secondary rounded-full opacity-20 blur-3xl`} />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default BackgroundBubble;
