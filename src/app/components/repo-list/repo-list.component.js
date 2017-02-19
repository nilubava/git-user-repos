(function() {
  'use strict';

  function RepoListController() {}

  angular.module('repo-app')
  .component('repoList', {
    templateUrl: 'app/components/repo-list/repo-list.tpl.html',
    controller: RepoListController,
    bindings: {
      repos:'<'
    }
  });
})();
