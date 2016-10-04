angular.module('angularSPA').controller('loginController', LoginController);

LoginController.$inject = ['authService', '$mdToast'];
function LoginController(authService, $mdToast){
    var vm = this;

    vm.userName = '';
    vm.password = '';

    vm.authenticate = _authenticate;

    init();

    ////////////

    function _authenticate() {
        authService.authenticate(vm.userName, vm.password).then(function(success){
            $mdToast.showSimple('Authentication Success!');
        }, function(error){
            $mdToast.showSimple('Authentication Error!');
        });
    }

    function init(){
        
    }
}