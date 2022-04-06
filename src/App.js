import "./App.css";
import { ChatEngine } from "react-chat-engine";
function App() {
  console.log(process.env.PROJECT_ID);
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName={process.env.REACT_APP_USER_NAME}
      userSecret={process.env.REACT_APP_USER_SECRET}
    />
  );
}

export default App;
