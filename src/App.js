import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
function App() {
  console.log(process.env.PROJECT_ID);
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName={process.env.REACT_APP_USER_NAME}
      userSecret={process.env.REACT_APP_USER_SECRET}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
