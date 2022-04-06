import "./App.css";
import { ChatEngine } from "react-chat-engine";
function App() {
  return (
    <ChatEngine
      height="100vh"
      projectId={process.env.PROJECT_ID}
      userName={process.env.USER_NAME}
      userSecret={process.env.USER_SECRET}
    />
  );
}

export default App;
