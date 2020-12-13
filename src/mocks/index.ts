import moment from 'moment';
import {userInterface} from './interface';
import {NGUYENHANG, DINHTRONG, PHUONGANH, LAMTRUONG, DUYHOANG, TUANANH, NGOCDUY} from '../assets';

const data = [
  {
    id: '2',
    name: 'Hoàng Đình Trọng',
    age: 17,
    gender: 'Nam',
    avatar: DINHTRONG,
    status: 'Hẹn Cafe',
    timeStamp: '2020-12-20T14:00:00'
  },
  {
    id: '1',
    name: 'Nguyễn Thị Hằng',
    age: 31,
    gender: 'Nữ',
    avatar: NGUYENHANG,
    status: 'Hẹn khám',
    timeStamp: '2020-12-18T09:00:00'
  },
  {
    id: '3',
    name: 'Nguyễn Duy Hoàng',
    age: 22,
    gender: 'Nam',
    avatar: DUYHOANG,
    status: 'Hẹn Cafe',
    timeStamp: '2020-12-13T21:00:00'
  },
  {
    id: '4',
    name: 'Nguyễn Ngọc Duy',
    age: 20,
    gender: 'Nam',
    avatar: NGOCDUY,
    status: 'Hẹn Cafe',
    timeStamp: '2020-12-12T02:00:00'
  },
  {
    id: '5',
    name: 'Đặng Hữu Tuấn Anh',
    age: 23,
    gender: 'Nam',
    avatar: TUANANH,
    status: 'Hẹn Cafe',
    timeStamp: '2020-12-13T02:00:00'
  },
];

data.sort(function (a, b) {
  var c: any = new Date(a.timeStamp);
  var d: any = new Date(b.timeStamp);
  return c - d;
});

let renderData = [];
renderData = data.reduce(function (r: any, a: any) {
  r[moment(a.timeStamp).format('YYYY-MM-DD')] = r[moment(a.timeStamp).format('YYYY-MM-DD')] || [];
  r[moment(a.timeStamp).format('YYYY-MM-DD')].push(a);
  return r;
}, []);

let result = [];
for (let i in renderData) {
  result.push({ date: i, data: renderData[i] });
}

export const DataEcomedic = result;