(function() {
  'use strict';

  describe('Component : searchBar', function() {
    var component, $componentController, scope, onSearchSpy, bindings;

    beforeEach(module('repo-app'));

    beforeEach(inject(function($rootScope, _$componentController_) {
      scope = $rootScope.$new();
      onSearchSpy = jasmine.createSpy('onSearch');
      bindings = {search: {}, onSearch: onSearchSpy};
      $componentController = _$componentController_;
      component = $componentController('searchBar', {
        $scope: scope
      }, bindings);
    }));

    describe('#searchBar', function() {
      it('should be truthy', function() {
        expect(component).toBeTruthy();
      });
    });

    describe('#searchForUsers', function() {
      it('should call the onSearch method on the component with the given user', function() {
        component.searchText = 'username';
        component.searchForUsers();
        expect(onSearchSpy).toHaveBeenCalledWith({search: 'username'});
      });
    });

  });
})();
