interface LoginForm {
    account: string,
    password: string
}

const handleAccountLogin = (params: LoginForm) => {
    let request: Promise<object> =  new Promise((resolve) => {
        localStorage.setItem('token', params.account + 'token')
        resolve({ message: '登录成功' })
    })
    return request
}

export { handleAccountLogin }