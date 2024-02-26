import experss from 'express';
import User from '../schemas/user.schema.js';
const router = experss.Router();
router.get('/', async (req, res) => {
  try {
    const users = await User.find().exec();
    const retusers = users.map((user) => ({
      userId: user._id,
      name: user.name,
      email: user.email,
      pw: user.pw,
    }));
    return res.json(retusers);
  } catch (error) {
    return res.status(500).json({ message: '서버 에러' });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    // MongoDB의 _id 필드를 사용하여 사용자 조회
    const user = await User.findOne({ _id: req.params.userId }).exec();

    // 조회된 사용자가 없는 경우
    if (!user) {
      return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }

    const retuser = {
      userId: user._id,
      name: user.name,
      email: user.email,
      pw: user.pw,
    };

    return res.json(retuser);
  } catch (error) {
    // 에러 처리
    return res.status(500).json({ message: '서버 에러' });
  }
});
router.post('/', async (req, res) => {
  const { name, email, pw } = req.body;
  await User.create({ name, email, pw });
  return res.send('처리가 완료되었습니다.');
});
export default router;
