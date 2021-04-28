import './App.css';
import KakaoLogin from "react-kakao-login";
import axios from 'axios';

const App = () => {

  const token = "088fa680c48939a9e264662348b76f6e";

  // const main = async () => {
  //   if (code === null || code === "") {
  //       alert("카카오에서 코드를 받는데 실패했습니다");
  //       return;
  //   } else {
  //     await new Promise<accessTokenKakao>((resolve) => {
  //       getKakaoTokenHandler(resolve, code.toString())
  //     });
  //     // await loadUserInfo(accessToken)
  //   }
  // }

  const onSuccess = (res) => {

    axios.post('http://localhost:8081/login',{
      id : res.profile.id
  })
  .then(res => {
      console.log(res.data);
      if(res.data){
          console.log('대성공');
      } else{
          alert('error');
          return false;
      }
  }).catch(err => {
      console.log(err);
  });
  }

  return (
    <>
      <KakaoLogin
        token={token}
        onSuccess={onSuccess}
        onFail={(res) => console.log(res)}
        onLogout={console.info}
        className="KakaoLogin"
        getProfile={true}
        >
      </KakaoLogin>
    </>
  );
}

export default App;
