import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "うちだま",
  email: "123@aaa.com",
  address: "aaaaa"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
