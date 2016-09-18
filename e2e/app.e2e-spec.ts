import { Ng2ElectronStarterPage } from './app.po';

describe('ng2-electron-starter App', function() {
  let page: Ng2ElectronStarterPage;

  beforeEach(() => {
    page = new Ng2ElectronStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
