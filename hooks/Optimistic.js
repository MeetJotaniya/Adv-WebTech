import React, { useState, useOptimistic } from "react";

export default function OptimisticExample() {
  const [messages, setMessages] = useState([]);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [...state, { text: newMessage, pending: true }]
  );

  async function sendMessage(msg) {
    addOptimisticMessage(msg);

    await new Promise(res => setTimeout(res, 1000));

    setMessages(prev => [...prev, { text: msg, pending: false }]);
  }

  return (
    <div>
      <button onClick={() => sendMessage("Hello!")}>Send Message</button>

      {optimisticMessages.map((m, i) => (
        <p key={i}>
          {m.text} {m.pending ? "(sending...)" : ""}
        </p>
      ))}
    </div>
  );
}