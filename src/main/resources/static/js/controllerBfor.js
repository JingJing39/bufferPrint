//创建模块
var app = angular.module("app",[]);
/*-----------------------注册------------------------------*/
app.controller("register",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$("#login").on("click",function(){
		location.href = 'login.html';
	})
}])
/*-----------------------登录------------------------------*/
app.controller("login",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	
}])
/*-----------------------主页------------------------------*/
app.controller("home",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$("#userCenter").on("click",function(){
		location.href = 'userCenter.html';
	})
	$("#userCenter").on("click",function(){
		location.href = 'userCenter.html';
	})
	$("#upFile").on("click",function(){
		location.href = 'upFile.html';
	})
	$("#recharge").on("click",function(){
		location.href = 'recharge.html';
	})
}])