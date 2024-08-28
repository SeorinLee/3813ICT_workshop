const express = require('express');
const app = express();
const PORT = 3001;

// 미들웨어로 JSON 요청 본문을 파싱합니다.
app.use(express.json());

// 사용자 데이터
const users = [
  { username: "user1", birthdate: "1990-01-01", age: 30, email: "user1@example.com", password: "password1", valid: true },
  { username: "user2", birthdate: "1992-02-02", age: 28, email: "user2@example.com", password: "password2", valid: true },
  { username: "user3", birthdate: "1994-03-03", age: 26, email: "user3@example.com", password: "password3", valid: true }
];

// 로그인 라우트
app.post('/api/auth', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    const { password, ...userWithoutPassword } = user;
    res.json({ ...userWithoutPassword, valid: true });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
