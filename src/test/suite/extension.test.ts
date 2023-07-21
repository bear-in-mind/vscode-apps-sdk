import * as assert from 'assert';
import { after } from 'mocha';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';   // Example

suite('Extension Test Suite', () => {
	after(() => {
		vscode.window.showInformationMessage('All tests done!');
	});

	vscode.window.showInformationMessage('Start all tests.');

	test('Extension is installed with correct ID', () => {
		assert.ok(vscode.extensions.getExtension('Integromat.apps-sdk'));
	});
});
