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
             * @name <%= slugname %>Index
             */
            <%= slugname %>Index: function index() {
                // TODO: index controller is here.
            }

        })
    ;

    return Controller;
});
