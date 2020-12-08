import React, {Component} from 'react';
import Countdown from 'react-countdown';

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {

    return (
        <div>
          <span>放币!(自己改)</span>;
        </div>
    );
  } else {
    return <h4>{minutes}:{seconds}</h4>;
  }
};

class TimeContent extends Component {

  state = {
    baseDate: (Date.parse(new Date('2020-12-10 24:00:00'))- Date.now()) % 1800000 / 60000,
    date: (Date.parse(new Date('2022-12-10 24:00:00')) - Date.now()) % 1800000,
    // date: (Date.parse(new Date('2020-12-10 24:00:00')) - Date.now()) % 5000,
    // date: (Date.parse(new Date('2020-12-9 1:29:40')) - Date.now()) % 1800000,
  }

  render() {

    const {date, key} = this.state

    return (
        <div>
          <Countdown
              date={Date.now() + date}
              renderer={renderer} 
          />

        </div>
    )
  }

  // componentDidMount() {
  //   const end = Date.parse(new Date('2018-11-29 24:00'))
  //   this.countFun(end);
  // }
  //
  // //卸载组件取消倒计时
  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }
  //
  // countFun = (end) => {
  //
  //   let now_time = Date.parse(new Date());
  //   var remaining = end - now_time;
  //
  //   this.timer = setInterval(() => {
  //     //防止出现负数
  //     if (remaining > 1000) {
  //       remaining -= 1000;
  //       let day = Math.floor((remaining / 1000 / 3600) / 24);
  //       let hour = Math.floor((remaining / 1000 / 3600) % 24);
  //       let minute = Math.floor((remaining / 1000 / 60) % 60);
  //       let second = Math.floor(remaining / 1000 % 60);
  //
  //       this.setState({
  //         day: day,
  //         hour: hour < 10 ? "0" + hour : hour,
  //         minute: minute < 10 ? "0" + minute : minute,
  //         second: second < 10 ? "0" + second : second
  //       })
  //     } else {
  //       clearInterval(this.timer);
  //       //倒计时结束时触发父组件的方法
  //       //this.props.timeEnd();
  //     }
  //   }, 1000);
  // }

}

export default TimeContent;