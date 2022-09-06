export const userNameRules = [
  { required: true, message: '请输入账户' },
  {
    pattern: /^[a-zA-Z0-9]{5,8}$/,
    message: '账号必须是5-8位的英文或数字'
  }
]

export const passwordRules = [
  { required: true, message: '请填写密码' },
  {
    pattern: /^[a-zA-Z0-9]{5,11}$/,
    message: '密码必须是5-11位的数字或者英文'
  }
]
