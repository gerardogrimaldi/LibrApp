'use strict';

angular.module('LibrApp')
  .controller('MainCtrl', function ($scope) {
  	$('.login').popup({
	  	on: 'click',
  	  	loading : 'loading',
      	title : 'Sign in',
    	content  : '<div class="ui form segment" style="display: block;"><div class="field"><label>Email address</label><div class="ui left labeled icon input"><input type="text" placeholder="Email address"><i class="user icon"></i><div class="ui corner label"><i class="icon asterisk"></i></div>          </div>        </div>        <div class="field">          <label>Password</label>          <div class="ui left labeled icon input">            <input type="password" placeholder="Password" required>            <i class="lock icon"></i>            <div class="ui corner label">              <i class="icon asterisk"></i>            </div>          </div>        </div>      <div class="inline field">               </div>      <div ng-click="login()" class="ui blue small submit button">Sign in</div></div>'	 
	 });
	$scope.login = function(){
		alert("alert");
	}
  });
