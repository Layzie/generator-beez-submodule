/**
 * @name index.js<<%= slugname %>/test>
 * @author <%= props.authorName %> <<%= props.authorEmail %>>
 * @fileOverview Test case for <%= slugname %> module
 */

define(['beez'], function(beez){

    var logger = beez.getLogger('<%= slugname %>.test.index');

    return {
        '<%= slugname %>/test/index': function () {
            describe('Submodule - <%= slugname %>', function () {
                it('test', function (done) {
                    // TODO: put your test
                    expect(true).is.ok;
                });
            });
        }
    };
});
