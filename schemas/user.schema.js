import mongoose from 'mongoose';
// - 회원 목록 DB
//     - `userId` (Object Id) : 회원 번호 (몽고디비 인덱스)
//     - `name` (String) : 회원 이름
//     - **`email`** (String) : 회원 아이디
//     - `pw` (String) : 회원 비밀번호
const UserSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  email: { type: String, required: true },
  pw: { type: String, required: true },
});
export default mongoose.model('User', UserSchema);
