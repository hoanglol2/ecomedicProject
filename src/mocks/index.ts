import moment from 'moment';
import {userInterface} from './interface';
import {NGUYENHANG, DINHTRONG, PHUONGANH, LAMTRUONG, ICONCOCLOCKCAL, ICONOCLOCKBLUR} from '../assets';

const data = [
  {
    id: '1',
    name: 'Nguyễn Thị Hằng',
    age: 31,
    gender: 'Nữ',
    avatar: NGUYENHANG,
    status: 'Hẹn khám',
    timeStamp: '2020-12-08T08:00:00'
  },
  {
    id: '2',
    name: 'Hoàng Đình Trọng',
    age: 17,
    gender: 'Nam',
    avatar: DINHTRONG,
    status: 'Hẹn Cafe',
    timeStamp: '2020-12-10T06:00:00'
  },
  {
    id: '3',
    name: 'Đào Phương Anh',
    age: 27,
    gender: 'Nữ',
    avatar: PHUONGANH,
    status: 'Hẹn khám',
    timeStamp: '2020-12-08T14:00:00'
  },
  {
    id: '4',
    name: 'Tiêu Lam Trường',
    age: 45,
    gender: 'Nam',
    avatar: LAMTRUONG,
    status: 'Tư vấn y tế',
    timeStamp: '2020-12-09T22:00:00'
  },
  {
    id: '5',
    name: 'Nguyễn Tuấn Anh',
    age: 45,
    gender: 'Nam',
    avatar: LAMTRUONG,
    status: 'Hẹn khám',
    timeStamp: '2020-12-16T22:00:00'
  }
];

var curentData = data.sort((a, b) => {
  let ta = parseInt(a.timeStamp);
  let tb = parseInt(b.timeStamp);
  return ta - tb;
})

let renderData = [];
const currentTime = moment();

renderData = curentData.reduce(function (r: any, a: any) {
  r[moment(a.timeStamp).format('YYYY-MM-DD')] = r[moment(a.timeStamp).format('YYYY-MM-DD')] || [];
  r[moment(a.timeStamp).format('YYYY-MM-DD')].push(a);
  return r;
}, []);

let result = [];

for (let i in renderData) {
  result.push({ date: i, data: renderData[i] });
}

export const DataEcomedic = result;