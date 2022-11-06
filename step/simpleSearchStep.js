const constants = require('../constants');
const simpleSearchPageObject = require('../pages/simpleSearchPageObject')

describe('easyfund page feature test', function(){
   // this.retries(2)

    it('verify a home page title',function(){
        
        browser.url('/')
        browser.maximizeWindow()
        const title = simpleSearchPageObject.getPageTitle()
        console.log('page title is :', title);
        //assert.equal(constants.HOME_PAGE_TITLE, title, 'title is not found')

    })

    it('Click on I Accept cookie',function(){

    const cookies = simpleSearchPageObject.isIaccept()
    assert(text === 'I was clicked')
        
    })

    it('The link Find a Cause on the top of the page',function(){

        const findCause = simpleSearchPageObject.isFindCauselink()

    })

    it('I verify that "Explore our list of charities and good causes to choose the one you want to support" message is display',function(){

        const title = simpleSearchPageObject.isFindCausePage()
        console.log('page title is :', title);
        assert.equal(constants.FIND_PAGE_TITLE, title, 'title is not found')
    })

    it('Enter 3 characters in the Search field',function(){

        simpleSearchPageObject.doSendCauseText('abc')

    })

     it('Select the 3rd cause from the suggestion list',function(){

        const searchfield = simpleSearchPageObject.issendCauseSearchField()

     })

     it('Click Search cause',function(){

        const searchbutton = simpleSearchPageObject.isSearchButton()

     })

     it('Confirm with a message that the selected 3rd Cause exists in the Search results',function(){

        assert.equal(true, simpleSearchPageObject.isCauseExist(),'cause is not exist')

     })


})