import { AngularExamplesPage } from './app.po';

describe('angular-examples App', () => {
  let page: AngularExamplesPage;

  beforeEach(() => {
    page = new AngularExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
