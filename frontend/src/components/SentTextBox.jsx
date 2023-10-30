import React from 'react';

export function SentTextBox({ text }) {
  return (
    <div className="flex justify-end">
    <div className="inline-flex bg-blue-500 p-1 max-w-xs">
      <div className="w-full overflow-wrap-word">
        <p className="break-words">{text}</p>
      </div>
    </div>

    </div>
  );
}