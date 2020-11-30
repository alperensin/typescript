// accountInfo
// charInfo
// playerInfo

type AccountInfo = {
  id: number | string;
  name: string;
  email?: string;
}

const account: AccountInfo = {
  id: 123,
  name: 'André Luiz'
}

type CharInfo = {
  nickname: string;
  level: number;
}

const char: CharInfo = {
  level: 20,
  nickname: 'alperensin'
}

// Intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: '123',
  name: 'André Luiz',
  nickname: 'alperensin',
  level: 20,
  email: 'andreluizperensin@gmail.com'
}