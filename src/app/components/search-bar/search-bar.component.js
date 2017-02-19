(function() {
  'use strict';

  function SearchBarController() {
    var ctrl = this;
    ctrl.searchText = '';
    ctrl.searchForUsers = function () {
      ctrl.onSearch({search: ctrl.searchText});
    };
  }

  angular.module('repo-app')
  .component('searchBar', {
    templateUrl: 'app/components/search-bar/search-bar.tpl.html',
    controller: SearchBarController,
    bindings: {
      onSearch: '&',
      search: '<'
    }
  });

})();
