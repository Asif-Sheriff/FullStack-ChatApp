import React from 'react';

export function TextBox({ text }) {
  return (
    <div className="inline-flex p-1 max-w-xs bg-blue-500">
      <div className="w-full overflow-wrap-word">
        <p className="break-words">{text}</p>
      </div>
    </div>
  );
}