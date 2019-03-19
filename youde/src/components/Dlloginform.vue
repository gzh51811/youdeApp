<template>
  <div data-v-5ad292c0 class="loginForm">
    <div data-v-5ad292c0 class="logintitle">账号密码登录</div>
    <div data-v-5ad292c0 class="userName">
      <img
        data-v-5ad292c0
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAf9JREFUWAntWb9Lw0AUTlLbQRwKLk4udhEUlLRmcfF/EAf/AAVdrJPQTXASipPaWXD1X3AroQQ7OugiuHcodmh++L2SlBLuJRdPpcMFjpf363vvvruk5GoaOVcURWaj0TiDPEFoLSdc2m2a5gjBLmSz1+v1uUSTcyT2er3eRHPtRP8DOahUKhvdbvdThL0gMs7a0Nwp6ZhpH/cdy7LCWb/C/TLwLjGq4/H4EDjXIqzcBpG0RonUnOd59yKQn9qwOgfI3cKY1BDhWCKjyPaLzE3hMekgVtitJt3gFPWfb3SDqoRrBjWDqgyo5us9qBlUZUA1X+9BzaAqA6r5eg9qBlUZUM3Xe1AzqMqAar7Mh/ukBr5hVx3HsbMK4tu56vv+ShAERrlcfs2KJR9iF0kCe4mk6CrSYAuALRFI2oZjEiqeNmfp25xz7p9iaQbBylWpVHriZkp2sLYPcYHYALFOVmwc/wC5jvHCxRZp8MN1XY8DIrtt2zuJPy82jv8iiQkNk7y0nPsl1g2ml6yoLsNgRKBhGMrEFqqPvZdgTmqIkmUeknck1gB2jIfAyDrIxCR2qQhevHTwfiQqOGOjI+DNWKcawiu3QTR2C6A2Bh3V3qEJIVDKaCGuk7Jx6gC/Oo+cM6GY8xv4i+AGTZ4j4A2DXQoWgHEAc4TxjBXZ4074KfUbACiU/PAcjk4AAAAASUVORK5CYII="
      >
      <input data-v-5ad292c0 type="text" placeholder="请输入手机号" v-model.trim="logins.username">
    </div>
    <div data-v-5ad292c0 class="passworld">
      <img
        data-v-5ad292c0
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAqZJREFUWAntmDuLE1EUxzOjhWIhEouFdLudYpVHK4uSymxh4QcQRSy0U9hGgo2glVpsYeE3sDBWg7LY5oGFbrkLNsEmoIWosMn4O8McmblOZuLMTTZCBi7nzHn+c+7j3IxTmuFpNBq1yWSyiekGw5nBJc3ER7nvuu5ut9vtpxmKLjVZu912O53Oc+xuZ9lKsH98BOhOq9W6Q57JNN9UgLVa7Z7v+49D52/QfYYELvJITpmJ0xLEcZz7/X7/ifBJz/EkocoAtx3yXrlcvup53nfVFaHNZvPUaDR6RYxmmGMqwKkVrNfr66w7qViJ9XK51+u9KwLK9CX+JeK/DeNvEP/AtAl0ScLQ6YzqAPhVeVs0GhP+Ty4zvmsKlu19BbDojKwq+N9WcDwe/1LwUV5lSo9siuken+giL2UIr4BMmtpJTGPb7wC7nhXzyCqYBUz1Sw/wr17MDWaLBv6QtXEeupAlQK5Dcu1BHzDtr7V6QmMAaeAXaeC7pjzqMGfepy9vcnF4r3liFeJXBBdTfskX+EcY/1TDeVKKcoKc2+RcCzEkAwSEXCRLGL0ZDAbP5gnKjF2tVi8gu8EIMKg+tkkAFkw5v2bqFVwdbVPNqRg0fgygCpeJrgAWnY3YLi4SjCNKzs3gDGM9bXFU7BWJp77Wppij4iYA12UIrwmKUmsAqdpJBRPlVZaXWgOYF0CW3wpgVoWy9NYqyOb4ocmivMryUmsAuVi8YHMcyBA+LyDTz9o5GJ57sUZvJsvzbq2CeZLP4rMCOEuV0mxiFWSBB19P2YUxeVoAWzrNqRg0rrlJ5INlDaMr3HDvLvjK3wKk4Ao+miYCBNgORtcYaxg8pemr3dxpCM4XDNFkx6Ivw+Hwc6VS+YDsHIZnoQuZanIdkusj9BZ/O70opt+4buBM7zwuGAAAAABJRU5ErkJggg=="
      >
      <input
        data-v-5ad292c0
        type="password"
        placeholder="请输入密码"
        style="width:80%;"
        v-model.trim="logins.password"
      >
      <!-- <i data-v-5ad292c0="">
      &lt;!&ndash;<img data-v-5ad292c0=""&ndash;&gt;-->
      <!-- &lt;!&ndash;src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAiCAYAAAD23jEpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAF0ElEQVRYw7XZf4wdVRUH8M/utgVWiiBIC1FSY6VdpfIHEEPyFLNkRUXkHyWt1B9RJCEoQTTzKo4GyCQ6L1UEm4JKSP3xhyZGBERTNqwGXIlUa0JbaCXQtNIC2oJYStlu1/WPMw9mX3e3M7vtN5lk994z55zv3HvuPee8LrNAM2t1Yy5OxbtwLpbiHcXYXHRhHAexB09hC54o/n4RY3majM/Uj64ZOj8Hp+P9uAQX4mx011AzVpB5GA/iUbyUp8nYMSXRzFo9eCuuxEq8t6bj0xH6E36MB/DfPE3+d9RJNLPWfFyKb+CcaZwZxaHSM44ezOl4piL/MHL8MU+TV48KieLr9+FGrJhEZBSvYDu2Yht24CXsL4icgPlYKGJnCRaLLfmmSfwYw4/wPTx9pHiZlkQza83FR7C6MF7GQewW+/l+bMzTZHeVL9fMWseJA6CBj+J8nDbJ6vwdN+CR6WJlShLNrDUPn8BthYEynsevsTZPky1VHJ/GTg8uwpfwAXGqlbG7mLs/T5NDlUkUBD6H7+LE0tQIHsG38zQZmo3zU9hdjutxnoibNvbiGtwzGZGeKb7MlViL3tLUi7gL1+ZpsvVoE4DhocHNjf6BB8VqvBPHFVO9YrW2N/oHtg0PDU6IkTmT6PowvlNSAM/h5jxNfljzy84p9IxMtRU6kafJzmbWugr/wFe9sb1OF4H+sojD1zFhOzWzVh9+iWWl4RfwtTxNfl7D+TNEsJ6Dt4jtsFmN4C/0XIUMC0rDG7E8T5OnDiPRzFqn4E5cUXphH1blabK2huELxb6+3MTVHMF9uDVPk0dr6LsaLby5NPwzfDlPk5eZeKSt6CBwCHfUJNAQt+4VHQQU/38SdxVylZCnSfu+GC0Nf7rsa3dhfCm+XhIax2DxBaoSOFUs/XuOIPpuZIV8VazGPSinIjc2s9YS6C4y0avxtpLADtyUp8neGoYuxwUVZS8o5CuhSD++JRLGNhbhumbWmtstgvhTpcnX8NM8TR6rQQA+iOMryh5fyFdGnibbsEYcEm2sxPnd4lIrR/8W3FHHQDNrdeFM1TPabpxRvFcHd2OD2O5wElZOZrR9ttfFa8dYnrgzTu4Y29tdsHu2NNiHpEj+KqHIMjeLE60KDmLTDKq5VSIlaa/gE1jXnafJJvygJDgPn8Hnaxr4jUgMq+BfuLeO8mbWWonPipKXOKlW52nyTHs7/UQUI22ciFXNrHVRDTsbxKpWwTr8rQaB94li7JTS8L3i2I0EcHhocH+jf2AHPuaNpO9kLGv0D/x1eGjwuSMZGh4aHG/0D2wSQXuuWNFO7BOrvjpPk/0VCSzB7WIbtbEL1+Rpsv11EtDoH9hZGLm0JHwm+hr9AxuGhwb/XYHIgUb/wGN4UlRnXSKAd+EhcXnenafJfyoSOEvUMwOl4TFcn6fJ79sDnQngfFFDfLFD3x+KFx+vYrzQtVCUo704gN15mrxQ4/1F+D4+3uFnS1zEByYlUWK/Bpd1TG3AN/M0WV/VkZmimbXOE+XAxR0+/qL4mBM+xlSV3RLcKurrMnYUBG/L02TUMUAza60Qedyyjqn78JU8TZ7pfGe6GnupWM5LOqb2Yb0Izr8cReffjgTLHV7T/xY3lGuISiQKxYtxs4m5FXFGP49f4c48TZ6chfOniRzoC6KL2HmqrcMt7ZOoNonCyEJcJ1onnenIiChdHxKrszFPk6cr6DxBdA8vFtlsn+hLlTEq4uL2PE32TKevUgLWzFq9ova+yeF7tW3wVZG+bBENtGdFxnlA5GPzRaK5WDTPzhala+8k+jbhFjxQPoVmRaIg0iPujWtF++SkKUTbrcyx0tNVECm3Myez/YrIoNdgV9Xmcu2ueNG96xO51WWiOJkt9uB3hfOP52kyUuflGbX2CzLzcJY4hj8kqrUFNVTsw5/FRbpe3PIHZ/I7xYxJlMj0iKbwAtHw6hN91kWiQ9FOMvfjn9gp9vxWce/sm8lvEmX8H7R52KlFM3xdAAAAAElFTkSuQmCC"&ndash;&gt;-->
      <!-- &lt;!&ndash;state="true">&ndash;&gt;
      </i>-->
    </div>
    <div data-v-5ad292c0 class="forgetPwd">
      <a data-v-5ad292c0 href="#" class>忘记密码？</a>
    </div>
    <div data-v-5ad292c0 class="submit">
      <button data-v-5ad292c0 @click="login">登录</button>
    </div>
    <div class="mint-toast is-placemiddle" style="padding: 10px; display:block;" v-show="isok">
      <!---->
      <span class="mint-toast-text" style="padding-top: 0px;">{{text}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logins: {
        username: "",
        password: ""
      },
      isok: false,
      text: ""
    };
  },
  methods: {
    login() {
      var username = this.logins.username;
      var password = this.logins.password;
   
      if (username&&password) {
        this.$axios.get("http://localhost:3000/login", {
            params: {
              username,
              password
            }
          }).then(res => {
                if(res.data == "yes"){
                    // this.$router.push({name:"mine"});
                    this.$router.back();
                    localStorage.setItem('username',res.config.params.username);

                }else{
                  this.isok = true;
                  this.text = "用户名或密码错误";    
                }
          });

      } else {
        this.isok = true;
        this.text = "手机号密码不能为空";
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
.mint-toast.is-placemiddle{
  top:40%;
}
</style>
