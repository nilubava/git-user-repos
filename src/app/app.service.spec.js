(function() {
  'use strict';

  describe('gitService', function() {
    var httpBackend, gitService;

    beforeEach(module('repo-app'));
    beforeEach(inject(function(_gitService_, $httpBackend) {
      gitService = _gitService_;
      httpBackend = $httpBackend;
    }));

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    describe('#gitService', function() {
      it('should be truthy', function() {
        expect(gitService).toBeTruthy();
      });
    });

    describe('#getRepos', function() {
      it('should call the resource and return the method', function() {
        httpBackend.whenGET('https://api.github.com/users/user/repos').respond(200, [{
          url: 'url'
        }], {}, 'OK');
        var result = gitService.getRepos('user');
        httpBackend.flush();
        result.then(function (data) {
          expect(data[0].url).toBe('url');
        });
      });
    });
  });
})();
