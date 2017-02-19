(function() {
  'use strict';

  describe('Component : container', function() {
    var component, $componentController, scope, deferred, repos, gitService;
    var serviceMock = {
      getRepos: function () {
        return {
          then: function () {
            return {}
          }
        };
      }
    };

    repos = [{
      url: 'sample_url1'
    }, {
      url: 'sample_url2'
    }]

    beforeEach(module('repo-app'));

    beforeEach(module(function ($provide) {
      $provide.value('gitService', serviceMock);
    }));

    beforeEach(inject(function($rootScope, _$componentController_,_$q_,_gitService_) {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      gitService = _gitService_;
      deferred = _$q_.defer();
      component = $componentController('container', {
        $scope: scope
      });

      spyOn(gitService, 'getRepos').and.returnValue(deferred.promise);
    }));

    describe('#container', function() {
      it('should be truthy', function() {
        expect(component).toBeTruthy();
      });
    });

    describe('#getUsers', function() {
      it('should get all the repos of the given user if user is present', function() {
        component.getUsers('sampleuser');
        deferred.resolve(repos);
        scope.$apply();
        expect(component.error).toEqual('');
        expect(component.repos.length).toEqual(2);
      });

      it('should set the error message if no repos returned for user', function() {
        component.getUsers('sampleuser');
        deferred.resolve([]);
        scope.$apply();
        expect(component.error).toEqual('There are no repos for this git user.');
        expect(component.repos.length).toEqual(0);
      });

      it('should set the error message if no user is present', function() {
        component.getUsers('sampleuser');
        deferred.reject({status: 404});
        scope.$apply();
        expect(component.error).toEqual('This git user does not exist.');
      });

      it('should set the error message if api does not respond', function() {
        component.getUsers('sampleuser');
        deferred.reject({status: -1});
        scope.$apply();
        expect(component.repos.length).toEqual(0);
        expect(component.error).toEqual('Sorry, the server is not responding right now. Please try again after some time.');
      });
    });

  });
})();
