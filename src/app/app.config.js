(function() {
  'use strict';

  angular
    .module('repo-app')
    .config(config);

  /** @ngInject */
  function config($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
  }
})();
