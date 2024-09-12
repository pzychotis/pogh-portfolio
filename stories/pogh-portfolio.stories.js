import { html } from 'lit';
import '../src/pogh-portfolio.js';

export default {
  title: 'PoghPortfolio',
  component: 'pogh-portfolio',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <pogh-portfolio
      style="--pogh-portfolio-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </pogh-portfolio>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
