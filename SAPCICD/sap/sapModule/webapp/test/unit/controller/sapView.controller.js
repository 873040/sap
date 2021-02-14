/*global QUnit*/

sap.ui.define([
	"ns/sapModule/controller/sapView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("sapView Controller");

	QUnit.test("I should test the sapView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
