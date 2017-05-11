import { Angularfire2DemoPage } from './app.po';

describe('angularfire2-demo App', () => {
  let page: Angularfire2DemoPage;

  beforeEach(() => {
    page = new Angularfire2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
