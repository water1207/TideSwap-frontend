import React, { PureComponent } from 'react'
import { util } from 'js-conflux-sdk'

import conflux from '../lib/conflux'
import confluxPortal from '../lib/conflux-portal'

const PORTAL_STATE_DISCONNECTED = 0
const PORTAL_STATE_CONNECTING = 1
const PORTAL_STATE_CONNECTED = 2

export default class ConfluxPortal extends PureComponent {
  state = {
    status: PORTAL_STATE_DISCONNECTED,
    connecting: false,
    account: '',
    balance: '',
  }

  //调用 Conflux Portal 的 enable 方法启用 conflux
  //（conflux portal 实例由浏览器插件注入到 windows.portal 中），
  // 完成 enable 后调用 getAccount 方法获取到 Portal 中的账户
  connectConfluxPortal = async () => {
    this.setState({ status: PORTAL_STATE_CONNECTING })
    await confluxPortal.enable()
    const account = confluxPortal.getAccount()
    this.setState({ status: PORTAL_STATE_CONNECTED, account, balance: '' })
    this.refreshBalance()
  }

  //调用 Conflux SDK 的 getBalance 方法来更新账户余额信息
  refreshBalance = async () => {
    if (!this.state.account) {
      return
    }
    this.setState({ balance: '' })
    const balance = await conflux.getBalance(this.state.account)
    this.setState({ balance: util.unit.fromDripToCFX(balance) })
  }

  //根据当前不同的状态，渲染连接 Portal 的按钮
  renderPortalButton = () => {
    if (this.state.status === PORTAL_STATE_CONNECTED) {
      return (
        <button className="btn btn-success">
          Connected to Conflux Portal
        </button>
      )
    } else if (this.state.status === PORTAL_STATE_CONNECTING) {
      return (
        <button className="btn btn-primary">
          Connecting...
        </button>
      )
    } else {
      return (
        <button className="btn btn-primary" onClick={this.connectConfluxPortal}>
          Connect to Conflux Portal
        </button>
      )
    }
  }

  renderConnectedAccount = () => {
    if (this.state.status === PORTAL_STATE_CONNECTED) {
      return (
        <div className="mt-3 pull-right">
          <div>Account: <code>{this.state.account}</code></div>
          <div className="d-flex align-items-center">
            <div className="mr-1">Balance: {this.state.balance ? `${this.state.balance} CFX` : 'Loading...'}</div>
            <span
              className="badge badge-primary"
              style={{ cursor: 'pointer' }}
              onClick={this.refreshBalance}
            >refresh</span>
          </div>
        </div>
      )
    }
    return null
  }

  render () {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Conflux Portal</h5>
          {this.renderPortalButton()}
          {this.renderConnectedAccount()}
        </div>
      </div>
    )
  }
}
