
// err response
const errRes = (res, errMessage, status = 500) => {
  res.statusCode = status;
  res.send({
    message: errMessage,
    errCode: status,
  });
}

const createCookie = (req, data) => {
  const time = new Date().getTime();
  req.session['user_name'] = data[0].user_name; // 给客户端存cookie
  req.session['id'] =  data[0].id; 
  req.session['timestamp'] = time;
}

module.exports = {
  errRes,
  createCookie,
}