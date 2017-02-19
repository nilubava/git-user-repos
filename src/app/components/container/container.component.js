(function() {
  'use strict';

  function MainController(gitService, ERROR_STRINGS) {
    var ctrl = this;
    ctrl.repos = [];
    ctrl.error = '';

    ctrl.getUsers = function (searchText) {
      gitService.getRepos(searchText).then( function (data) {
        ctrl.repos = data;
        if (data.length > 0) {
          ctrl.error = '';
        } else {
          ctrl.error = ERROR_STRINGS.NO_REPOS;
        }
      }, function(error) {
        ctrl.repos = [];
        if (error.status === 404) {
          ctrl.error = ERROR_STRINGS.NO_USER;
        } else if (error.status === -1) {
          ctrl.error = ERROR_STRINGS.SERVER_DOWN;
        }
      });
    }
  }

  angular.module('repo-app')
  .component('container', {
    templateUrl: 'app/components/container/container.tpl.html',
    controller: MainController,
    bindings: {}
  });

})();
