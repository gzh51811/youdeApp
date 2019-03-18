<template>
  <div>
    <div data-v-07bcd7fa class="registerForm">
      <div data-v-07bcd7fa class="logintitle">新用户注册</div>
      <div data-v-07bcd7fa class="phone">
        <img
          data-v-07bcd7fa
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAf9JREFUWAntWb9Lw0AUTlLbQRwKLk4udhEUlLRmcfF/EAf/AAVdrJPQTXASipPaWXD1X3AroQQ7OugiuHcodmh++L2SlBLuJRdPpcMFjpf363vvvruk5GoaOVcURWaj0TiDPEFoLSdc2m2a5gjBLmSz1+v1uUSTcyT2er3eRHPtRP8DOahUKhvdbvdThL0gMs7a0Nwp6ZhpH/cdy7LCWb/C/TLwLjGq4/H4EDjXIqzcBpG0RonUnOd59yKQn9qwOgfI3cKY1BDhWCKjyPaLzE3hMekgVtitJt3gFPWfb3SDqoRrBjWDqgyo5us9qBlUZUA1X+9BzaAqA6r5eg9qBlUZUM3Xe1AzqMqAar7Mh/ukBr5hVx3HsbMK4tu56vv+ShAERrlcfs2KJR9iF0kCe4mk6CrSYAuALRFI2oZjEiqeNmfp25xz7p9iaQbBylWpVHriZkp2sLYPcYHYALFOVmwc/wC5jvHCxRZp8MN1XY8DIrtt2zuJPy82jv8iiQkNk7y0nPsl1g2ml6yoLsNgRKBhGMrEFqqPvZdgTmqIkmUeknck1gB2jIfAyDrIxCR2qQhevHTwfiQqOGOjI+DNWKcawiu3QTR2C6A2Bh3V3qEJIVDKaCGuk7Jx6gC/Oo+cM6GY8xv4i+AGTZ4j4A2DXQoWgHEAc4TxjBXZ4074KfUbACiU/PAcjk4AAAAASUVORK5CYII="
        >
        <input data-v-07bcd7fa placeholder="输入账号" type="text" v-model.trim="reg.username">
      </div>
      <div data-v-07bcd7fa class="setPwd">
        <img
          data-v-07bcd7fa
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAqZJREFUWAntmDuLE1EUxzOjhWIhEouFdLudYpVHK4uSymxh4QcQRSy0U9hGgo2glVpsYeE3sDBWg7LY5oGFbrkLNsEmoIWosMn4O8McmblOZuLMTTZCBi7nzHn+c+7j3IxTmuFpNBq1yWSyiekGw5nBJc3ER7nvuu5ut9vtpxmKLjVZu912O53Oc+xuZ9lKsH98BOhOq9W6Q57JNN9UgLVa7Z7v+49D52/QfYYELvJITpmJ0xLEcZz7/X7/ifBJz/EkocoAtx3yXrlcvup53nfVFaHNZvPUaDR6RYxmmGMqwKkVrNfr66w7qViJ9XK51+u9KwLK9CX+JeK/DeNvEP/AtAl0ScLQ6YzqAPhVeVs0GhP+Ty4zvmsKlu19BbDojKwq+N9WcDwe/1LwUV5lSo9siuken+giL2UIr4BMmtpJTGPb7wC7nhXzyCqYBUz1Sw/wr17MDWaLBv6QtXEeupAlQK5Dcu1BHzDtr7V6QmMAaeAXaeC7pjzqMGfepy9vcnF4r3liFeJXBBdTfskX+EcY/1TDeVKKcoKc2+RcCzEkAwSEXCRLGL0ZDAbP5gnKjF2tVi8gu8EIMKg+tkkAFkw5v2bqFVwdbVPNqRg0fgygCpeJrgAWnY3YLi4SjCNKzs3gDGM9bXFU7BWJp77Wppij4iYA12UIrwmKUmsAqdpJBRPlVZaXWgOYF0CW3wpgVoWy9NYqyOb4ocmivMryUmsAuVi8YHMcyBA+LyDTz9o5GJ57sUZvJsvzbq2CeZLP4rMCOEuV0mxiFWSBB19P2YUxeVoAWzrNqRg0rrlJ5INlDaMr3HDvLvjK3wKk4Ao+miYCBNgORtcYaxg8pemr3dxpCM4XDNFkx6Ivw+Hwc6VS+YDsHIZnoQuZanIdkusj9BZ/O70opt+4buBM7zwuGAAAAABJRU5ErkJggg=="
        >
        <input
          data-v-07bcd7fa
          placeholder="6-18位字母或数字登录密码"
          type="password"
          v-model.trim="reg.password"
        >
      </div>
      <div data-v-07bcd7fa class="userAgreement">
        <input data-v-07bcd7fa id="userAgreement" type="checkbox" name="userAgreement">
        <label data-v-07bcd7fa for="userAgreement" @click="changeok=!changeok"></label>
        <span data-v-07bcd7fa style="float:left !important;margin-left:45px;line-height:26px;">
          同意
          <a data-v-07bcd7fa href="javascript:;" class>用户注册协议</a>
        </span>
      </div>
    </div>
    <div data-v-07bcd7fa class="submit">
      <button data-v-07bcd7fa @click="zhuce">注&nbsp;&nbsp;&nbsp;&nbsp;册</button>
    </div>
    <div data-v-07bcd7fa class="pwlogin">
      <p data-v-07bcd7fa>
        <a data-v-07bcd7fa href="javascript:;" class></a>
      </p>
      <span data-v-07bcd7fa id>
        <a data-v-07bcd7fa href="javascript:;" class @click="gotoLogin">账号密码登录</a>
      </span>
    </div>
    <div class="mint-toast is-placemiddle" style="padding: 10px; display:block;" v-show="isok">
      <!---->
      <span class="mint-toast-text" style="padding-top: 0px;">{{text}}</span>
    </div>
  </div>
</template>
<script>
import qs from "qs";

export default {
  data() {
    return {
      reg: {
        username: "",
        password: ""
      },
      isok: false,
      text: "",
      changeok: false
    };
  },
  methods: {
    gotoLogin() {
      this.$router.push({ name: "login" });
    },
    zhuce() {
      var username = this.reg.username;
      var password = this.reg.password;
            // console.log(username && password);
      if (username && password) {
        var useryz = /^1[3-9]\d{9}$/;
        var passyz = /^[a-zA-Z]\w{5,17}$/;
        if (useryz.test(username)) {
          if (passyz.test(password)) {
            if (this.changeok) {
              this.$axios.post("http://localhost:3000/reg",
                  //将json对象转为字符串
                  qs.stringify({
                    username,
                    password
                  })
                ).then(res => {
                  // console.log(res);
                  if(res.data == "用户名已存在"){
                         this.isok = true;
                        this.text = "用户名已存在";
                  }else if(res.data == "yes"){
                      this.$router.push({name:"login"});   
                  }else{
                        this.isok = true;
                        this.text = "注册失败";
                  }
                });

              
            } else {
              this.isok = true;
              this.text = "请同意注册协议";
            }
          } else {
            this.isok = true;
            this.text = "6-18位字母开头";
          }
        } else {
          this.isok = true;
          this.text = "请输入手机号";
        }
      } else {
        this.isok = true;
        this.text = "请填写完整";
      }
      setTimeout(() => {
        this.isok = false;
      }, 1500);
    }
  }
};
</script>
<style scoped>
span {
  color: white;
}
</style>
