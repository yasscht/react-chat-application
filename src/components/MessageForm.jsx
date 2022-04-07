import { useState } from "react";
const MessageForm = () => {
  const [value, setValue] = useState("");
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};
export default MessageForm;
