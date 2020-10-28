const express = require('express');
// 설치한 express module을 불러와 변수에 담음
const app = express();
// express를 시행하여 app object를 초기화

// app.get('/', function(req, res) { // '/'위치에 get요청 받은 경우
//   res.send('Hello World!'); // Hello World를 보낸다.
// });
app.set('view engine', 'ejs');
// ejs를 사용하기 위해서 express의 view engine에 ejs를 set하는 코드
app.use(express.static(__dirname + '/public'));
// app.use(콜백_함수)형태
// app.get과 다르게 HTTP method나 route에 상관없이 서버 요청올때마다 무조건 콜백함수로 자동 저장
// __dirname은 실행중인 파일의 위치 나타내는 global variable.
// 현재_위치/publlic   route를 static폴더로 지정하라는 명령
//  '/'에 접속하면 '현재_위치/public'에 접속되고
//  '/css'에 접속하면 '현재_위치/public/css'에 접속됨

app.get('/hello', function(req,res){
  res.render('hello', {name:req.query.nameQuery});
});
// query를 통해서 이름을 받음. query들은 req.query에 저장됨

app.get('/hello/:nameParam', function(req,res){
  res.render('hello', {name:req.params.nameParam});
});
// route parameter를 통해 이름을 받는 코드
// 콜론(:)으로 시작되는 route는 해당 부분에 입력되는 route의 텍스트가 req.params에 저장된다.
// ejs파일을 사용하기 위해 res.render함수를 사용한다.
// 첫번째 parameter로 ejs의 이름을 , 두번째 parameter로 ejs에서 사용될 object전달
// res.render함수는 ejs를 /views폴더에서 찾으므로 views폴더 이름 변경 x

var port = 3000;
// 사용할 포트 번호를 port변수에 넣는다.
app.listen(port, function() {
// port변수를 이용해 3000번 포트에 node.js 서버를 연결한다.
  console.log('server on! http://localhost:'+port);
  // 서버가 실행되면 콘솔창에 표시될 메시지.
})
