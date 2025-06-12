import "./App.css";
import { useState } from "react";

// 함수명을 영상의 'Form'에서 'App'으로 수정했습니다.
function App() {
  const [formData, setFormData] = useState({
    username: "",
    isSubscribed: false,
    role: "user",
  });
  const roles = ["user", "admin", "guest"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <form>
      <p>
        Name: {formData.username}
        {formData.isSubscribed && " (Subscribed)"}
      </p>
      <p>Role: {formData.role}</p>
      <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />

      <label>
        <input type="checkbox" name="isSubscribed" checked={formData.isSubscribed} onChange={handleChange} />
        Subscribe
      </label>

      <select name="role" value={formData.role} onChange={handleChange}>
        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </form>
  );
}

export default App;
