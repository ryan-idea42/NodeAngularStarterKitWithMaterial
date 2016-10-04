angular.module('angularSPA').controller('loginController', LoginController);

LoginController.$inject = ['authService', '$location'];
function LoginController(authService, $location){
    var vm = this;

    vm.userName = '';
    vm.password = '';

    vm.authenticate = _authenticate;

    init();

    ////////////

    function _authenticate() {
        authService.authenticate(vm.userName, vm.password).then(function(success){
            $location.path('/');
        }, function(error){
            
        });
    }

    function init(){
        
    }
}