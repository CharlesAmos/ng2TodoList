import { TheAppPage } from './app.po';

describe('the-app App', function() {
  let page: TheAppPage;

  beforeEach(() => {
    page = new TheAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
