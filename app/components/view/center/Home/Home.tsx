import React from 'react'
import { Button } from 'antd'

import { ComponentExt } from '@utils/reactExt'
import { Center, Account } from '@services/api'

class Home extends ComponentExt {
  test1 = () => {
    const obj = {
      keywords: '',
    }
    obj.keywords = '电子面单'
    Center.searchQuestion(obj).then(
      (list: any[any]) => {
        console.log(list)
        this.$message.success(list.length)
      },
      (json) => {
        console.log(json)
      }
    )
  }

  test2 = () => {
    Account.getUserAll().then(
      (list: any[any]) => {
        console.log(list)
        this.$message.success(list.length)
      },
      (json) => {
        console.log(json)
      }
    )
  }

  render() {
    return (
      <div>
        <div>Home</div>
        <div>
          <Button type="primary" onClick={this.test1}>
            无需登陆
          </Button>
          <Button type="primary" onClick={this.test2}>
            需要登陆
          </Button>
        </div>
      </div>
    )
  }
}

export default Home
