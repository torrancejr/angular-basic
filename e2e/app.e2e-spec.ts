import { Angular2FundamentalsPage } from './app.po';

describe('angular2-fundamentals App', () => {
  let page: Angular2FundamentalsPage;

  beforeEach(() => {
    page = new Angular2FundamentalsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
