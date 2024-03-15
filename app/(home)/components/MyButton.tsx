// MyButton.tsx
import React from 'react';
interface MyButtonProps {
  title: string;
  onClick?: () => void; // The onClick handler is optional
}

const MyButton: React.FC<MyButtonProps> = ({ title, onClick }) => {
  return (
    <button className="uiverse" onClick={onClick}>
     <div className="wrapper">
        <span> {title}</span>
        <div className="circle circle-12"></div>
        <div className="circle circle-11"></div>
        <div className="circle circle-10"></div>
        <div className="circle circle-9"></div>
        <div className="circle circle-8"></div>
        <div className="circle circle-7"></div>
        <div className="circle circle-6"></div>
        <div className="circle circle-5"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-1"></div>
     </div>
    </button>
  );
};

export default MyButton;
