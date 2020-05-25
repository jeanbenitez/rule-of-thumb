import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true
})
export class AppRoot {
  pages = [
    { url: "/past-trials/", text: "Past Trials" },
    { url: "/how-it-works/", text: "How It Works" },
    { url: "/login/", text: "Log In / Sign Up" }
  ];

  render() {
    return (
      <div>
        <rot-header titleName="Rule of Thumb." menu={this.pages} />
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              {
                this.pages.map(page => (
                  <stencil-route
                    url={page.url}
                    component='app-blank-page'
                    componentProps={{ titleName: page.text }}
                  />
                ))
              }
            </stencil-route-switch>
          </stencil-router>
        </main>
        <rot-footer />
      </div>
    );
  }
}
