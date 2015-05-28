angular.module('lldtApp.services', [])

.factory('PermissionService', function () {
  this.isRoot = isRoot;
  return this;

  function isRoot(callback) {
    const fs = require('fs');
    fs.open('/etc/sudoers', 'r', function (err, fd) {
      console.log(err, fd);
      if (fd !== undefined) {
        fs.close(fd);
        return callback(null, true);
      }
      callback(null, false);
    });
  }
});