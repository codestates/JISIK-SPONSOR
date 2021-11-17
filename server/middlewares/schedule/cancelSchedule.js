const cancelSchedule = (schedule) => {
  if (schedule !== null) {
    console.log('이전 작업 취소');
    schedule.cancel();
  }
};

module.exports = cancelSchedule;
