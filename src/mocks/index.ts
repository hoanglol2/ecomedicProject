import moment from 'moment';
import {userInterface} from './interface';
import React, {useEffect, useState} from 'react';

const getProfileFromServer = () => {
  const fetch = require("node-fetch");
  const profileAPI = "https://5fe01c7deca1780017a311db.mockapi.io/Profile";
  const [data, setData] = useState([]);

  // fetching our data
  useEffect(() => {
  fetch(profileAPI)
    .then((response: any) => response.json())
    .then((json: any) => setData(json))
    .catch((err: any) => setData([]))
  },[])

  // sort data.
  data.sort(function (a: any, b: any) {
    var c: any = new Date(a.timeStamp);
    var d: any = new Date(b.timeStamp);
    return c - d;
  });

  // defined data.
  let renderData = [];
  renderData = data.reduce(function (r: any, a: any) {
    r[moment(a.timeStamp).format('YYYY-MM-DD')] = r[moment(a.timeStamp).format('YYYY-MM-DD')] || [];
    r[moment(a.timeStamp).format('YYYY-MM-DD')].push(a);
    return r;
  }, []);

  // render data.
  let result = [];
  for (let i in renderData) {
    result.push({ date: i, data: renderData[i] });
  }

  return result;
}

export default getProfileFromServer;