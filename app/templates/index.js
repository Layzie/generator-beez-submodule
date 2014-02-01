/**
 * @name index.js<<%= slugname %>>
 * @author <%= props.authorName %> <<%= props.authorEmail %>>
 * @overview controller of <%= slugname %> module
 */

define(function (require, exports, module) {
    'use strict';

    var beez = require('beez');
    var logger = beez.getLogger('<%= slugname %>.index');
    var msgs = beez.i18n;

    <% if (props.view) { %>var mv = beez.manager.view;<% } %>
    <% if (props.model) { %>var mm = beez.manager.model;<% } %>
    <% if (props.model) { %>// model
    var Model = require('<%= slugname %>/model/index');<% } %>
    <% if (props.view) { %>// view
    var View = require('<%= slugname %>/view/index');<% } %>

    /**
     * <%= slugname %> Controller class
     *
     * @namespace Controller
     * @class
     * @name Controller
     * @extends {beez.Controller}
     * @see beez.Controller
     */
    var Controller = beez.Controller.extend(
        '<%= slugname %>.Controller',
        {
            css: [
                '/<%= slugname %>/styl/<%= slugname %>.css'
            ],

            i18n: function i18n() {
                return {
                    ja: require('<%= slugname %>/i18n/ja')
                };
            },

            /**
             *
             * @memberof Controller
             * @name index
             */
            index: function index() {
                // TODO: index controller is here.
            },

            /**
             * Test method for this submodule
             * access url: http://0.0.0.0:1109/m/client/s/{module}/mock.{module}.local.develop.html#mock/{module}/test/index
             * use `grunt foundation`
             */
            test: function test(name) {

                if (DEBUG) {
                    require(['mochai'], function (mochai) {
                        beez.mochai.setup(null, function () { // Setup Mochai

                            // Setup browser
                            var $body = $('body');
                            var $mock = $('#mock');

                            $mock.html(''); // reset
                            $body
                                .css('background-color', '#323232')
                            ;
                            $mock
                                .css('background-color', '#FFFFFF')
                            ;

                            if (name === 'index') {
                                beez.mochai.addSuite(['<%= slugname %>/test/index'], function (name, suite) {
                                    beez.mochai.run(['<%= slugname %>/test/index']);
                                });
                            }
                        });
                    });
                }
            }

        })
    ;

    return Controller;
});
