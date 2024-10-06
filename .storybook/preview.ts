import { Preview } from '@storybook/react'

import '../src/styles/main.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    backgrounds: {
      default: 'gray',
      values: [
        {
          name: 'gray',
          value: '#b5b5b5',
        },
        {
          name: 'black',
          value: '#000000',
        },
      ],
    },
  },
}

export default preview
