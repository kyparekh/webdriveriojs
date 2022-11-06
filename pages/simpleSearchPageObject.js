const { default: $ } = require('webdriverio/build/commands/browser/$');
const elementUtil = require('../util/elementUtil');
const constants = require('../constants');

class SimpleSearch{

    //page locators


    get cookies() { return $('=I accept')}

    get findCause() {return $('=Find a cause')}

    get navpage() {return $('=Explore our list of charities and good causes to choose the one you want to support')}

    get sendcause() { return $('#sagc-hero-search-input')}

    get searchfield() { return $('#sagc-hero-search-input-auto-suggest')}

    get searchbutton() { return $('=Search cause')}

    get verifycause() { return $('h1.typography-2xl font-v2-heavy my-v2-32')}



    //page actions


    getPageTitle(){

        return elementUtil.doGetPageTitle(constants.HOME_PAGE_TITLE)

    }

    isIaccept(){

        elementUtil.doClick(this.cookies)
    }

    isFindCauselink(){

        elementUtil.doClick(this.findCause)
    }


    isFindCausePage(){

        return elementUtil.doGetText(constants.FIND_PAGE_TITLE)
    }

    doSendCauseText(cause) {

        elementUtil.doSetValue(this.sendcause,cause)
    }

    issendCauseSearchField() {

        elementUtil.doClick(this.searchfield)
    
    }

    isSearchButton() {

        elementUtil.doClick(this.searchbutton)
    }

    isCauseExist(){

        return elementUtil.doGetText(this.verifycause)
    }

}


module.exports = new SimpleSearch()

