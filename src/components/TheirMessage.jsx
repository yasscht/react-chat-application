const TheirMessage = ({ message, lastMessage }) => {
  const isFirstMessage = !lastMessage || lastMessage.sender.username;

  return (
    <div className="message-row">
      {isFirstMessage && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachment?.length > 0 ? (
        <img
          src={message.attachment[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessage ? "4px" : "16px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            marginLeft: isFirstMessage ? "4px" : "48px",
            backgroundColor: "#CABCDC",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};
export default TheirMessage;
