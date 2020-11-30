// Type Alias | Union

type Uid = number | string;

function logDetails (uid: Uid, item: string) {
  console.log(`A product with uid ${uid} has a title as ${item}.`);  
}

function logInfo (uid: Uid, user: string) {
  console.log(`A user with uid ${uid} has a name as ${user}.`);
}

type Platform = 'Windows' | 'Linux' | 'Mac OS';

function renderPlatform(platform: Platform) {
  return platform;
}

renderPlatform('Mac OS');

logDetails(123, 'Description');
logDetails('123', 'Description');

logInfo(123, 'alperensin');
logInfo('123', 'alperensin');