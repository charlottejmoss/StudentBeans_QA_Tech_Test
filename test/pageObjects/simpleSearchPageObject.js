const ParentPageObject = require('./parentPageObject')

class simpleSearchPageObject extends ParentPageObject {
  //Given
  goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  verifyHomePage () {
    this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  //And
  // (Accept cookies first)
  acceptCookies () {
    const acceptcookies = $('#onetrust-accept-btn-handler')
    acceptcookies.click()

  }

  openSearchBar () {
    const searchbar = $('._tf5swf')
    searchbar.click()
  }

  verifySearchBar () {
    this.isElementEqualToExpected($('h3=Recommended For You'), 'Recommended For You')
  }

  //When
  enterSamsung () {
    browser.keys('Samsung')
  }

  //Then
  verifySamsung () {
    this.isElementEqualToExpected($('._63p46ei'), 'Samsung')
    }
  
}

module.exports = simpleSearchPageObject
