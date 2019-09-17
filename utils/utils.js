
// err response
const errRes = (res, errMessage, status = 500) => {
  res.statusCode = status;
  res.send({
    message: errMessage,
    errCode: status,
  });
}

module.exports = {
  errRes,
}