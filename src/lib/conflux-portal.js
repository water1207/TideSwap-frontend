//是 Conflux Portal 的封装，本前端项目通过调用浏览器插件来完成交易的签名。
// 调用 Conflux Portal 提供的 enable 方法可以启动项目和 Conflux Portal 的连接
// （需要提前检查浏览器是否正确安装插件，在 constructor 中通过检查 window.conflux 是否为空来判断）。
// conflux-portal.js 提供了获取账户 getAccount 和发送交易 sendTransaction 两个主要的方法。
class ConfluxPortal {
  constructor (conflux) {
    if (typeof conflux === 'undefined') {
      throw new Error('No Conflux detected')
    }
    if (!conflux.isConfluxPortal) {
      console.debug('Unknown Conflux.')
    }
    this.conflux = conflux
  }

  //启动项目和 Conflux Portal 的连接
  // （需要提前检查浏览器是否正确安装插件，
  // 在 constructor 中通过检查 window.conflux 是否为空来判断）
  async enable () {
    this.accounts = await this.conflux.enable()
  }

  //获取账户
  getAccount () {
    if (!this.accounts) {
      throw new Error('Please enable Conflux Portal first')
    }
    return this.accounts[0]
  }

  //发送交易
  async sendTransaction (params) {
    return new Promise((resolve, reject) => {
      this.conflux.sendAsync({
        method: 'cfx_sendTransaction',
        params: [params],
        from: params.from,
        gasPrice: '0x09184e72a000', // customizable by user during ConfluxPortal confirmation.
        gas: '0x2710',  // customizable by user during ConfluxPortal confirmation.
        value: '0x00',
      }, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }
}

export default new ConfluxPortal(window.conflux)
