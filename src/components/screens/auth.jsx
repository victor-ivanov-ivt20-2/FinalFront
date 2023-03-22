import { useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div>
      <form>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
}
