import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // 모달이 열리지 않으면 아무 것도 렌더링하지 않음
  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        {children} {/* 모달 안에 넣을 컴포넌트 */}
      </div>
    </div>
  );
};

export default Modal;
