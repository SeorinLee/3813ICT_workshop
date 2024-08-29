const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// 사용자 데이터를 저장하는 배열
const users = [
  { username: 'user1', birthdate: '1990-01-01', age: 34, email: 'aa@aa.com', password: 'a123456', valid: true },
  { username: 'user2', birthdate: '1992-05-12', age: 32, email: 'bb@bb.com', password: 'b123456', valid: true },
  { username: 'user3', birthdate: '1985-09-30', age: 39, email: 'cc@cc.com', password: 'c123456', valid: true }
];

// JSON 요청을 처리할 수 있게 해줌
app.use(cors());
app.use(express.json());

// 간단한 라우트 설정
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// '/api/auth' 라우트 설정
app.post('/api/auth', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // 사용자 정보에서 비밀번호를 제외한 정보를 반환
    res.json({ 
      username: user.username, 
      birthdate: user.birthdate, 
      age: user.age, 
      email: user.email, 
      valid: user.valid 
    });
  } else {
    // 이메일이나 비밀번호가 틀렸을 경우 오류 메시지 반환
    res.status(401).json({ message: 'Invalid email or password' });
  }
});
app.post('/api/update-user', (req, res) => {
    const updatedUser = req.body;
    const userIndex = users.findIndex(u => u.email === updatedUser.email);
  
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updatedUser };
      res.json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
  
// 서버 실행
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});