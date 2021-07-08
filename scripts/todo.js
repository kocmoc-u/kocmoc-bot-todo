// Description:
//  TODO を管理できるボットです
// Commands:
// ボット名 add       - TODO を作成
// ボット名 done      - TODO を完了にする
// ボット名 del       - TODO を削除
// ボット名 list      - TODO の一覧を表示
// ボット名 donelist  - 完了した TODO の一覧を表示
'use strict';
const todo = require('todo');
module.exports = robot => {
  robot.respond(/add (.+)/i, msg => {
    const task = msg.match[1].trim();
    todo.add(task);
    msg.send('追加しました: ' + task);
  });
  robot.respond(/done (.+)/i, msg => {
    const task = msg.match[1].trim();
    todo.done(task);
    msg.send('完了にしました: ' + task); //※ない項目も完了できてしまう問題
  });
  robot.respond(/del (.+)/i, msg => {
    const task = msg.match[1].trim();
    todo.del(task);
    msg.send('削除しました: ' + task);
  });
  robot.respond(/list/i, msg => {
    const list = todo.list();
    if (list.length === 0) {
      msg.send('todoはありません');
    } else {
      msg.send(todo.list().join('\n'));
    }
  });
  robot.respond(/donelist/i, msg => {
    const donelist = todo.donelist();
    if (donelist.length === 0) {
      msg.send('donelistはありません');
    } else {
    msg.send(todo.donelist().join('\n'));
    }
  });
};
// 09まで完了しました！ 次は10から 0707
