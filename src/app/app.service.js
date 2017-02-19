(function() {
  'use strict';

  angular
    .module('repo-app')
    .service('gitService', GitService);
  /** @ngInject */
  function GitService($resource) {
    var resource = $resource('https://api.github.com/users/:user/repos',{
        user:'@user'
    });

    return {
      getRepos: function (user) {
        return resource.query({user: user}).$promise;
      }
    }
  }
})();
