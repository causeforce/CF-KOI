import { KOIPage } from './app.po';

describe('koi App', () => {
  let page: KOIPage;

  beforeEach(() => {
    page = new KOIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
