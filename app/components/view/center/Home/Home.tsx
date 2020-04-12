import React from 'react'
import { Button } from 'antd'

import { ComponentExt } from '@utils/reactExt'
import { Center } from '@services/api'

class Home extends ComponentExt {
  test = () => {
    console.log(1)
    const obj = {
      keywords: '',
    }
    obj.keywords = '电子面单'
    Center.searchQuestion(obj).then(
      (json: any) => {
        console.log(json)
        // const questions = json.data;
        // this.setState({
        //     keywords: keywords,
        //     questions: questions
        // });
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
          <Button type="primary" onClick={this.test}>
            测试
          </Button>
        </div>
      </div>
    )
  }
}

export default Home
