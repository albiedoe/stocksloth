import { StockSlothPage } from './app.po';

describe('stock-sloth App', function() {
  let page: StockSlothPage;

  beforeEach(() => {
    page = new StockSlothPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
