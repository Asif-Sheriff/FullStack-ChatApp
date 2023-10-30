import React from 'react';

export function ReceivedTextBox({ text }) {
  return (
    <div className="flex justify-start">
    <div className="inline-flex bg-slate-500 p-1 max-w-xs">
      <div className="w-full overflow-wrap-word">
        <p className="break-words">{text}</p>
      </div>
    </div>

    </div>
  );
}