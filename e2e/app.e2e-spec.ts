import { MeanContactlistAngular2Page } from './app.po';

describe('mean-contactlist-angular2 App', () => {
  let page: MeanContactlistAngular2Page;

  beforeEach(() => {
    page = new MeanContactlistAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
