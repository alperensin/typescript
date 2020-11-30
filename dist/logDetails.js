"use strict";
// Type Alias | Union
function logDetails(uid, item) {
    console.log("A product with uid " + uid + " has a title as " + item + ".");
}
function logInfo(uid, user) {
    console.log("A user with uid " + uid + " has a name as " + user + ".");
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform('Mac OS');
logDetails(123, 'Description');
logDetails('123', 'Description');
logInfo(123, 'alperensin');
logInfo('123', 'alperensin');
