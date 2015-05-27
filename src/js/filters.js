angular.module('lldtApp.filters', [])

.filter('dateLocal', function () {
  return function (input) {
    return moment(input).format('YYYY-MM-DD');
  };
})

.filter('dateTimeLocal', function () {
  return function (input) {
    return moment(input).format('YYYY-MM-DD HH:mm:ss');
  };
})

.filter('dateTimeLocalMicro', function () {
  return function (input) {
    return moment(input).format('YYYY-MM-DD HH:mm:ss.SSS');
  };
})

.filter('trustAsHtml', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
}])

.filter('trustAsUrl', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsUrl(val);
    };
}])

.filter('selectByYearMonth', function () {
  return function (schedules, date) {
    if (!date || schedules.length < 1) {
      return [];
    }
    return _.filter(schedules[0], function (schedule) {
      var start = schedule.start.year() === date.year() && schedule.start.month() === date.month();
      var end = schedule.end.year() === date.year() && schedule.end.month() === date.month();
      return start || end;
    });
  };
});
