(function() {
  'use strict';

  describe('Component : repoList', function() {
    var component, $componentController;

    beforeEach(module('repo-app'));

    beforeEach(inject(function(_$componentController_) {
      $componentController = _$componentController_;
      component = $componentController('repoList', {});
    }));

    describe('#repoList', function() {
      it('should be truthy', function() {
        expect(component).toBeTruthy();
      });
    });

  });
})();
