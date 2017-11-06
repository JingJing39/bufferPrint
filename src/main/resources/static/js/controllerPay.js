//创建模块
var app = angular.module("app",[]);
/*-----------------------用户中心------------------------------*/
app.controller("userCenter",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$("#recharge").on("click",function(){
		location.href = 'recharge.html';
	})
	$("#billDetail").on("click",function(){
		location.href = 'billDetail.html';
	})
	$("#help").on("click",function(){
		location.href = 'help.html';
	})
	$("#setting").on("click",function(){
		location.href = 'setting.html';
	})
}])